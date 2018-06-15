
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaParentalRule } from './KalturaParentalRule';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaParentalRuleListResponseArgs  extends KalturaListResponseArgs {
    objects? : KalturaParentalRule[];
}


export class KalturaParentalRuleListResponse extends KalturaListResponse {

    objects : KalturaParentalRule[];

    constructor(data? : KalturaParentalRuleListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaParentalRuleListResponse' },
				objects : { type : 'a', subTypeConstructor : KalturaParentalRule, subType : 'KalturaParentalRule' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaParentalRuleListResponse',KalturaParentalRuleListResponse);
