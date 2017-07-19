
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface NotificationSetDevicePushTokenActionArgs  extends KalturaRequestArgs {
    pushToken : string;
}

/** 
* Registers the device push token to the push service
**/
export class NotificationSetDevicePushTokenAction extends KalturaRequest<boolean> {

    pushToken : string;

    constructor(data : NotificationSetDevicePushTokenActionArgs)
    {
        super(data, {responseType : 'b', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'notification' },
				action : { type : 'c', default : 'setDevicePushToken' },
				pushToken : { type : 's' }
            }
        );
        return result;
    }
}

