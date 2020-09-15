
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaApiService } from './KalturaApiService';
import { KalturaApiAction } from './KalturaApiAction';
import { KalturaCondition } from './KalturaCondition';
import { KalturaCampaign, KalturaCampaignArgs } from './KalturaCampaign';

export interface KalturaTriggerCampaignArgs  extends KalturaCampaignArgs {
    service? : KalturaApiService;
	action? : KalturaApiAction;
	triggerConditions? : KalturaCondition[];
}


export class KalturaTriggerCampaign extends KalturaCampaign {

    service : KalturaApiService;
	action : KalturaApiAction;
	triggerConditions : KalturaCondition[];

    constructor(data? : KalturaTriggerCampaignArgs)
    {
        super(data);
        if (typeof this.triggerConditions === 'undefined') this.triggerConditions = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaTriggerCampaign' },
				service : { type : 'es', subTypeConstructor : KalturaApiService, subType : 'KalturaApiService' },
				action : { type : 'es', subTypeConstructor : KalturaApiAction, subType : 'KalturaApiAction' },
				triggerConditions : { type : 'a', subTypeConstructor : KalturaCondition, subType : 'KalturaCondition' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaTriggerCampaign',KalturaTriggerCampaign);
