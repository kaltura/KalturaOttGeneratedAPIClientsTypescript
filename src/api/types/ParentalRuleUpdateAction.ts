
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaParentalRule } from './KalturaParentalRule';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ParentalRuleUpdateActionArgs  extends KalturaRequestArgs {
    id : number;
	parentalRule : KalturaParentalRule;
}

/**
 * Build request payload for service 'parentalRule' action 'update'.
 *
 * Usage: Update an existing parentalRule
 *
 * Server response type:         KalturaParentalRule
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class ParentalRuleUpdateAction extends KalturaRequest<KalturaParentalRule> {

    id : number;
	parentalRule : KalturaParentalRule;

    constructor(data : ParentalRuleUpdateActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaParentalRule', responseConstructor : KalturaParentalRule  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'parentalrule' },
				action : { type : 'c', default : 'update' },
				id : { type : 'n' },
				parentalRule : { type : 'o', subTypeConstructor : KalturaParentalRule, subType : 'KalturaParentalRule' }
            }
        );
        return result;
    }
}

