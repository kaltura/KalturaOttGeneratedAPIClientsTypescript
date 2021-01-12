
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaTranslationToken } from './KalturaTranslationToken';
import { KalturaUnifiedChannel } from './KalturaUnifiedChannel';
import { KalturaStringValue } from './KalturaStringValue';
import { KalturaCrudObject, KalturaCrudObjectArgs } from './KalturaCrudObject';

export interface KalturaCategoryItemArgs  extends KalturaCrudObjectArgs {
    multilingualName? : KalturaTranslationToken[];
	childrenIds? : string;
	unifiedChannels? : KalturaUnifiedChannel[];
	dynamicData? : { [key : string] : KalturaStringValue};
	isActive? : boolean;
	startDateInSeconds? : number;
	endDateInSeconds? : number;
	type? : string;
}


export class KalturaCategoryItem extends KalturaCrudObject {

    readonly id : number;
	readonly name : string;
	multilingualName : KalturaTranslationToken[];
	readonly parentId : number;
	childrenIds : string;
	unifiedChannels : KalturaUnifiedChannel[];
	dynamicData : { [key : string] : KalturaStringValue};
	readonly updateDate : number;
	isActive : boolean;
	startDateInSeconds : number;
	endDateInSeconds : number;
	type : string;
	readonly virtualAssetId : number;

    constructor(data? : KalturaCategoryItemArgs)
    {
        super(data);
        if (typeof this.multilingualName === 'undefined') this.multilingualName = [];
		if (typeof this.unifiedChannels === 'undefined') this.unifiedChannels = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaCategoryItem' },
				id : { type : 'n', readOnly : true },
				name : { type : 's', readOnly : true },
				multilingualName : { type : 'a', subTypeConstructor : KalturaTranslationToken, subType : 'KalturaTranslationToken' },
				parentId : { type : 'n', readOnly : true },
				childrenIds : { type : 's' },
				unifiedChannels : { type : 'a', subTypeConstructor : KalturaUnifiedChannel, subType : 'KalturaUnifiedChannel' },
				dynamicData : { type : 'm', subTypeConstructor : KalturaStringValue, subType : 'KalturaStringValue' },
				updateDate : { type : 'n', readOnly : true },
				isActive : { type : 'b' },
				startDateInSeconds : { type : 'n' },
				endDateInSeconds : { type : 'n' },
				type : { type : 's' },
				virtualAssetId : { type : 'n', readOnly : true }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaCategoryItem',KalturaCategoryItem);
