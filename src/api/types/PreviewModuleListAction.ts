
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaPreviewModuleListResponse } from './KalturaPreviewModuleListResponse';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface PreviewModuleListActionArgs  extends KalturaRequestArgs {
    
}

/**
 * Build request payload for service 'previewModule' action 'list'.
 *
 * Usage: Internal API !!! Returns all PreviewModule
 *
 * Server response type:         KalturaPreviewModuleListResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class PreviewModuleListAction extends KalturaRequest<KalturaPreviewModuleListResponse> {

    

    constructor(data? : PreviewModuleListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaPreviewModuleListResponse', responseConstructor : KalturaPreviewModuleListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'previewmodule' },
				action : { type : 'c', default : 'list' }
            }
        );
        return result;
    }
}

