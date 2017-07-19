
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaHouseholdUser } from './KalturaHouseholdUser';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaHouseholdUserListResponseArgs  extends KalturaListResponseArgs {
    objects? : KalturaHouseholdUser[];
}

/** 
* Household users list
**/
export class KalturaHouseholdUserListResponse extends KalturaListResponse {

    objects : KalturaHouseholdUser[];

    constructor(data? : KalturaHouseholdUserListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaHouseholdUserListResponse' },
				objects : { type : 'a', subTypeConstructor : KalturaHouseholdUser, subType : 'KalturaHouseholdUser' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaHouseholdUserListResponse',KalturaHouseholdUserListResponse);
