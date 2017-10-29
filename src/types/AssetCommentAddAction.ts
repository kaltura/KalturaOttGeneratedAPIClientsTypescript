
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaAssetComment } from './KalturaAssetComment';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface AssetCommentAddActionArgs  extends KalturaRequestArgs {
    comment : KalturaAssetComment;
}

/**
 * Build request payload for service 'assetComment' action 'add'.
 *
 * Usage: Add asset comments by asset id
 *
 * Server response type:         KalturaAssetComment
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class AssetCommentAddAction extends KalturaRequest<KalturaAssetComment> {

    comment : KalturaAssetComment;

    constructor(data : AssetCommentAddActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaAssetComment', responseConstructor : KalturaAssetComment  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'assetcomment' },
				action : { type : 'c', default : 'add' },
				comment : { type : 'o', subTypeConstructor : KalturaAssetComment, subType : 'KalturaAssetComment' }
            }
        );
        return result;
    }
}

