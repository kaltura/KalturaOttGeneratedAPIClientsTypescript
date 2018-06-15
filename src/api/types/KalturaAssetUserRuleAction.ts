
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaRuleAction, KalturaRuleActionArgs } from './KalturaRuleAction';

export interface KalturaAssetUserRuleActionArgs  extends KalturaRuleActionArgs {
    
}


export class KalturaAssetUserRuleAction extends KalturaRuleAction {

    

    constructor(data? : KalturaAssetUserRuleActionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaAssetUserRuleAction' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaAssetUserRuleAction',KalturaAssetUserRuleAction);
