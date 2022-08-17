
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaCrudFilter, KalturaCrudFilterArgs } from './KalturaCrudFilter';

export interface KalturaDeviceReferenceDataFilterArgs  extends KalturaCrudFilterArgs {
    idIn? : string;
}


export class KalturaDeviceReferenceDataFilter extends KalturaCrudFilter {

    idIn : string;

    constructor(data? : KalturaDeviceReferenceDataFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDeviceReferenceDataFilter' },
				idIn : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaDeviceReferenceDataFilter',KalturaDeviceReferenceDataFilter);
