
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaBulkUploadAssetEntryData, KalturaBulkUploadAssetEntryDataArgs } from './KalturaBulkUploadAssetEntryData';

export interface KalturaBulkUploadMediaEntryDataArgs  extends KalturaBulkUploadAssetEntryDataArgs {
    
}


export class KalturaBulkUploadMediaEntryData extends KalturaBulkUploadAssetEntryData {

    

    constructor(data? : KalturaBulkUploadMediaEntryDataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBulkUploadMediaEntryData' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaBulkUploadMediaEntryData',KalturaBulkUploadMediaEntryData);
