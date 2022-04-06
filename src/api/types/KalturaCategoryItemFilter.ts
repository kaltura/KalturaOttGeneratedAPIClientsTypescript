
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaCategoryItemFilterArgs  extends KalturaFilterArgs {
    
}


export class KalturaCategoryItemFilter extends KalturaFilter {

    

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
