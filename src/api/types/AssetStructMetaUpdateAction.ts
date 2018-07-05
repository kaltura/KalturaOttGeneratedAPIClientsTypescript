
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaAssetStructMeta } from './KalturaAssetStructMeta';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface AssetStructMetaUpdateActionArgs  extends KalturaRequestArgs {
    assetStructId : number;
	metaId : number;
	assetStructMeta : KalturaAssetStructMeta;
}

/**
 * Build request payload for service 'assetStructMeta' action 'update'.
 *
 * Usage: Update Asset struct meta
 *
 * Server response type:         KalturaAssetStructMeta
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class AssetStructMetaUpdateAction extends KalturaRequest<KalturaAssetStructMeta> {

    assetStructId : number;
	metaId : number;
	assetStructMeta : KalturaAssetStructMeta;

    constructor(data : AssetStructMetaUpdateActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaAssetStructMeta', responseConstructor : KalturaAssetStructMeta  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'assetstructmeta' },
				action : { type : 'c', default : 'update' },
				assetStructId : { type : 'n' },
				metaId : { type : 'n' },
				assetStructMeta : { type : 'o', subTypeConstructor : KalturaAssetStructMeta, subType : 'KalturaAssetStructMeta' }
            }
        );
        return result;
    }
}

