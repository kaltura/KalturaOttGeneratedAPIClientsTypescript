
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaOTTUserListResponse } from './KalturaOTTUserListResponse';

import { KalturaOTTUserFilter } from './KalturaOTTUserFilter';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface OttUserListActionArgs  extends KalturaRequestArgs {
    filter? : KalturaOTTUserFilter;
}

/** 
* Retrieve user by external identifier or username or if filter is null all user
* in the master or the user itself
**/
export class OttUserListAction extends KalturaRequest<KalturaOTTUserListResponse> {

    filter : KalturaOTTUserFilter;

    constructor(data? : OttUserListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaOTTUserListResponse', responseConstructor : KalturaOTTUserListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'ottuser' },
				action : { type : 'c', default : 'list' },
				filter : { type : 'o', subTypeConstructor : KalturaOTTUserFilter, subType : 'KalturaOTTUserFilter' }
            }
        );
        return result;
    }
}

