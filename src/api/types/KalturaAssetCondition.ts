
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaAssetConditionBase, KalturaAssetConditionBaseArgs } from './KalturaAssetConditionBase';

export interface KalturaAssetConditionArgs  extends KalturaAssetConditionBaseArgs {
    ksql? : string;
}


export class KalturaAssetCondition extends KalturaAssetConditionBase {

    ksql : string;

    constructor(data? : KalturaAssetConditionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaAssetCondition' },
				ksql : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaAssetCondition',KalturaAssetCondition);
