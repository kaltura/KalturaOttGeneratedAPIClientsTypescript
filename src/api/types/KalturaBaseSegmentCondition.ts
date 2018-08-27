
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaBaseSegmentConditionArgs  extends KalturaObjectBaseArgs {
    
}


export class KalturaBaseSegmentCondition extends KalturaObjectBase {

    

    constructor(data? : KalturaBaseSegmentConditionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBaseSegmentCondition' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaBaseSegmentCondition',KalturaBaseSegmentCondition);
