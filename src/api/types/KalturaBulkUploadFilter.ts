
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaBulkUploadFilterArgs  extends KalturaFilterArgs {
    bulkObjectTypeEqual? : string;
	createDateGreaterThanOrEqual? : number;
	uploadedByUserIdEqualCurrent? : boolean;
	statusIn? : string;
}


export class KalturaBulkUploadFilter extends KalturaFilter {

    bulkObjectTypeEqual : string;
	createDateGreaterThanOrEqual : number;
	uploadedByUserIdEqualCurrent : boolean;
	statusIn : string;

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
				statusIn : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaBulkUploadFilter',KalturaBulkUploadFilter);
