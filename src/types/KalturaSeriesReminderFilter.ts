
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaReminderFilter, KalturaReminderFilterArgs } from './KalturaReminderFilter';

export interface KalturaSeriesReminderFilterArgs  extends KalturaReminderFilterArgs {
    seriesIdIn? : string;
	epgChannelIdEqual? : number;
}


export class KalturaSeriesReminderFilter extends KalturaReminderFilter {

    seriesIdIn : string;
	epgChannelIdEqual : number;

    constructor(data? : KalturaSeriesReminderFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaSeriesReminderFilter' },
				seriesIdIn : { type : 's' },
				epgChannelIdEqual : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaSeriesReminderFilter',KalturaSeriesReminderFilter);
