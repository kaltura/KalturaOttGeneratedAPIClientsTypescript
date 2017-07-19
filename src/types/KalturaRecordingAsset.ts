
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaProgramAsset, KalturaProgramAssetArgs } from './KalturaProgramAsset';

export interface KalturaRecordingAssetArgs  extends KalturaProgramAssetArgs {
    recordingId? : string;
}

/** 
* Recording-asset info
**/
export class KalturaRecordingAsset extends KalturaProgramAsset {

    recordingId : string;

    constructor(data? : KalturaRecordingAssetArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaRecordingAsset' },
				recordingId : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaRecordingAsset',KalturaRecordingAsset);
