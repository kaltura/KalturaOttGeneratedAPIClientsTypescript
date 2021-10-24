
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaUsageModule } from './KalturaUsageModule';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface UsageModuleUpdateActionArgs  extends KalturaRequestArgs {
    id : number;
	usageModule : KalturaUsageModule;
}

/**
 * Build request payload for service 'usageModule' action 'update'.
 *
 * Usage: Update usage module
 *
 * Server response type:         KalturaUsageModule
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class UsageModuleUpdateAction extends KalturaRequest<KalturaUsageModule> {

    id : number;
	usageModule : KalturaUsageModule;

    constructor(data : UsageModuleUpdateActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaUsageModule', responseConstructor : KalturaUsageModule  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'usagemodule' },
				action : { type : 'c', default : 'update' },
				id : { type : 'n' },
				usageModule : { type : 'o', subTypeConstructor : KalturaUsageModule, subType : 'KalturaUsageModule' }
            }
        );
        return result;
    }
}

