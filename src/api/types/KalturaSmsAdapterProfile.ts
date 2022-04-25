
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaStringValue } from './KalturaStringValue';
import { KalturaOTTObjectSupportNullable, KalturaOTTObjectSupportNullableArgs } from './KalturaOTTObjectSupportNullable';

export interface KalturaSmsAdapterProfileArgs  extends KalturaOTTObjectSupportNullableArgs {
    adapterUrl? : string;
	sharedSecret? : string;
	isActive? : number;
	settings? : { [key : string] : KalturaStringValue};
	externalIdentifier? : string;
	name? : string;
}


export class KalturaSmsAdapterProfile extends KalturaOTTObjectSupportNullable {

    readonly id : number;
	adapterUrl : string;
	sharedSecret : string;
	isActive : number;
	settings : { [key : string] : KalturaStringValue};
	externalIdentifier : string;
	name : string;

    constructor(data? : KalturaSmsAdapterProfileArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaSmsAdapterProfile' },
				id : { type : 'n', readOnly : true },
				adapterUrl : { type : 's' },
				sharedSecret : { type : 's' },
				isActive : { type : 'n' },
				settings : { type : 'm', subTypeConstructor : KalturaStringValue, subType : 'KalturaStringValue' },
				externalIdentifier : { type : 's' },
				name : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaSmsAdapterProfile',KalturaSmsAdapterProfile);
