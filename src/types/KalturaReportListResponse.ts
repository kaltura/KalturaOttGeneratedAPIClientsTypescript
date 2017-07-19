
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaReport } from './KalturaReport';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaReportListResponseArgs  extends KalturaListResponseArgs {
    objects? : KalturaReport[];
}

/** 
* Reports info wrapper
**/
export class KalturaReportListResponse extends KalturaListResponse {

    objects : KalturaReport[];

    constructor(data? : KalturaReportListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaReportListResponse' },
				objects : { type : 'a', subTypeConstructor : KalturaReport, subType : 'KalturaReport' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaReportListResponse',KalturaReportListResponse);
