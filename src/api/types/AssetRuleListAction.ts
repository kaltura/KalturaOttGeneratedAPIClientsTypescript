
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaAssetRuleListResponse } from './KalturaAssetRuleListResponse';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface AssetRuleListActionArgs  extends KalturaRequestArgs {
    
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
				action : { type : 'c', default : 'list' }
            }
        );
        return result;
    }
}

