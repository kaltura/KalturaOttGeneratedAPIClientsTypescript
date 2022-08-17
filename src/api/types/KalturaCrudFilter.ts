
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaCrudFilterArgs  extends KalturaFilterArgs {
    
}


export class KalturaCrudFilter extends KalturaFilter {

    

    constructor(data? : KalturaCrudFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaCrudFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaCrudFilter',KalturaCrudFilter);
