
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaSegmentationType } from './KalturaSegmentationType';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface SegmentationTypeAddActionArgs  extends KalturaRequestArgs {
    segmentationType : KalturaSegmentationType;
}

/**
 * Build request payload for service 'segmentationType' action 'add'.
 *
 * Usage:
 *
 * Server response type:         KalturaSegmentationType
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class SegmentationTypeAddAction extends KalturaRequest<KalturaSegmentationType> {

    segmentationType : KalturaSegmentationType;

    constructor(data : SegmentationTypeAddActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaSegmentationType', responseConstructor : KalturaSegmentationType  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'segmentationtype' },
				action : { type : 'c', default : 'add' },
				segmentationType : { type : 'o', subTypeConstructor : KalturaSegmentationType, subType : 'KalturaSegmentationType' }
            }
        );
        return result;
    }
}

