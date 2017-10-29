
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaAssetFileContext } from './KalturaAssetFileContext';

import { KalturaContextType } from './KalturaContextType';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface AssetFileGetContextActionArgs  extends KalturaRequestArgs {
    id : string;
	contextType : KalturaContextType;
}

/**
 * Build request payload for service 'assetFile' action 'getContext'.
 *
 * Usage: get KalturaAssetFileContext
 *
 * Server response type:         KalturaAssetFileContext
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class AssetFileGetContextAction extends KalturaRequest<KalturaAssetFileContext> {

    id : string;
	contextType : KalturaContextType;

    constructor(data : AssetFileGetContextActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaAssetFileContext', responseConstructor : KalturaAssetFileContext  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'assetfile' },
				action : { type : 'c', default : 'getContext' },
				id : { type : 's' },
				contextType : { type : 'es', subTypeConstructor : KalturaContextType, subType : 'KalturaContextType' }
            }
        );
        return result;
    }
}

