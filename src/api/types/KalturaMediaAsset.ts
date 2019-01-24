
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaAsset, KalturaAssetArgs } from './KalturaAsset';

export interface KalturaMediaAssetArgs  extends KalturaAssetArgs {
    externalIds? : string;
	catchUpBuffer? : number;
	trickPlayBuffer? : number;
	entryId? : string;
}


export class KalturaMediaAsset extends KalturaAsset {

    externalIds : string;
	catchUpBuffer : number;
	trickPlayBuffer : number;
	readonly enableRecordingPlaybackNonEntitledChannel : boolean;
	entryId : string;

    constructor(data? : KalturaMediaAssetArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaMediaAsset' },
				externalIds : { type : 's' },
				catchUpBuffer : { type : 'n' },
				trickPlayBuffer : { type : 'n' },
				enableRecordingPlaybackNonEntitledChannel : { type : 'b', readOnly : true },
				entryId : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaMediaAsset',KalturaMediaAsset);
