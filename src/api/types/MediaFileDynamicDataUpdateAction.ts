
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaMediaFileDynamicData } from './KalturaMediaFileDynamicData';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface MediaFileDynamicDataUpdateActionArgs  extends KalturaRequestArgs {
    id : number;
	dynamicData : KalturaMediaFileDynamicData;
}

/**
 * Build request payload for service 'mediaFileDynamicData' action 'update'.
 *
 * Usage: Update an existing dynamicData value
 *
 * Server response type:         KalturaMediaFileDynamicData
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class MediaFileDynamicDataUpdateAction extends KalturaRequest<KalturaMediaFileDynamicData> {

    id : number;
	dynamicData : KalturaMediaFileDynamicData;

    constructor(data : MediaFileDynamicDataUpdateActionArgs)
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
				action : { type : 'c', default : 'update' },
				id : { type : 'n' },
				dynamicData : { type : 'o', subTypeConstructor : KalturaMediaFileDynamicData, subType : 'KalturaMediaFileDynamicData' }
            }
        );
        return result;
    }
}

