
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaPushParams } from './KalturaPushParams';
import { KalturaPlatform } from './KalturaPlatform';
import { KalturaReport, KalturaReportArgs } from './KalturaReport';

export interface KalturaDeviceReportArgs  extends KalturaReportArgs {
    partnerId? : number;
	configurationGroupId? : string;
	udid? : string;
	pushParameters? : KalturaPushParams;
	versionNumber? : string;
	versionPlatform? : KalturaPlatform;
	versionAppName? : string;
	lastAccessIP? : string;
	lastAccessDate? : number;
	userAgent? : string;
	operationSystem? : string;
}


export class KalturaDeviceReport extends KalturaReport {

    partnerId : number;
	configurationGroupId : string;
	udid : string;
	pushParameters : KalturaPushParams;
	versionNumber : string;
	versionPlatform : KalturaPlatform;
	versionAppName : string;
	lastAccessIP : string;
	lastAccessDate : number;
	userAgent : string;
	operationSystem : string;

    constructor(data? : KalturaDeviceReportArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDeviceReport' },
				partnerId : { type : 'n' },
				configurationGroupId : { type : 's' },
				udid : { type : 's' },
				pushParameters : { type : 'o', subTypeConstructor : KalturaPushParams, subType : 'KalturaPushParams' },
				versionNumber : { type : 's' },
				versionPlatform : { type : 'es', subTypeConstructor : KalturaPlatform, subType : 'KalturaPlatform' },
				versionAppName : { type : 's' },
				lastAccessIP : { type : 's' },
				lastAccessDate : { type : 'n' },
				userAgent : { type : 's' },
				operationSystem : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaDeviceReport',KalturaDeviceReport);
