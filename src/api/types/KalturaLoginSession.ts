
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaLoginSessionArgs  extends KalturaObjectBaseArgs {
    ks? : string;
	expiry? : number;
}


export class KalturaLoginSession extends KalturaObjectBase {

    ks : string;
	expiry : number;

    constructor(data? : KalturaLoginSessionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaLoginSession' },
				ks : { type : 's' },
				expiry : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaLoginSession',KalturaLoginSession);
