
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaOSSAdapterProfile } from './KalturaOSSAdapterProfile';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface OssAdapterProfileAddActionArgs  extends KalturaRequestArgs {
    ossAdapter : KalturaOSSAdapterProfile;
}

/**
 * Build request payload for service 'ossAdapterProfile' action 'add'.
 *
 * Usage: Insert new OSS adapter for partner
 *
 * Server response type:         KalturaOSSAdapterProfile
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
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

