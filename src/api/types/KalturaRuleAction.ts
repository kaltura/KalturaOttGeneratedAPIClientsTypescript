
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaRuleActionType } from './KalturaRuleActionType';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaRuleActionArgs  extends KalturaObjectBaseArgs {
    description? : string;
}


export class KalturaRuleAction extends KalturaObjectBase {

    readonly type : KalturaRuleActionType;
	description : string;

    constructor(data? : KalturaRuleActionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaRuleAction' },
				type : { type : 'es', readOnly : true, subTypeConstructor : KalturaRuleActionType, subType : 'KalturaRuleActionType' },
				description : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaRuleAction',KalturaRuleAction);
