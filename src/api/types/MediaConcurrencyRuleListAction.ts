
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaMediaConcurrencyRuleListResponse } from './KalturaMediaConcurrencyRuleListResponse';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface MediaConcurrencyRuleListActionArgs  extends KalturaRequestArgs {
    
}

/**
 * Build request payload for service 'mediaConcurrencyRule' action 'list'.
 *
 * Usage: Get the list of meta mappings for the partner
 *
 * Server response type:         KalturaMediaConcurrencyRuleListResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class MediaConcurrencyRuleListAction extends KalturaRequest<KalturaMediaConcurrencyRuleListResponse> {

    

    constructor(data? : MediaConcurrencyRuleListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaMediaConcurrencyRuleListResponse', responseConstructor : KalturaMediaConcurrencyRuleListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'mediaconcurrencyrule' },
				action : { type : 'c', default : 'list' }
            }
        );
        return result;
    }
}

