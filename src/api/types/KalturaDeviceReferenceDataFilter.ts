
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaDeviceReferenceDataFilterArgs  extends KalturaFilterArgs {
    idIn? : string;
}


export class KalturaDeviceReferenceDataFilter extends KalturaFilter {

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
