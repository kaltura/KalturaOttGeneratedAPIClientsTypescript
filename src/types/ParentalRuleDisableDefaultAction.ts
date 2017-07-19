
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaEntityReferenceBy } from './KalturaEntityReferenceBy';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ParentalRuleDisableDefaultActionArgs  extends KalturaRequestArgs {
    entityReference : KalturaEntityReferenceBy;
}

/** 
* Disables a parental rule that was defined at account level. Disable can be at
* specific user or household level.
**/
export class ParentalRuleDisableDefaultAction extends KalturaRequest<boolean> {

    entityReference : KalturaEntityReferenceBy;

    constructor(data : ParentalRuleDisableDefaultActionArgs)
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
				action : { type : 'c', default : 'disableDefault' },
				entityReference : { type : 'es', subTypeConstructor : KalturaEntityReferenceBy, subType : 'KalturaEntityReferenceBy' }
            }
        );
        return result;
    }
}

