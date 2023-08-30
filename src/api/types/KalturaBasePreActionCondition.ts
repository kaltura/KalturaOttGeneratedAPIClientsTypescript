
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaBasePreActionConditionArgs  extends KalturaObjectBaseArgs {
    
}


export class KalturaBasePreActionCondition extends KalturaObjectBase {

    

    constructor(data? : KalturaBasePreActionConditionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBasePreActionCondition' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaBasePreActionCondition',KalturaBasePreActionCondition);
