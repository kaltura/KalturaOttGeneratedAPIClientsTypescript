
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaBaseBulkSegments, KalturaBaseBulkSegmentsArgs } from './KalturaBaseBulkSegments';

export interface KalturaBulkSegmentedusersDataArgs  extends KalturaBaseBulkSegmentsArgs {
    
}


export class KalturaBulkSegmentedusersData extends KalturaBaseBulkSegments {

    

    constructor(data? : KalturaBulkSegmentedusersDataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBulkSegmentedusersData' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaBulkSegmentedusersData',KalturaBulkSegmentedusersData);
