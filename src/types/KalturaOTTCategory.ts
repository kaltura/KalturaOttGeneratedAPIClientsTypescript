
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaChannel } from './KalturaChannel';
import { KalturaMediaImage } from './KalturaMediaImage';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaOTTCategoryArgs  extends KalturaObjectBaseArgs {
    name? : string;
	parentCategoryId? : number;
	childCategories? : KalturaOTTCategory[];
	channels? : KalturaChannel[];
	images? : KalturaMediaImage[];
}

/** 
* Category details
**/
export class KalturaOTTCategory extends KalturaObjectBase {

    readonly id : number;
	name : string;
	parentCategoryId : number;
	childCategories : KalturaOTTCategory[];
	channels : KalturaChannel[];
	images : KalturaMediaImage[];

    constructor(data? : KalturaOTTCategoryArgs)
    {
        super(data);
        if (typeof this.childCategories === 'undefined') this.childCategories = [];
		if (typeof this.channels === 'undefined') this.channels = [];
		if (typeof this.images === 'undefined') this.images = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaOTTCategory' },
				id : { type : 'n', readOnly : true },
				name : { type : 's' },
				parentCategoryId : { type : 'n' },
				childCategories : { type : 'a', subTypeConstructor : KalturaOTTCategory, subType : 'KalturaOTTCategory' },
				channels : { type : 'a', subTypeConstructor : KalturaChannel, subType : 'KalturaChannel' },
				images : { type : 'a', subTypeConstructor : KalturaMediaImage, subType : 'KalturaMediaImage' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaOTTCategory',KalturaOTTCategory);
