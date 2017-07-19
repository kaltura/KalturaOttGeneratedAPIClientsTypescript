
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaAssetFileContext } from './KalturaAssetFileContext';

import { KalturaContextType } from './KalturaContextType';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface AssetFileGetContextActionArgs  extends KalturaRequestArgs {
    id : string;
	contextType : KalturaContextType;
}

/** 
* get KalturaAssetFileContext
**/
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

