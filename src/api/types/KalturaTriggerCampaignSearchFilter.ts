
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaCampaignSearchFilter, KalturaCampaignSearchFilterArgs } from './KalturaCampaignSearchFilter';

export interface KalturaTriggerCampaignSearchFilterArgs  extends KalturaCampaignSearchFilterArgs {
    
}


export class KalturaTriggerCampaignSearchFilter extends KalturaCampaignSearchFilter {

    

    constructor(data? : KalturaTriggerCampaignSearchFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaTriggerCampaignSearchFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaTriggerCampaignSearchFilter',KalturaTriggerCampaignSearchFilter);
