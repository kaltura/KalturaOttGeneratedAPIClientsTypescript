
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaAssetType } from './KalturaAssetType';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface AssetPersonalSelectionDeleteActionArgs  extends KalturaRequestArgs {
    assetId : number;
	assetType : KalturaAssetType;
	slotNumber : number;
}

/**
 * Build request payload for service 'assetPersonalSelection' action 'delete'.
 *
 * Usage: Remove asset selection in slot
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class AssetPersonalSelectionDeleteAction extends KalturaRequest<void> {

    assetId : number;
	assetType : KalturaAssetType;
	slotNumber : number;

    constructor(data : AssetPersonalSelectionDeleteActionArgs)
    {
        super(data, {responseType : 'v', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'assetpersonalselection' },
				action : { type : 'c', default : 'delete' },
				assetId : { type : 'n' },
				assetType : { type : 'es', subTypeConstructor : KalturaAssetType, subType : 'KalturaAssetType' },
				slotNumber : { type : 'n' }
            }
        );
        return result;
    }
}

