
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaAssetStatisticsListResponse } from './KalturaAssetStatisticsListResponse';

import { KalturaAssetStatisticsQuery } from './KalturaAssetStatisticsQuery';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface AssetStatisticsQueryActionArgs  extends KalturaRequestArgs {
    query : KalturaAssetStatisticsQuery;
}

/**
 * Build request payload for service 'assetStatistics' action 'query'.
 *
 * Usage: Returns statistics for given list of assets by type and / or time period.
 * Supported values for KalturaAssetStatisticsQuery.assetTypeEqual : KalturaAssetType.media, KalturaAssetType.epg
 *
 * Server response type:         KalturaAssetStatisticsListResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class AssetStatisticsQueryAction extends KalturaRequest<KalturaAssetStatisticsListResponse> {

    query : KalturaAssetStatisticsQuery;

    constructor(data : AssetStatisticsQueryActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaAssetStatisticsListResponse', responseConstructor : KalturaAssetStatisticsListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'assetstatistics' },
				action : { type : 'c', default : 'query' },
				query : { type : 'o', subTypeConstructor : KalturaAssetStatisticsQuery, subType : 'KalturaAssetStatisticsQuery' }
            }
        );
        return result;
    }
}

