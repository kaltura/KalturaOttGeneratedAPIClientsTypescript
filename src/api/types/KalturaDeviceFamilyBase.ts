
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaDeviceFamilyBaseArgs  extends KalturaObjectBaseArgs {
    id? : number;
}


export class KalturaDeviceFamilyBase extends KalturaObjectBase {

    id : number;
	readonly name : string;

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
				id : { type : 'n' },
				name : { type : 's', readOnly : true }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaDeviceFamilyBase',KalturaDeviceFamilyBase);
