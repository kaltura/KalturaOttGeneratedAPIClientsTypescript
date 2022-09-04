
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaSegmentationPartnerConfiguration } from './KalturaSegmentationPartnerConfiguration';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface SegmentationTypeGetPartnerConfigurationActionArgs  extends KalturaRequestArgs {
    
}

/**
 * Build request payload for service 'segmentationType' action 'getPartnerConfiguration'.
 *
 * Usage: Get existing segmentation partner configuration
 *
 * Server response type:         KalturaSegmentationPartnerConfiguration
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class SegmentationTypeGetPartnerConfigurationAction extends KalturaRequest<KalturaSegmentationPartnerConfiguration> {

    

    constructor(data? : SegmentationTypeGetPartnerConfigurationActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaSegmentationPartnerConfiguration', responseConstructor : KalturaSegmentationPartnerConfiguration  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'segmentationtype' },
				action : { type : 'c', default : 'getPartnerConfiguration' }
            }
        );
        return result;
    }
}

