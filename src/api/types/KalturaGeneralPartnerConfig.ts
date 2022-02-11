
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaDeleteMediaPolicy } from './KalturaDeleteMediaPolicy';
import { KalturaDowngradePolicy } from './KalturaDowngradePolicy';
import { KalturaRollingDeviceRemovalData } from './KalturaRollingDeviceRemovalData';
import { KalturaSuspensionProfileInheritanceType } from './KalturaSuspensionProfileInheritanceType';
import { KalturaPartnerConfiguration, KalturaPartnerConfigurationArgs } from './KalturaPartnerConfiguration';

export interface KalturaGeneralPartnerConfigArgs  extends KalturaPartnerConfigurationArgs {
    partnerName? : string;
	mainLanguage? : number;
	secondaryLanguages? : string;
	deleteMediaPolicy? : KalturaDeleteMediaPolicy;
	mainCurrency? : number;
	secondaryCurrencies? : string;
	downgradePolicy? : KalturaDowngradePolicy;
	downgradePriorityFamilyIds? : string;
	mailSettings? : string;
	dateFormat? : string;
	householdLimitationModule? : number;
	enableRegionFiltering? : boolean;
	defaultRegion? : number;
	rollingDeviceData? : KalturaRollingDeviceRemovalData;
	linearWatchHistoryThreshold? : number;
	finishedPercentThreshold? : number;
	suspensionProfileInheritanceType? : KalturaSuspensionProfileInheritanceType;
	allowDeviceMobility? : boolean;
	enableMultiLcns? : boolean;
}


export class KalturaGeneralPartnerConfig extends KalturaPartnerConfiguration {

    partnerName : string;
	mainLanguage : number;
	secondaryLanguages : string;
	deleteMediaPolicy : KalturaDeleteMediaPolicy;
	mainCurrency : number;
	secondaryCurrencies : string;
	downgradePolicy : KalturaDowngradePolicy;
	downgradePriorityFamilyIds : string;
	mailSettings : string;
	dateFormat : string;
	householdLimitationModule : number;
	enableRegionFiltering : boolean;
	defaultRegion : number;
	rollingDeviceData : KalturaRollingDeviceRemovalData;
	linearWatchHistoryThreshold : number;
	finishedPercentThreshold : number;
	suspensionProfileInheritanceType : KalturaSuspensionProfileInheritanceType;
	allowDeviceMobility : boolean;
	enableMultiLcns : boolean;

    constructor(data? : KalturaGeneralPartnerConfigArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaGeneralPartnerConfig' },
				partnerName : { type : 's' },
				mainLanguage : { type : 'n' },
				secondaryLanguages : { type : 's' },
				deleteMediaPolicy : { type : 'es', subTypeConstructor : KalturaDeleteMediaPolicy, subType : 'KalturaDeleteMediaPolicy' },
				mainCurrency : { type : 'n' },
				secondaryCurrencies : { type : 's' },
				downgradePolicy : { type : 'es', subTypeConstructor : KalturaDowngradePolicy, subType : 'KalturaDowngradePolicy' },
				downgradePriorityFamilyIds : { type : 's' },
				mailSettings : { type : 's' },
				dateFormat : { type : 's' },
				householdLimitationModule : { type : 'n' },
				enableRegionFiltering : { type : 'b' },
				defaultRegion : { type : 'n' },
				rollingDeviceData : { type : 'o', subTypeConstructor : KalturaRollingDeviceRemovalData, subType : 'KalturaRollingDeviceRemovalData' },
				linearWatchHistoryThreshold : { type : 'n' },
				finishedPercentThreshold : { type : 'n' },
				suspensionProfileInheritanceType : { type : 'es', subTypeConstructor : KalturaSuspensionProfileInheritanceType, subType : 'KalturaSuspensionProfileInheritanceType' },
				allowDeviceMobility : { type : 'b' },
				enableMultiLcns : { type : 'b' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaGeneralPartnerConfig',KalturaGeneralPartnerConfig);
