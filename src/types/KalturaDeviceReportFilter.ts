
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaReportFilter, KalturaReportFilterArgs } from './KalturaReportFilter';

export interface KalturaDeviceReportFilterArgs  extends KalturaReportFilterArgs {
    lastAccessDateGreaterThanOrEqual? : number;
}

/** 
* Report filter
**/
export class KalturaDeviceReportFilter extends KalturaReportFilter {

    lastAccessDateGreaterThanOrEqual : number;

    constructor(data? : KalturaDeviceReportFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDeviceReportFilter' },
				lastAccessDateGreaterThanOrEqual : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaDeviceReportFilter',KalturaDeviceReportFilter);
