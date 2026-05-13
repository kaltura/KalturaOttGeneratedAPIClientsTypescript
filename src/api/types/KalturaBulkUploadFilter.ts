
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaBulkUploadFilterArgs  extends KalturaFilterArgs {
    bulkObjectTypeEqual? : string;
	createDateGreaterThanOrEqual? : number;
	uploadedByUserIdEqualCurrent? : boolean;
	statusIn? : string;
	includeResultsEqual? : boolean;
}


export class KalturaBulkUploadFilter extends KalturaFilter {

    bulkObjectTypeEqual : string;
	createDateGreaterThanOrEqual : number;
	uploadedByUserIdEqualCurrent : boolean;
	statusIn : string;
	includeResultsEqual : boolean;

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
				bulkObjectTypeEqual : { type : 's' },
				createDateGreaterThanOrEqual : { type : 'n' },
				uploadedByUserIdEqualCurrent : { type : 'b' },
				statusIn : { type : 's' },
				includeResultsEqual : { type : 'b' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaBulkUploadFilter',KalturaBulkUploadFilter);
