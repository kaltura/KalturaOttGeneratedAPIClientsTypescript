
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaConditionOperator } from './KalturaConditionOperator';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaSearchConditionArgs  extends KalturaObjectBaseArgs {
    field? : string;
	operator? : KalturaConditionOperator;
	value? : string;
}


export class KalturaSearchCondition extends KalturaObjectBase {

    field : string;
	operator : KalturaConditionOperator;
	value : string;

    constructor(data? : KalturaSearchConditionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaSearchCondition' },
				field : { type : 's' },
				operator : { type : 'es', subTypeConstructor : KalturaConditionOperator, subType : 'KalturaConditionOperator' },
				value : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaSearchCondition',KalturaSearchCondition);
