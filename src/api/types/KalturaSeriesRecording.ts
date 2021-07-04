
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaRecordingType } from './KalturaRecordingType';
import { KalturaIntegerValue } from './KalturaIntegerValue';
import { KalturaSeriesRecordingOption } from './KalturaSeriesRecordingOption';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaSeriesRecordingArgs  extends KalturaObjectBaseArgs {
    epgId? : number;
	channelId? : number;
	seriesId? : string;
	seasonNumber? : number;
	type? : KalturaRecordingType;
	seriesRecordingOption? : KalturaSeriesRecordingOption;
}


export class KalturaSeriesRecording extends KalturaObjectBase {

    readonly id : number;
	epgId : number;
	channelId : number;
	seriesId : string;
	seasonNumber : number;
	type : KalturaRecordingType;
	readonly createDate : number;
	readonly updateDate : number;
	readonly excludedSeasons : KalturaIntegerValue[];
	seriesRecordingOption : KalturaSeriesRecordingOption;

    constructor(data? : KalturaSeriesRecordingArgs)
    {
        super(data);
        if (typeof this.excludedSeasons === 'undefined') this.excludedSeasons = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaSeriesRecording' },
				id : { type : 'n', readOnly : true },
				epgId : { type : 'n' },
				channelId : { type : 'n' },
				seriesId : { type : 's' },
				seasonNumber : { type : 'n' },
				type : { type : 'es', subTypeConstructor : KalturaRecordingType, subType : 'KalturaRecordingType' },
				createDate : { type : 'n', readOnly : true },
				updateDate : { type : 'n', readOnly : true },
				excludedSeasons : { type : 'a', readOnly : true, subTypeConstructor : KalturaIntegerValue, subType : 'KalturaIntegerValue' },
				seriesRecordingOption : { type : 'o', subTypeConstructor : KalturaSeriesRecordingOption, subType : 'KalturaSeriesRecordingOption' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaSeriesRecording',KalturaSeriesRecording);
