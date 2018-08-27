
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaSegmentationTypeFilterArgs  extends KalturaFilterArgs {
    
}


export class KalturaSegmentationTypeFilter extends KalturaFilter {

    

    constructor(data? : KalturaSegmentationTypeFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaSegmentationTypeFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaSegmentationTypeFilter',KalturaSegmentationTypeFilter);
