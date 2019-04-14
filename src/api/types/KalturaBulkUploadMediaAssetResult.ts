
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaBulkUploadAssetResult, KalturaBulkUploadAssetResultArgs } from './KalturaBulkUploadAssetResult';

export interface KalturaBulkUploadMediaAssetResultArgs  extends KalturaBulkUploadAssetResultArgs {
    
}


export class KalturaBulkUploadMediaAssetResult extends KalturaBulkUploadAssetResult {

    

    constructor(data? : KalturaBulkUploadMediaAssetResultArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBulkUploadMediaAssetResult' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaBulkUploadMediaAssetResult',KalturaBulkUploadMediaAssetResult);
