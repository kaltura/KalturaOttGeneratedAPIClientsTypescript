
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaAsset, KalturaAssetArgs } from './KalturaAsset';

export interface KalturaMediaAssetArgs  extends KalturaAssetArgs {
    externalIds? : string;
	catchUpBuffer? : number;
	trickPlayBuffer? : number;
	typeDescription? : string;
	entryId? : string;
	deviceRule? : string;
	geoBlockRule? : string;
	watchPermissionRule? : string;
}


export class KalturaMediaAsset extends KalturaAsset {

    externalIds : string;
	catchUpBuffer : number;
	trickPlayBuffer : number;
	readonly enableRecordingPlaybackNonEntitledChannel : boolean;
	typeDescription : string;
	entryId : string;
	deviceRule : string;
	geoBlockRule : string;
	watchPermissionRule : string;

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
				typeDescription : { type : 's' },
				entryId : { type : 's' },
				deviceRule : { type : 's' },
				geoBlockRule : { type : 's' },
				watchPermissionRule : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaMediaAsset',KalturaMediaAsset);
