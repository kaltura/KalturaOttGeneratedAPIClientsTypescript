
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaCondition, KalturaConditionArgs } from './KalturaCondition';

export interface KalturaAssetConditionArgs  extends KalturaConditionArgs {
    ksql? : string;
}


export class KalturaAssetCondition extends KalturaCondition {

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
