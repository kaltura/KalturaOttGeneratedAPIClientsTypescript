
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaTimeOffsetRuleAction, KalturaTimeOffsetRuleActionArgs } from './KalturaTimeOffsetRuleAction';

export interface KalturaEndDateOffsetRuleActionArgs  extends KalturaTimeOffsetRuleActionArgs {
    
}


export class KalturaEndDateOffsetRuleAction extends KalturaTimeOffsetRuleAction {

    

    constructor(data? : KalturaEndDateOffsetRuleActionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaEndDateOffsetRuleAction' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaEndDateOffsetRuleAction',KalturaEndDateOffsetRuleAction);
