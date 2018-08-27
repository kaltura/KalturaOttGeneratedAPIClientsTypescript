
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaMonetizationType } from './KalturaMonetizationType';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaMonetizationConditionArgs  extends KalturaObjectBaseArgs {
    type? : KalturaMonetizationType;
	minimumPrice? : number;
	multiplier? : number;
}


export class KalturaMonetizationCondition extends KalturaObjectBase {

    type : KalturaMonetizationType;
	minimumPrice : number;
	multiplier : number;

    constructor(data? : KalturaMonetizationConditionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaMonetizationCondition' },
				type : { type : 'es', subTypeConstructor : KalturaMonetizationType, subType : 'KalturaMonetizationType' },
				minimumPrice : { type : 'n' },
				multiplier : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaMonetizationCondition',KalturaMonetizationCondition);
