
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaOTTUserDynamicData } from './KalturaOTTUserDynamicData';

import { KalturaStringValue } from './KalturaStringValue';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface OttUserUpdateDynamicDataActionArgs  extends KalturaRequestArgs {
    key : string;
	value : KalturaStringValue;
}

/**
 * Build request payload for service 'ottUser' action 'updateDynamicData'.
 *
 * Usage: Update user dynamic data. If it is needed to update several items, use a multi-request to avoid race conditions.
 * This API endpoint will deprecated soon. Please use UpsertDynamicData instead of it
 *
 * Server response type:         KalturaOTTUserDynamicData
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class OttUserUpdateDynamicDataAction extends KalturaRequest<KalturaOTTUserDynamicData> {

    key : string;
	value : KalturaStringValue;

    constructor(data : OttUserUpdateDynamicDataActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaOTTUserDynamicData', responseConstructor : KalturaOTTUserDynamicData  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'ottuser' },
				action : { type : 'c', default : 'updateDynamicData' },
				key : { type : 's' },
				value : { type : 'o', subTypeConstructor : KalturaStringValue, subType : 'KalturaStringValue' }
            }
        );
        return result;
    }
}

