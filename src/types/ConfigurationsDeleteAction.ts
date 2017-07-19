
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ConfigurationsDeleteActionArgs  extends KalturaRequestArgs {
    id : string;
}

/** 
* Delete a device configuration
**/
export class ConfigurationsDeleteAction extends KalturaRequest<boolean> {

    id : string;

    constructor(data : ConfigurationsDeleteActionArgs)
    {
        super(data, {responseType : 'b', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'configurations' },
				action : { type : 'c', default : 'delete' },
				id : { type : 's' }
            }
        );
        return result;
    }
}

