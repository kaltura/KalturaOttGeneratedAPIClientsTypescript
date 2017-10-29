
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaExternalChannelProfile } from './KalturaExternalChannelProfile';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaExternalChannelProfileListResponseArgs  extends KalturaListResponseArgs {
    objects? : KalturaExternalChannelProfile[];
}


export class KalturaExternalChannelProfileListResponse extends KalturaListResponse {

    objects : KalturaExternalChannelProfile[];

    constructor(data? : KalturaExternalChannelProfileListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaExternalChannelProfileListResponse' },
				objects : { type : 'a', subTypeConstructor : KalturaExternalChannelProfile, subType : 'KalturaExternalChannelProfile' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaExternalChannelProfileListResponse',KalturaExternalChannelProfileListResponse);
