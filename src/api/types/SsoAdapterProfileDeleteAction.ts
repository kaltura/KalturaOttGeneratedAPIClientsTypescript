
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface SsoAdapterProfileDeleteActionArgs  extends KalturaRequestArgs {
    ssoAdapterId : number;
}

/**
 * Build request payload for service 'ssoAdapterProfile' action 'delete'.
 *
 * Usage: Delete sso adapters by sso adapters id
 *
 * Server response type:         boolean
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class SsoAdapterProfileDeleteAction extends KalturaRequest<boolean> {

    ssoAdapterId : number;

    constructor(data : SsoAdapterProfileDeleteActionArgs)
    {
        super(data, {responseType : 'b', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'ssoadapterprofile' },
				action : { type : 'c', default : 'delete' },
				ssoAdapterId : { type : 'n' }
            }
        );
        return result;
    }
}

