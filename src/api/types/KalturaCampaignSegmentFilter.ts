
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaCampaignSearchFilter, KalturaCampaignSearchFilterArgs } from './KalturaCampaignSearchFilter';

export interface KalturaCampaignSegmentFilterArgs  extends KalturaCampaignSearchFilterArgs {
    segmentIdIn? : string;
}


export class KalturaCampaignSegmentFilter extends KalturaCampaignSearchFilter {

    segmentIdIn : string;

    constructor(data? : KalturaCampaignSegmentFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaCampaignSegmentFilter' },
				segmentIdIn : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaCampaignSegmentFilter',KalturaCampaignSegmentFilter);
