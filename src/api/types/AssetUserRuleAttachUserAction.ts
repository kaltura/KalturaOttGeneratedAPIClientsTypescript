
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface AssetUserRuleAttachUserActionArgs  extends KalturaRequestArgs {
    ruleId : number;
}

/**
 * Build request payload for service 'assetUserRule' action 'attachUser'.
 *
 * Usage: Attach AssetUserRule To User
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class AssetUserRuleAttachUserAction extends KalturaRequest<void> {

    ruleId : number;

    constructor(data : AssetUserRuleAttachUserActionArgs)
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
				action : { type : 'c', default : 'attachUser' },
				ruleId : { type : 'n' }
            }
        );
        return result;
    }
}

