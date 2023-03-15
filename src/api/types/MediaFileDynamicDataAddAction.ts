
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaMediaFileDynamicData } from './KalturaMediaFileDynamicData';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface MediaFileDynamicDataAddActionArgs  extends KalturaRequestArgs {
    dynamicData : KalturaMediaFileDynamicData;
}

/**
 * Build request payload for service 'mediaFileDynamicData' action 'add'.
 *
 * Usage: Add a dynamicData value to the values list of a specific key name in a specific mediaFileTypeId
 *
 * Server response type:         KalturaMediaFileDynamicData
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class MediaFileDynamicDataAddAction extends KalturaRequest<KalturaMediaFileDynamicData> {

    dynamicData : KalturaMediaFileDynamicData;

    constructor(data : MediaFileDynamicDataAddActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaMediaFileDynamicData', responseConstructor : KalturaMediaFileDynamicData  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'mediafiledynamicdata' },
				action : { type : 'c', default : 'add' },
				dynamicData : { type : 'o', subTypeConstructor : KalturaMediaFileDynamicData, subType : 'KalturaMediaFileDynamicData' }
            }
        );
        return result;
    }
}

