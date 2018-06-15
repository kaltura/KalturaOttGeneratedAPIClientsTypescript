
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaAssetUserRuleListResponse } from './KalturaAssetUserRuleListResponse';

import { KalturaAssetUserRuleFilter } from './KalturaAssetUserRuleFilter';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface AssetUserRuleListActionArgs  extends KalturaRequestArgs {
    filter? : KalturaAssetUserRuleFilter;
}

/**
 * Build request payload for service 'assetUserRule' action 'list'.
 *
 * Usage: Get the list of asset user rules for the partner
 *
 * Server response type:         KalturaAssetUserRuleListResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class AssetUserRuleListAction extends KalturaRequest<KalturaAssetUserRuleListResponse> {

    filter : KalturaAssetUserRuleFilter;

    constructor(data? : AssetUserRuleListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaAssetUserRuleListResponse', responseConstructor : KalturaAssetUserRuleListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'assetuserrule' },
				action : { type : 'c', default : 'list' },
				filter : { type : 'o', subTypeConstructor : KalturaAssetUserRuleFilter, subType : 'KalturaAssetUserRuleFilter' }
            }
        );
        return result;
    }
}

