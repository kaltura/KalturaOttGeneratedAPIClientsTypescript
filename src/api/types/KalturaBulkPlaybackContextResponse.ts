
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaBulkResponseObject } from './KalturaBulkResponseObject';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaBulkPlaybackContextResponseArgs  extends KalturaListResponseArgs {
    objects? : KalturaBulkResponseObject[];
}


export class KalturaBulkPlaybackContextResponse extends KalturaListResponse {

    objects : KalturaBulkResponseObject[];

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
				objects : { type : 'a', subTypeConstructor : KalturaBulkResponseObject, subType : 'KalturaBulkResponseObject' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaBulkPlaybackContextResponse',KalturaBulkPlaybackContextResponse);
