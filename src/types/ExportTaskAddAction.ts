
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaExportTask } from './KalturaExportTask';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ExportTaskAddActionArgs  extends KalturaRequestArgs {
    task : KalturaExportTask;
}

/** 
* Adds a new bulk export task
**/
export class ExportTaskAddAction extends KalturaRequest<KalturaExportTask> {

    task : KalturaExportTask;

    constructor(data : ExportTaskAddActionArgs)
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
				action : { type : 'c', default : 'add' },
				task : { type : 'o', subTypeConstructor : KalturaExportTask, subType : 'KalturaExportTask' }
            }
        );
        return result;
    }
}

