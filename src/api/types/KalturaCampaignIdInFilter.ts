
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaCampaignFilter, KalturaCampaignFilterArgs } from './KalturaCampaignFilter';

export interface KalturaCampaignIdInFilterArgs  extends KalturaCampaignFilterArgs {
    idIn? : string;
}


export class KalturaCampaignIdInFilter extends KalturaCampaignFilter {

    idIn : string;

    constructor(data? : KalturaCampaignIdInFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaCampaignIdInFilter' },
				idIn : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaCampaignIdInFilter',KalturaCampaignIdInFilter);
