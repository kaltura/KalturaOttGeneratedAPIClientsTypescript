
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaUrlType } from './KalturaUrlType';
import { KalturaAssetRuleAction, KalturaAssetRuleActionArgs } from './KalturaAssetRuleAction';

export interface KalturaSetPlaybackContextUrlTypeActionArgs  extends KalturaAssetRuleActionArgs {
    urlType? : KalturaUrlType;
}


export class KalturaSetPlaybackContextUrlTypeAction extends KalturaAssetRuleAction {

    urlType : KalturaUrlType;

    constructor(data? : KalturaSetPlaybackContextUrlTypeActionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaSetPlaybackContextUrlTypeAction' },
				urlType : { type : 'es', subTypeConstructor : KalturaUrlType, subType : 'KalturaUrlType' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaSetPlaybackContextUrlTypeAction',KalturaSetPlaybackContextUrlTypeAction);
