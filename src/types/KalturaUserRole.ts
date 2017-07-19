
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaPermission } from './KalturaPermission';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaUserRoleArgs  extends KalturaObjectBaseArgs {
    name? : string;
	permissions? : KalturaPermission[];
}


export class KalturaUserRole extends KalturaObjectBase {

    readonly id : number;
	name : string;
	permissions : KalturaPermission[];

    constructor(data? : KalturaUserRoleArgs)
    {
        super(data);
        if (typeof this.permissions === 'undefined') this.permissions = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaUserRole' },
				id : { type : 'n', readOnly : true },
				name : { type : 's' },
				permissions : { type : 'a', subTypeConstructor : KalturaPermission, subType : 'KalturaPermission' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaUserRole',KalturaUserRole);
