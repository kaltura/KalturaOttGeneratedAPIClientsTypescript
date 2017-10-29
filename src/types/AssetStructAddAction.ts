
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaAssetStruct } from './KalturaAssetStruct';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface AssetStructAddActionArgs  extends KalturaRequestArgs {
    assetStruct : KalturaAssetStruct;
}

/**
 * Build request payload for service 'assetStruct' action 'add'.
 *
 * Usage: Add a new assetStruct
 *
 * Server response type:         KalturaAssetStruct
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class AssetStructAddAction extends KalturaRequest<KalturaAssetStruct> {

    assetStruct : KalturaAssetStruct;

    constructor(data : AssetStructAddActionArgs)
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
				action : { type : 'c', default : 'add' },
				assetStruct : { type : 'o', subTypeConstructor : KalturaAssetStruct, subType : 'KalturaAssetStruct' }
            }
        );
        return result;
    }
}

