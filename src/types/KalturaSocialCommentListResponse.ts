
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaSocialComment } from './KalturaSocialComment';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaSocialCommentListResponseArgs  extends KalturaListResponseArgs {
    objects? : KalturaSocialComment[];
}


export class KalturaSocialCommentListResponse extends KalturaListResponse {

    objects : KalturaSocialComment[];

    constructor(data? : KalturaSocialCommentListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaSocialCommentListResponse' },
				objects : { type : 'a', subTypeConstructor : KalturaSocialComment, subType : 'KalturaSocialComment' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaSocialCommentListResponse',KalturaSocialCommentListResponse);
