
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaCurrencyFilterArgs  extends KalturaFilterArgs {
    codeIn? : string;
	excludePartner? : boolean;
}


export class KalturaCurrencyFilter extends KalturaFilter {

    codeIn : string;
	excludePartner : boolean;

    constructor(data? : KalturaCurrencyFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaCurrencyFilter' },
				codeIn : { type : 's' },
				excludePartner : { type : 'b' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaCurrencyFilter',KalturaCurrencyFilter);
