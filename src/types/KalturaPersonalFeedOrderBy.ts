

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaPersonalFeedOrderBy extends KalturaObjectBase {
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

    static nameAsc = new KalturaPersonalFeedOrderBy('NAME_ASC');
	static nameDesc = new KalturaPersonalFeedOrderBy('NAME_DESC');
	static ratingsDesc = new KalturaPersonalFeedOrderBy('RATINGS_DESC');
	static relevancyDesc = new KalturaPersonalFeedOrderBy('RELEVANCY_DESC');
	static startDateAsc = new KalturaPersonalFeedOrderBy('START_DATE_ASC');
	static startDateDesc = new KalturaPersonalFeedOrderBy('START_DATE_DESC');
	static viewsDesc = new KalturaPersonalFeedOrderBy('VIEWS_DESC');
	static votesDesc = new KalturaPersonalFeedOrderBy('VOTES_DESC');
}
KalturaTypesFactory.registerType('KalturaPersonalFeedOrderBy',KalturaPersonalFeedOrderBy);