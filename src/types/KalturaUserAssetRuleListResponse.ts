
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaUserAssetRule } from './KalturaUserAssetRule';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaUserAssetRuleListResponseArgs  extends KalturaListResponseArgs {
    objects? : KalturaUserAssetRule[];
}


export class KalturaUserAssetRuleListResponse extends KalturaListResponse {

    objects : KalturaUserAssetRule[];

    constructor(data? : KalturaUserAssetRuleListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaUserAssetRuleListResponse' },
				objects : { type : 'a', subTypeConstructor : KalturaUserAssetRule, subType : 'KalturaUserAssetRule' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaUserAssetRuleListResponse',KalturaUserAssetRuleListResponse);
