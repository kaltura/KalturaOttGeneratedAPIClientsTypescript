
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaApiExceptionArg } from './KalturaApiExceptionArg';
import { KalturaBulkResponseObject, KalturaBulkResponseObjectArgs } from './KalturaBulkResponseObject';

export interface KalturaBulkPlaybackContextErrorArgs  extends KalturaBulkResponseObjectArgs {
    code? : string;
	message? : string;
	args? : KalturaApiExceptionArg[];
}


export class KalturaBulkPlaybackContextError extends KalturaBulkResponseObject {

    code : string;
	message : string;
	args : KalturaApiExceptionArg[];

    constructor(data? : KalturaBulkPlaybackContextErrorArgs)
    {
        super(data);
        if (typeof this.args === 'undefined') this.args = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBulkPlaybackContextError' },
				code : { type : 's' },
				message : { type : 's' },
				args : { type : 'a', subTypeConstructor : KalturaApiExceptionArg, subType : 'KalturaApiExceptionArg' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaBulkPlaybackContextError',KalturaBulkPlaybackContextError);
