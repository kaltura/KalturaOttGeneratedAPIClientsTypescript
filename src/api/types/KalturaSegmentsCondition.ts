
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaCondition, KalturaConditionArgs } from './KalturaCondition';

export interface KalturaSegmentsConditionArgs  extends KalturaConditionArgs {
    segmentsIds? : string;
}


export class KalturaSegmentsCondition extends KalturaCondition {

    segmentsIds : string;

    constructor(data? : KalturaSegmentsConditionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaSegmentsCondition' },
				segmentsIds : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaSegmentsCondition',KalturaSegmentsCondition);
