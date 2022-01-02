
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaProgramAssetGroupOffer } from './KalturaProgramAssetGroupOffer';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ProgramAssetGroupOfferUpdateActionArgs  extends KalturaRequestArgs {
    id : number;
	programAssetGroupOffer : KalturaProgramAssetGroupOffer;
}

/**
 * Build request payload for service 'programAssetGroupOffer' action 'update'.
 *
 * Usage: Update ProgramAssetGroupOffer
 *
 * Server response type:         KalturaProgramAssetGroupOffer
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class ProgramAssetGroupOfferUpdateAction extends KalturaRequest<KalturaProgramAssetGroupOffer> {

    id : number;
	programAssetGroupOffer : KalturaProgramAssetGroupOffer;

    constructor(data : ProgramAssetGroupOfferUpdateActionArgs)
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
				action : { type : 'c', default : 'update' },
				id : { type : 'n' },
				programAssetGroupOffer : { type : 'o', subTypeConstructor : KalturaProgramAssetGroupOffer, subType : 'KalturaProgramAssetGroupOffer' }
            }
        );
        return result;
    }
}

