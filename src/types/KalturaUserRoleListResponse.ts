
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaUserRole } from './KalturaUserRole';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaUserRoleListResponseArgs  extends KalturaListResponseArgs {
    objects? : KalturaUserRole[];
}

/** 
* User-roles list
**/
export class KalturaUserRoleListResponse extends KalturaListResponse {

    objects : KalturaUserRole[];

    constructor(data? : KalturaUserRoleListResponseArgs)
    {
        super(data);
        if (typeof this.objects === 'undefined') this.objects = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaUserRoleListResponse' },
				objects : { type : 'a', subTypeConstructor : KalturaUserRole, subType : 'KalturaUserRole' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaUserRoleListResponse',KalturaUserRoleListResponse);
