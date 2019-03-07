
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaDateComparisonType } from './KalturaDateComparisonType';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaBulkUploadFilterArgs  extends KalturaFilterArgs {
    uploadedOnEqual? : number;
	dateComparisonType? : KalturaDateComparisonType;
	statusIn? : string;
	userIdEqualCurrent? : boolean;
}


export class KalturaBulkUploadFilter extends KalturaFilter {

    uploadedOnEqual : number;
	dateComparisonType : KalturaDateComparisonType;
	statusIn : string;
	userIdEqualCurrent : boolean;

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
				uploadedOnEqual : { type : 'n' },
				dateComparisonType : { type : 'es', subTypeConstructor : KalturaDateComparisonType, subType : 'KalturaDateComparisonType' },
				statusIn : { type : 's' },
				userIdEqualCurrent : { type : 'b' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaBulkUploadFilter',KalturaBulkUploadFilter);
