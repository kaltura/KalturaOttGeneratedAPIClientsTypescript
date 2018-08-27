
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaBaseSegmentCondition, KalturaBaseSegmentConditionArgs } from './KalturaBaseSegmentCondition';

export interface KalturaUserDataConditionArgs  extends KalturaBaseSegmentConditionArgs {
    field? : string;
	value? : string;
}


export class KalturaUserDataCondition extends KalturaBaseSegmentCondition {

    field : string;
	value : string;

    constructor(data? : KalturaUserDataConditionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaUserDataCondition' },
				field : { type : 's' },
				value : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaUserDataCondition',KalturaUserDataCondition);
