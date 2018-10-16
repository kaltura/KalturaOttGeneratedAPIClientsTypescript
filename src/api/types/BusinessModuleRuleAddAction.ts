
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaBusinessModuleRule } from './KalturaBusinessModuleRule';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface BusinessModuleRuleAddActionArgs  extends KalturaRequestArgs {
    businessModuleRule : KalturaBusinessModuleRule;
}

/**
 * Build request payload for service 'businessModuleRule' action 'add'.
 *
 * Usage: Add business module rule
 *
 * Server response type:         KalturaBusinessModuleRule
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class BusinessModuleRuleAddAction extends KalturaRequest<KalturaBusinessModuleRule> {

    businessModuleRule : KalturaBusinessModuleRule;

    constructor(data : BusinessModuleRuleAddActionArgs)
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
				action : { type : 'c', default : 'add' },
				businessModuleRule : { type : 'o', subTypeConstructor : KalturaBusinessModuleRule, subType : 'KalturaBusinessModuleRule' }
            }
        );
        return result;
    }
}

