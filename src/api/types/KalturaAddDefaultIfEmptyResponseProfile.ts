
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaRelatedObjectFilter, KalturaRelatedObjectFilterArgs } from './KalturaRelatedObjectFilter';

export interface KalturaAddDefaultIfEmptyResponseProfileArgs  extends KalturaRelatedObjectFilterArgs {
    
}


export class KalturaAddDefaultIfEmptyResponseProfile extends KalturaRelatedObjectFilter {

    

    constructor(data? : KalturaAddDefaultIfEmptyResponseProfileArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaAddDefaultIfEmptyResponseProfile' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaAddDefaultIfEmptyResponseProfile',KalturaAddDefaultIfEmptyResponseProfile);
