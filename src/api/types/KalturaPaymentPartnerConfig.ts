
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaUnifiedBillingCycle } from './KalturaUnifiedBillingCycle';
import { KalturaPartnerConfiguration, KalturaPartnerConfigurationArgs } from './KalturaPartnerConfiguration';

export interface KalturaPaymentPartnerConfigArgs  extends KalturaPartnerConfigurationArgs {
    unifiedBillingCycles? : KalturaUnifiedBillingCycle[];
}


export class KalturaPaymentPartnerConfig extends KalturaPartnerConfiguration {

    unifiedBillingCycles : KalturaUnifiedBillingCycle[];

    constructor(data? : KalturaPaymentPartnerConfigArgs)
    {
        super(data);
        if (typeof this.unifiedBillingCycles === 'undefined') this.unifiedBillingCycles = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaPaymentPartnerConfig' },
				unifiedBillingCycles : { type : 'a', subTypeConstructor : KalturaUnifiedBillingCycle, subType : 'KalturaUnifiedBillingCycle' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaPaymentPartnerConfig',KalturaPaymentPartnerConfig);
