
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaExternalRecordingFilter, KalturaExternalRecordingFilterArgs } from './KalturaExternalRecordingFilter';

export interface KalturaCloudRecordingFilterArgs  extends KalturaExternalRecordingFilterArgs {
    adapterData? : string;
}


export class KalturaCloudRecordingFilter extends KalturaExternalRecordingFilter {

    adapterData : string;

    constructor(data? : KalturaCloudRecordingFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaCloudRecordingFilter' },
				adapterData : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaCloudRecordingFilter',KalturaCloudRecordingFilter);
