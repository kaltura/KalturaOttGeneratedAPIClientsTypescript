
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaContentAction } from './KalturaContentAction';
import { KalturaContentActionConditionLengthType } from './KalturaContentActionConditionLengthType';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaContentActionConditionArgs  extends KalturaObjectBaseArgs {
    action? : KalturaContentAction;
	length? : number;
	lengthType? : KalturaContentActionConditionLengthType;
	multiplier? : number;
}


export class KalturaContentActionCondition extends KalturaObjectBase {

    action : KalturaContentAction;
	length : number;
	lengthType : KalturaContentActionConditionLengthType;
	multiplier : number;

    constructor(data? : KalturaContentActionConditionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaContentActionCondition' },
				action : { type : 'es', subTypeConstructor : KalturaContentAction, subType : 'KalturaContentAction' },
				length : { type : 'n' },
				lengthType : { type : 'es', subTypeConstructor : KalturaContentActionConditionLengthType, subType : 'KalturaContentActionConditionLengthType' },
				multiplier : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaContentActionCondition',KalturaContentActionCondition);
