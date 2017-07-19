
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaSocialConfig } from './KalturaSocialConfig';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface SocialUpdateConfigurationActionArgs  extends KalturaRequestArgs {
    configuration : KalturaSocialConfig;
}

/** 
* Set the user social network’s configuration information
**/
export class SocialUpdateConfigurationAction extends KalturaRequest<KalturaSocialConfig> {

    configuration : KalturaSocialConfig;

    constructor(data : SocialUpdateConfigurationActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaSocialConfig', responseConstructor : KalturaSocialConfig  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'social' },
				action : { type : 'c', default : 'UpdateConfiguration' },
				configuration : { type : 'o', subTypeConstructor : KalturaSocialConfig, subType : 'KalturaSocialConfig' }
            }
        );
        return result;
    }
}

