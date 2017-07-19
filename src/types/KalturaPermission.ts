
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaPermissionItem } from './KalturaPermissionItem';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaPermissionArgs  extends KalturaObjectBaseArgs {
    name? : string;
	permissionItems? : KalturaPermissionItem[];
}


export class KalturaPermission extends KalturaObjectBase {

    readonly id : number;
	name : string;
	permissionItems : KalturaPermissionItem[];

    constructor(data? : KalturaPermissionArgs)
    {
        super(data);
        if (typeof this.permissionItems === 'undefined') this.permissionItems = [];
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
				permissionItems : { type : 'a', subTypeConstructor : KalturaPermissionItem, subType : 'KalturaPermissionItem' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaPermission',KalturaPermission);
