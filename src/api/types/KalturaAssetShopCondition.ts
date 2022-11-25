
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaStringValueArray } from './KalturaStringValueArray';
import { KalturaAssetConditionBase, KalturaAssetConditionBaseArgs } from './KalturaAssetConditionBase';

export interface KalturaAssetShopConditionArgs  extends KalturaAssetConditionBaseArgs {
    value? : string;
	values? : KalturaStringValueArray;
}


export class KalturaAssetShopCondition extends KalturaAssetConditionBase {

    value : string;
	values : KalturaStringValueArray;

    constructor(data? : KalturaAssetShopConditionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaAssetShopCondition' },
				value : { type : 's' },
				values : { type : 'o', subTypeConstructor : KalturaStringValueArray, subType : 'KalturaStringValueArray' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaAssetShopCondition',KalturaAssetShopCondition);
