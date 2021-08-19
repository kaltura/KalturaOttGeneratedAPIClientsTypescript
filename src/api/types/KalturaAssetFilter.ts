
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaDynamicOrderBy } from './KalturaDynamicOrderBy';
import { KalturaPersistedFilter, KalturaPersistedFilterArgs } from './KalturaPersistedFilter';

export interface KalturaAssetFilterArgs  extends KalturaPersistedFilterArgs {
    dynamicOrderBy? : KalturaDynamicOrderBy;
	trendingDaysEqual? : number;
}


export class KalturaAssetFilter extends KalturaPersistedFilter {

    dynamicOrderBy : KalturaDynamicOrderBy;
	trendingDaysEqual : number;

    constructor(data? : KalturaAssetFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaAssetFilter' },
				dynamicOrderBy : { type : 'o', subTypeConstructor : KalturaDynamicOrderBy, subType : 'KalturaDynamicOrderBy' },
				trendingDaysEqual : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaAssetFilter',KalturaAssetFilter);
