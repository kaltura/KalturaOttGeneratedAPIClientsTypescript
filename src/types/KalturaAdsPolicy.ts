

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaAdsPolicy extends KalturaObjectBase {
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

    static keepAds = new KalturaAdsPolicy('KEEP_ADS');
	static noAds = new KalturaAdsPolicy('NO_ADS');
}
KalturaTypesFactory.registerType('KalturaAdsPolicy',KalturaAdsPolicy);