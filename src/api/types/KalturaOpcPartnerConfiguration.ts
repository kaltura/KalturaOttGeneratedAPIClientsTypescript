
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaResetPasswordPartnerConfig } from './KalturaResetPasswordPartnerConfig';
import { KalturaPartnerConfiguration, KalturaPartnerConfigurationArgs } from './KalturaPartnerConfiguration';

export interface KalturaOpcPartnerConfigurationArgs  extends KalturaPartnerConfigurationArgs {
    resetPassword? : KalturaResetPasswordPartnerConfig;
}


export class KalturaOpcPartnerConfiguration extends KalturaPartnerConfiguration {

    resetPassword : KalturaResetPasswordPartnerConfig;

    constructor(data? : KalturaOpcPartnerConfigurationArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaOpcPartnerConfiguration' },
				resetPassword : { type : 'o', subTypeConstructor : KalturaResetPasswordPartnerConfig, subType : 'KalturaResetPasswordPartnerConfig' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaOpcPartnerConfiguration',KalturaOpcPartnerConfiguration);
