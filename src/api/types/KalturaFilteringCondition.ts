
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaConditionOperator } from './KalturaConditionOperator';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaFilteringConditionArgs  extends KalturaObjectBaseArgs {
    metaName? : string;
	operator? : KalturaConditionOperator;
	value? : string;
}


export class KalturaFilteringCondition extends KalturaObjectBase {

    metaName : string;
	operator : KalturaConditionOperator;
	value : string;

    constructor(data? : KalturaFilteringConditionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaFilteringCondition' },
				metaName : { type : 's' },
				operator : { type : 'es', subTypeConstructor : KalturaConditionOperator, subType : 'KalturaConditionOperator' },
				value : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaFilteringCondition',KalturaFilteringCondition);
