
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaAssetConditionBase, KalturaAssetConditionBaseArgs } from './KalturaAssetConditionBase';

export interface KalturaAssetShopConditionArgs  extends KalturaAssetConditionBaseArgs {
    value? : string;
}


export class KalturaAssetShopCondition extends KalturaAssetConditionBase {

    value : string;

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
				value : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaAssetShopCondition',KalturaAssetShopCondition);
