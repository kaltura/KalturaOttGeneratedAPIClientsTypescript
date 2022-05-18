
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaSmsAdapterProfileListResponse } from './KalturaSmsAdapterProfileListResponse';

import { KalturaSmsAdapterProfileFilter } from './KalturaSmsAdapterProfileFilter';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface SmsAdapterProfileListActionArgs  extends KalturaRequestArgs {
    filter : KalturaSmsAdapterProfileFilter;
}

/**
 * Build request payload for service 'smsAdapterProfile' action 'list'.
 *
 * 
 *
 * Server response type:         KalturaSmsAdapterProfileListResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class SmsAdapterProfileListAction extends KalturaRequest<KalturaSmsAdapterProfileListResponse> {

    filter : KalturaSmsAdapterProfileFilter;

    constructor(data : SmsAdapterProfileListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaSmsAdapterProfileListResponse', responseConstructor : KalturaSmsAdapterProfileListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'smsadapterprofile' },
				action : { type : 'c', default : 'list' },
				filter : { type : 'o', subTypeConstructor : KalturaSmsAdapterProfileFilter, subType : 'KalturaSmsAdapterProfileFilter' }
            }
        );
        return result;
    }
}

