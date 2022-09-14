
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaCampaignSearchFilter, KalturaCampaignSearchFilterArgs } from './KalturaCampaignSearchFilter';

export interface KalturaCampaignSegmentFilterArgs  extends KalturaCampaignSearchFilterArgs {
    segmentIdEqual? : number;
}


export class KalturaCampaignSegmentFilter extends KalturaCampaignSearchFilter {

    segmentIdEqual : number;

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
				segmentIdEqual : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaCampaignSegmentFilter',KalturaCampaignSegmentFilter);
