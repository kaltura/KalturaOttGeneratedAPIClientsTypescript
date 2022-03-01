
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaIngestEpgProgramResultFilter, KalturaIngestEpgProgramResultFilterArgs } from './KalturaIngestEpgProgramResultFilter';

export interface KalturaIngestProgramResultsByExternalIdsFilterArgs  extends KalturaIngestEpgProgramResultFilterArgs {
    externalProgramIdIn? : string;
}


export class KalturaIngestProgramResultsByExternalIdsFilter extends KalturaIngestEpgProgramResultFilter {

    externalProgramIdIn : string;

    constructor(data? : KalturaIngestProgramResultsByExternalIdsFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaIngestProgramResultsByExternalIdsFilter' },
				externalProgramIdIn : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaIngestProgramResultsByExternalIdsFilter',KalturaIngestProgramResultsByExternalIdsFilter);
