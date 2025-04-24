
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaAssetPersonalSelection } from './KalturaAssetPersonalSelection';

import { KalturaAssetType } from './KalturaAssetType';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface AssetPersonalSelectionUpsertActionArgs  extends KalturaRequestArgs {
    assetId : number;
	assetType : KalturaAssetType;
	slotNumber : number;
}

/**
 * Build request payload for service 'assetPersonalSelection' action 'upsert'.
 *
 * Usage: upsert manages asset selections within slots.  It adds a new asset ID if it doesn&#39;t exist, or updates the timestamp if it does.  Slots are limited to 30 unique IDs.  When a slot is full, the oldest entry is removed (FIFO).  Inactive assets are automatically removed after 90 days
 *
 * Server response type:         KalturaAssetPersonalSelection
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class AssetPersonalSelectionUpsertAction extends KalturaRequest<KalturaAssetPersonalSelection> {

    assetId : number;
	assetType : KalturaAssetType;
	slotNumber : number;

    constructor(data : AssetPersonalSelectionUpsertActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaAssetPersonalSelection', responseConstructor : KalturaAssetPersonalSelection  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'assetpersonalselection' },
				action : { type : 'c', default : 'upsert' },
				assetId : { type : 'n' },
				assetType : { type : 'es', subTypeConstructor : KalturaAssetType, subType : 'KalturaAssetType' },
				slotNumber : { type : 'n' }
            }
        );
        return result;
    }
}

