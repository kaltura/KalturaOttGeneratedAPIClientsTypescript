
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaBulkUploadDynamicListData, KalturaBulkUploadDynamicListDataArgs } from './KalturaBulkUploadDynamicListData';

export interface KalturaBulkUploadUdidDynamicListDataArgs  extends KalturaBulkUploadDynamicListDataArgs {
    
}


export class KalturaBulkUploadUdidDynamicListData extends KalturaBulkUploadDynamicListData {

    

    constructor(data? : KalturaBulkUploadUdidDynamicListDataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBulkUploadUdidDynamicListData' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaBulkUploadUdidDynamicListData',KalturaBulkUploadUdidDynamicListData);
