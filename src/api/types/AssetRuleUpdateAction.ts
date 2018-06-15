
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaAssetRule } from './KalturaAssetRule';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface AssetRuleUpdateActionArgs  extends KalturaRequestArgs {
    id : number;
	assetRule : KalturaAssetRule;
}

/**
 * Build request payload for service 'assetRule' action 'update'.
 *
 * Usage: Update asset rule
 *
 * Server response type:         KalturaAssetRule
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class AssetRuleUpdateAction extends KalturaRequest<KalturaAssetRule> {

    id : number;
	assetRule : KalturaAssetRule;

    constructor(data : AssetRuleUpdateActionArgs)
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
				action : { type : 'c', default : 'update' },
				id : { type : 'n' },
				assetRule : { type : 'o', subTypeConstructor : KalturaAssetRule, subType : 'KalturaAssetRule' }
            }
        );
        return result;
    }
}

