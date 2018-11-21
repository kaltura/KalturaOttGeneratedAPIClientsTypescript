
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaAsset } from './KalturaAsset';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface AssetAddActionArgs  extends KalturaRequestArgs {
    asset : KalturaAsset;
}

/**
 * Build request payload for service 'asset' action 'add'.
 *
 * Usage: Add a new asset.
 * For metas of type bool-&gt; use kalturaBoolValue, type number-&gt; KalturaDoubleValue, type date -&gt; KalturaLongValue, type string -&gt; KalturaStringValue
 *
 * Server response type:         KalturaAsset
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class AssetAddAction extends KalturaRequest<KalturaAsset> {

    asset : KalturaAsset;

    constructor(data : AssetAddActionArgs)
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
				action : { type : 'c', default : 'add' },
				asset : { type : 'o', subTypeConstructor : KalturaAsset, subType : 'KalturaAsset' }
            }
        );
        return result;
    }
}

