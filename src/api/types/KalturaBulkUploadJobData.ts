
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaBulkUploadJobDataArgs  extends KalturaObjectBaseArgs {
    
}


export class KalturaBulkUploadJobData extends KalturaObjectBase {

    

    constructor(data? : KalturaBulkUploadJobDataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBulkUploadJobData' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaBulkUploadJobData',KalturaBulkUploadJobData);
