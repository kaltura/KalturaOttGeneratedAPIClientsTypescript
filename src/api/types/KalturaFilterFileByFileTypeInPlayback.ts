
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaFilterFileByFileType, KalturaFilterFileByFileTypeArgs } from './KalturaFilterFileByFileType';

export interface KalturaFilterFileByFileTypeInPlaybackArgs  extends KalturaFilterFileByFileTypeArgs {
    
}


export class KalturaFilterFileByFileTypeInPlayback extends KalturaFilterFileByFileType {

    

    constructor(data? : KalturaFilterFileByFileTypeInPlaybackArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaFilterFileByFileTypeInPlayback' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaFilterFileByFileTypeInPlayback',KalturaFilterFileByFileTypeInPlayback);
