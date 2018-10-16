
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaRule, KalturaRuleArgs } from './KalturaRule';

export interface KalturaAssetRuleBaseArgs  extends KalturaRuleArgs {
    
}


export class KalturaAssetRuleBase extends KalturaRule {

    

    constructor(data? : KalturaAssetRuleBaseArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaAssetRuleBase' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaAssetRuleBase',KalturaAssetRuleBase);
