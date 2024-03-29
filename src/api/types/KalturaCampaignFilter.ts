
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaCampaignFilterArgs  extends KalturaFilterArgs {
    
}


export class KalturaCampaignFilter extends KalturaFilter {

    

    constructor(data? : KalturaCampaignFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaCampaignFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaCampaignFilter',KalturaCampaignFilter);
