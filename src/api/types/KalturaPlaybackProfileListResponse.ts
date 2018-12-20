
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaPlaybackProfile } from './KalturaPlaybackProfile';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaPlaybackProfileListResponseArgs  extends KalturaListResponseArgs {
    objects? : KalturaPlaybackProfile[];
}


export class KalturaPlaybackProfileListResponse extends KalturaListResponse {

    objects : KalturaPlaybackProfile[];

    constructor(data? : KalturaPlaybackProfileListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaPlaybackProfileListResponse' },
				objects : { type : 'a', subTypeConstructor : KalturaPlaybackProfile, subType : 'KalturaPlaybackProfile' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaPlaybackProfileListResponse',KalturaPlaybackProfileListResponse);
