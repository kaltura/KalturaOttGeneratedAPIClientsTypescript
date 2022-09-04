
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaBulkUploadObjectData, KalturaBulkUploadObjectDataArgs } from './KalturaBulkUploadObjectData';

export interface KalturaBaseBulkSegmentsArgs  extends KalturaBulkUploadObjectDataArgs {
    segmentId? : number;
}


export class KalturaBaseBulkSegments extends KalturaBulkUploadObjectData {

    segmentId : number;

    constructor(data? : KalturaBaseBulkSegmentsArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBaseBulkSegments' },
				segmentId : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaBaseBulkSegments',KalturaBaseBulkSegments);
