
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaVodIngestAssetResultAggregationArgs  extends KalturaObjectBaseArgs {
    ingestDateFrom? : number;
	ingestDateTo? : number;
	failureCount? : number;
	successCount? : number;
	externalFailureCount? : number;
	successWithWarningCount? : number;
	averageTotalProcessingDuration? : number;
	averageTotalActiveProcessingDuration? : number;
	p95TotalProcessingDuration? : number;
	p95TotalActiveProcessingDuration? : number;
}


export class KalturaVodIngestAssetResultAggregation extends KalturaObjectBase {

    ingestDateFrom : number;
	ingestDateTo : number;
	failureCount : number;
	successCount : number;
	externalFailureCount : number;
	successWithWarningCount : number;
	averageTotalProcessingDuration : number;
	averageTotalActiveProcessingDuration : number;
	p95TotalProcessingDuration : number;
	p95TotalActiveProcessingDuration : number;

    constructor(data? : KalturaVodIngestAssetResultAggregationArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaVodIngestAssetResultAggregation' },
				ingestDateFrom : { type : 'n' },
				ingestDateTo : { type : 'n' },
				failureCount : { type : 'n' },
				successCount : { type : 'n' },
				externalFailureCount : { type : 'n' },
				successWithWarningCount : { type : 'n' },
				averageTotalProcessingDuration : { type : 'n' },
				averageTotalActiveProcessingDuration : { type : 'n' },
				p95TotalProcessingDuration : { type : 'n' },
				p95TotalActiveProcessingDuration : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaVodIngestAssetResultAggregation',KalturaVodIngestAssetResultAggregation);
