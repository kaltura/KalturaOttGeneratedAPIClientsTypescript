

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaSeriesRecordingOrderBy extends KalturaObjectBase {
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

    static idAsc = new KalturaSeriesRecordingOrderBy('ID_ASC');
	static idDesc = new KalturaSeriesRecordingOrderBy('ID_DESC');
	static seriesIdAsc = new KalturaSeriesRecordingOrderBy('SERIES_ID_ASC');
	static seriesIdDesc = new KalturaSeriesRecordingOrderBy('SERIES_ID_DESC');
	static startDateAsc = new KalturaSeriesRecordingOrderBy('START_DATE_ASC');
	static startDateDesc = new KalturaSeriesRecordingOrderBy('START_DATE_DESC');
}
KalturaTypesFactory.registerType('KalturaSeriesRecordingOrderBy',KalturaSeriesRecordingOrderBy);