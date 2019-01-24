
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaTvmRule } from './KalturaTvmRule';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaTvmRuleListResponseArgs  extends KalturaListResponseArgs {
    objects? : KalturaTvmRule[];
}


export class KalturaTvmRuleListResponse extends KalturaListResponse {

    objects : KalturaTvmRule[];

    constructor(data? : KalturaTvmRuleListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaTvmRuleListResponse' },
				objects : { type : 'a', subTypeConstructor : KalturaTvmRule, subType : 'KalturaTvmRule' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaTvmRuleListResponse',KalturaTvmRuleListResponse);
