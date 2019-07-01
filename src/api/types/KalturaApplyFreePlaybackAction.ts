
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaBusinessModuleRuleAction, KalturaBusinessModuleRuleActionArgs } from './KalturaBusinessModuleRuleAction';

export interface KalturaApplyFreePlaybackActionArgs  extends KalturaBusinessModuleRuleActionArgs {
    
}


export class KalturaApplyFreePlaybackAction extends KalturaBusinessModuleRuleAction {

    

    constructor(data? : KalturaApplyFreePlaybackActionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaApplyFreePlaybackAction' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaApplyFreePlaybackAction',KalturaApplyFreePlaybackAction);
