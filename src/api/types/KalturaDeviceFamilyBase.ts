
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaDeviceFamilyType } from './KalturaDeviceFamilyType';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaDeviceFamilyBaseArgs  extends KalturaObjectBaseArgs {
    id? : number;
	name? : string;
}


export class KalturaDeviceFamilyBase extends KalturaObjectBase {

    id : number;
	name : string;
	readonly type : KalturaDeviceFamilyType;

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
				name : { type : 's' },
				type : { type : 'es', readOnly : true, subTypeConstructor : KalturaDeviceFamilyType, subType : 'KalturaDeviceFamilyType' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaDeviceFamilyBase',KalturaDeviceFamilyBase);
