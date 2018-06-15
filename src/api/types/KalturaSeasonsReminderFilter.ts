
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaReminderFilter, KalturaReminderFilterArgs } from './KalturaReminderFilter';

export interface KalturaSeasonsReminderFilterArgs  extends KalturaReminderFilterArgs {
    seriesIdEqual? : string;
	seasonNumberIn? : string;
	epgChannelIdEqual? : number;
}


export class KalturaSeasonsReminderFilter extends KalturaReminderFilter {

    seriesIdEqual : string;
	seasonNumberIn : string;
	epgChannelIdEqual : number;

    constructor(data? : KalturaSeasonsReminderFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaSeasonsReminderFilter' },
				seriesIdEqual : { type : 's' },
				seasonNumberIn : { type : 's' },
				epgChannelIdEqual : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaSeasonsReminderFilter',KalturaSeasonsReminderFilter);
