
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaBulkUploadJobData, KalturaBulkUploadJobDataArgs } from './KalturaBulkUploadJobData';

export interface KalturaBulkUploadIngestJobDataArgs  extends KalturaBulkUploadJobDataArgs {
    ingestProfileId? : number;
	disableEpgNotification? : boolean;
}


export class KalturaBulkUploadIngestJobData extends KalturaBulkUploadJobData {

    ingestProfileId : number;
	disableEpgNotification : boolean;

    constructor(data? : KalturaBulkUploadIngestJobDataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBulkUploadIngestJobData' },
				ingestProfileId : { type : 'n' },
				disableEpgNotification : { type : 'b' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaBulkUploadIngestJobData',KalturaBulkUploadIngestJobData);
