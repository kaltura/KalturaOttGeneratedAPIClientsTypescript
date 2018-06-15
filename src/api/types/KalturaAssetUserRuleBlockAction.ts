
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaAssetUserRuleAction, KalturaAssetUserRuleActionArgs } from './KalturaAssetUserRuleAction';

export interface KalturaAssetUserRuleBlockActionArgs  extends KalturaAssetUserRuleActionArgs {
    
}


export class KalturaAssetUserRuleBlockAction extends KalturaAssetUserRuleAction {

    

    constructor(data? : KalturaAssetUserRuleBlockActionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaAssetUserRuleBlockAction' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaAssetUserRuleBlockAction',KalturaAssetUserRuleBlockAction);
