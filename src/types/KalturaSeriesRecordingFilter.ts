
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaSeriesRecordingFilterArgs  extends KalturaFilterArgs {
    
}

/** 
* Filtering recordings
**/
export class KalturaSeriesRecordingFilter extends KalturaFilter {

    

    constructor(data? : KalturaSeriesRecordingFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaSeriesRecordingFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaSeriesRecordingFilter',KalturaSeriesRecordingFilter);
