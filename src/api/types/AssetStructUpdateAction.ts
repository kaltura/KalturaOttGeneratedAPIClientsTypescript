
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaAssetStruct } from './KalturaAssetStruct';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface AssetStructUpdateActionArgs  extends KalturaRequestArgs {
    id : number;
	assetStruct : KalturaAssetStruct;
}

/**
 * Build request payload for service 'assetStruct' action 'update'.
 *
 * Usage: Update an existing assetStruct
 *
 * Server response type:         KalturaAssetStruct
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class AssetStructUpdateAction extends KalturaRequest<KalturaAssetStruct> {

    id : number;
	assetStruct : KalturaAssetStruct;

    constructor(data : AssetStructUpdateActionArgs)
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
				action : { type : 'c', default : 'update' },
				id : { type : 'n' },
				assetStruct : { type : 'o', subTypeConstructor : KalturaAssetStruct, subType : 'KalturaAssetStruct' }
            }
        );
        return result;
    }
}

