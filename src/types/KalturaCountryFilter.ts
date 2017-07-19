
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaCountryFilterArgs  extends KalturaFilterArgs {
    idIn? : string;
	ipEqual? : string;
	ipEqualCurrent? : boolean;
}

/** 
* Country filter
**/
export class KalturaCountryFilter extends KalturaFilter {

    idIn : string;
	ipEqual : string;
	ipEqualCurrent : boolean;

    constructor(data? : KalturaCountryFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaCountryFilter' },
				idIn : { type : 's' },
				ipEqual : { type : 's' },
				ipEqualCurrent : { type : 'b' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaCountryFilter',KalturaCountryFilter);
