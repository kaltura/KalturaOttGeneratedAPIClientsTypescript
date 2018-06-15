
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaRelatedObjectFilterArgs  extends KalturaFilterArgs {
    
}


export class KalturaRelatedObjectFilter extends KalturaFilter {

    

    constructor(data? : KalturaRelatedObjectFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaRelatedObjectFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaRelatedObjectFilter',KalturaRelatedObjectFilter);
