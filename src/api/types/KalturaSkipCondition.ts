
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaSkipConditionArgs  extends KalturaObjectBaseArgs {
    
}


export class KalturaSkipCondition extends KalturaObjectBase {

    

    constructor(data? : KalturaSkipConditionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaSkipCondition' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaSkipCondition',KalturaSkipCondition);
