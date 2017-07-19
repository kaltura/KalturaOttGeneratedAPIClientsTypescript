
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaPinType } from './KalturaPinType';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface PinValidateActionArgs  extends KalturaRequestArgs {
    pin : string;
	type : KalturaPinType;
	ruleId? : number;
}

/** 
* Validate a purchase or parental PIN for a user.
**/
export class PinValidateAction extends KalturaRequest<boolean> {

    pin : string;
	type : KalturaPinType;
	ruleId : number;

    constructor(data : PinValidateActionArgs)
    {
        super(data, {responseType : 'b', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'pin' },
				action : { type : 'c', default : 'validate' },
				pin : { type : 's' },
				type : { type : 'es', subTypeConstructor : KalturaPinType, subType : 'KalturaPinType' },
				ruleId : { type : 'n' }
            }
        );
        return result;
    }
}

