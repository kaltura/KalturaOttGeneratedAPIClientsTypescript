
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaIotProfileAws } from './KalturaIotProfileAws';
import { KalturaOTTObjectSupportNullable, KalturaOTTObjectSupportNullableArgs } from './KalturaOTTObjectSupportNullable';

export interface KalturaIotProfileArgs  extends KalturaOTTObjectSupportNullableArgs {
    adapterUrl? : string;
	iotProfileAws? : KalturaIotProfileAws;
}


export class KalturaIotProfile extends KalturaOTTObjectSupportNullable {

    adapterUrl : string;
	iotProfileAws : KalturaIotProfileAws;

    constructor(data? : KalturaIotProfileArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaIotProfile' },
				adapterUrl : { type : 's' },
				iotProfileAws : { type : 'o', subTypeConstructor : KalturaIotProfileAws, subType : 'KalturaIotProfileAws' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaIotProfile',KalturaIotProfile);
