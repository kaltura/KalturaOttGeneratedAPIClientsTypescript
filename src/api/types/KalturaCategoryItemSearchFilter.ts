
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaCategoryItemFilter, KalturaCategoryItemFilterArgs } from './KalturaCategoryItemFilter';

export interface KalturaCategoryItemSearchFilterArgs  extends KalturaCategoryItemFilterArgs {
    kSql? : string;
	rootOnly? : boolean;
}


export class KalturaCategoryItemSearchFilter extends KalturaCategoryItemFilter {

    kSql : string;
	rootOnly : boolean;

    constructor(data? : KalturaCategoryItemSearchFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaCategoryItemSearchFilter' },
				kSql : { type : 's' },
				rootOnly : { type : 'b' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaCategoryItemSearchFilter',KalturaCategoryItemSearchFilter);
