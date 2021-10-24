
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaPartnerConfiguration, KalturaPartnerConfigurationArgs } from './KalturaPartnerConfiguration';

export interface KalturaDefaultParentalSettingsPartnerConfigArgs  extends KalturaPartnerConfigurationArgs {
    defaultMoviesParentalRuleId? : number;
	defaultTvSeriesParentalRuleId? : number;
	defaultParentalPin? : number;
	defaultPurchasePin? : number;
	defaultPurchaseSettings? : number;
}


export class KalturaDefaultParentalSettingsPartnerConfig extends KalturaPartnerConfiguration {

    defaultMoviesParentalRuleId : number;
	defaultTvSeriesParentalRuleId : number;
	defaultParentalPin : number;
	defaultPurchasePin : number;
	defaultPurchaseSettings : number;

    constructor(data? : KalturaDefaultParentalSettingsPartnerConfigArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDefaultParentalSettingsPartnerConfig' },
				defaultMoviesParentalRuleId : { type : 'n' },
				defaultTvSeriesParentalRuleId : { type : 'n' },
				defaultParentalPin : { type : 'n' },
				defaultPurchasePin : { type : 'n' },
				defaultPurchaseSettings : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaDefaultParentalSettingsPartnerConfig',KalturaDefaultParentalSettingsPartnerConfig);
