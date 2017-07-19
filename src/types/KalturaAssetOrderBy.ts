

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaAssetOrderBy extends KalturaObjectBase {
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

    static likesDesc = new KalturaAssetOrderBy('LIKES_DESC');
	static nameAsc = new KalturaAssetOrderBy('NAME_ASC');
	static nameDesc = new KalturaAssetOrderBy('NAME_DESC');
	static ratingsDesc = new KalturaAssetOrderBy('RATINGS_DESC');
	static relevancyDesc = new KalturaAssetOrderBy('RELEVANCY_DESC');
	static startDateAsc = new KalturaAssetOrderBy('START_DATE_ASC');
	static startDateDesc = new KalturaAssetOrderBy('START_DATE_DESC');
	static viewsDesc = new KalturaAssetOrderBy('VIEWS_DESC');
	static votesDesc = new KalturaAssetOrderBy('VOTES_DESC');
}
KalturaTypesFactory.registerType('KalturaAssetOrderBy',KalturaAssetOrderBy);