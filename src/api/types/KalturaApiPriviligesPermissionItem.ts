
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaPermissionItem, KalturaPermissionItemArgs } from './KalturaPermissionItem';

export interface KalturaApiPriviligesPermissionItemArgs  extends KalturaPermissionItemArgs {
    object? : string;
	parameter? : string;
}


export class KalturaApiPriviligesPermissionItem extends KalturaPermissionItem {

    object : string;
	parameter : string;

    constructor(data? : KalturaApiPriviligesPermissionItemArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaApiPriviligesPermissionItem' },
				object : { type : 's' },
				parameter : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaApiPriviligesPermissionItem',KalturaApiPriviligesPermissionItem);
