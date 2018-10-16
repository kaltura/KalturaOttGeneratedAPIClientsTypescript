
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaBusinessModuleRule } from './KalturaBusinessModuleRule';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaBusinessModuleRuleListResponseArgs  extends KalturaListResponseArgs {
    objects? : KalturaBusinessModuleRule[];
}


export class KalturaBusinessModuleRuleListResponse extends KalturaListResponse {

    objects : KalturaBusinessModuleRule[];

    constructor(data? : KalturaBusinessModuleRuleListResponseArgs)
    {
        super(data);
        if (typeof this.objects === 'undefined') this.objects = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBusinessModuleRuleListResponse' },
				objects : { type : 'a', subTypeConstructor : KalturaBusinessModuleRule, subType : 'KalturaBusinessModuleRule' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaBusinessModuleRuleListResponse',KalturaBusinessModuleRuleListResponse);
