
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaCrudFilter, KalturaCrudFilterArgs } from './KalturaCrudFilter';

export interface KalturaDynamicListFilterArgs  extends KalturaCrudFilterArgs {
    
}


export class KalturaDynamicListFilter extends KalturaCrudFilter {

    

    constructor(data? : KalturaDynamicListFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDynamicListFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaDynamicListFilter',KalturaDynamicListFilter);
