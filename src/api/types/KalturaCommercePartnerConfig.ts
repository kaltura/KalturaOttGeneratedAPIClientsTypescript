
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaBookmarkEventThreshold } from './KalturaBookmarkEventThreshold';
import { KalturaPartnerConfiguration, KalturaPartnerConfigurationArgs } from './KalturaPartnerConfiguration';

export interface KalturaCommercePartnerConfigArgs  extends KalturaPartnerConfigurationArgs {
    bookmarkEventThresholds? : KalturaBookmarkEventThreshold[];
}


export class KalturaCommercePartnerConfig extends KalturaPartnerConfiguration {

    bookmarkEventThresholds : KalturaBookmarkEventThreshold[];

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
				bookmarkEventThresholds : { type : 'a', subTypeConstructor : KalturaBookmarkEventThreshold, subType : 'KalturaBookmarkEventThreshold' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaCommercePartnerConfig',KalturaCommercePartnerConfig);
