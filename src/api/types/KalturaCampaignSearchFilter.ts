
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectState } from './KalturaObjectState';
import { KalturaCampaignFilter, KalturaCampaignFilterArgs } from './KalturaCampaignFilter';

export interface KalturaCampaignSearchFilterArgs  extends KalturaCampaignFilterArgs {
    startDateGreaterThanOrEqual? : number;
	endDateLessThanOrEqual? : number;
	stateEqual? : KalturaObjectState;
	hasPromotion? : boolean;
	nameEqual? : string;
	nameContains? : string;
	stateIn? : string;
}


export class KalturaCampaignSearchFilter extends KalturaCampaignFilter {

    startDateGreaterThanOrEqual : number;
	endDateLessThanOrEqual : number;
	stateEqual : KalturaObjectState;
	hasPromotion : boolean;
	nameEqual : string;
	nameContains : string;
	stateIn : string;

    constructor(data? : KalturaCampaignSearchFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaCampaignSearchFilter' },
				startDateGreaterThanOrEqual : { type : 'n' },
				endDateLessThanOrEqual : { type : 'n' },
				stateEqual : { type : 'es', subTypeConstructor : KalturaObjectState, subType : 'KalturaObjectState' },
				hasPromotion : { type : 'b' },
				nameEqual : { type : 's' },
				nameContains : { type : 's' },
				stateIn : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaCampaignSearchFilter',KalturaCampaignSearchFilter);
