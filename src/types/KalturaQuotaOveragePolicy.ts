

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaQuotaOveragePolicy extends KalturaObjectBase {
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

    static fifoautodelete = new KalturaQuotaOveragePolicy('FIFOAutoDelete');
	static stopatquota = new KalturaQuotaOveragePolicy('StopAtQuota');
}
KalturaTypesFactory.registerType('KalturaQuotaOveragePolicy',KalturaQuotaOveragePolicy);