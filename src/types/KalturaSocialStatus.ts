

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaSocialStatus extends KalturaObjectBase {
    private _value : string;
    constructor( value?:string | number){
        super();
        this._value = value + '';
    }

    equals(obj : this) : boolean
    {
        return obj && obj.toString() === this._value;
    }

    toString(){
        return this._value;
    }

    static assetAlreadyLiked = new KalturaSocialStatus('asset_already_liked');
	static assetAlreadyRated = new KalturaSocialStatus('asset_already_rated');
	static assetDoseNotExists = new KalturaSocialStatus('asset_dose_not_exists');
	static error = new KalturaSocialStatus('error');
	static invalidAccessToken = new KalturaSocialStatus('invalid_access_token');
	static invalidParameters = new KalturaSocialStatus('invalid_parameters');
	static invalidPlatformRequest = new KalturaSocialStatus('invalid_platform_request');
	static notAllowed = new KalturaSocialStatus('not_allowed');
	static noFacebookAction = new KalturaSocialStatus('no_facebook_action');
	static noUserSocialSettingsFound = new KalturaSocialStatus('no_user_social_settings_found');
	static ok = new KalturaSocialStatus('ok');
	static userDoesNotExist = new KalturaSocialStatus('user_does_not_exist');
}
KalturaTypesFactory.registerType('KalturaSocialStatus',KalturaSocialStatus);