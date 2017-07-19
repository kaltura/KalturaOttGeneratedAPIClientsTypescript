
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaNetworkActionStatus } from './KalturaNetworkActionStatus';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface SocialActionDeleteActionArgs  extends KalturaRequestArgs {
    id : string;
}

/** 
* delete user social action
**/
export class SocialActionDeleteAction extends KalturaRequest<KalturaNetworkActionStatus[]> {

    id : string;

    constructor(data : SocialActionDeleteActionArgs)
    {
        super(data, {responseType : 'a', responseSubType : 'KalturaNetworkActionStatus', responseConstructor : KalturaNetworkActionStatus  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'socialaction' },
				action : { type : 'c', default : 'delete' },
				id : { type : 's' }
            }
        );
        return result;
    }
}

