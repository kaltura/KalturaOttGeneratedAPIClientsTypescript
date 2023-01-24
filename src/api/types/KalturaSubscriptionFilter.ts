
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaSubscriptionDependencyType } from './KalturaSubscriptionDependencyType';
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
	dependencyTypeEqual? : KalturaSubscriptionDependencyType;
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
	dependencyTypeEqual : KalturaSubscriptionDependencyType;

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
				dependencyTypeEqual : { type : 'es', subTypeConstructor : KalturaSubscriptionDependencyType, subType : 'KalturaSubscriptionDependencyType' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaSubscriptionFilter',KalturaSubscriptionFilter);
