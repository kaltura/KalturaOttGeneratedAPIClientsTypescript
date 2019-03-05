
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaStringValue } from './KalturaStringValue';
import { KalturaPlaybackContextType } from './KalturaPlaybackContextType';
import { KalturaUrlType } from './KalturaUrlType';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaPlaybackContextOptionsArgs  extends KalturaObjectBaseArgs {
    mediaProtocol? : string;
	streamerType? : string;
	assetFileIds? : string;
	adapterData? : { [key : string] : KalturaStringValue};
	context? : KalturaPlaybackContextType;
	urlType? : KalturaUrlType;
}


export class KalturaPlaybackContextOptions extends KalturaObjectBase {

    mediaProtocol : string;
	streamerType : string;
	assetFileIds : string;
	adapterData : { [key : string] : KalturaStringValue};
	context : KalturaPlaybackContextType;
	urlType : KalturaUrlType;

    constructor(data? : KalturaPlaybackContextOptionsArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaPlaybackContextOptions' },
				mediaProtocol : { type : 's' },
				streamerType : { type : 's' },
				assetFileIds : { type : 's' },
				adapterData : { type : 'm', subTypeConstructor : KalturaStringValue, subType : 'KalturaStringValue' },
				context : { type : 'es', subTypeConstructor : KalturaPlaybackContextType, subType : 'KalturaPlaybackContextType' },
				urlType : { type : 'es', subTypeConstructor : KalturaUrlType, subType : 'KalturaUrlType' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaPlaybackContextOptions',KalturaPlaybackContextOptions);
