
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaSubtitles } from './KalturaSubtitles';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaSubtitlesListResponseArgs  extends KalturaListResponseArgs {
    objects? : KalturaSubtitles[];
}


export class KalturaSubtitlesListResponse extends KalturaListResponse {

    objects : KalturaSubtitles[];

    constructor(data? : KalturaSubtitlesListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaSubtitlesListResponse' },
				objects : { type : 'a', subTypeConstructor : KalturaSubtitles, subType : 'KalturaSubtitles' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaSubtitlesListResponse',KalturaSubtitlesListResponse);
