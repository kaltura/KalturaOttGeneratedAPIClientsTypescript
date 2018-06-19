
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaSSOAdapterProfileListResponse } from './KalturaSSOAdapterProfileListResponse';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface SsoAdapterProfileListActionArgs  extends KalturaRequestArgs {
    
}

/**
 * Build request payload for service 'ssoAdapterProfile' action 'list'.
 *
 * Usage: Returns all sso adapters for partner : id + name
 *
 * Server response type:         KalturaSSOAdapterProfileListResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class SsoAdapterProfileListAction extends KalturaRequest<KalturaSSOAdapterProfileListResponse> {

    

    constructor(data? : SsoAdapterProfileListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaSSOAdapterProfileListResponse', responseConstructor : KalturaSSOAdapterProfileListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'ssoadapterprofile' },
				action : { type : 'c', default : 'list' }
            }
        );
        return result;
    }
}

