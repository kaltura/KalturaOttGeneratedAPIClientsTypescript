
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaExportTask } from './KalturaExportTask';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaExportTaskListResponseArgs  extends KalturaListResponseArgs {
    objects? : KalturaExportTask[];
}


export class KalturaExportTaskListResponse extends KalturaListResponse {

    objects : KalturaExportTask[];

    constructor(data? : KalturaExportTaskListResponseArgs)
    {
        super(data);
        if (typeof this.objects === 'undefined') this.objects = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaExportTaskListResponse' },
				objects : { type : 'a', subTypeConstructor : KalturaExportTask, subType : 'KalturaExportTask' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaExportTaskListResponse',KalturaExportTaskListResponse);
