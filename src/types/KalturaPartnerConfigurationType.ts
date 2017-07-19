

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaPartnerConfigurationType extends KalturaObjectBase {
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

    static defaultpaymentgateway = new KalturaPartnerConfigurationType('DefaultPaymentGateway');
	static enablepaymentgatewayselection = new KalturaPartnerConfigurationType('EnablePaymentGatewaySelection');
	static ossadapter = new KalturaPartnerConfigurationType('OSSAdapter');
}
KalturaTypesFactory.registerType('KalturaPartnerConfigurationType',KalturaPartnerConfigurationType);