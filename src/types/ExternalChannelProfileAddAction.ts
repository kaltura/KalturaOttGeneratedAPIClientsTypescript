
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaExternalChannelProfile } from './KalturaExternalChannelProfile';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ExternalChannelProfileAddActionArgs  extends KalturaRequestArgs {
    externalChannel : KalturaExternalChannelProfile;
}

/** 
* Insert new External channel for partner
**/
export class ExternalChannelProfileAddAction extends KalturaRequest<KalturaExternalChannelProfile> {

    externalChannel : KalturaExternalChannelProfile;

    constructor(data : ExternalChannelProfileAddActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaExternalChannelProfile', responseConstructor : KalturaExternalChannelProfile  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'externalchannelprofile' },
				action : { type : 'c', default : 'add' },
				externalChannel : { type : 'o', subTypeConstructor : KalturaExternalChannelProfile, subType : 'KalturaExternalChannelProfile' }
            }
        );
        return result;
    }
}

