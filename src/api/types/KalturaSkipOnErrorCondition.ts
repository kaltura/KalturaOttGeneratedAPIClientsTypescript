
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaSkipOptions } from './KalturaSkipOptions';
import { KalturaSkipCondition, KalturaSkipConditionArgs } from './KalturaSkipCondition';

export interface KalturaSkipOnErrorConditionArgs  extends KalturaSkipConditionArgs {
    condition? : KalturaSkipOptions;
}


export class KalturaSkipOnErrorCondition extends KalturaSkipCondition {

    condition : KalturaSkipOptions;

    constructor(data? : KalturaSkipOnErrorConditionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaSkipOnErrorCondition' },
				condition : { type : 'es', subTypeConstructor : KalturaSkipOptions, subType : 'KalturaSkipOptions' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaSkipOnErrorCondition',KalturaSkipOnErrorCondition);
