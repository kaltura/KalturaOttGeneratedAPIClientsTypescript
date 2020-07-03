
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaPushMessageArgs  extends KalturaObjectBaseArgs {
    message? : string;
	sound? : string;
	action? : string;
	url? : string;
}


export class KalturaPushMessage extends KalturaObjectBase {

    message : string;
	sound : string;
	action : string;
	url : string;

    constructor(data? : KalturaPushMessageArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaPushMessage' },
				message : { type : 's' },
				sound : { type : 's' },
				action : { type : 's' },
				url : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaPushMessage',KalturaPushMessage);
