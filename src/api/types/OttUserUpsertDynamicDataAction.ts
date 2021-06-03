
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDynamicData } from './KalturaDynamicData';

import { KalturaStringValue } from './KalturaStringValue';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface OttUserUpsertDynamicDataActionArgs  extends KalturaRequestArgs {
    key : string;
	value : KalturaStringValue;
}

/**
 * Build request payload for service 'ottUser' action 'upsertDynamicData'.
 *
 * Usage: Adds or updates dynamic data item for a user. If it is needed to update several items, use a multi-request to avoid race conditions
 *
 * Server response type:         KalturaDynamicData
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class OttUserUpsertDynamicDataAction extends KalturaRequest<KalturaDynamicData> {

    key : string;
	value : KalturaStringValue;

    constructor(data : OttUserUpsertDynamicDataActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaDynamicData', responseConstructor : KalturaDynamicData  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'ottuser' },
				action : { type : 'c', default : 'upsertDynamicData' },
				key : { type : 's' },
				value : { type : 'o', subTypeConstructor : KalturaStringValue, subType : 'KalturaStringValue' }
            }
        );
        return result;
    }
}

