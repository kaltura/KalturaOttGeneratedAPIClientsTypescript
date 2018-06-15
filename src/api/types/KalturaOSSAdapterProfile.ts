
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaStringValue } from './KalturaStringValue';
import { KalturaOSSAdapterBaseProfile, KalturaOSSAdapterBaseProfileArgs } from './KalturaOSSAdapterBaseProfile';

export interface KalturaOSSAdapterProfileArgs  extends KalturaOSSAdapterBaseProfileArgs {
    isActive? : boolean;
	adapterUrl? : string;
	ossAdapterSettings? : { [key : string] : KalturaStringValue};
	externalIdentifier? : string;
}


export class KalturaOSSAdapterProfile extends KalturaOSSAdapterBaseProfile {

    isActive : boolean;
	adapterUrl : string;
	ossAdapterSettings : { [key : string] : KalturaStringValue};
	externalIdentifier : string;
	readonly sharedSecret : string;

    constructor(data? : KalturaOSSAdapterProfileArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaOSSAdapterProfile' },
				isActive : { type : 'b' },
				adapterUrl : { type : 's' },
				ossAdapterSettings : { type : 'm', subTypeConstructor : KalturaStringValue, subType : 'KalturaStringValue' },
				externalIdentifier : { type : 's' },
				sharedSecret : { type : 's', readOnly : true }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaOSSAdapterProfile',KalturaOSSAdapterProfile);
