
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaUserLoginPinArgs  extends KalturaObjectBaseArgs {
    pinCode? : string;
	expirationTime? : number;
}

/** 
* Log in pin code details
**/
export class KalturaUserLoginPin extends KalturaObjectBase {

    pinCode : string;
	expirationTime : number;
	readonly userId : string;

    constructor(data? : KalturaUserLoginPinArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaUserLoginPin' },
				pinCode : { type : 's' },
				expirationTime : { type : 'n' },
				userId : { type : 's', readOnly : true }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaUserLoginPin',KalturaUserLoginPin);
