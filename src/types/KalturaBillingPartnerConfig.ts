
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaPartnerConfigurationType } from './KalturaPartnerConfigurationType';
import { KalturaPartnerConfiguration, KalturaPartnerConfigurationArgs } from './KalturaPartnerConfiguration';

export interface KalturaBillingPartnerConfigArgs  extends KalturaPartnerConfigurationArgs {
    value? : string;
	type? : KalturaPartnerConfigurationType;
}

/** 
* Partner billing configuration
**/
export class KalturaBillingPartnerConfig extends KalturaPartnerConfiguration {

    value : string;
	type : KalturaPartnerConfigurationType;

    constructor(data? : KalturaBillingPartnerConfigArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBillingPartnerConfig' },
				value : { type : 's' },
				type : { type : 'es', subTypeConstructor : KalturaPartnerConfigurationType, subType : 'KalturaPartnerConfigurationType' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaBillingPartnerConfig',KalturaBillingPartnerConfig);
