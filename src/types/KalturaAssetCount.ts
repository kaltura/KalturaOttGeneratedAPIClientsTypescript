
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaAssetsCount } from './KalturaAssetsCount';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaAssetCountArgs  extends KalturaObjectBaseArgs {
    value? : string;
	count? : number;
	subs? : KalturaAssetsCount[];
}

/** 
* Asset count - represents a specific value of the field, its count and its sub
* groups.
**/
export class KalturaAssetCount extends KalturaObjectBase {

    value : string;
	count : number;
	subs : KalturaAssetsCount[];

    constructor(data? : KalturaAssetCountArgs)
    {
        super(data);
        if (typeof this.subs === 'undefined') this.subs = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaAssetCount' },
				value : { type : 's' },
				count : { type : 'n' },
				subs : { type : 'a', subTypeConstructor : KalturaAssetsCount, subType : 'KalturaAssetsCount' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaAssetCount',KalturaAssetCount);
