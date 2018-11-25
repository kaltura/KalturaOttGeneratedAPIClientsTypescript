
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaSkipOperators } from './KalturaSkipOperators';
import { KalturaSkipCondition, KalturaSkipConditionArgs } from './KalturaSkipCondition';

export interface KalturaPropertySkipConditionArgs  extends KalturaSkipConditionArgs {
    propertyPath? : string;
	operator? : KalturaSkipOperators;
	value? : string;
}


export class KalturaPropertySkipCondition extends KalturaSkipCondition {

    propertyPath : string;
	operator : KalturaSkipOperators;
	value : string;

    constructor(data? : KalturaPropertySkipConditionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaPropertySkipCondition' },
				propertyPath : { type : 's' },
				operator : { type : 'es', subTypeConstructor : KalturaSkipOperators, subType : 'KalturaSkipOperators' },
				value : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaPropertySkipCondition',KalturaPropertySkipCondition);
