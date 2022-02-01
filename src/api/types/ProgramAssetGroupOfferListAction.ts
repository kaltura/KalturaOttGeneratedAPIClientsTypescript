
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaProgramAssetGroupOfferListResponse } from './KalturaProgramAssetGroupOfferListResponse';

import { KalturaProgramAssetGroupOfferFilter } from './KalturaProgramAssetGroupOfferFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ProgramAssetGroupOfferListActionArgs  extends KalturaRequestArgs {
    filter? : KalturaProgramAssetGroupOfferFilter;
	pager? : KalturaFilterPager;
}

/**
 * Build request payload for service 'programAssetGroupOffer' action 'list'.
 *
 * Usage: Gets all Program asset group offer
 *
 * Server response type:         KalturaProgramAssetGroupOfferListResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class ProgramAssetGroupOfferListAction extends KalturaRequest<KalturaProgramAssetGroupOfferListResponse> {

    filter : KalturaProgramAssetGroupOfferFilter;
	pager : KalturaFilterPager;

    constructor(data? : ProgramAssetGroupOfferListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaProgramAssetGroupOfferListResponse', responseConstructor : KalturaProgramAssetGroupOfferListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'programassetgroupoffer' },
				action : { type : 'c', default : 'list' },
				filter : { type : 'o', subTypeConstructor : KalturaProgramAssetGroupOfferFilter, subType : 'KalturaProgramAssetGroupOfferFilter' },
				pager : { type : 'o', subTypeConstructor : KalturaFilterPager, subType : 'KalturaFilterPager' }
            }
        );
        return result;
    }
}

