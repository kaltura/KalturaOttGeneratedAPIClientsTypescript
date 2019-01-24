
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTvmRuleListResponse } from './KalturaTvmRuleListResponse';

import { KalturaTvmRuleFilter } from './KalturaTvmRuleFilter';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface TvmRuleListActionArgs  extends KalturaRequestArgs {
    filter? : KalturaTvmRuleFilter;
}

/**
 * Build request payload for service 'tvmRule' action 'list'.
 *
 * Usage: Get the list of tvm rules for the partner
 *
 * Server response type:         KalturaTvmRuleListResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class TvmRuleListAction extends KalturaRequest<KalturaTvmRuleListResponse> {

    filter : KalturaTvmRuleFilter;

    constructor(data? : TvmRuleListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaTvmRuleListResponse', responseConstructor : KalturaTvmRuleListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'tvmrule' },
				action : { type : 'c', default : 'list' },
				filter : { type : 'o', subTypeConstructor : KalturaTvmRuleFilter, subType : 'KalturaTvmRuleFilter' }
            }
        );
        return result;
    }
}

