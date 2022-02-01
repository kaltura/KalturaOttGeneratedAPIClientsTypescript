
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaProgramAssetGroupOffer } from './KalturaProgramAssetGroupOffer';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ProgramAssetGroupOfferAddActionArgs  extends KalturaRequestArgs {
    programAssetGroupOffer : KalturaProgramAssetGroupOffer;
}

/**
 * Build request payload for service 'programAssetGroupOffer' action 'add'.
 *
 * Usage: Insert new ProgramAssetGroupOffer for partner
 *
 * Server response type:         KalturaProgramAssetGroupOffer
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class ProgramAssetGroupOfferAddAction extends KalturaRequest<KalturaProgramAssetGroupOffer> {

    programAssetGroupOffer : KalturaProgramAssetGroupOffer;

    constructor(data : ProgramAssetGroupOfferAddActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaProgramAssetGroupOffer', responseConstructor : KalturaProgramAssetGroupOffer  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'programassetgroupoffer' },
				action : { type : 'c', default : 'add' },
				programAssetGroupOffer : { type : 'o', subTypeConstructor : KalturaProgramAssetGroupOffer, subType : 'KalturaProgramAssetGroupOffer' }
            }
        );
        return result;
    }
}

