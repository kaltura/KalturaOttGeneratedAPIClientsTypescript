
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaCondition } from './KalturaCondition';
import { KalturaNotCondition, KalturaNotConditionArgs } from './KalturaNotCondition';

export interface KalturaOrConditionArgs  extends KalturaNotConditionArgs {
    conditions? : KalturaCondition[];
}


export class KalturaOrCondition extends KalturaNotCondition {

    conditions : KalturaCondition[];

    constructor(data? : KalturaOrConditionArgs)
    {
        super(data);
        if (typeof this.conditions === 'undefined') this.conditions = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaOrCondition' },
				conditions : { type : 'a', subTypeConstructor : KalturaCondition, subType : 'KalturaCondition' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaOrCondition',KalturaOrCondition);
