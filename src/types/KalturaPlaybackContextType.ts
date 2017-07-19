

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaPlaybackContextType extends KalturaObjectBase {
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

    static catchup = new KalturaPlaybackContextType('CATCHUP');
	static playback = new KalturaPlaybackContextType('PLAYBACK');
	static startOver = new KalturaPlaybackContextType('START_OVER');
	static trailer = new KalturaPlaybackContextType('TRAILER');
}
KalturaTypesFactory.registerType('KalturaPlaybackContextType',KalturaPlaybackContextType);