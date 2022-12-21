
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaBulkUploadStatisticsArgs  extends KalturaObjectBaseArgs {
    pending? : number;
	uploaded? : number;
	queued? : number;
	parsing? : number;
	processing? : number;
	processed? : number;
	success? : number;
	partial? : number;
	failed? : number;
	fatal? : number;
}


export class KalturaBulkUploadStatistics extends KalturaObjectBase {

    pending : number;
	uploaded : number;
	queued : number;
	parsing : number;
	processing : number;
	processed : number;
	success : number;
	partial : number;
	failed : number;
	fatal : number;

    constructor(data? : KalturaBulkUploadStatisticsArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBulkUploadStatistics' },
				pending : { type : 'n' },
				uploaded : { type : 'n' },
				queued : { type : 'n' },
				parsing : { type : 'n' },
				processing : { type : 'n' },
				processed : { type : 'n' },
				success : { type : 'n' },
				partial : { type : 'n' },
				failed : { type : 'n' },
				fatal : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaBulkUploadStatistics',KalturaBulkUploadStatistics);
