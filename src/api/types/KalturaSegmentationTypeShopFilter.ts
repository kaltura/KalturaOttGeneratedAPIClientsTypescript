
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaBaseSegmentationTypeFilter, KalturaBaseSegmentationTypeFilterArgs } from './KalturaBaseSegmentationTypeFilter';

export interface KalturaSegmentationTypeShopFilterArgs  extends KalturaBaseSegmentationTypeFilterArgs {
    idIn? : string;
}


export class KalturaSegmentationTypeShopFilter extends KalturaBaseSegmentationTypeFilter {

    idIn : string;

    constructor(data? : KalturaSegmentationTypeShopFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaSegmentationTypeShopFilter' },
				idIn : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaSegmentationTypeShopFilter',KalturaSegmentationTypeShopFilter);
