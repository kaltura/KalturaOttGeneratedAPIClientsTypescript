
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaBulkUploadJobData, KalturaBulkUploadJobDataArgs } from './KalturaBulkUploadJobData';

export interface KalturaBulkUploadExcelJobDataArgs  extends KalturaBulkUploadJobDataArgs {
    
}


export class KalturaBulkUploadExcelJobData extends KalturaBulkUploadJobData {

    

    constructor(data? : KalturaBulkUploadExcelJobDataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBulkUploadExcelJobData' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaBulkUploadExcelJobData',KalturaBulkUploadExcelJobData);
