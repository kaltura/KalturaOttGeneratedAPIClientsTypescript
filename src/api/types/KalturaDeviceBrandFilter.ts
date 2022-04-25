
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaDeviceBrandType } from './KalturaDeviceBrandType';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaDeviceBrandFilterArgs  extends KalturaFilterArgs {
    idEqual? : number;
	deviceFamilyIdEqual? : number;
	nameEqual? : string;
	typeEqual? : KalturaDeviceBrandType;
}


export class KalturaDeviceBrandFilter extends KalturaFilter {

    idEqual : number;
	deviceFamilyIdEqual : number;
	nameEqual : string;
	typeEqual : KalturaDeviceBrandType;

    constructor(data? : KalturaDeviceBrandFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDeviceBrandFilter' },
				idEqual : { type : 'n' },
				deviceFamilyIdEqual : { type : 'n' },
				nameEqual : { type : 's' },
				typeEqual : { type : 'es', subTypeConstructor : KalturaDeviceBrandType, subType : 'KalturaDeviceBrandType' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaDeviceBrandFilter',KalturaDeviceBrandFilter);
