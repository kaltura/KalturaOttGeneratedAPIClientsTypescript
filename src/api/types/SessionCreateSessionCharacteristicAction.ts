
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaSessionCharacteristic } from './KalturaSessionCharacteristic';

import { KalturaStringValueArray } from './KalturaStringValueArray';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface SessionCreateSessionCharacteristicActionArgs  extends KalturaRequestArgs {
    userId : string;
	householdId : number;
	udid : string;
	expiration : number;
	regionId? : number;
	sessionCharacteristicParams? : { [key : string] : KalturaStringValueArray};
}

/**
 * Build request payload for service 'session' action 'createSessionCharacteristic'.
 *
 * Usage: Create session characteristic
 *
 * Server response type:         KalturaSessionCharacteristic
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class SessionCreateSessionCharacteristicAction extends KalturaRequest<KalturaSessionCharacteristic> {

    userId : string;
	householdId : number;
	udid : string;
	expiration : number;
	regionId : number;
	sessionCharacteristicParams : { [key : string] : KalturaStringValueArray};

    constructor(data : SessionCreateSessionCharacteristicActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaSessionCharacteristic', responseConstructor : KalturaSessionCharacteristic  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'session' },
				action : { type : 'c', default : 'createSessionCharacteristic' },
				userId : { type : 's' },
				householdId : { type : 'n' },
				udid : { type : 's' },
				expiration : { type : 'n' },
				regionId : { type : 'n' },
				sessionCharacteristicParams : { type : 'm', subTypeConstructor : KalturaStringValueArray, subType : 'KalturaStringValueArray' }
            }
        );
        return result;
    }
}

