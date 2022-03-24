
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaAssetPersonalMarkupListResponse } from './KalturaAssetPersonalMarkupListResponse';

import { KalturaAssetPersonalMarkupSearchFilter } from './KalturaAssetPersonalMarkupSearchFilter';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface AssetPersonalMarkupListActionArgs  extends KalturaRequestArgs {
    filter : KalturaAssetPersonalMarkupSearchFilter;
}

/**
 * Build request payload for service 'assetPersonalMarkup' action 'list'.
 *
 * Usage: Response with list of assetPersonalMarkup
 *
 * Server response type:         KalturaAssetPersonalMarkupListResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class AssetPersonalMarkupListAction extends KalturaRequest<KalturaAssetPersonalMarkupListResponse> {

    filter : KalturaAssetPersonalMarkupSearchFilter;

    constructor(data : AssetPersonalMarkupListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaAssetPersonalMarkupListResponse', responseConstructor : KalturaAssetPersonalMarkupListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'assetpersonalmarkup' },
				action : { type : 'c', default : 'list' },
				filter : { type : 'o', subTypeConstructor : KalturaAssetPersonalMarkupSearchFilter, subType : 'KalturaAssetPersonalMarkupSearchFilter' }
            }
        );
        return result;
    }
}

