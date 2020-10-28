
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaDynamicListFilter, KalturaDynamicListFilterArgs } from './KalturaDynamicListFilter';

export interface KalturaDynamicListSearchFilterArgs  extends KalturaDynamicListFilterArgs {
    idEqual? : number;
	valueEqual? : string;
}


export class KalturaDynamicListSearchFilter extends KalturaDynamicListFilter {

    idEqual : number;
	valueEqual : string;

    constructor(data? : KalturaDynamicListSearchFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDynamicListSearchFilter' },
				idEqual : { type : 'n' },
				valueEqual : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaDynamicListSearchFilter',KalturaDynamicListSearchFilter);
