
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaBulkUploadAssetData, KalturaBulkUploadAssetDataArgs } from './KalturaBulkUploadAssetData';

export interface KalturaBulkUploadEpgAssetDataArgs  extends KalturaBulkUploadAssetDataArgs {
    
}


export class KalturaBulkUploadEpgAssetData extends KalturaBulkUploadAssetData {

    

    constructor(data? : KalturaBulkUploadEpgAssetDataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBulkUploadEpgAssetData' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaBulkUploadEpgAssetData',KalturaBulkUploadEpgAssetData);
