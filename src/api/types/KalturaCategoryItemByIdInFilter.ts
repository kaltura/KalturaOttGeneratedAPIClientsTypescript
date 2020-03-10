
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaCategoryItemFilter, KalturaCategoryItemFilterArgs } from './KalturaCategoryItemFilter';

export interface KalturaCategoryItemByIdInFilterArgs  extends KalturaCategoryItemFilterArgs {
    idIn? : string;
}


export class KalturaCategoryItemByIdInFilter extends KalturaCategoryItemFilter {

    idIn : string;

    constructor(data? : KalturaCategoryItemByIdInFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaCategoryItemByIdInFilter' },
				idIn : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaCategoryItemByIdInFilter',KalturaCategoryItemByIdInFilter);
