
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaPreviewModule } from './KalturaPreviewModule';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface PreviewModuleAddActionArgs  extends KalturaRequestArgs {
    previewModule : KalturaPreviewModule;
}

/**
 * Build request payload for service 'previewModule' action 'add'.
 *
 * Usage: Insert new PreviewModule for partner
 *
 * Server response type:         KalturaPreviewModule
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class PreviewModuleAddAction extends KalturaRequest<KalturaPreviewModule> {

    previewModule : KalturaPreviewModule;

    constructor(data : PreviewModuleAddActionArgs)
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
				action : { type : 'c', default : 'add' },
				previewModule : { type : 'o', subTypeConstructor : KalturaPreviewModule, subType : 'KalturaPreviewModule' }
            }
        );
        return result;
    }
}

