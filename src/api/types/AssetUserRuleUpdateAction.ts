
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaAssetUserRule } from './KalturaAssetUserRule';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface AssetUserRuleUpdateActionArgs  extends KalturaRequestArgs {
    id : number;
	assetUserRule : KalturaAssetUserRule;
}

/**
 * Build request payload for service 'assetUserRule' action 'update'.
 *
 * Usage: Update asset user rule
 *
 * Server response type:         KalturaAssetUserRule
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class AssetUserRuleUpdateAction extends KalturaRequest<KalturaAssetUserRule> {

    id : number;
	assetUserRule : KalturaAssetUserRule;

    constructor(data : AssetUserRuleUpdateActionArgs)
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
				action : { type : 'c', default : 'update' },
				id : { type : 'n' },
				assetUserRule : { type : 'o', subTypeConstructor : KalturaAssetUserRule, subType : 'KalturaAssetUserRule' }
            }
        );
        return result;
    }
}

