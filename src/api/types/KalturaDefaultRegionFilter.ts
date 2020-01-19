
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaBaseRegionFilter, KalturaBaseRegionFilterArgs } from './KalturaBaseRegionFilter';

export interface KalturaDefaultRegionFilterArgs  extends KalturaBaseRegionFilterArgs {
    
}


export class KalturaDefaultRegionFilter extends KalturaBaseRegionFilter {

    

    constructor(data? : KalturaDefaultRegionFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDefaultRegionFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaDefaultRegionFilter',KalturaDefaultRegionFilter);
