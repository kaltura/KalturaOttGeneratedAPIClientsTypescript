
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaOSSAdapterProfile } from './KalturaOSSAdapterProfile';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface OssAdapterProfileAddActionArgs  extends KalturaRequestArgs {
    ossAdapter : KalturaOSSAdapterProfile;
}

/** 
* Insert new OSS adapter for partner
**/
export class OssAdapterProfileAddAction extends KalturaRequest<KalturaOSSAdapterProfile> {

    ossAdapter : KalturaOSSAdapterProfile;

    constructor(data : OssAdapterProfileAddActionArgs)
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
				action : { type : 'c', default : 'add' },
				ossAdapter : { type : 'o', subTypeConstructor : KalturaOSSAdapterProfile, subType : 'KalturaOSSAdapterProfile' }
            }
        );
        return result;
    }
}

