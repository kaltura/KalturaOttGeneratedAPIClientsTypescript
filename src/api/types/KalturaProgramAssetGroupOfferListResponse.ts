
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaProgramAssetGroupOffer } from './KalturaProgramAssetGroupOffer';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaProgramAssetGroupOfferListResponseArgs  extends KalturaListResponseArgs {
    objects? : KalturaProgramAssetGroupOffer[];
}


export class KalturaProgramAssetGroupOfferListResponse extends KalturaListResponse {

    objects : KalturaProgramAssetGroupOffer[];

    constructor(data? : KalturaProgramAssetGroupOfferListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaProgramAssetGroupOfferListResponse' },
				objects : { type : 'a', subTypeConstructor : KalturaProgramAssetGroupOffer, subType : 'KalturaProgramAssetGroupOffer' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaProgramAssetGroupOfferListResponse',KalturaProgramAssetGroupOfferListResponse);
