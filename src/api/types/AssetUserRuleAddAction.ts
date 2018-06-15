
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaAssetUserRule } from './KalturaAssetUserRule';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface AssetUserRuleAddActionArgs  extends KalturaRequestArgs {
    assetUserRule : KalturaAssetUserRule;
}

/**
 * Build request payload for service 'assetUserRule' action 'add'.
 *
 * Usage: Add asset user rule
 *
 * Server response type:         KalturaAssetUserRule
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class AssetUserRuleAddAction extends KalturaRequest<KalturaAssetUserRule> {

    assetUserRule : KalturaAssetUserRule;

    constructor(data : AssetUserRuleAddActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaAssetUserRule', responseConstructor : KalturaAssetUserRule  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'assetuserrule' },
				action : { type : 'c', default : 'add' },
				assetUserRule : { type : 'o', subTypeConstructor : KalturaAssetUserRule, subType : 'KalturaAssetUserRule' }
            }
        );
        return result;
    }
}

