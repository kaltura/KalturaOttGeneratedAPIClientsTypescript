
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaCategoryVersionFilterArgs  extends KalturaFilterArgs {
    
}


export class KalturaCategoryVersionFilter extends KalturaFilter {

    

    constructor(data? : KalturaCategoryVersionFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaCategoryVersionFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaCategoryVersionFilter',KalturaCategoryVersionFilter);
