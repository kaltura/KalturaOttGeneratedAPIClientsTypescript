
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaRegistrySettingsListResponse } from './KalturaRegistrySettingsListResponse';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface RegistrySettingsListActionArgs  extends KalturaRequestArgs {
    
}

/**
 * Build request payload for service 'registrySettings' action 'list'.
 *
 * Usage: Retrieve the registry settings
 *
 * Server response type:         KalturaRegistrySettingsListResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class RegistrySettingsListAction extends KalturaRequest<KalturaRegistrySettingsListResponse> {

    

    constructor(data? : RegistrySettingsListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaRegistrySettingsListResponse', responseConstructor : KalturaRegistrySettingsListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'registrysettings' },
				action : { type : 'c', default : 'list' }
            }
        );
        return result;
    }
}

