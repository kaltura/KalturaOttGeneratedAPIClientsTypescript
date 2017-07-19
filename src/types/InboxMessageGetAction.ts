
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaInboxMessage } from './KalturaInboxMessage';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface InboxMessageGetActionArgs  extends KalturaRequestArgs {
    id : string;
}

/** 
* TBD
**/
export class InboxMessageGetAction extends KalturaRequest<KalturaInboxMessage> {

    id : string;

    constructor(data : InboxMessageGetActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaInboxMessage', responseConstructor : KalturaInboxMessage  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'inboxmessage' },
				action : { type : 'c', default : 'get' },
				id : { type : 's' }
            }
        );
        return result;
    }
}

