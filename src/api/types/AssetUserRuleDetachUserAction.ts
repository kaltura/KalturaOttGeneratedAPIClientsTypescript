
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface AssetUserRuleDetachUserActionArgs  extends KalturaRequestArgs {
    ruleId : number;
}

/**
 * Build request payload for service 'assetUserRule' action 'detachUser'.
 *
 * Usage: Detach AssetUserRule from user
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class AssetUserRuleDetachUserAction extends KalturaRequest<void> {

    ruleId : number;

    constructor(data : AssetUserRuleDetachUserActionArgs)
    {
        super(data, {responseType : 'v', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'assetuserrule' },
				action : { type : 'c', default : 'detachUser' },
				ruleId : { type : 'n' }
            }
        );
        return result;
    }
}

