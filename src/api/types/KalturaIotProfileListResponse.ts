
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaIotProfile } from './KalturaIotProfile';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaIotProfileListResponseArgs  extends KalturaListResponseArgs {
    objects? : KalturaIotProfile[];
}


export class KalturaIotProfileListResponse extends KalturaListResponse {

    objects : KalturaIotProfile[];

    constructor(data? : KalturaIotProfileListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaIotProfileListResponse' },
				objects : { type : 'a', subTypeConstructor : KalturaIotProfile, subType : 'KalturaIotProfile' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaIotProfileListResponse',KalturaIotProfileListResponse);
