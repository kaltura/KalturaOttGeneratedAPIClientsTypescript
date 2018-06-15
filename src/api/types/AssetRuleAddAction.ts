
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaAssetRule } from './KalturaAssetRule';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface AssetRuleAddActionArgs  extends KalturaRequestArgs {
    assetRule : KalturaAssetRule;
}

/**
 * Build request payload for service 'assetRule' action 'add'.
 *
 * Usage: Add asset rule
 *
 * Server response type:         KalturaAssetRule
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class AssetRuleAddAction extends KalturaRequest<KalturaAssetRule> {

    assetRule : KalturaAssetRule;

    constructor(data : AssetRuleAddActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaAssetRule', responseConstructor : KalturaAssetRule  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'assetrule' },
				action : { type : 'c', default : 'add' },
				assetRule : { type : 'o', subTypeConstructor : KalturaAssetRule, subType : 'KalturaAssetRule' }
            }
        );
        return result;
    }
}

