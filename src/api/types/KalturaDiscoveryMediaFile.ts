
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaMediaFile, KalturaMediaFileArgs } from './KalturaMediaFile';

export interface KalturaDiscoveryMediaFileArgs  extends KalturaMediaFileArgs {
    isPlaybackable? : boolean;
}


export class KalturaDiscoveryMediaFile extends KalturaMediaFile {

    isPlaybackable : boolean;

    constructor(data? : KalturaDiscoveryMediaFileArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDiscoveryMediaFile' },
				isPlaybackable : { type : 'b' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaDiscoveryMediaFile',KalturaDiscoveryMediaFile);
