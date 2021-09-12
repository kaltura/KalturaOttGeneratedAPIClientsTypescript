
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaPreviewModule } from './KalturaPreviewModule';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface PreviewModuleUpdateActionArgs  extends KalturaRequestArgs {
    id : number;
	previewModule : KalturaPreviewModule;
}

/**
 * Build request payload for service 'previewModule' action 'update'.
 *
 * Usage: Update PreviewModule
 *
 * Server response type:         KalturaPreviewModule
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class PreviewModuleUpdateAction extends KalturaRequest<KalturaPreviewModule> {

    id : number;
	previewModule : KalturaPreviewModule;

    constructor(data : PreviewModuleUpdateActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaPreviewModule', responseConstructor : KalturaPreviewModule  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'previewmodule' },
				action : { type : 'c', default : 'update' },
				id : { type : 'n' },
				previewModule : { type : 'o', subTypeConstructor : KalturaPreviewModule, subType : 'KalturaPreviewModule' }
            }
        );
        return result;
    }
}

