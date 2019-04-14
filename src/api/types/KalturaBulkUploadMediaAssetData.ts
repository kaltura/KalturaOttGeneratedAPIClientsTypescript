
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaBulkUploadAssetData, KalturaBulkUploadAssetDataArgs } from './KalturaBulkUploadAssetData';

export interface KalturaBulkUploadMediaAssetDataArgs  extends KalturaBulkUploadAssetDataArgs {
    
}


export class KalturaBulkUploadMediaAssetData extends KalturaBulkUploadAssetData {

    

    constructor(data? : KalturaBulkUploadMediaAssetDataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBulkUploadMediaAssetData' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaBulkUploadMediaAssetData',KalturaBulkUploadMediaAssetData);
