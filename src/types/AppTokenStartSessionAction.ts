
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaSessionInfo } from './KalturaSessionInfo';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface AppTokenStartSessionActionArgs  extends KalturaRequestArgs {
    id : string;
	tokenHash : string;
	expiry? : number;
	udid? : string;
}

/**
 * Build request payload for service 'appToken' action 'startSession'.
 *
 * Usage: Starts a new KS (Kaltura Session) based on application authentication token id
 *
 * Server response type:         KalturaSessionInfo
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class AppTokenStartSessionAction extends KalturaRequest<KalturaSessionInfo> {

    id : string;
	tokenHash : string;
	expiry : number;
	udid : string;

    constructor(data : AppTokenStartSessionActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaSessionInfo', responseConstructor : KalturaSessionInfo  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'apptoken' },
				action : { type : 'c', default : 'startSession' },
				id : { type : 's' },
				tokenHash : { type : 's' },
				expiry : { type : 'n' },
				udid : { type : 's' }
            }
        );
        return result;
    }
}

