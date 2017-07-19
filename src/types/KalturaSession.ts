
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaSessionType } from './KalturaSessionType';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaSessionArgs  extends KalturaObjectBaseArgs {
    ks? : string;
	sessionType? : KalturaSessionType;
	partnerId? : number;
	userId? : string;
	expiry? : number;
	privileges? : string;
	udid? : string;
	createDate? : number;
}

/** 
* Kaltura Session
**/
export class KalturaSession extends KalturaObjectBase {

    ks : string;
	sessionType : KalturaSessionType;
	partnerId : number;
	userId : string;
	expiry : number;
	privileges : string;
	udid : string;
	createDate : number;

    constructor(data? : KalturaSessionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaSession' },
				ks : { type : 's' },
				sessionType : { type : 'en', subTypeConstructor : KalturaSessionType, subType : 'KalturaSessionType' },
				partnerId : { type : 'n' },
				userId : { type : 's' },
				expiry : { type : 'n' },
				privileges : { type : 's' },
				udid : { type : 's' },
				createDate : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaSession',KalturaSession);
