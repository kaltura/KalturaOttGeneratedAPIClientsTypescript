
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaEventObject, KalturaEventObjectArgs } from './KalturaEventObject';

export interface KalturaTriggerCampaignEventArgs  extends KalturaEventObjectArgs {
    
}


export class KalturaTriggerCampaignEvent extends KalturaEventObject {

    readonly userId : number;
	readonly campaignId : number;
	readonly udid : string;
	readonly householdId : number;

    constructor(data? : KalturaTriggerCampaignEventArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaTriggerCampaignEvent' },
				userId : { type : 'n', readOnly : true },
				campaignId : { type : 'n', readOnly : true },
				udid : { type : 's', readOnly : true },
				householdId : { type : 'n', readOnly : true }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaTriggerCampaignEvent',KalturaTriggerCampaignEvent);
