
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ConfigurationGroupTagDeleteActionArgs  extends KalturaRequestArgs {
    tag : string;
}

/**
 * Build request payload for service 'configurationGroupTag' action 'delete'.
 *
 * Usage: Remove a tag association from configuration group
 *
 * Server response type:         boolean
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class ConfigurationGroupTagDeleteAction extends KalturaRequest<boolean> {

    tag : string;

    constructor(data : ConfigurationGroupTagDeleteActionArgs)
    {
        super(data, {responseType : 'b', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'configurationgrouptag' },
				action : { type : 'c', default : 'delete' },
				tag : { type : 's' }
            }
        );
        return result;
    }
}

