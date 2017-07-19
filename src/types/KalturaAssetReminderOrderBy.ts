

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaAssetReminderOrderBy extends KalturaObjectBase {
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

    static likesDesc = new KalturaAssetReminderOrderBy('LIKES_DESC');
	static nameAsc = new KalturaAssetReminderOrderBy('NAME_ASC');
	static nameDesc = new KalturaAssetReminderOrderBy('NAME_DESC');
	static ratingsDesc = new KalturaAssetReminderOrderBy('RATINGS_DESC');
	static relevancyDesc = new KalturaAssetReminderOrderBy('RELEVANCY_DESC');
	static startDateAsc = new KalturaAssetReminderOrderBy('START_DATE_ASC');
	static startDateDesc = new KalturaAssetReminderOrderBy('START_DATE_DESC');
	static viewsDesc = new KalturaAssetReminderOrderBy('VIEWS_DESC');
	static votesDesc = new KalturaAssetReminderOrderBy('VOTES_DESC');
}
KalturaTypesFactory.registerType('KalturaAssetReminderOrderBy',KalturaAssetReminderOrderBy);