
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaBookmarkEventThreshold } from './KalturaBookmarkEventThreshold';
import { KalturaPartnerConfiguration, KalturaPartnerConfigurationArgs } from './KalturaPartnerConfiguration';

export interface KalturaCommercePartnerConfigArgs  extends KalturaPartnerConfigurationArgs {
    bookmarkEventThresholds? : KalturaBookmarkEventThreshold[];
	keepSubscriptionAddOns? : boolean;
}


export class KalturaCommercePartnerConfig extends KalturaPartnerConfiguration {

    bookmarkEventThresholds : KalturaBookmarkEventThreshold[];
	keepSubscriptionAddOns : boolean;

    constructor(data? : KalturaCommercePartnerConfigArgs)
    {
        super(data);
        if (typeof this.bookmarkEventThresholds === 'undefined') this.bookmarkEventThresholds = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaCommercePartnerConfig' },
				bookmarkEventThresholds : { type : 'a', subTypeConstructor : KalturaBookmarkEventThreshold, subType : 'KalturaBookmarkEventThreshold' },
				keepSubscriptionAddOns : { type : 'b' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaCommercePartnerConfig',KalturaCommercePartnerConfig);
