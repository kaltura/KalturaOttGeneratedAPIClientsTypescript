
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaPriceDetailsFilterArgs  extends KalturaFilterArgs {
    idIn? : string;
}


export class KalturaPriceDetailsFilter extends KalturaFilter {

    idIn : string;

    constructor(data? : KalturaPriceDetailsFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaPriceDetailsFilter' },
				idIn : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaPriceDetailsFilter',KalturaPriceDetailsFilter);
