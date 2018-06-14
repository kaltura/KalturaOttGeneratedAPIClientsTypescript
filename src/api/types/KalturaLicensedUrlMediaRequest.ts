
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaLicensedUrlBaseRequest, KalturaLicensedUrlBaseRequestArgs } from './KalturaLicensedUrlBaseRequest';

export interface KalturaLicensedUrlMediaRequestArgs  extends KalturaLicensedUrlBaseRequestArgs {
    contentId? : number;
	baseUrl? : string;
}


export class KalturaLicensedUrlMediaRequest extends KalturaLicensedUrlBaseRequest {

    contentId : number;
	baseUrl : string;

    constructor(data? : KalturaLicensedUrlMediaRequestArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaLicensedUrlMediaRequest' },
				contentId : { type : 'n' },
				baseUrl : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaLicensedUrlMediaRequest',KalturaLicensedUrlMediaRequest);
