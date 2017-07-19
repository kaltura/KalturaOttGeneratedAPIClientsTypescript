
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaConfigurations } from './KalturaConfigurations';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ConfigurationsGetActionArgs  extends KalturaRequestArgs {
    id : string;
}

/** 
* Return the device configuration
**/
export class ConfigurationsGetAction extends KalturaRequest<KalturaConfigurations> {

    id : string;

    constructor(data : ConfigurationsGetActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaConfigurations', responseConstructor : KalturaConfigurations  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'configurations' },
				action : { type : 'c', default : 'get' },
				id : { type : 's' }
            }
        );
        return result;
    }
}

