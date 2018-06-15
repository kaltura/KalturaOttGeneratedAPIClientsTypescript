
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaExportTaskListResponse } from './KalturaExportTaskListResponse';

import { KalturaExportTaskFilter } from './KalturaExportTaskFilter';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ExportTaskListActionArgs  extends KalturaRequestArgs {
    filter? : KalturaExportTaskFilter;
}

/**
 * Build request payload for service 'exportTask' action 'list'.
 *
 * Usage: Returns bulk export tasks by tasks identifiers
 *
 * Server response type:         KalturaExportTaskListResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class ExportTaskListAction extends KalturaRequest<KalturaExportTaskListResponse> {

    filter : KalturaExportTaskFilter;

    constructor(data? : ExportTaskListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaExportTaskListResponse', responseConstructor : KalturaExportTaskListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'exporttask' },
				action : { type : 'c', default : 'list' },
				filter : { type : 'o', subTypeConstructor : KalturaExportTaskFilter, subType : 'KalturaExportTaskFilter' }
            }
        );
        return result;
    }
}

