
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaLicensedUrlBaseRequest, KalturaLicensedUrlBaseRequestArgs } from './KalturaLicensedUrlBaseRequest';

export interface KalturaLicensedUrlRecordingRequestArgs  extends KalturaLicensedUrlBaseRequestArgs {
    fileType? : string;
}


export class KalturaLicensedUrlRecordingRequest extends KalturaLicensedUrlBaseRequest {

    fileType : string;

    constructor(data? : KalturaLicensedUrlRecordingRequestArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaLicensedUrlRecordingRequest' },
				fileType : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaLicensedUrlRecordingRequest',KalturaLicensedUrlRecordingRequest);
