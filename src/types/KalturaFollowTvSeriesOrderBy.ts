

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaFollowTvSeriesOrderBy extends KalturaObjectBase {
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

    static startDateAsc = new KalturaFollowTvSeriesOrderBy('START_DATE_ASC');
	static startDateDesc = new KalturaFollowTvSeriesOrderBy('START_DATE_DESC');
}
KalturaTypesFactory.registerType('KalturaFollowTvSeriesOrderBy',KalturaFollowTvSeriesOrderBy);