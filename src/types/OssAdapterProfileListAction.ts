
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaOSSAdapterProfileListResponse } from './KalturaOSSAdapterProfileListResponse';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface OssAdapterProfileListActionArgs  extends KalturaRequestArgs {
    
}

/** 
* Returns all OSS adapters for partner : id + name
**/
export class OssAdapterProfileListAction extends KalturaRequest<KalturaOSSAdapterProfileListResponse> {

    

    constructor(data? : OssAdapterProfileListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaOSSAdapterProfileListResponse', responseConstructor : KalturaOSSAdapterProfileListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'ossadapterprofile' },
				action : { type : 'c', default : 'list' }
            }
        );
        return result;
    }
}

