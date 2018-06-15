
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaStringValue } from './KalturaStringValue';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaCDNAdapterProfileArgs  extends KalturaObjectBaseArgs {
    name? : string;
	isActive? : boolean;
	adapterUrl? : string;
	baseUrl? : string;
	settings? : { [key : string] : KalturaStringValue};
	systemName? : string;
}


export class KalturaCDNAdapterProfile extends KalturaObjectBase {

    readonly id : number;
	name : string;
	isActive : boolean;
	adapterUrl : string;
	baseUrl : string;
	settings : { [key : string] : KalturaStringValue};
	systemName : string;
	readonly sharedSecret : string;

    constructor(data? : KalturaCDNAdapterProfileArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaCDNAdapterProfile' },
				id : { type : 'n', readOnly : true },
				name : { type : 's' },
				isActive : { type : 'b' },
				adapterUrl : { type : 's' },
				baseUrl : { type : 's' },
				settings : { type : 'm', subTypeConstructor : KalturaStringValue, subType : 'KalturaStringValue' },
				systemName : { type : 's' },
				sharedSecret : { type : 's', readOnly : true }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaCDNAdapterProfile',KalturaCDNAdapterProfile);
