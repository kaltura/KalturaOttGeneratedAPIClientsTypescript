

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaSocialActionType extends KalturaObjectBase {
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

    static like = new KalturaSocialActionType('LIKE');
	static rate = new KalturaSocialActionType('RATE');
	static share = new KalturaSocialActionType('SHARE');
	static watch = new KalturaSocialActionType('WATCH');
}
KalturaTypesFactory.registerType('KalturaSocialActionType',KalturaSocialActionType);