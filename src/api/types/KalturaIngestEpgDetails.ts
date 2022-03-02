
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaEpgIngestErrorMessage } from './KalturaEpgIngestErrorMessage';
import { KalturaIngestEpgDetailsAggregation } from './KalturaIngestEpgDetailsAggregation';
import { KalturaIngestEpg, KalturaIngestEpgArgs } from './KalturaIngestEpg';

export interface KalturaIngestEpgDetailsArgs  extends KalturaIngestEpgArgs {
    errors? : KalturaEpgIngestErrorMessage[];
	aggregations? : KalturaIngestEpgDetailsAggregation;
}


export class KalturaIngestEpgDetails extends KalturaIngestEpg {

    errors : KalturaEpgIngestErrorMessage[];
	aggregations : KalturaIngestEpgDetailsAggregation;

    constructor(data? : KalturaIngestEpgDetailsArgs)
    {
        super(data);
        if (typeof this.errors === 'undefined') this.errors = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaIngestEpgDetails' },
				errors : { type : 'a', subTypeConstructor : KalturaEpgIngestErrorMessage, subType : 'KalturaEpgIngestErrorMessage' },
				aggregations : { type : 'o', subTypeConstructor : KalturaIngestEpgDetailsAggregation, subType : 'KalturaIngestEpgDetailsAggregation' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaIngestEpgDetails',KalturaIngestEpgDetails);
