
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaRecordingType } from './KalturaRecordingType';
import { KalturaProgramAsset, KalturaProgramAssetArgs } from './KalturaProgramAsset';

export interface KalturaRecordingAssetArgs  extends KalturaProgramAssetArgs {
    recordingId? : string;
	recordingType? : KalturaRecordingType;
	viewableUntilDate? : number;
	multiRecord? : boolean;
}


export class KalturaRecordingAsset extends KalturaProgramAsset {

    recordingId : string;
	recordingType : KalturaRecordingType;
	viewableUntilDate : number;
	multiRecord : boolean;

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
				recordingId : { type : 's' },
				recordingType : { type : 'es', subTypeConstructor : KalturaRecordingType, subType : 'KalturaRecordingType' },
				viewableUntilDate : { type : 'n' },
				multiRecord : { type : 'b' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaRecordingAsset',KalturaRecordingAsset);
