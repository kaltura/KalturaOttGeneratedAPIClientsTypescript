
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaCrudFilter, KalturaCrudFilterArgs } from './KalturaCrudFilter';

export interface KalturaIotFilterArgs  extends KalturaCrudFilterArgs {
    
}


export class KalturaIotFilter extends KalturaCrudFilter {

    

    constructor(data? : KalturaIotFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaIotFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaIotFilter',KalturaIotFilter);
