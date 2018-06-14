
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaFeed, KalturaFeedArgs } from './KalturaFeed';

export interface KalturaPersonalFeedArgs  extends KalturaFeedArgs {
    
}


export class KalturaPersonalFeed extends KalturaFeed {

    

    constructor(data? : KalturaPersonalFeedArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaPersonalFeed' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaPersonalFeed',KalturaPersonalFeed);
