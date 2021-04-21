
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaLogLevel } from './KalturaLogLevel';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface SystemSetLogLevelActionArgs  extends KalturaRequestArgs {
    level : KalturaLogLevel;
}

/**
 * Build request payload for service 'system' action 'setLogLevel'.
 *
 * Usage: Sets the current level of the KLogger
 *
 * Server response type:         boolean
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class SystemSetLogLevelAction extends KalturaRequest<boolean> {

    level : KalturaLogLevel;

    constructor(data : SystemSetLogLevelActionArgs)
    {
        super(data, {responseType : 'b', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'system' },
				action : { type : 'c', default : 'setLogLevel' },
				level : { type : 'es', subTypeConstructor : KalturaLogLevel, subType : 'KalturaLogLevel' }
            }
        );
        return result;
    }
}

