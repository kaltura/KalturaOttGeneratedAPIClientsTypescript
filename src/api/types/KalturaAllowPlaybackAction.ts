
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaAssetRuleAction, KalturaAssetRuleActionArgs } from './KalturaAssetRuleAction';

export interface KalturaAllowPlaybackActionArgs  extends KalturaAssetRuleActionArgs {
    
}


export class KalturaAllowPlaybackAction extends KalturaAssetRuleAction {

    

    constructor(data? : KalturaAllowPlaybackActionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaAllowPlaybackAction' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaAllowPlaybackAction',KalturaAllowPlaybackAction);
