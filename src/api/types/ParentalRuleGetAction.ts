
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaParentalRule } from './KalturaParentalRule';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ParentalRuleGetActionArgs  extends KalturaRequestArgs {
    id : number;
}

/**
 * Build request payload for service 'parentalRule' action 'get'.
 *
 * Usage: Get an existing parentalRule by identifier
 *
 * Server response type:         KalturaParentalRule
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class ParentalRuleGetAction extends KalturaRequest<KalturaParentalRule> {

    id : number;

    constructor(data : ParentalRuleGetActionArgs)
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
				action : { type : 'c', default : 'get' },
				id : { type : 'n' }
            }
        );
        return result;
    }
}

