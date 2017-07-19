
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaConfigurations } from './KalturaConfigurations';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ConfigurationsAddActionArgs  extends KalturaRequestArgs {
    configurations : KalturaConfigurations;
}

/** 
* Add a new device configuration to a configuration group
**/
export class ConfigurationsAddAction extends KalturaRequest<KalturaConfigurations> {

    configurations : KalturaConfigurations;

    constructor(data : ConfigurationsAddActionArgs)
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
				action : { type : 'c', default : 'add' },
				configurations : { type : 'o', subTypeConstructor : KalturaConfigurations, subType : 'KalturaConfigurations' }
            }
        );
        return result;
    }
}

