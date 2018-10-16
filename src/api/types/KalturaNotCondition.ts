
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaCondition, KalturaConditionArgs } from './KalturaCondition';

export interface KalturaNotConditionArgs  extends KalturaConditionArgs {
    not? : boolean;
}


export class KalturaNotCondition extends KalturaCondition {

    not : boolean;

    constructor(data? : KalturaNotConditionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaNotCondition' },
				not : { type : 'b' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaNotCondition',KalturaNotCondition);
