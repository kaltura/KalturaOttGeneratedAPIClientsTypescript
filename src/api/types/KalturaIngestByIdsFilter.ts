
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaIngestByIdsFilterArgs  extends KalturaFilterArgs {
    ingestIdIn? : string;
}


export class KalturaIngestByIdsFilter extends KalturaFilter {

    ingestIdIn : string;

    constructor(data? : KalturaIngestByIdsFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaIngestByIdsFilter' },
				ingestIdIn : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaIngestByIdsFilter',KalturaIngestByIdsFilter);
