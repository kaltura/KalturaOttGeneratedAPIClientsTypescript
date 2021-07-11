
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaDeviceFamilyBaseArgs  extends KalturaObjectBaseArgs {
    name? : string;
}


export class KalturaDeviceFamilyBase extends KalturaObjectBase {

    readonly id : number;
	name : string;

    constructor(data? : KalturaDeviceFamilyBaseArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDeviceFamilyBase' },
				id : { type : 'n', readOnly : true },
				name : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaDeviceFamilyBase',KalturaDeviceFamilyBase);
