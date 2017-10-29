
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaExportTask } from './KalturaExportTask';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ExportTaskUpdateActionArgs  extends KalturaRequestArgs {
    id : number;
	task : KalturaExportTask;
}

/**
 * Build request payload for service 'exportTask' action 'update'.
 *
 * Usage: Updates an existing bulk export task by task identifier
 *
 * Server response type:         KalturaExportTask
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class ExportTaskUpdateAction extends KalturaRequest<KalturaExportTask> {

    id : number;
	task : KalturaExportTask;

    constructor(data : ExportTaskUpdateActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaExportTask', responseConstructor : KalturaExportTask  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'exporttask' },
				action : { type : 'c', default : 'update' },
				id : { type : 'n' },
				task : { type : 'o', subTypeConstructor : KalturaExportTask, subType : 'KalturaExportTask' }
            }
        );
        return result;
    }
}

