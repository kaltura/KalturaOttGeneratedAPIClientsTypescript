
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ConfigurationGroupDeleteActionArgs  extends KalturaRequestArgs {
    id : string;
}

/** 
* Remove a configuration group, including its tags, device configurations and
* devices associations
**/
export class ConfigurationGroupDeleteAction extends KalturaRequest<boolean> {

    id : string;

    constructor(data : ConfigurationGroupDeleteActionArgs)
    {
        super(data, {responseType : 'b', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'configurationgroup' },
				action : { type : 'c', default : 'delete' },
				id : { type : 's' }
            }
        );
        return result;
    }
}

