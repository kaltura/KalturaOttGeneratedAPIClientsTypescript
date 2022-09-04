
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaBaseBulkUploadSegmentsResult, KalturaBaseBulkUploadSegmentsResultArgs } from './KalturaBaseBulkUploadSegmentsResult';

export interface KalturaBulkSegmentedUsersResultArgs  extends KalturaBaseBulkUploadSegmentsResultArgs {
    
}


export class KalturaBulkSegmentedUsersResult extends KalturaBaseBulkUploadSegmentsResult {

    

    constructor(data? : KalturaBulkSegmentedUsersResultArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBulkSegmentedUsersResult' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaBulkSegmentedUsersResult',KalturaBulkSegmentedUsersResult);
