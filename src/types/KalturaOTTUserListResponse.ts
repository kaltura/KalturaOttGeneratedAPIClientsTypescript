
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaOTTUser } from './KalturaOTTUser';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaOTTUserListResponseArgs  extends KalturaListResponseArgs {
    objects? : KalturaOTTUser[];
}


export class KalturaOTTUserListResponse extends KalturaListResponse {

    objects : KalturaOTTUser[];

    constructor(data? : KalturaOTTUserListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaOTTUserListResponse' },
				objects : { type : 'a', subTypeConstructor : KalturaOTTUser, subType : 'KalturaOTTUser' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaOTTUserListResponse',KalturaOTTUserListResponse);
