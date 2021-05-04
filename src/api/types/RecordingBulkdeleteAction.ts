
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaActionResult } from './KalturaActionResult';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface RecordingBulkdeleteActionArgs  extends KalturaRequestArgs {
    recordingIds : string;
}

/**
 * Build request payload for service 'recording' action 'bulkdelete'.
 *
 * Usage: Delete list of user&#39;s recordings. Recording can be deleted only in status Recorded.
 * Possible error codes for each recording: RecordingNotFound = 3039, RecordingStatusNotValid = 3043, Error = 1
 *
 * Server response type:         KalturaActionResult[]
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class RecordingBulkdeleteAction extends KalturaRequest<KalturaActionResult[]> {

    recordingIds : string;

    constructor(data : RecordingBulkdeleteActionArgs)
    {
        super(data, {responseType : 'a', responseSubType : 'KalturaActionResult', responseConstructor : KalturaActionResult  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'recording' },
				action : { type : 'c', default : 'bulkdelete' },
				recordingIds : { type : 's' }
            }
        );
        return result;
    }
}

