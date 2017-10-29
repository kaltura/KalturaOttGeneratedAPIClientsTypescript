
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaUserAssetRuleListResponse } from './KalturaUserAssetRuleListResponse';

import { KalturaUserAssetRuleFilter } from './KalturaUserAssetRuleFilter';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface UserAssetRuleListActionArgs  extends KalturaRequestArgs {
    filter : KalturaUserAssetRuleFilter;
}

/**
 * Build request payload for service 'userAssetRule' action 'list'.
 *
 * Usage: Retrieve all the rules (parental, geo, device or user-type) that applies for this user and asset
 *
 * Server response type:         KalturaUserAssetRuleListResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class UserAssetRuleListAction extends KalturaRequest<KalturaUserAssetRuleListResponse> {

    filter : KalturaUserAssetRuleFilter;

    constructor(data : UserAssetRuleListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaUserAssetRuleListResponse', responseConstructor : KalturaUserAssetRuleListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'userassetrule' },
				action : { type : 'c', default : 'list' },
				filter : { type : 'o', subTypeConstructor : KalturaUserAssetRuleFilter, subType : 'KalturaUserAssetRuleFilter' }
            }
        );
        return result;
    }
}

