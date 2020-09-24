
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaBulkUploadDynamicListResult, KalturaBulkUploadDynamicListResultArgs } from './KalturaBulkUploadDynamicListResult';

export interface KalturaBulkUploadUdidDynamicListResultArgs  extends KalturaBulkUploadDynamicListResultArgs {
    
}


export class KalturaBulkUploadUdidDynamicListResult extends KalturaBulkUploadDynamicListResult {

    readonly udid : string;

    constructor(data? : KalturaBulkUploadUdidDynamicListResultArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBulkUploadUdidDynamicListResult' },
				udid : { type : 's', readOnly : true }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaBulkUploadUdidDynamicListResult',KalturaBulkUploadUdidDynamicListResult);
