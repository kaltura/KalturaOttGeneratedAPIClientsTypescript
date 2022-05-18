
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaCrudFilter, KalturaCrudFilterArgs } from './KalturaCrudFilter';

export interface KalturaCategoryItemFilterArgs  extends KalturaCrudFilterArgs {
    
}


export class KalturaCategoryItemFilter extends KalturaCrudFilter {

    

    constructor(data? : KalturaCategoryItemFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaCategoryItemFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaCategoryItemFilter',KalturaCategoryItemFilter);
