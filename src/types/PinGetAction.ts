
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaPin } from './KalturaPin';

import { KalturaEntityReferenceBy } from './KalturaEntityReferenceBy';
import { KalturaPinType } from './KalturaPinType';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface PinGetActionArgs  extends KalturaRequestArgs {
    by : KalturaEntityReferenceBy;
	type : KalturaPinType;
	ruleId? : number;
}

/** 
* Retrieve the parental or purchase PIN that applies for the household or user.
* Includes specification of where the PIN was defined at – account, household or
* user  level
**/
export class PinGetAction extends KalturaRequest<KalturaPin> {

    by : KalturaEntityReferenceBy;
	type : KalturaPinType;
	ruleId : number;

    constructor(data : PinGetActionArgs)
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
				action : { type : 'c', default : 'get' },
				by : { type : 'es', subTypeConstructor : KalturaEntityReferenceBy, subType : 'KalturaEntityReferenceBy' },
				type : { type : 'es', subTypeConstructor : KalturaPinType, subType : 'KalturaPinType' },
				ruleId : { type : 'n' }
            }
        );
        return result;
    }
}

