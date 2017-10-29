
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaEntityReferenceBy } from './KalturaEntityReferenceBy';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ParentalRuleEnableActionArgs  extends KalturaRequestArgs {
    ruleId : number;
	entityReference : KalturaEntityReferenceBy;
}

/**
 * Build request payload for service 'parentalRule' action 'enable'.
 *
 * Usage: Enable a parental rules for a user
 *
 * Server response type:         boolean
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class ParentalRuleEnableAction extends KalturaRequest<boolean> {

    ruleId : number;
	entityReference : KalturaEntityReferenceBy;

    constructor(data : ParentalRuleEnableActionArgs)
    {
        super(data, {responseType : 'b', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'parentalrule' },
				action : { type : 'c', default : 'enable' },
				ruleId : { type : 'n' },
				entityReference : { type : 'es', subTypeConstructor : KalturaEntityReferenceBy, subType : 'KalturaEntityReferenceBy' }
            }
        );
        return result;
    }
}

