
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaAssetStruct } from './KalturaAssetStruct';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface AssetStructGetActionArgs  extends KalturaRequestArgs {
    id : number;
}

/**
 * Build request payload for service 'assetStruct' action 'get'.
 *
 * Usage: Get AssetStruct by ID
 *
 * Server response type:         KalturaAssetStruct
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class AssetStructGetAction extends KalturaRequest<KalturaAssetStruct> {

    id : number;

    constructor(data : AssetStructGetActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaAssetStruct', responseConstructor : KalturaAssetStruct  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'assetstruct' },
				action : { type : 'c', default : 'get' },
				id : { type : 'n' }
            }
        );
        return result;
    }
}

