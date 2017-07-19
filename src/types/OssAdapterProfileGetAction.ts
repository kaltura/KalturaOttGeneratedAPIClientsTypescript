
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaOSSAdapterProfile } from './KalturaOSSAdapterProfile';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface OssAdapterProfileGetActionArgs  extends KalturaRequestArgs {
    id : number;
}

/** 
* Returns all OSS adapters for partner : id + name
**/
export class OssAdapterProfileGetAction extends KalturaRequest<KalturaOSSAdapterProfile> {

    id : number;

    constructor(data : OssAdapterProfileGetActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaOSSAdapterProfile', responseConstructor : KalturaOSSAdapterProfile  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'ossadapterprofile' },
				action : { type : 'c', default : 'get' },
				id : { type : 'n' }
            }
        );
        return result;
    }
}

