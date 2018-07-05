
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaAssetReferenceType } from './KalturaAssetReferenceType';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface AssetDeleteActionArgs  extends KalturaRequestArgs {
    id : number;
	assetReferenceType : KalturaAssetReferenceType;
}

/**
 * Build request payload for service 'asset' action 'delete'.
 *
 * Usage: Delete an existing asset
 *
 * Server response type:         boolean
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class AssetDeleteAction extends KalturaRequest<boolean> {

    id : number;
	assetReferenceType : KalturaAssetReferenceType;

    constructor(data : AssetDeleteActionArgs)
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
				action : { type : 'c', default : 'delete' },
				id : { type : 'n' },
				assetReferenceType : { type : 'es', subTypeConstructor : KalturaAssetReferenceType, subType : 'KalturaAssetReferenceType' }
            }
        );
        return result;
    }
}

