
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ExportTaskDeleteActionArgs  extends KalturaRequestArgs {
    id : number;
}

/** 
* Deletes an existing bulk export task by task identifier
**/
export class ExportTaskDeleteAction extends KalturaRequest<boolean> {

    id : number;

    constructor(data : ExportTaskDeleteActionArgs)
    {
        super(data, {responseType : 'b', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'exporttask' },
				action : { type : 'c', default : 'delete' },
				id : { type : 'n' }
            }
        );
        return result;
    }
}

