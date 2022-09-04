
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaBaseBulkSegments, KalturaBaseBulkSegmentsArgs } from './KalturaBaseBulkSegments';

export interface KalturaBulkSegmentedHouseholdsDataArgs  extends KalturaBaseBulkSegmentsArgs {
    
}


export class KalturaBulkSegmentedHouseholdsData extends KalturaBaseBulkSegments {

    

    constructor(data? : KalturaBulkSegmentedHouseholdsDataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBulkSegmentedHouseholdsData' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaBulkSegmentedHouseholdsData',KalturaBulkSegmentedHouseholdsData);
