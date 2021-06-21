
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaSeriesRecordingOptionArgs  extends KalturaObjectBaseArgs {
    minSeasonNumber? : number;
	minEpisodeNumber? : number;
}


export class KalturaSeriesRecordingOption extends KalturaObjectBase {

    minSeasonNumber : number;
	minEpisodeNumber : number;

    constructor(data? : KalturaSeriesRecordingOptionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaSeriesRecordingOption' },
				minSeasonNumber : { type : 'n' },
				minEpisodeNumber : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaSeriesRecordingOption',KalturaSeriesRecordingOption);
