
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaAssetFilePpv } from './KalturaAssetFilePpv';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface AssetFilePpvUpdateActionArgs  extends KalturaRequestArgs {
    assetFileId : number;
	ppvModuleId : number;
	assetFilePpv : KalturaAssetFilePpv;
}

/**
 * Build request payload for service 'assetFilePpv' action 'update'.
 *
 * Usage: Update assetFilePpv
 *
 * Server response type:         KalturaAssetFilePpv
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class AssetFilePpvUpdateAction extends KalturaRequest<KalturaAssetFilePpv> {

    assetFileId : number;
	ppvModuleId : number;
	assetFilePpv : KalturaAssetFilePpv;

    constructor(data : AssetFilePpvUpdateActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaAssetFilePpv', responseConstructor : KalturaAssetFilePpv  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'assetfileppv' },
				action : { type : 'c', default : 'update' },
				assetFileId : { type : 'n' },
				ppvModuleId : { type : 'n' },
				assetFilePpv : { type : 'o', subTypeConstructor : KalturaAssetFilePpv, subType : 'KalturaAssetFilePpv' }
            }
        );
        return result;
    }
}

