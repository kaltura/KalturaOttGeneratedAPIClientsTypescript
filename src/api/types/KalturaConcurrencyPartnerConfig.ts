
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaEvictionPolicyType } from './KalturaEvictionPolicyType';
import { KalturaPartnerConfiguration, KalturaPartnerConfigurationArgs } from './KalturaPartnerConfiguration';

export interface KalturaConcurrencyPartnerConfigArgs  extends KalturaPartnerConfigurationArgs {
    deviceFamilyIds? : string;
	evictionPolicy? : KalturaEvictionPolicyType;
	concurrencyThresholdInSeconds? : number;
	revokeOnDeviceDelete? : boolean;
}


export class KalturaConcurrencyPartnerConfig extends KalturaPartnerConfiguration {

    deviceFamilyIds : string;
	evictionPolicy : KalturaEvictionPolicyType;
	concurrencyThresholdInSeconds : number;
	revokeOnDeviceDelete : boolean;

    constructor(data? : KalturaConcurrencyPartnerConfigArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaConcurrencyPartnerConfig' },
				deviceFamilyIds : { type : 's' },
				evictionPolicy : { type : 'es', subTypeConstructor : KalturaEvictionPolicyType, subType : 'KalturaEvictionPolicyType' },
				concurrencyThresholdInSeconds : { type : 'n' },
				revokeOnDeviceDelete : { type : 'b' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaConcurrencyPartnerConfig',KalturaConcurrencyPartnerConfig);
