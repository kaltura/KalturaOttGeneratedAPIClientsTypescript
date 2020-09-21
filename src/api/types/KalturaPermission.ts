
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaPermissionType } from './KalturaPermissionType';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaPermissionArgs  extends KalturaObjectBaseArgs {
    name? : string;
	friendlyName? : string;
	type? : KalturaPermissionType;
}


export class KalturaPermission extends KalturaObjectBase {

    readonly id : number;
	name : string;
	friendlyName : string;
	readonly dependsOnPermissionNames : string;
	type : KalturaPermissionType;

    constructor(data? : KalturaPermissionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaPermission' },
				id : { type : 'n', readOnly : true },
				name : { type : 's' },
				friendlyName : { type : 's' },
				dependsOnPermissionNames : { type : 's', readOnly : true },
				type : { type : 'es', subTypeConstructor : KalturaPermissionType, subType : 'KalturaPermissionType' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaPermission',KalturaPermission);
