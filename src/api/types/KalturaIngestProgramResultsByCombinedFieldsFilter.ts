
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaIngestProgramResultsByRefineFilter, KalturaIngestProgramResultsByRefineFilterArgs } from './KalturaIngestProgramResultsByRefineFilter';

export interface KalturaIngestProgramResultsByCombinedFieldsFilterArgs  extends KalturaIngestProgramResultsByRefineFilterArgs {
    combinedFieldsValue? : string;
}


export class KalturaIngestProgramResultsByCombinedFieldsFilter extends KalturaIngestProgramResultsByRefineFilter {

    combinedFieldsValue : string;

    constructor(data? : KalturaIngestProgramResultsByCombinedFieldsFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaIngestProgramResultsByCombinedFieldsFilter' },
				combinedFieldsValue : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaIngestProgramResultsByCombinedFieldsFilter',KalturaIngestProgramResultsByCombinedFieldsFilter);
