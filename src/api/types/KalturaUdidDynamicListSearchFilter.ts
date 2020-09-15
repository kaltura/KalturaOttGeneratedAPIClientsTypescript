
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaDynamicListFilter, KalturaDynamicListFilterArgs } from './KalturaDynamicListFilter';

export interface KalturaUdidDynamicListSearchFilterArgs  extends KalturaDynamicListFilterArgs {
    
}


export class KalturaUdidDynamicListSearchFilter extends KalturaDynamicListFilter {

    

    constructor(data? : KalturaUdidDynamicListSearchFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaUdidDynamicListSearchFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaUdidDynamicListSearchFilter',KalturaUdidDynamicListSearchFilter);
