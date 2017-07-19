
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaParentalRuleListResponse } from './KalturaParentalRuleListResponse';

import { KalturaParentalRuleFilter } from './KalturaParentalRuleFilter';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ParentalRuleListActionArgs  extends KalturaRequestArgs {
    filter : KalturaParentalRuleFilter;
}

/** 
* Return the parental rules that applies for the user or household. Can include
* rules that have been associated in account, household, or user level.           
*   Association level is also specified in the response.
**/
export class ParentalRuleListAction extends KalturaRequest<KalturaParentalRuleListResponse> {

    filter : KalturaParentalRuleFilter;

    constructor(data : ParentalRuleListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaParentalRuleListResponse', responseConstructor : KalturaParentalRuleListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'parentalrule' },
				action : { type : 'c', default : 'list' },
				filter : { type : 'o', subTypeConstructor : KalturaParentalRuleFilter, subType : 'KalturaParentalRuleFilter' }
            }
        );
        return result;
    }
}

