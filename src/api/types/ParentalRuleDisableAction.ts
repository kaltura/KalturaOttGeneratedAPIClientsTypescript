
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaEntityReferenceBy } from './KalturaEntityReferenceBy';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ParentalRuleDisableActionArgs  extends KalturaRequestArgs {
    ruleId : number;
	entityReference : KalturaEntityReferenceBy;
}

/**
 * Build request payload for service 'parentalRule' action 'disable'.
 *
 * Usage: Disables a parental rule that was previously defined by the household master. Disable can be at specific user or household level
 *
 * Server response type:         boolean
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class ParentalRuleDisableAction extends KalturaRequest<boolean> {

    ruleId : number;
	entityReference : KalturaEntityReferenceBy;

    constructor(data : ParentalRuleDisableActionArgs)
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
				action : { type : 'c', default : 'disable' },
				ruleId : { type : 'n' },
				entityReference : { type : 'es', subTypeConstructor : KalturaEntityReferenceBy, subType : 'KalturaEntityReferenceBy' }
            }
        );
        return result;
    }
}

