
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTopic } from './KalturaTopic';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface TopicGetActionArgs  extends KalturaRequestArgs {
    id : number;
}

/**
 * Build request payload for service 'topic' action 'get'.
 *
 * Usage: Gets a topic
 *
 * Server response type:         KalturaTopic
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class TopicGetAction extends KalturaRequest<KalturaTopic> {

    id : number;

    constructor(data : TopicGetActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaTopic', responseConstructor : KalturaTopic  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'topic' },
				action : { type : 'c', default : 'get' },
				id : { type : 'n' }
            }
        );
        return result;
    }
}

