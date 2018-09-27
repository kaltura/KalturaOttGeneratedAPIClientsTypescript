
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface AssetFilePpvDeleteActionArgs  extends KalturaRequestArgs {
    assetFileId : number;
	ppvModuleId : number;
}

/**
 * Build request payload for service 'assetFilePpv' action 'delete'.
 *
 * Usage: Delete asset file ppv
 *
 * Server response type:         boolean
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class AssetFilePpvDeleteAction extends KalturaRequest<boolean> {

    assetFileId : number;
	ppvModuleId : number;

    constructor(data : AssetFilePpvDeleteActionArgs)
    {
        super(data, {responseType : 'b', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'assetfileppv' },
				action : { type : 'c', default : 'delete' },
				assetFileId : { type : 'n' },
				ppvModuleId : { type : 'n' }
            }
        );
        return result;
    }
}

