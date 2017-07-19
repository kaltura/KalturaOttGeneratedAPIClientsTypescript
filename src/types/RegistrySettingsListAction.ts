
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaRegistrySettingsListResponse } from './KalturaRegistrySettingsListResponse';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface RegistrySettingsListActionArgs  extends KalturaRequestArgs {
    
}

/** 
* Retrieve the registry settings.
**/
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

