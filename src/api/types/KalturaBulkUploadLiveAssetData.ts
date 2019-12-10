
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaBulkUploadMediaAssetData, KalturaBulkUploadMediaAssetDataArgs } from './KalturaBulkUploadMediaAssetData';

export interface KalturaBulkUploadLiveAssetDataArgs  extends KalturaBulkUploadMediaAssetDataArgs {
    
}


export class KalturaBulkUploadLiveAssetData extends KalturaBulkUploadMediaAssetData {

    

    constructor(data? : KalturaBulkUploadLiveAssetDataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBulkUploadLiveAssetData' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaBulkUploadLiveAssetData',KalturaBulkUploadLiveAssetData);
