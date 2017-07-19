
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaDeviceBrandArgs  extends KalturaObjectBaseArgs {
    name? : string;
}

/** 
* Device brand details
**/
export class KalturaDeviceBrand extends KalturaObjectBase {

    readonly id : number;
	name : string;
	readonly deviceFamilyid : number;

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
				id : { type : 'n', readOnly : true },
				name : { type : 's' },
				deviceFamilyid : { type : 'n', readOnly : true }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaDeviceBrand',KalturaDeviceBrand);
