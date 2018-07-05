
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaAssetReferenceType } from './KalturaAssetReferenceType';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface AssetRemoveMetasAndTagsActionArgs  extends KalturaRequestArgs {
    id : number;
	assetReferenceType : KalturaAssetReferenceType;
	idIn : string;
}

/**
 * Build request payload for service 'asset' action 'removeMetasAndTags'.
 *
 * Usage: remove metas and tags from asset
 *
 * Server response type:         boolean
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class AssetRemoveMetasAndTagsAction extends KalturaRequest<boolean> {

    id : number;
	assetReferenceType : KalturaAssetReferenceType;
	idIn : string;

    constructor(data : AssetRemoveMetasAndTagsActionArgs)
    {
        super(data, {responseType : 'b', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'asset' },
				action : { type : 'c', default : 'removeMetasAndTags' },
				id : { type : 'n' },
				assetReferenceType : { type : 'es', subTypeConstructor : KalturaAssetReferenceType, subType : 'KalturaAssetReferenceType' },
				idIn : { type : 's' }
            }
        );
        return result;
    }
}

