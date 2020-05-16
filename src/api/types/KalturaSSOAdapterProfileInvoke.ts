
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaStringValue } from './KalturaStringValue';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaSSOAdapterProfileInvokeArgs  extends KalturaObjectBaseArgs {
    adapterData? : { [key : string] : KalturaStringValue};
	code? : string;
	message? : string;
}


export class KalturaSSOAdapterProfileInvoke extends KalturaObjectBase {

    adapterData : { [key : string] : KalturaStringValue};
	code : string;
	message : string;

    constructor(data? : KalturaSSOAdapterProfileInvokeArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaSSOAdapterProfileInvoke' },
				adapterData : { type : 'm', subTypeConstructor : KalturaStringValue, subType : 'KalturaStringValue' },
				code : { type : 's' },
				message : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaSSOAdapterProfileInvoke',KalturaSSOAdapterProfileInvoke);
