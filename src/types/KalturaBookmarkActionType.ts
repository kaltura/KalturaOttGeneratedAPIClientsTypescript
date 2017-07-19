

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaBookmarkActionType extends KalturaObjectBase {
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

    static bitrateChange = new KalturaBookmarkActionType('BITRATE_CHANGE');
	static error = new KalturaBookmarkActionType('ERROR');
	static finish = new KalturaBookmarkActionType('FINISH');
	static firstPlay = new KalturaBookmarkActionType('FIRST_PLAY');
	static fullScreen = new KalturaBookmarkActionType('FULL_SCREEN');
	static fullScreenExit = new KalturaBookmarkActionType('FULL_SCREEN_EXIT');
	static hit = new KalturaBookmarkActionType('HIT');
	static load = new KalturaBookmarkActionType('LOAD');
	static none = new KalturaBookmarkActionType('NONE');
	static pause = new KalturaBookmarkActionType('PAUSE');
	static play = new KalturaBookmarkActionType('PLAY');
	static sendToFriend = new KalturaBookmarkActionType('SEND_TO_FRIEND');
	static stop = new KalturaBookmarkActionType('STOP');
	static swoosh = new KalturaBookmarkActionType('SWOOSH');
}
KalturaTypesFactory.registerType('KalturaBookmarkActionType',KalturaBookmarkActionType);