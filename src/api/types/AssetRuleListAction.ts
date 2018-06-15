
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaAssetRuleListResponse } from './KalturaAssetRuleListResponse';

import { KalturaAssetRuleFilter } from './KalturaAssetRuleFilter';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface AssetRuleListActionArgs  extends KalturaRequestArgs {
    filter? : KalturaAssetRuleFilter;
}

/**
 * Build request payload for service 'assetRule' action 'list'.
 *
 * Usage: Get the list of asset rules for the partner
 *
 * Server response type:         KalturaAssetRuleListResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class AssetRuleListAction extends KalturaRequest<KalturaAssetRuleListResponse> {

    filter : KalturaAssetRuleFilter;

    constructor(data? : AssetRuleListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaAssetRuleListResponse', responseConstructor : KalturaAssetRuleListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'assetrule' },
				action : { type : 'c', default : 'list' },
				filter : { type : 'o', subTypeConstructor : KalturaAssetRuleFilter, subType : 'KalturaAssetRuleFilter' }
            }
        );
        return result;
    }
}

