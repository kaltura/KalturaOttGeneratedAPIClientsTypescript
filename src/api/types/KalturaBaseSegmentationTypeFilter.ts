
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaBaseSegmentationTypeFilterArgs  extends KalturaFilterArgs {
    
}


export class KalturaBaseSegmentationTypeFilter extends KalturaFilter {

    

    constructor(data? : KalturaBaseSegmentationTypeFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBaseSegmentationTypeFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaBaseSegmentationTypeFilter',KalturaBaseSegmentationTypeFilter);
