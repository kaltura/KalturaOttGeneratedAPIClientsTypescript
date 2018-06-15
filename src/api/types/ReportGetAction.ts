
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaReport } from './KalturaReport';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ReportGetActionArgs  extends KalturaRequestArgs {
    udid : string;
}

/**
 * Build request payload for service 'report' action 'get'.
 *
 * Usage: Return a device configuration retrieval log request for a specific device
 *
 * Server response type:         KalturaReport
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class ReportGetAction extends KalturaRequest<KalturaReport> {

    udid : string;

    constructor(data : ReportGetActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaReport', responseConstructor : KalturaReport  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'report' },
				action : { type : 'c', default : 'get' },
				udid : { type : 's' }
            }
        );
        return result;
    }
}

