
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaBusinessModuleRuleListResponse } from './KalturaBusinessModuleRuleListResponse';

import { KalturaBusinessModuleRuleFilter } from './KalturaBusinessModuleRuleFilter';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface BusinessModuleRuleListActionArgs  extends KalturaRequestArgs {
    filter? : KalturaBusinessModuleRuleFilter;
}

/**
 * Build request payload for service 'businessModuleRule' action 'list'.
 *
 * Usage: Get the list of business module rules for the partner
 *
 * Server response type:         KalturaBusinessModuleRuleListResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class BusinessModuleRuleListAction extends KalturaRequest<KalturaBusinessModuleRuleListResponse> {

    filter : KalturaBusinessModuleRuleFilter;

    constructor(data? : BusinessModuleRuleListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaBusinessModuleRuleListResponse', responseConstructor : KalturaBusinessModuleRuleListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'businessmodulerule' },
				action : { type : 'c', default : 'list' },
				filter : { type : 'o', subTypeConstructor : KalturaBusinessModuleRuleFilter, subType : 'KalturaBusinessModuleRuleFilter' }
            }
        );
        return result;
    }
}

