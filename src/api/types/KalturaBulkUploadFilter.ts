
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaBatchUploadJobStatus } from './KalturaBatchUploadJobStatus';
import { KalturaPersistedFilter, KalturaPersistedFilterArgs } from './KalturaPersistedFilter';

export interface KalturaBulkUploadFilterArgs  extends KalturaPersistedFilterArgs {
    statusEqual? : KalturaBatchUploadJobStatus;
}


export class KalturaBulkUploadFilter extends KalturaPersistedFilter {

    statusEqual : KalturaBatchUploadJobStatus;

    constructor(data? : KalturaBulkUploadFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBulkUploadFilter' },
				statusEqual : { type : 'es', subTypeConstructor : KalturaBatchUploadJobStatus, subType : 'KalturaBatchUploadJobStatus' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaBulkUploadFilter',KalturaBulkUploadFilter);
