
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaCategoryItemFilter, KalturaCategoryItemFilterArgs } from './KalturaCategoryItemFilter';

export interface KalturaCategoryItemSearchFilterArgs  extends KalturaCategoryItemFilterArgs {
    kSql? : string;
	rootOnly? : boolean;
	typeEqual? : string;
}


export class KalturaCategoryItemSearchFilter extends KalturaCategoryItemFilter {

    kSql : string;
	rootOnly : boolean;
	typeEqual : string;

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
				rootOnly : { type : 'b' },
				typeEqual : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaCategoryItemSearchFilter',KalturaCategoryItemSearchFilter);
