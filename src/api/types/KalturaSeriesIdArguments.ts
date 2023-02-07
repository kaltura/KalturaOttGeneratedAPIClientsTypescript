
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaSeriesIdArgumentsArgs  extends KalturaObjectBaseArgs {
    assetTypeIdIn? : string;
	seriesId? : string;
	seriesIdMetaName? : string;
	seasonNumberMetaName? : string;
	episodeNumberMetaName? : string;
}


export class KalturaSeriesIdArguments extends KalturaObjectBase {

    assetTypeIdIn : string;
	seriesId : string;
	seriesIdMetaName : string;
	seasonNumberMetaName : string;
	episodeNumberMetaName : string;

    constructor(data? : KalturaSeriesIdArgumentsArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaSeriesIdArguments' },
				assetTypeIdIn : { type : 's' },
				seriesId : { type : 's' },
				seriesIdMetaName : { type : 's' },
				seasonNumberMetaName : { type : 's' },
				episodeNumberMetaName : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaSeriesIdArguments',KalturaSeriesIdArguments);
