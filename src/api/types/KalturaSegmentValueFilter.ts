
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaBaseSegmentationTypeFilter, KalturaBaseSegmentationTypeFilterArgs } from './KalturaBaseSegmentationTypeFilter';

export interface KalturaSegmentValueFilterArgs  extends KalturaBaseSegmentationTypeFilterArgs {
    idIn? : string;
	nameContain? : string;
}


export class KalturaSegmentValueFilter extends KalturaBaseSegmentationTypeFilter {

    idIn : string;
	nameContain : string;

    constructor(data? : KalturaSegmentValueFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaSegmentValueFilter' },
				idIn : { type : 's' },
				nameContain : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaSegmentValueFilter',KalturaSegmentValueFilter);
