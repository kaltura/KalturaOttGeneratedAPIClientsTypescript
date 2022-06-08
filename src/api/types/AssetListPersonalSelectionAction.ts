
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaAssetListResponse } from './KalturaAssetListResponse';

import { KalturaPersonalAssetSelectionFilter } from './KalturaPersonalAssetSelectionFilter';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface AssetListPersonalSelectionActionArgs  extends KalturaRequestArgs {
    filter : KalturaPersonalAssetSelectionFilter;
}

/**
 * Build request payload for service 'asset' action 'listPersonalSelection'.
 *
 * Usage: Returns recent selected assets
 *
 * Server response type:         KalturaAssetListResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class AssetListPersonalSelectionAction extends KalturaRequest<KalturaAssetListResponse> {

    filter : KalturaPersonalAssetSelectionFilter;

    constructor(data : AssetListPersonalSelectionActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaAssetListResponse', responseConstructor : KalturaAssetListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'asset' },
				action : { type : 'c', default : 'listPersonalSelection' },
				filter : { type : 'o', subTypeConstructor : KalturaPersonalAssetSelectionFilter, subType : 'KalturaPersonalAssetSelectionFilter' }
            }
        );
        return result;
    }
}

