
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaBulkUploadFilterArgs  extends KalturaFilterArgs {
    fileObjectNameEqual? : string;
	createDateGreaterThanOrEqual? : number;
	userIdEqualCurrent? : boolean;
	shouldGetOnGoingBulkUploads? : boolean;
}


export class KalturaBulkUploadFilter extends KalturaFilter {

    fileObjectNameEqual : string;
	createDateGreaterThanOrEqual : number;
	userIdEqualCurrent : boolean;
	shouldGetOnGoingBulkUploads : boolean;

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
				fileObjectNameEqual : { type : 's' },
				createDateGreaterThanOrEqual : { type : 'n' },
				userIdEqualCurrent : { type : 'b' },
				shouldGetOnGoingBulkUploads : { type : 'b' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaBulkUploadFilter',KalturaBulkUploadFilter);
