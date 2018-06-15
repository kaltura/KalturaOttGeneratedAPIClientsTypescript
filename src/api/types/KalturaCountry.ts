
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaCountryArgs  extends KalturaObjectBaseArgs {
    name? : string;
	code? : string;
	mainLanguageCode? : string;
	languagesCode? : string;
	currency? : string;
	currencySign? : string;
	vatPercent? : number;
	timeZoneId? : string;
}


export class KalturaCountry extends KalturaObjectBase {

    readonly id : number;
	name : string;
	code : string;
	mainLanguageCode : string;
	languagesCode : string;
	currency : string;
	currencySign : string;
	vatPercent : number;
	timeZoneId : string;

    constructor(data? : KalturaCountryArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaCountry' },
				id : { type : 'n', readOnly : true },
				name : { type : 's' },
				code : { type : 's' },
				mainLanguageCode : { type : 's' },
				languagesCode : { type : 's' },
				currency : { type : 's' },
				currencySign : { type : 's' },
				vatPercent : { type : 'n' },
				timeZoneId : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaCountry',KalturaCountry);
