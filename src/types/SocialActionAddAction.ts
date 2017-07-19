
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaUserSocialActionResponse } from './KalturaUserSocialActionResponse';

import { KalturaSocialAction } from './KalturaSocialAction';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface SocialActionAddActionArgs  extends KalturaRequestArgs {
    socialAction : KalturaSocialAction;
}

/** 
* Insert new user social action
**/
export class SocialActionAddAction extends KalturaRequest<KalturaUserSocialActionResponse> {

    socialAction : KalturaSocialAction;

    constructor(data : SocialActionAddActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaUserSocialActionResponse', responseConstructor : KalturaUserSocialActionResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'socialaction' },
				action : { type : 'c', default : 'add' },
				socialAction : { type : 'o', subTypeConstructor : KalturaSocialAction, subType : 'KalturaSocialAction' }
            }
        );
        return result;
    }
}

