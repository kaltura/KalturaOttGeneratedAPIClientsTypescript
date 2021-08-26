
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaAssetRuleAction, KalturaAssetRuleActionArgs } from './KalturaAssetRuleAction';

export interface KalturaFilterActionArgs  extends KalturaAssetRuleActionArgs {
    
}


export class KalturaFilterAction extends KalturaAssetRuleAction {

    

    constructor(data? : KalturaFilterActionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaFilterAction' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaFilterAction',KalturaFilterAction);
