
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaBusinessModuleDetails } from './KalturaBusinessModuleDetails';
import { KalturaStringValueArray } from './KalturaStringValueArray';
import { KalturaAssetFile, KalturaAssetFileArgs } from './KalturaAssetFile';

export interface KalturaMediaFileArgs  extends KalturaAssetFileArgs {
    assetId? : number;
	typeId? : number;
	altUrl? : string;
	duration? : number;
	externalId? : string;
	altExternalId? : string;
	fileSize? : number;
	additionalData? : string;
	altStreamingCode? : string;
	alternativeCdnAdapaterProfileId? : number;
	endDate? : number;
	startDate? : number;
	externalStoreId? : string;
	isDefaultLanguage? : boolean;
	language? : string;
	orderNum? : number;
	outputProtecationLevel? : string;
	cdnAdapaterProfileId? : number;
	status? : boolean;
	catalogEndDate? : number;
	opl? : string;
	businessModuleDetails? : KalturaBusinessModuleDetails;
	labels? : string;
	dynamicData? : { [key : string] : KalturaStringValueArray};
}


export class KalturaMediaFile extends KalturaAssetFile {

    assetId : number;
	readonly id : number;
	readonly type : string;
	typeId : number;
	altUrl : string;
	duration : number;
	externalId : string;
	altExternalId : string;
	fileSize : number;
	additionalData : string;
	altStreamingCode : string;
	alternativeCdnAdapaterProfileId : number;
	endDate : number;
	startDate : number;
	externalStoreId : string;
	isDefaultLanguage : boolean;
	language : string;
	orderNum : number;
	outputProtecationLevel : string;
	cdnAdapaterProfileId : number;
	status : boolean;
	catalogEndDate : number;
	opl : string;
	businessModuleDetails : KalturaBusinessModuleDetails;
	labels : string;
	dynamicData : { [key : string] : KalturaStringValueArray};

    constructor(data? : KalturaMediaFileArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaMediaFile' },
				assetId : { type : 'n' },
				id : { type : 'n', readOnly : true },
				type : { type : 's', readOnly : true },
				typeId : { type : 'n' },
				altUrl : { type : 's' },
				duration : { type : 'n' },
				externalId : { type : 's' },
				altExternalId : { type : 's' },
				fileSize : { type : 'n' },
				additionalData : { type : 's' },
				altStreamingCode : { type : 's' },
				alternativeCdnAdapaterProfileId : { type : 'n' },
				endDate : { type : 'n' },
				startDate : { type : 'n' },
				externalStoreId : { type : 's' },
				isDefaultLanguage : { type : 'b' },
				language : { type : 's' },
				orderNum : { type : 'n' },
				outputProtecationLevel : { type : 's' },
				cdnAdapaterProfileId : { type : 'n' },
				status : { type : 'b' },
				catalogEndDate : { type : 'n' },
				opl : { type : 's' },
				businessModuleDetails : { type : 'o', subTypeConstructor : KalturaBusinessModuleDetails, subType : 'KalturaBusinessModuleDetails' },
				labels : { type : 's' },
				dynamicData : { type : 'm', subTypeConstructor : KalturaStringValueArray, subType : 'KalturaStringValueArray' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaMediaFile',KalturaMediaFile);
