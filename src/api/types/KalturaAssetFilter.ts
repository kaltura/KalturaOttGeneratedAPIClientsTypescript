
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaDynamicOrderBy } from './KalturaDynamicOrderBy';
import { KalturaBaseAssetOrder } from './KalturaBaseAssetOrder';
import { KalturaPersistedFilter, KalturaPersistedFilterArgs } from './KalturaPersistedFilter';

export interface KalturaAssetFilterArgs  extends KalturaPersistedFilterArgs {
    dynamicOrderBy? : KalturaDynamicOrderBy;
	orderingParameters? : KalturaBaseAssetOrder[];
	trendingDaysEqual? : number;
	shouldApplyPriorityGroupsEqual? : boolean;
}


export class KalturaAssetFilter extends KalturaPersistedFilter {

    dynamicOrderBy : KalturaDynamicOrderBy;
	orderingParameters : KalturaBaseAssetOrder[];
	trendingDaysEqual : number;
	shouldApplyPriorityGroupsEqual : boolean;

    constructor(data? : KalturaAssetFilterArgs)
    {
        super(data);
        if (typeof this.orderingParameters === 'undefined') this.orderingParameters = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaAssetFilter' },
				dynamicOrderBy : { type : 'o', subTypeConstructor : KalturaDynamicOrderBy, subType : 'KalturaDynamicOrderBy' },
				orderingParameters : { type : 'a', subTypeConstructor : KalturaBaseAssetOrder, subType : 'KalturaBaseAssetOrder' },
				trendingDaysEqual : { type : 'n' },
				shouldApplyPriorityGroupsEqual : { type : 'b' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaAssetFilter',KalturaAssetFilter);
