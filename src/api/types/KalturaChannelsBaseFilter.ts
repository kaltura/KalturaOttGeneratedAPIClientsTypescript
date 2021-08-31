
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaChannelsBaseFilterArgs  extends KalturaFilterArgs {
    
}


export class KalturaChannelsBaseFilter extends KalturaFilter {

    

    constructor(data? : KalturaChannelsBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaChannelsBaseFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaChannelsBaseFilter',KalturaChannelsBaseFilter);
