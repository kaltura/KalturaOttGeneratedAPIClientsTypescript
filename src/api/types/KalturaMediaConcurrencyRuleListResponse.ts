
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaMediaConcurrencyRule } from './KalturaMediaConcurrencyRule';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaMediaConcurrencyRuleListResponseArgs  extends KalturaListResponseArgs {
    objects? : KalturaMediaConcurrencyRule[];
}


export class KalturaMediaConcurrencyRuleListResponse extends KalturaListResponse {

    objects : KalturaMediaConcurrencyRule[];

    constructor(data? : KalturaMediaConcurrencyRuleListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaMediaConcurrencyRuleListResponse' },
				objects : { type : 'a', subTypeConstructor : KalturaMediaConcurrencyRule, subType : 'KalturaMediaConcurrencyRule' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaMediaConcurrencyRuleListResponse',KalturaMediaConcurrencyRuleListResponse);
