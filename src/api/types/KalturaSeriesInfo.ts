
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaSeriesInfoArgs  extends KalturaObjectBaseArgs {
    seriesIdMetadataName? : string;
	seriesTypeId? : number;
	episodeTypeId? : number;
}


export class KalturaSeriesInfo extends KalturaObjectBase {

    seriesIdMetadataName : string;
	seriesTypeId : number;
	episodeTypeId : number;

    constructor(data? : KalturaSeriesInfoArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaSeriesInfo' },
				seriesIdMetadataName : { type : 's' },
				seriesTypeId : { type : 'n' },
				episodeTypeId : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaSeriesInfo',KalturaSeriesInfo);
