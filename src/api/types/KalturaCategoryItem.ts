
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaUnifiedChannel } from './KalturaUnifiedChannel';
import { KalturaStringValue } from './KalturaStringValue';
import { KalturaCrudObject, KalturaCrudObjectArgs } from './KalturaCrudObject';

export interface KalturaCategoryItemArgs  extends KalturaCrudObjectArgs {
    name? : string;
	parentCategoryId? : number;
	unifiedChannels? : KalturaUnifiedChannel[];
	dynamicData? : { [key : string] : KalturaStringValue};
}


export class KalturaCategoryItem extends KalturaCrudObject {

    readonly id : number;
	name : string;
	parentCategoryId : number;
	readonly childCategoriesIds : string;
	unifiedChannels : KalturaUnifiedChannel[];
	dynamicData : { [key : string] : KalturaStringValue};

    constructor(data? : KalturaCategoryItemArgs)
    {
        super(data);
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
				name : { type : 's' },
				parentCategoryId : { type : 'n' },
				childCategoriesIds : { type : 's', readOnly : true },
				unifiedChannels : { type : 'a', subTypeConstructor : KalturaUnifiedChannel, subType : 'KalturaUnifiedChannel' },
				dynamicData : { type : 'm', subTypeConstructor : KalturaStringValue, subType : 'KalturaStringValue' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaCategoryItem',KalturaCategoryItem);
