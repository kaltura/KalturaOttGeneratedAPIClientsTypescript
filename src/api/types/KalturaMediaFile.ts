
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaStringValueArray } from './KalturaStringValueArray';
import { KalturaAssetFile, KalturaAssetFileArgs } from './KalturaAssetFile';

export interface KalturaMediaFileArgs  extends KalturaAssetFileArgs {
    assetId? : number;
	type? : string;
	duration? : number;
	externalId? : string;
	billingType? : string;
	quality? : string;
	handlingType? : string;
	cdnName? : string;
	cdnCode? : string;
	altCdnCode? : string;
	ppvModules? : KalturaStringValueArray;
	productCode? : string;
	fileSize? : number;
}


export class KalturaMediaFile extends KalturaAssetFile {

    assetId : number;
	readonly id : number;
	type : string;
	duration : number;
	externalId : string;
	billingType : string;
	quality : string;
	handlingType : string;
	cdnName : string;
	cdnCode : string;
	altCdnCode : string;
	ppvModules : KalturaStringValueArray;
	productCode : string;
	fileSize : number;

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
				type : { type : 's' },
				duration : { type : 'n' },
				externalId : { type : 's' },
				billingType : { type : 's' },
				quality : { type : 's' },
				handlingType : { type : 's' },
				cdnName : { type : 's' },
				cdnCode : { type : 's' },
				altCdnCode : { type : 's' },
				ppvModules : { type : 'o', subTypeConstructor : KalturaStringValueArray, subType : 'KalturaStringValueArray' },
				productCode : { type : 's' },
				fileSize : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaMediaFile',KalturaMediaFile);
