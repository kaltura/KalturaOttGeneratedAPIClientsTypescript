
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaBulk } from './KalturaBulk';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface BulkServeLogActionArgs  extends KalturaRequestArgs {
    id : number;
}

/**
 * Build request payload for service 'bulk' action 'serveLog'.
 *
 * Usage: ServeLog action returns the log file for the bulk action
 *
 * Server response type:         KalturaBulk
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class BulkServeLogAction extends KalturaRequest<KalturaBulk> {

    id : number;

    constructor(data : BulkServeLogActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaBulk', responseConstructor : KalturaBulk  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'bulk' },
				action : { type : 'c', default : 'serveLog' },
				id : { type : 'n' }
            }
        );
        return result;
    }
}

