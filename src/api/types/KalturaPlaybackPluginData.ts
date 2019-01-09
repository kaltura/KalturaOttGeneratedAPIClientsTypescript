
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaPlaybackPluginDataArgs  extends KalturaObjectBaseArgs {
    
}


export class KalturaPlaybackPluginData extends KalturaObjectBase {

    

    constructor(data? : KalturaPlaybackPluginDataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaPlaybackPluginData' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaPlaybackPluginData',KalturaPlaybackPluginData);
