
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRegionChannelNumber } from './KalturaRegionChannelNumber';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface RegionLinearchannelbulkaddActionArgs  extends KalturaRequestArgs {
    linearChannelId : number;
	regionChannelNumbers : KalturaRegionChannelNumber[];
}

/**
 * Build request payload for service 'region' action 'linearchannelbulkadd'.
 *
 * Usage: Adds a linear channel to the list of regions
 *
 * Server response type:         boolean
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class RegionLinearchannelbulkaddAction extends KalturaRequest<boolean> {

    linearChannelId : number;
	regionChannelNumbers : KalturaRegionChannelNumber[];

    constructor(data : RegionLinearchannelbulkaddActionArgs)
    {
        super(data, {responseType : 'b', responseSubType : '', responseConstructor : null });
        if (typeof this.regionChannelNumbers === 'undefined') this.regionChannelNumbers = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'region' },
				action : { type : 'c', default : 'linearchannelbulkadd' },
				linearChannelId : { type : 'n' },
				regionChannelNumbers : { type : 'a', subTypeConstructor : KalturaRegionChannelNumber, subType : 'KalturaRegionChannelNumber' }
            }
        );
        return result;
    }
}

