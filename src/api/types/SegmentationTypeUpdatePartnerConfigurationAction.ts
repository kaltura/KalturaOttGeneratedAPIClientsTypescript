
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaSegmentationPartnerConfiguration } from './KalturaSegmentationPartnerConfiguration';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface SegmentationTypeUpdatePartnerConfigurationActionArgs  extends KalturaRequestArgs {
    configuration : KalturaSegmentationPartnerConfiguration;
}

/**
 * Build request payload for service 'segmentationType' action 'updatePartnerConfiguration'.
 *
 * Usage: Sets partner configuration for segments configuration
 *
 * Server response type:         boolean
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class SegmentationTypeUpdatePartnerConfigurationAction extends KalturaRequest<boolean> {

    configuration : KalturaSegmentationPartnerConfiguration;

    constructor(data : SegmentationTypeUpdatePartnerConfigurationActionArgs)
    {
        super(data, {responseType : 'b', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'segmentationtype' },
				action : { type : 'c', default : 'updatePartnerConfiguration' },
				configuration : { type : 'o', subTypeConstructor : KalturaSegmentationPartnerConfiguration, subType : 'KalturaSegmentationPartnerConfiguration' }
            }
        );
        return result;
    }
}

