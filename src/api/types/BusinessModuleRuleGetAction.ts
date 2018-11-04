
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaBusinessModuleRule } from './KalturaBusinessModuleRule';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface BusinessModuleRuleGetActionArgs  extends KalturaRequestArgs {
    id : number;
}

/**
 * Build request payload for service 'businessModuleRule' action 'get'.
 *
 * Usage: Get business module rule by ID
 *
 * Server response type:         KalturaBusinessModuleRule
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class BusinessModuleRuleGetAction extends KalturaRequest<KalturaBusinessModuleRule> {

    id : number;

    constructor(data : BusinessModuleRuleGetActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaBusinessModuleRule', responseConstructor : KalturaBusinessModuleRule  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'businessmodulerule' },
				action : { type : 'c', default : 'get' },
				id : { type : 'n' }
            }
        );
        return result;
    }
}

