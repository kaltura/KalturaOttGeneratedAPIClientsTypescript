
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaBusinessModuleRule } from './KalturaBusinessModuleRule';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface BusinessModuleRuleUpdateActionArgs  extends KalturaRequestArgs {
    id : number;
	businessModuleRule : KalturaBusinessModuleRule;
}

/**
 * Build request payload for service 'businessModuleRule' action 'update'.
 *
 * Usage: Update business module rule
 *
 * Server response type:         KalturaBusinessModuleRule
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class BusinessModuleRuleUpdateAction extends KalturaRequest<KalturaBusinessModuleRule> {

    id : number;
	businessModuleRule : KalturaBusinessModuleRule;

    constructor(data : BusinessModuleRuleUpdateActionArgs)
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
				action : { type : 'c', default : 'update' },
				id : { type : 'n' },
				businessModuleRule : { type : 'o', subTypeConstructor : KalturaBusinessModuleRule, subType : 'KalturaBusinessModuleRule' }
            }
        );
        return result;
    }
}

