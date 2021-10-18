
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaCondition, KalturaConditionArgs } from './KalturaCondition';

export interface KalturaDynamicKeysConditionArgs  extends KalturaConditionArgs {
    key? : string;
	values? : string;
}


export class KalturaDynamicKeysCondition extends KalturaCondition {

    key : string;
	values : string;

    constructor(data? : KalturaDynamicKeysConditionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDynamicKeysCondition' },
				key : { type : 's' },
				values : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaDynamicKeysCondition',KalturaDynamicKeysCondition);
