
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaIngestEpgProgramResultFilter, KalturaIngestEpgProgramResultFilterArgs } from './KalturaIngestEpgProgramResultFilter';

export interface KalturaIngestProgramResultsByProgramIdsFilterArgs  extends KalturaIngestEpgProgramResultFilterArgs {
    programIdIn? : string;
}


export class KalturaIngestProgramResultsByProgramIdsFilter extends KalturaIngestEpgProgramResultFilter {

    programIdIn : string;

    constructor(data? : KalturaIngestProgramResultsByProgramIdsFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaIngestProgramResultsByProgramIdsFilter' },
				programIdIn : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaIngestProgramResultsByProgramIdsFilter',KalturaIngestProgramResultsByProgramIdsFilter);
