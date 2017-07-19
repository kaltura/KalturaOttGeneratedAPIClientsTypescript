
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaSession } from './KalturaSession';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface SessionGetActionArgs  extends KalturaRequestArgs {
    session? : string;
}

/** 
* Parses KS
**/
export class SessionGetAction extends KalturaRequest<KalturaSession> {

    session : string;

    constructor(data? : SessionGetActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaSession', responseConstructor : KalturaSession  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'session' },
				action : { type : 'c', default : 'get' },
				session : { type : 's' }
            }
        );
        return result;
    }
}

