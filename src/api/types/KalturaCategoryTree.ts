
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaUnifiedChannelInfo } from './KalturaUnifiedChannelInfo';
import { KalturaStringValue } from './KalturaStringValue';
import { KalturaMediaImage } from './KalturaMediaImage';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaCategoryTreeArgs  extends KalturaObjectBaseArgs {
    name? : string;
	unifiedChannels? : KalturaUnifiedChannelInfo[];
	dynamicData? : { [key : string] : KalturaStringValue};
	images? : KalturaMediaImage[];
}


export class KalturaCategoryTree extends KalturaObjectBase {

    readonly id : number;
	name : string;
	readonly children : KalturaCategoryTree[];
	unifiedChannels : KalturaUnifiedChannelInfo[];
	dynamicData : { [key : string] : KalturaStringValue};
	images : KalturaMediaImage[];

    constructor(data? : KalturaCategoryTreeArgs)
    {
        super(data);
        if (typeof this.children === 'undefined') this.children = [];
		if (typeof this.unifiedChannels === 'undefined') this.unifiedChannels = [];
		if (typeof this.images === 'undefined') this.images = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaCategoryTree' },
				id : { type : 'n', readOnly : true },
				name : { type : 's' },
				children : { type : 'a', readOnly : true, subTypeConstructor : KalturaCategoryTree, subType : 'KalturaCategoryTree' },
				unifiedChannels : { type : 'a', subTypeConstructor : KalturaUnifiedChannelInfo, subType : 'KalturaUnifiedChannelInfo' },
				dynamicData : { type : 'm', subTypeConstructor : KalturaStringValue, subType : 'KalturaStringValue' },
				images : { type : 'a', subTypeConstructor : KalturaMediaImage, subType : 'KalturaMediaImage' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaCategoryTree',KalturaCategoryTree);
