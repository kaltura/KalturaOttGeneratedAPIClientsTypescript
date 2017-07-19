
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaLoginResponse } from './KalturaLoginResponse';

import { KalturaStringValue } from './KalturaStringValue';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface OttUserLoginActionArgs  extends KalturaRequestArgs {
    partnerId : number;
	username? : string;
	password? : string;
	extraParams? : { [key : string] : KalturaStringValue};
	udid? : string;
}

/** 
* login with user name and password.
**/
export class OttUserLoginAction extends KalturaRequest<KalturaLoginResponse> {

    partnerId : number;
	username : string;
	password : string;
	extraParams : { [key : string] : KalturaStringValue};
	udid : string;

    constructor(data : OttUserLoginActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaLoginResponse', responseConstructor : KalturaLoginResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'ottuser' },
				action : { type : 'c', default : 'login' },
				partnerId : { type : 'n' },
				username : { type : 's' },
				password : { type : 's' },
				extraParams : { type : 'm', subTypeConstructor : KalturaStringValue, subType : 'KalturaStringValue' },
				udid : { type : 's' }
            }
        );
        return result;
    }
}

