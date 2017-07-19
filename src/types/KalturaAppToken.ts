
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaAppTokenHashType } from './KalturaAppTokenHashType';
import { KalturaSessionType } from './KalturaSessionType';
import { KalturaAppTokenStatus } from './KalturaAppTokenStatus';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaAppTokenArgs  extends KalturaObjectBaseArgs {
    expiry? : number;
	sessionDuration? : number;
	hashType? : KalturaAppTokenHashType;
	sessionPrivileges? : string;
	sessionType? : KalturaSessionType;
	sessionUserId? : string;
}

/** 
* Application token
**/
export class KalturaAppToken extends KalturaObjectBase {

    readonly id : string;
	expiry : number;
	readonly partnerId : number;
	sessionDuration : number;
	hashType : KalturaAppTokenHashType;
	sessionPrivileges : string;
	sessionType : KalturaSessionType;
	readonly status : KalturaAppTokenStatus;
	readonly token : string;
	sessionUserId : string;

    constructor(data? : KalturaAppTokenArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaAppToken' },
				id : { type : 's', readOnly : true },
				expiry : { type : 'n' },
				partnerId : { type : 'n', readOnly : true },
				sessionDuration : { type : 'n' },
				hashType : { type : 'es', subTypeConstructor : KalturaAppTokenHashType, subType : 'KalturaAppTokenHashType' },
				sessionPrivileges : { type : 's' },
				sessionType : { type : 'en', subTypeConstructor : KalturaSessionType, subType : 'KalturaSessionType' },
				status : { type : 'en', readOnly : true, subTypeConstructor : KalturaAppTokenStatus, subType : 'KalturaAppTokenStatus' },
				token : { type : 's', readOnly : true },
				sessionUserId : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaAppToken',KalturaAppToken);
