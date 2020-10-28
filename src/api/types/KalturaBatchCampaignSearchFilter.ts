
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaCampaignSearchFilter, KalturaCampaignSearchFilterArgs } from './KalturaCampaignSearchFilter';

export interface KalturaBatchCampaignSearchFilterArgs  extends KalturaCampaignSearchFilterArgs {
    
}


export class KalturaBatchCampaignSearchFilter extends KalturaCampaignSearchFilter {

    

    constructor(data? : KalturaBatchCampaignSearchFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBatchCampaignSearchFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaBatchCampaignSearchFilter',KalturaBatchCampaignSearchFilter);
