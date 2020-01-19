
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaBaseRegionFilterArgs  extends KalturaFilterArgs {
    
}


export class KalturaBaseRegionFilter extends KalturaFilter {

    

    constructor(data? : KalturaBaseRegionFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBaseRegionFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaBaseRegionFilter',KalturaBaseRegionFilter);
