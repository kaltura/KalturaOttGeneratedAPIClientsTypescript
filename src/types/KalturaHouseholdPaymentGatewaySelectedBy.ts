

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaHouseholdPaymentGatewaySelectedBy extends KalturaObjectBase {
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

    static account = new KalturaHouseholdPaymentGatewaySelectedBy('account');
	static household = new KalturaHouseholdPaymentGatewaySelectedBy('household');
	static none = new KalturaHouseholdPaymentGatewaySelectedBy('none');
}
KalturaTypesFactory.registerType('KalturaHouseholdPaymentGatewaySelectedBy',KalturaHouseholdPaymentGatewaySelectedBy);