
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaLicensedUrlArgs  extends KalturaObjectBaseArgs {
    mainUrl? : string;
	altUrl? : string;
}


export class KalturaLicensedUrl extends KalturaObjectBase {

    mainUrl : string;
	altUrl : string;

    constructor(data? : KalturaLicensedUrlArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaLicensedUrl' },
				mainUrl : { type : 's' },
				altUrl : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaLicensedUrl',KalturaLicensedUrl);
