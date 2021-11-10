
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaScheduledRecordingAssetType } from './KalturaScheduledRecordingAssetType';
import { KalturaAssetFilter, KalturaAssetFilterArgs } from './KalturaAssetFilter';

export interface KalturaScheduledRecordingProgramFilterArgs  extends KalturaAssetFilterArgs {
    recordingTypeEqual? : KalturaScheduledRecordingAssetType;
	channelsIn? : string;
	startDateGreaterThanOrNull? : number;
	endDateLessThanOrNull? : number;
	seriesIdsIn? : string;
}


export class KalturaScheduledRecordingProgramFilter extends KalturaAssetFilter {

    recordingTypeEqual : KalturaScheduledRecordingAssetType;
	channelsIn : string;
	startDateGreaterThanOrNull : number;
	endDateLessThanOrNull : number;
	seriesIdsIn : string;

    constructor(data? : KalturaScheduledRecordingProgramFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaScheduledRecordingProgramFilter' },
				recordingTypeEqual : { type : 'es', subTypeConstructor : KalturaScheduledRecordingAssetType, subType : 'KalturaScheduledRecordingAssetType' },
				channelsIn : { type : 's' },
				startDateGreaterThanOrNull : { type : 'n' },
				endDateLessThanOrNull : { type : 'n' },
				seriesIdsIn : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaScheduledRecordingProgramFilter',KalturaScheduledRecordingProgramFilter);
