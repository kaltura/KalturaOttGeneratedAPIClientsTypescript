
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaUsageModule } from './KalturaUsageModule';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface UsageModuleAddActionArgs  extends KalturaRequestArgs {
    usageModule : KalturaUsageModule;
}

/**
 * Build request payload for service 'usageModule' action 'add'.
 *
 * Usage: Internal API !!! Insert new UsageModule
 *
 * Server response type:         KalturaUsageModule
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class UsageModuleAddAction extends KalturaRequest<KalturaUsageModule> {

    usageModule : KalturaUsageModule;

    constructor(data : UsageModuleAddActionArgs)
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
				action : { type : 'c', default : 'add' },
				usageModule : { type : 'o', subTypeConstructor : KalturaUsageModule, subType : 'KalturaUsageModule' }
            }
        );
        return result;
    }
}

