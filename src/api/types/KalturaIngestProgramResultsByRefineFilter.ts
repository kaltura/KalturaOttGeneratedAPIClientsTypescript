
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaIngestEpgProgramResultFilter, KalturaIngestEpgProgramResultFilterArgs } from './KalturaIngestEpgProgramResultFilter';

export interface KalturaIngestProgramResultsByRefineFilterArgs  extends KalturaIngestEpgProgramResultFilterArgs {
    ingestStatusIn? : string;
	startDateGreaterThan? : number;
	startDateSmallerThan? : number;
}


export class KalturaIngestProgramResultsByRefineFilter extends KalturaIngestEpgProgramResultFilter {

    ingestStatusIn : string;
	startDateGreaterThan : number;
	startDateSmallerThan : number;

    constructor(data? : KalturaIngestProgramResultsByRefineFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaIngestProgramResultsByRefineFilter' },
				ingestStatusIn : { type : 's' },
				startDateGreaterThan : { type : 'n' },
				startDateSmallerThan : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaIngestProgramResultsByRefineFilter',KalturaIngestProgramResultsByRefineFilter);
