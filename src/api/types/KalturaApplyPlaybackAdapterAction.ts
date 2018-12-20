
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaAssetRuleAction, KalturaAssetRuleActionArgs } from './KalturaAssetRuleAction';

export interface KalturaApplyPlaybackAdapterActionArgs  extends KalturaAssetRuleActionArgs {
    adapterId? : number;
}


export class KalturaApplyPlaybackAdapterAction extends KalturaAssetRuleAction {

    adapterId : number;

    constructor(data? : KalturaApplyPlaybackAdapterActionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaApplyPlaybackAdapterAction' },
				adapterId : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaApplyPlaybackAdapterAction',KalturaApplyPlaybackAdapterAction);
