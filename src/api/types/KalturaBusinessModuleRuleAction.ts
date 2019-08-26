
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaRuleAction, KalturaRuleActionArgs } from './KalturaRuleAction';

export interface KalturaBusinessModuleRuleActionArgs  extends KalturaRuleActionArgs {
    
}


export class KalturaBusinessModuleRuleAction extends KalturaRuleAction {

    

    constructor(data? : KalturaBusinessModuleRuleActionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBusinessModuleRuleAction' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaBusinessModuleRuleAction',KalturaBusinessModuleRuleAction);
