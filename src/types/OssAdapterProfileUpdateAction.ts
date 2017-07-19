
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaOSSAdapterProfile } from './KalturaOSSAdapterProfile';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface OssAdapterProfileUpdateActionArgs  extends KalturaRequestArgs {
    ossAdapterId : number;
	ossAdapter : KalturaOSSAdapterProfile;
}

/** 
* Update OSS adapter details
**/
export class OssAdapterProfileUpdateAction extends KalturaRequest<KalturaOSSAdapterProfile> {

    ossAdapterId : number;
	ossAdapter : KalturaOSSAdapterProfile;

    constructor(data : OssAdapterProfileUpdateActionArgs)
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
				action : { type : 'c', default : 'update' },
				ossAdapterId : { type : 'n' },
				ossAdapter : { type : 'o', subTypeConstructor : KalturaOSSAdapterProfile, subType : 'KalturaOSSAdapterProfile' }
            }
        );
        return result;
    }
}

