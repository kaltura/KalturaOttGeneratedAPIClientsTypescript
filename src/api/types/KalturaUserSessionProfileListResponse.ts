
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaUserSessionProfile } from './KalturaUserSessionProfile';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaUserSessionProfileListResponseArgs  extends KalturaListResponseArgs {
    objects? : KalturaUserSessionProfile[];
}


export class KalturaUserSessionProfileListResponse extends KalturaListResponse {

    objects : KalturaUserSessionProfile[];

    constructor(data? : KalturaUserSessionProfileListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaUserSessionProfileListResponse' },
				objects : { type : 'a', subTypeConstructor : KalturaUserSessionProfile, subType : 'KalturaUserSessionProfile' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaUserSessionProfileListResponse',KalturaUserSessionProfileListResponse);
