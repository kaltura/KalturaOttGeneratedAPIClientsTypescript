
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaRecordingFilterArgs  extends KalturaFilterArgs {
    statusIn? : string;
	filterExpression? : string;
}

/** 
* Filtering recordings
**/
export class KalturaRecordingFilter extends KalturaFilter {

    statusIn : string;
	filterExpression : string;

    constructor(data? : KalturaRecordingFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaRecordingFilter' },
				statusIn : { type : 's' },
				filterExpression : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaRecordingFilter',KalturaRecordingFilter);
