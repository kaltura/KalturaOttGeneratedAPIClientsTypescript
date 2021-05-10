
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaPartnerConfiguration, KalturaPartnerConfigurationArgs } from './KalturaPartnerConfiguration';

export interface KalturaBasePartnerConfigurationArgs  extends KalturaPartnerConfigurationArgs {
    ksExpirationSeconds? : number;
	appTokenSessionMaxDurationSeconds? : number;
	anonymousKSExpirationSeconds? : number;
	refreshExpirationForPinLoginSeconds? : number;
	appTokenMaxExpirySeconds? : number;
	uploadTokenExpirySeconds? : number;
	apptokenUserValidationDisabled? : boolean;
}


export class KalturaBasePartnerConfiguration extends KalturaPartnerConfiguration {

    ksExpirationSeconds : number;
	appTokenSessionMaxDurationSeconds : number;
	anonymousKSExpirationSeconds : number;
	refreshExpirationForPinLoginSeconds : number;
	appTokenMaxExpirySeconds : number;
	uploadTokenExpirySeconds : number;
	apptokenUserValidationDisabled : boolean;

    constructor(data? : KalturaBasePartnerConfigurationArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBasePartnerConfiguration' },
				ksExpirationSeconds : { type : 'n' },
				appTokenSessionMaxDurationSeconds : { type : 'n' },
				anonymousKSExpirationSeconds : { type : 'n' },
				refreshExpirationForPinLoginSeconds : { type : 'n' },
				appTokenMaxExpirySeconds : { type : 'n' },
				uploadTokenExpirySeconds : { type : 'n' },
				apptokenUserValidationDisabled : { type : 'b' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaBasePartnerConfiguration',KalturaBasePartnerConfiguration);
