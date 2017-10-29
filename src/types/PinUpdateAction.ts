
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaPin } from './KalturaPin';

import { KalturaEntityReferenceBy } from './KalturaEntityReferenceBy';
import { KalturaPinType } from './KalturaPinType';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface PinUpdateActionArgs  extends KalturaRequestArgs {
    by : KalturaEntityReferenceBy;
	type : KalturaPinType;
	pin : KalturaPin;
	ruleId? : number;
}

/**
 * Build request payload for service 'pin' action 'update'.
 *
 * Usage: Set the parental or purchase PIN that applies for the user or the household
 *
 * Server response type:         KalturaPin
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class PinUpdateAction extends KalturaRequest<KalturaPin> {

    by : KalturaEntityReferenceBy;
	type : KalturaPinType;
	pin : KalturaPin;
	ruleId : number;

    constructor(data : PinUpdateActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaPin', responseConstructor : KalturaPin  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'pin' },
				action : { type : 'c', default : 'update' },
				by : { type : 'es', subTypeConstructor : KalturaEntityReferenceBy, subType : 'KalturaEntityReferenceBy' },
				type : { type : 'es', subTypeConstructor : KalturaPinType, subType : 'KalturaPinType' },
				pin : { type : 'o', subTypeConstructor : KalturaPin, subType : 'KalturaPin' },
				ruleId : { type : 'n' }
            }
        );
        return result;
    }
}

