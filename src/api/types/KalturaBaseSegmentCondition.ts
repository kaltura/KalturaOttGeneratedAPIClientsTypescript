
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaConditionScope } from './KalturaConditionScope';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaBaseSegmentConditionArgs  extends KalturaObjectBaseArgs {
    scope? : KalturaConditionScope;
}


export class KalturaBaseSegmentCondition extends KalturaObjectBase {

    scope : KalturaConditionScope;

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
                objectType : { type : 'c', default : 'KalturaBaseSegmentCondition' },
				scope : { type : 'es', subTypeConstructor : KalturaConditionScope, subType : 'KalturaConditionScope' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaBaseSegmentCondition',KalturaBaseSegmentCondition);
