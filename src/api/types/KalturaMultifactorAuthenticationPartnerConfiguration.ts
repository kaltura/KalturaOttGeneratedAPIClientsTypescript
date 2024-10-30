
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaTokenDeliveryMethod } from './KalturaTokenDeliveryMethod';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaMultifactorAuthenticationPartnerConfigurationArgs  extends KalturaObjectBaseArgs {
    isEnabled? : boolean;
	roles? : string;
	tokenExpirationInSeconds? : number;
	tokenDeliveryMethod? : KalturaTokenDeliveryMethod;
}


export class KalturaMultifactorAuthenticationPartnerConfiguration extends KalturaObjectBase {

    isEnabled : boolean;
	roles : string;
	tokenExpirationInSeconds : number;
	tokenDeliveryMethod : KalturaTokenDeliveryMethod;

    constructor(data? : KalturaMultifactorAuthenticationPartnerConfigurationArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaMultifactorAuthenticationPartnerConfiguration' },
				isEnabled : { type : 'b' },
				roles : { type : 's' },
				tokenExpirationInSeconds : { type : 'n' },
				tokenDeliveryMethod : { type : 'es', subTypeConstructor : KalturaTokenDeliveryMethod, subType : 'KalturaTokenDeliveryMethod' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaMultifactorAuthenticationPartnerConfiguration',KalturaMultifactorAuthenticationPartnerConfiguration);
