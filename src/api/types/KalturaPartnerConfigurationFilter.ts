
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaPartnerConfigurationType } from './KalturaPartnerConfigurationType';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaPartnerConfigurationFilterArgs  extends KalturaFilterArgs {
    partnerConfigurationTypeEqual? : KalturaPartnerConfigurationType;
}


export class KalturaPartnerConfigurationFilter extends KalturaFilter {

    partnerConfigurationTypeEqual : KalturaPartnerConfigurationType;

    constructor(data? : KalturaPartnerConfigurationFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaPartnerConfigurationFilter' },
				partnerConfigurationTypeEqual : { type : 'es', subTypeConstructor : KalturaPartnerConfigurationType, subType : 'KalturaPartnerConfigurationType' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaPartnerConfigurationFilter',KalturaPartnerConfigurationFilter);
