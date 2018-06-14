
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaTopicFilterArgs  extends KalturaFilterArgs {
    
}


export class KalturaTopicFilter extends KalturaFilter {

    

    constructor(data? : KalturaTopicFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaTopicFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaTopicFilter',KalturaTopicFilter);
