
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaConcurrencyLimitationType } from './KalturaConcurrencyLimitationType';
import { KalturaAssetCondition, KalturaAssetConditionArgs } from './KalturaAssetCondition';

export interface KalturaConcurrencyConditionArgs  extends KalturaAssetConditionArgs {
    limit? : number;
	concurrencyLimitationType? : KalturaConcurrencyLimitationType;
}


export class KalturaConcurrencyCondition extends KalturaAssetCondition {

    limit : number;
	concurrencyLimitationType : KalturaConcurrencyLimitationType;

    constructor(data? : KalturaConcurrencyConditionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaConcurrencyCondition' },
				limit : { type : 'n' },
				concurrencyLimitationType : { type : 'es', subTypeConstructor : KalturaConcurrencyLimitationType, subType : 'KalturaConcurrencyLimitationType' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaConcurrencyCondition',KalturaConcurrencyCondition);
