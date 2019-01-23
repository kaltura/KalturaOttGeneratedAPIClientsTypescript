
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaAsset } from './KalturaAsset';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface AssetUpdateActionArgs  extends KalturaRequestArgs {
    id : number;
	asset : KalturaAsset;
}

/**
 * Build request payload for service 'asset' action 'update'.
 *
 * Usage: update an existing asset.
 * For metas of type bool-&gt; use kalturaBoolValue, type number-&gt; KalturaDoubleValue, type date -&gt; KalturaLongValue, type string -&gt; KalturaStringValue
 *
 * Server response type:         KalturaAsset
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class AssetUpdateAction extends KalturaRequest<KalturaAsset> {

    id : number;
	asset : KalturaAsset;

    constructor(data : AssetUpdateActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaAsset', responseConstructor : KalturaAsset  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'asset' },
				action : { type : 'c', default : 'update' },
				id : { type : 'n' },
				asset : { type : 'o', subTypeConstructor : KalturaAsset, subType : 'KalturaAsset' }
            }
        );
        return result;
    }
}

