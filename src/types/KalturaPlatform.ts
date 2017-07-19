

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaPlatform extends KalturaObjectBase {
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

    static android = new KalturaPlatform('Android');
	static blackberry = new KalturaPlatform('Blackberry');
	static ctv = new KalturaPlatform('CTV');
	static ios = new KalturaPlatform('iOS');
	static other = new KalturaPlatform('Other');
	static stb = new KalturaPlatform('STB');
	static windowsphone = new KalturaPlatform('WindowsPhone');
}
KalturaTypesFactory.registerType('KalturaPlatform',KalturaPlatform);