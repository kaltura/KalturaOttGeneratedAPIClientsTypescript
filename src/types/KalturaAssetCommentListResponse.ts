
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaAssetComment } from './KalturaAssetComment';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaAssetCommentListResponseArgs  extends KalturaListResponseArgs {
    objects? : KalturaAssetComment[];
}

/** 
* Asset Comment Response
**/
export class KalturaAssetCommentListResponse extends KalturaListResponse {

    objects : KalturaAssetComment[];

    constructor(data? : KalturaAssetCommentListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaAssetCommentListResponse' },
				objects : { type : 'a', subTypeConstructor : KalturaAssetComment, subType : 'KalturaAssetComment' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaAssetCommentListResponse',KalturaAssetCommentListResponse);
