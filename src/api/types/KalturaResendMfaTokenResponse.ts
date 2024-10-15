
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaResendMfaTokenResponseArgs  extends KalturaObjectBaseArgs {
    result? : boolean;
}


export class KalturaResendMfaTokenResponse extends KalturaObjectBase {

    result : boolean;

    constructor(data? : KalturaResendMfaTokenResponseArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaResendMfaTokenResponse' },
				result : { type : 'b' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaResendMfaTokenResponse',KalturaResendMfaTokenResponse);
