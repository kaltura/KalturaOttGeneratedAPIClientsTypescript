
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaStringValue } from './KalturaStringValue';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaSSOAdapterProfileArgs  extends KalturaObjectBaseArgs {
    name? : string;
	isActive? : number;
	adapterUrl? : string;
	settings? : { [key : string] : KalturaStringValue};
	externalIdentifier? : string;
	sharedSecret? : string;
}


export class KalturaSSOAdapterProfile extends KalturaObjectBase {

    readonly id : number;
	name : string;
	isActive : number;
	adapterUrl : string;
	settings : { [key : string] : KalturaStringValue};
	externalIdentifier : string;
	sharedSecret : string;

    constructor(data? : KalturaSSOAdapterProfileArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaSSOAdapterProfile' },
				id : { type : 'n', readOnly : true },
				name : { type : 's' },
				isActive : { type : 'n' },
				adapterUrl : { type : 's' },
				settings : { type : 'm', subTypeConstructor : KalturaStringValue, subType : 'KalturaStringValue' },
				externalIdentifier : { type : 's' },
				sharedSecret : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaSSOAdapterProfile',KalturaSSOAdapterProfile);
