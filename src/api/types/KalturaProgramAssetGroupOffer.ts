
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaTranslationToken } from './KalturaTranslationToken';
import { KalturaOTTObjectSupportNullable, KalturaOTTObjectSupportNullableArgs } from './KalturaOTTObjectSupportNullable';

export interface KalturaProgramAssetGroupOfferArgs  extends KalturaOTTObjectSupportNullableArgs {
    id? : number;
	multilingualName? : KalturaTranslationToken[];
	priceDetailsId? : number;
	fileTypesIds? : string;
	multilingualDescription? : KalturaTranslationToken[];
	isActive? : boolean;
	startDate? : number;
	endDate? : number;
	expiryDate? : number;
	externalId? : string;
	externalOfferId? : string;
}


export class KalturaProgramAssetGroupOffer extends KalturaOTTObjectSupportNullable {

    id : number;
	readonly name : string;
	multilingualName : KalturaTranslationToken[];
	priceDetailsId : number;
	fileTypesIds : string;
	readonly description : string;
	multilingualDescription : KalturaTranslationToken[];
	readonly virtualAssetId : number;
	isActive : boolean;
	readonly createDate : number;
	readonly updateDate : number;
	startDate : number;
	endDate : number;
	expiryDate : number;
	externalId : string;
	externalOfferId : string;

    constructor(data? : KalturaProgramAssetGroupOfferArgs)
    {
        super(data);
        if (typeof this.multilingualName === 'undefined') this.multilingualName = [];
		if (typeof this.multilingualDescription === 'undefined') this.multilingualDescription = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaProgramAssetGroupOffer' },
				id : { type : 'n' },
				name : { type : 's', readOnly : true },
				multilingualName : { type : 'a', subTypeConstructor : KalturaTranslationToken, subType : 'KalturaTranslationToken' },
				priceDetailsId : { type : 'n' },
				fileTypesIds : { type : 's' },
				description : { type : 's', readOnly : true },
				multilingualDescription : { type : 'a', subTypeConstructor : KalturaTranslationToken, subType : 'KalturaTranslationToken' },
				virtualAssetId : { type : 'n', readOnly : true },
				isActive : { type : 'b' },
				createDate : { type : 'n', readOnly : true },
				updateDate : { type : 'n', readOnly : true },
				startDate : { type : 'n' },
				endDate : { type : 'n' },
				expiryDate : { type : 'n' },
				externalId : { type : 's' },
				externalOfferId : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaProgramAssetGroupOffer',KalturaProgramAssetGroupOffer);
