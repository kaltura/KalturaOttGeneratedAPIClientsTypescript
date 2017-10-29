
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaStringValue } from './KalturaStringValue';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaCDVRAdapterProfileArgs  extends KalturaObjectBaseArgs {
    name? : string;
	isActive? : boolean;
	adapterUrl? : string;
	settings? : { [key : string] : KalturaStringValue};
	externalIdentifier? : string;
	dynamicLinksSupport? : boolean;
}


export class KalturaCDVRAdapterProfile extends KalturaObjectBase {

    readonly id : number;
	name : string;
	isActive : boolean;
	adapterUrl : string;
	settings : { [key : string] : KalturaStringValue};
	externalIdentifier : string;
	readonly sharedSecret : string;
	dynamicLinksSupport : boolean;

    constructor(data? : KalturaCDVRAdapterProfileArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaCDVRAdapterProfile' },
				id : { type : 'n', readOnly : true },
				name : { type : 's' },
				isActive : { type : 'b' },
				adapterUrl : { type : 's' },
				settings : { type : 'm', subTypeConstructor : KalturaStringValue, subType : 'KalturaStringValue' },
				externalIdentifier : { type : 's' },
				sharedSecret : { type : 's', readOnly : true },
				dynamicLinksSupport : { type : 'b' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaCDVRAdapterProfile',KalturaCDVRAdapterProfile);
