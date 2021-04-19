
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaPartnerConfiguration, KalturaPartnerConfigurationArgs } from './KalturaPartnerConfiguration';

export interface KalturaBasePartnerConfigurationArgs  extends KalturaPartnerConfigurationArgs {
    useStartDate? : boolean;
	getOnlyActiveAssets? : boolean;
	shouldSupportSingleLogin? : boolean;
	ksExpirationSeconds? : number;
	anonymousKSExpirationSeconds? : number;
	refreshTokenExpirationSeconds? : number;
	isRefreshTokenExtendable? : boolean;
	refreshExpirationForPinLoginSeconds? : number;
	isSwitchingUsersAllowed? : boolean;
	tokenKeyFormat? : string;
	appTokenKeyFormat? : string;
	appTokenSessionMaxDurationSeconds? : number;
	appTokenMaxExpirySeconds? : number;
	userSessionsKeyFormat? : string;
	revokedKsMaxTtlSeconds? : number;
	mediaPrepAccountId? : number;
	fairplayCertificate? : string;
}


export class KalturaBasePartnerConfiguration extends KalturaPartnerConfiguration {

    useStartDate : boolean;
	getOnlyActiveAssets : boolean;
	shouldSupportSingleLogin : boolean;
	ksExpirationSeconds : number;
	anonymousKSExpirationSeconds : number;
	refreshTokenExpirationSeconds : number;
	isRefreshTokenExtendable : boolean;
	refreshExpirationForPinLoginSeconds : number;
	isSwitchingUsersAllowed : boolean;
	tokenKeyFormat : string;
	appTokenKeyFormat : string;
	appTokenSessionMaxDurationSeconds : number;
	appTokenMaxExpirySeconds : number;
	userSessionsKeyFormat : string;
	revokedKsMaxTtlSeconds : number;
	mediaPrepAccountId : number;
	fairplayCertificate : string;

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
				useStartDate : { type : 'b' },
				getOnlyActiveAssets : { type : 'b' },
				shouldSupportSingleLogin : { type : 'b' },
				ksExpirationSeconds : { type : 'n' },
				anonymousKSExpirationSeconds : { type : 'n' },
				refreshTokenExpirationSeconds : { type : 'n' },
				isRefreshTokenExtendable : { type : 'b' },
				refreshExpirationForPinLoginSeconds : { type : 'n' },
				isSwitchingUsersAllowed : { type : 'b' },
				tokenKeyFormat : { type : 's' },
				appTokenKeyFormat : { type : 's' },
				appTokenSessionMaxDurationSeconds : { type : 'n' },
				appTokenMaxExpirySeconds : { type : 'n' },
				userSessionsKeyFormat : { type : 's' },
				revokedKsMaxTtlSeconds : { type : 'n' },
				mediaPrepAccountId : { type : 'n' },
				fairplayCertificate : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaBasePartnerConfiguration',KalturaBasePartnerConfiguration);
