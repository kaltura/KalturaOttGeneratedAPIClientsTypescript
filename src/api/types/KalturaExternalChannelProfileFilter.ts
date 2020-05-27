
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaExternalChannelProfileFilterArgs  extends KalturaFilterArgs {
    
}


export class KalturaExternalChannelProfileFilter extends KalturaFilter {

    

    constructor(data? : KalturaExternalChannelProfileFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaExternalChannelProfileFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaExternalChannelProfileFilter',KalturaExternalChannelProfileFilter);
