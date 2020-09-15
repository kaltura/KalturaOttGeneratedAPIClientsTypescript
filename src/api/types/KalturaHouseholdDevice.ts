
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaDeviceStatus } from './KalturaDeviceStatus';
import { KalturaCustomDrmPlaybackPluginData } from './KalturaCustomDrmPlaybackPluginData';
import { KalturaOTTObjectSupportNullable, KalturaOTTObjectSupportNullableArgs } from './KalturaOTTObjectSupportNullable';

export interface KalturaHouseholdDeviceArgs  extends KalturaOTTObjectSupportNullableArgs {
    householdId? : number;
	udid? : string;
	name? : string;
	brandId? : number;
	activatedOn? : number;
	externalId? : string;
}


export class KalturaHouseholdDevice extends KalturaOTTObjectSupportNullable {

    householdId : number;
	udid : string;
	name : string;
	brandId : number;
	activatedOn : number;
	readonly status : KalturaDeviceStatus;
	readonly deviceFamilyId : number;
	readonly drm : KalturaCustomDrmPlaybackPluginData;
	externalId : string;

    constructor(data? : KalturaHouseholdDeviceArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaHouseholdDevice' },
				householdId : { type : 'n' },
				udid : { type : 's' },
				name : { type : 's' },
				brandId : { type : 'n' },
				activatedOn : { type : 'n' },
				status : { type : 'es', readOnly : true, subTypeConstructor : KalturaDeviceStatus, subType : 'KalturaDeviceStatus' },
				deviceFamilyId : { type : 'n', readOnly : true },
				drm : { type : 'o', readOnly : true, subTypeConstructor : KalturaCustomDrmPlaybackPluginData, subType : 'KalturaCustomDrmPlaybackPluginData' },
				externalId : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaHouseholdDevice',KalturaHouseholdDevice);
