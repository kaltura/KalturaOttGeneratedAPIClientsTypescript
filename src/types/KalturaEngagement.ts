
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaEngagementType } from './KalturaEngagementType';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaEngagementArgs  extends KalturaObjectBaseArgs {
    type? : KalturaEngagementType;
	adapterId? : number;
	adapterDynamicData? : string;
	intervalSeconds? : number;
	userList? : string;
	sendTimeInSeconds? : number;
	couponGroupId? : number;
}

/** 
* Engagement
**/
export class KalturaEngagement extends KalturaObjectBase {

    readonly id : number;
	readonly totalNumberOfRecipients : number;
	type : KalturaEngagementType;
	adapterId : number;
	adapterDynamicData : string;
	intervalSeconds : number;
	userList : string;
	sendTimeInSeconds : number;
	couponGroupId : number;

    constructor(data? : KalturaEngagementArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaEngagement' },
				id : { type : 'n', readOnly : true },
				totalNumberOfRecipients : { type : 'n', readOnly : true },
				type : { type : 'es', subTypeConstructor : KalturaEngagementType, subType : 'KalturaEngagementType' },
				adapterId : { type : 'n' },
				adapterDynamicData : { type : 's' },
				intervalSeconds : { type : 'n' },
				userList : { type : 's' },
				sendTimeInSeconds : { type : 'n' },
				couponGroupId : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaEngagement',KalturaEngagement);
