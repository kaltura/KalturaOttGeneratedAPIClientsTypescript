
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaAssetType } from './KalturaAssetType';
import { KalturaPlaybackContextOptions } from './KalturaPlaybackContextOptions';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaGetPlaybackContextParamsArgs  extends KalturaObjectBaseArgs {
    assetId? : string;
	assetType? : KalturaAssetType;
	contextDataParams? : KalturaPlaybackContextOptions;
	sourceType? : string;
}


export class KalturaGetPlaybackContextParams extends KalturaObjectBase {

    assetId : string;
	assetType : KalturaAssetType;
	contextDataParams : KalturaPlaybackContextOptions;
	sourceType : string;

    constructor(data? : KalturaGetPlaybackContextParamsArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaGetPlaybackContextParams' },
				assetId : { type : 's' },
				assetType : { type : 'es', subTypeConstructor : KalturaAssetType, subType : 'KalturaAssetType' },
				contextDataParams : { type : 'o', subTypeConstructor : KalturaPlaybackContextOptions, subType : 'KalturaPlaybackContextOptions' },
				sourceType : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaGetPlaybackContextParams',KalturaGetPlaybackContextParams);
