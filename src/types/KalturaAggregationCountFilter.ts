
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaRelatedObjectFilter, KalturaRelatedObjectFilterArgs } from './KalturaRelatedObjectFilter';

export interface KalturaAggregationCountFilterArgs  extends KalturaRelatedObjectFilterArgs {
    
}


export class KalturaAggregationCountFilter extends KalturaRelatedObjectFilter {

    

    constructor(data? : KalturaAggregationCountFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaAggregationCountFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaAggregationCountFilter',KalturaAggregationCountFilter);
