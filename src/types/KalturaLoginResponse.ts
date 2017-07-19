
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaOTTUser } from './KalturaOTTUser';
import { KalturaLoginSession } from './KalturaLoginSession';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaLoginResponseArgs  extends KalturaObjectBaseArgs {
    user? : KalturaOTTUser;
	loginSession? : KalturaLoginSession;
}


export class KalturaLoginResponse extends KalturaObjectBase {

    user : KalturaOTTUser;
	loginSession : KalturaLoginSession;

    constructor(data? : KalturaLoginResponseArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaLoginResponse' },
				user : { type : 'o', subTypeConstructor : KalturaOTTUser, subType : 'KalturaOTTUser' },
				loginSession : { type : 'o', subTypeConstructor : KalturaLoginSession, subType : 'KalturaLoginSession' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaLoginResponse',KalturaLoginResponse);
