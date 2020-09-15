
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaDynamicListFilter, KalturaDynamicListFilterArgs } from './KalturaDynamicListFilter';

export interface KalturaDynamicListSearchFilterArgs  extends KalturaDynamicListFilterArgs {
    valueIn? : string;
}


export class KalturaDynamicListSearchFilter extends KalturaDynamicListFilter {

    valueIn : string;

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
				valueIn : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaDynamicListSearchFilter',KalturaDynamicListSearchFilter);
