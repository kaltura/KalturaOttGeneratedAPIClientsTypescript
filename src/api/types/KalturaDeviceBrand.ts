
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaDeviceBrandType } from './KalturaDeviceBrandType';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaDeviceBrandArgs  extends KalturaObjectBaseArgs {
    id? : number;
	name? : string;
	deviceFamilyid? : number;
}


export class KalturaDeviceBrand extends KalturaObjectBase {

    id : number;
	name : string;
	deviceFamilyid : number;
	readonly type : KalturaDeviceBrandType;

    constructor(data? : KalturaDeviceBrandArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDeviceBrand' },
				id : { type : 'n' },
				name : { type : 's' },
				deviceFamilyid : { type : 'n' },
				type : { type : 'es', readOnly : true, subTypeConstructor : KalturaDeviceBrandType, subType : 'KalturaDeviceBrandType' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaDeviceBrand',KalturaDeviceBrand);
