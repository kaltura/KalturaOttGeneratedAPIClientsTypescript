
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaBulkUploadResult, KalturaBulkUploadResultArgs } from './KalturaBulkUploadResult';

export interface KalturaBaseBulkUploadSegmentsResultArgs  extends KalturaBulkUploadResultArgs {
    segmentId? : number;
}


export class KalturaBaseBulkUploadSegmentsResult extends KalturaBulkUploadResult {

    segmentId : number;

    constructor(data? : KalturaBaseBulkUploadSegmentsResultArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBaseBulkUploadSegmentsResult' },
				segmentId : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaBaseBulkUploadSegmentsResult',KalturaBaseBulkUploadSegmentsResult);
