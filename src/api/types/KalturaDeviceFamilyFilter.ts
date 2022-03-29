
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaDeviceFamilyType } from './KalturaDeviceFamilyType';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaDeviceFamilyFilterArgs  extends KalturaFilterArgs {
    idEqual? : number;
	nameEqual? : string;
	typeEqual? : KalturaDeviceFamilyType;
}


export class KalturaDeviceFamilyFilter extends KalturaFilter {

    idEqual : number;
	nameEqual : string;
	typeEqual : KalturaDeviceFamilyType;

    constructor(data? : KalturaDeviceFamilyFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDeviceFamilyFilter' },
				idEqual : { type : 'n' },
				nameEqual : { type : 's' },
				typeEqual : { type : 'es', subTypeConstructor : KalturaDeviceFamilyType, subType : 'KalturaDeviceFamilyType' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaDeviceFamilyFilter',KalturaDeviceFamilyFilter);
