
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaSegmentationTypeFilterArgs  extends KalturaFilterArgs {
    idIn? : string;
	kSql? : string;
}


export class KalturaSegmentationTypeFilter extends KalturaFilter {

    idIn : string;
	kSql : string;

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
                objectType : { type : 'c', default : 'KalturaSegmentationTypeFilter' },
				idIn : { type : 's' },
				kSql : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaSegmentationTypeFilter',KalturaSegmentationTypeFilter);
