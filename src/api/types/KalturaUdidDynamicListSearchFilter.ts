
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaDynamicListSearchFilter, KalturaDynamicListSearchFilterArgs } from './KalturaDynamicListSearchFilter';

export interface KalturaUdidDynamicListSearchFilterArgs  extends KalturaDynamicListSearchFilterArgs {
    
}


export class KalturaUdidDynamicListSearchFilter extends KalturaDynamicListSearchFilter {

    

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
