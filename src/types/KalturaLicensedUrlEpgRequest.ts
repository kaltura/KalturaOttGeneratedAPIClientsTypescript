
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaStreamType } from './KalturaStreamType';
import { KalturaLicensedUrlMediaRequest, KalturaLicensedUrlMediaRequestArgs } from './KalturaLicensedUrlMediaRequest';

export interface KalturaLicensedUrlEpgRequestArgs  extends KalturaLicensedUrlMediaRequestArgs {
    streamType? : KalturaStreamType;
	startDate? : number;
}


export class KalturaLicensedUrlEpgRequest extends KalturaLicensedUrlMediaRequest {

    streamType : KalturaStreamType;
	startDate : number;

    constructor(data? : KalturaLicensedUrlEpgRequestArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaLicensedUrlEpgRequest' },
				streamType : { type : 'es', subTypeConstructor : KalturaStreamType, subType : 'KalturaStreamType' },
				startDate : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaLicensedUrlEpgRequest',KalturaLicensedUrlEpgRequest);
