
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaSubscriptionFilterArgs  extends KalturaFilterArgs {
    subscriptionIdIn? : string;
	mediaFileIdEqual? : number;
	externalIdIn? : string;
	couponGroupIdEqual? : number;
	previewModuleIdEqual? : number;
	pricePlanIdEqual? : number;
	channelIdEqual? : number;
	kSql? : string;
	alsoInactive? : boolean;
	dependencyTypeIn? : string;
}


export class KalturaSubscriptionFilter extends KalturaFilter {

    subscriptionIdIn : string;
	mediaFileIdEqual : number;
	externalIdIn : string;
	couponGroupIdEqual : number;
	previewModuleIdEqual : number;
	pricePlanIdEqual : number;
	channelIdEqual : number;
	kSql : string;
	alsoInactive : boolean;
	dependencyTypeIn : string;

    constructor(data? : KalturaSubscriptionFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaSubscriptionFilter' },
				subscriptionIdIn : { type : 's' },
				mediaFileIdEqual : { type : 'n' },
				externalIdIn : { type : 's' },
				couponGroupIdEqual : { type : 'n' },
				previewModuleIdEqual : { type : 'n' },
				pricePlanIdEqual : { type : 'n' },
				channelIdEqual : { type : 'n' },
				kSql : { type : 's' },
				alsoInactive : { type : 'b' },
				dependencyTypeIn : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaSubscriptionFilter',KalturaSubscriptionFilter);
