
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaBulkResponseItem } from './KalturaBulkResponseItem';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaBulkPlaybackContextResponseArgs  extends KalturaListResponseArgs {
    objects? : KalturaBulkResponseItem[];
}


export class KalturaBulkPlaybackContextResponse extends KalturaListResponse {

    objects : KalturaBulkResponseItem[];

    constructor(data? : KalturaBulkPlaybackContextResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaBulkPlaybackContextResponse' },
				objects : { type : 'a', subTypeConstructor : KalturaBulkResponseItem, subType : 'KalturaBulkResponseItem' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaBulkPlaybackContextResponse',KalturaBulkPlaybackContextResponse);
