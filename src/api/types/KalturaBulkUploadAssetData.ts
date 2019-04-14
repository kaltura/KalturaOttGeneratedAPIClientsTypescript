
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaBulkUploadObjectData, KalturaBulkUploadObjectDataArgs } from './KalturaBulkUploadObjectData';

export interface KalturaBulkUploadAssetDataArgs  extends KalturaBulkUploadObjectDataArgs {
    typeId? : number;
}


export class KalturaBulkUploadAssetData extends KalturaBulkUploadObjectData {

    typeId : number;

    constructor(data? : KalturaBulkUploadAssetDataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBulkUploadAssetData' },
				typeId : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaBulkUploadAssetData',KalturaBulkUploadAssetData);
