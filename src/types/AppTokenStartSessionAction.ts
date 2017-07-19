
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaSessionInfo } from './KalturaSessionInfo';

import { KalturaSessionType } from './KalturaSessionType';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface AppTokenStartSessionActionArgs  extends KalturaRequestArgs {
    id : string;
	tokenHash : string;
	userId? : number;
	type? : KalturaSessionType;
	expiry? : number;
	udid? : string;
}

/** 
* Starts a new KS (Kaltura Session) based on application authentication token id
**/
export class AppTokenStartSessionAction extends KalturaRequest<KalturaSessionInfo> {

    id : string;
	tokenHash : string;
	userId : number;
	type : KalturaSessionType;
	expiry : number;
	udid : string;

    constructor(data : AppTokenStartSessionActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaSessionInfo', responseConstructor : KalturaSessionInfo  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'apptoken' },
				action : { type : 'c', default : 'startSession' },
				id : { type : 's' },
				tokenHash : { type : 's' },
				userId : { type : 's' },
				type : { type : 'en', subTypeConstructor : KalturaSessionType, subType : 'KalturaSessionType' },
				expiry : { type : 'n' },
				udid : { type : 's' }
            }
        );
        return result;
    }
}

