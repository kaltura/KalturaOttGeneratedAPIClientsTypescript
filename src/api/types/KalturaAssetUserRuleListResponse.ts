
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaAssetUserRule } from './KalturaAssetUserRule';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaAssetUserRuleListResponseArgs  extends KalturaListResponseArgs {
    objects? : KalturaAssetUserRule[];
}


export class KalturaAssetUserRuleListResponse extends KalturaListResponse {

    objects : KalturaAssetUserRule[];

    constructor(data? : KalturaAssetUserRuleListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaAssetUserRuleListResponse' },
				objects : { type : 'a', subTypeConstructor : KalturaAssetUserRule, subType : 'KalturaAssetUserRule' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaAssetUserRuleListResponse',KalturaAssetUserRuleListResponse);
