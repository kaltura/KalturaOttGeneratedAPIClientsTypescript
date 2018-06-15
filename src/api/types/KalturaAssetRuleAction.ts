
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaRuleAction, KalturaRuleActionArgs } from './KalturaRuleAction';

export interface KalturaAssetRuleActionArgs  extends KalturaRuleActionArgs {
    
}


export class KalturaAssetRuleAction extends KalturaRuleAction {

    

    constructor(data? : KalturaAssetRuleActionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaAssetRuleAction' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaAssetRuleAction',KalturaAssetRuleAction);
