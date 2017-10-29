
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaRegistryResponse } from './KalturaRegistryResponse';

import { KalturaNotificationType } from './KalturaNotificationType';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface NotificationRegisterActionArgs  extends KalturaRequestArgs {
    identifier : string;
	type : KalturaNotificationType;
}

/**
 * Build request payload for service 'notification' action 'register'.
 *
 * Usage: TBD
 *
 * Server response type:         KalturaRegistryResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class NotificationRegisterAction extends KalturaRequest<KalturaRegistryResponse> {

    identifier : string;
	type : KalturaNotificationType;

    constructor(data : NotificationRegisterActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaRegistryResponse', responseConstructor : KalturaRegistryResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'notification' },
				action : { type : 'c', default : 'register' },
				identifier : { type : 's' },
				type : { type : 'es', subTypeConstructor : KalturaNotificationType, subType : 'KalturaNotificationType' }
            }
        );
        return result;
    }
}

