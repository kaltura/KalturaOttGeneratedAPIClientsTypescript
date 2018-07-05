
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaParentalRule } from './KalturaParentalRule';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ParentalRuleAddActionArgs  extends KalturaRequestArgs {
    parentalRule : KalturaParentalRule;
}

/**
 * Build request payload for service 'parentalRule' action 'add'.
 *
 * Usage: Add a new parentalRule
 *
 * Server response type:         KalturaParentalRule
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class ParentalRuleAddAction extends KalturaRequest<KalturaParentalRule> {

    parentalRule : KalturaParentalRule;

    constructor(data : ParentalRuleAddActionArgs)
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
				action : { type : 'c', default : 'add' },
				parentalRule : { type : 'o', subTypeConstructor : KalturaParentalRule, subType : 'KalturaParentalRule' }
            }
        );
        return result;
    }
}

