

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaChannelEnrichment extends KalturaObjectBase {
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

    static athome = new KalturaChannelEnrichment('AtHome');
	static catchup = new KalturaChannelEnrichment('Catchup');
	static clientlocation = new KalturaChannelEnrichment('ClientLocation');
	static deviceid = new KalturaChannelEnrichment('DeviceId');
	static devicetype = new KalturaChannelEnrichment('DeviceType');
	static dttregion = new KalturaChannelEnrichment('DTTRegion');
	static householdid = new KalturaChannelEnrichment('HouseholdId');
	static language = new KalturaChannelEnrichment('Language');
	static npvrsupport = new KalturaChannelEnrichment('NPVRSupport');
	static parental = new KalturaChannelEnrichment('Parental');
	static userid = new KalturaChannelEnrichment('UserId');
	static utcoffset = new KalturaChannelEnrichment('UTCOffset');
}
KalturaTypesFactory.registerType('KalturaChannelEnrichment',KalturaChannelEnrichment);