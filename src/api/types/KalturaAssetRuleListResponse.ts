
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaAssetRule } from './KalturaAssetRule';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaAssetRuleListResponseArgs  extends KalturaListResponseArgs {
    objects? : KalturaAssetRule[];
}


export class KalturaAssetRuleListResponse extends KalturaListResponse {

    objects : KalturaAssetRule[];

    constructor(data? : KalturaAssetRuleListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaAssetRuleListResponse' },
				objects : { type : 'a', subTypeConstructor : KalturaAssetRule, subType : 'KalturaAssetRule' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaAssetRuleListResponse',KalturaAssetRuleListResponse);
