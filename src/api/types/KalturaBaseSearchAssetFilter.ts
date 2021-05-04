
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaAssetGroupBy } from './KalturaAssetGroupBy';
import { KalturaGroupByOrder } from './KalturaGroupByOrder';
import { KalturaGroupingOption } from './KalturaGroupingOption';
import { KalturaAssetFilter, KalturaAssetFilterArgs } from './KalturaAssetFilter';

export interface KalturaBaseSearchAssetFilterArgs  extends KalturaAssetFilterArgs {
    kSql? : string;
	groupBy? : KalturaAssetGroupBy[];
	groupOrderBy? : KalturaGroupByOrder;
	groupingOptionEqual? : KalturaGroupingOption;
}


export class KalturaBaseSearchAssetFilter extends KalturaAssetFilter {

    kSql : string;
	groupBy : KalturaAssetGroupBy[];
	groupOrderBy : KalturaGroupByOrder;
	groupingOptionEqual : KalturaGroupingOption;

    constructor(data? : KalturaBaseSearchAssetFilterArgs)
    {
        super(data);
        if (typeof this.groupBy === 'undefined') this.groupBy = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBaseSearchAssetFilter' },
				kSql : { type : 's' },
				groupBy : { type : 'a', subTypeConstructor : KalturaAssetGroupBy, subType : 'KalturaAssetGroupBy' },
				groupOrderBy : { type : 'es', subTypeConstructor : KalturaGroupByOrder, subType : 'KalturaGroupByOrder' },
				groupingOptionEqual : { type : 'es', subTypeConstructor : KalturaGroupingOption, subType : 'KalturaGroupingOption' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaBaseSearchAssetFilter',KalturaBaseSearchAssetFilter);
