
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaMultilingualString } from './KalturaMultilingualString';
import { KalturaValue, KalturaValueArgs } from './KalturaValue';

export interface KalturaMultilingualStringValueArgs  extends KalturaValueArgs {
    value? : string;
	multilingualValue? : KalturaMultilingualString;
}


export class KalturaMultilingualStringValue extends KalturaValue {

    value : string;
	multilingualValue : KalturaMultilingualString;

    constructor(data? : KalturaMultilingualStringValueArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaMultilingualStringValue' },
				value : { type : 's' },
				multilingualValue : { type : 'o', subTypeConstructor : KalturaMultilingualString, subType : 'KalturaMultilingualString' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaMultilingualStringValue',KalturaMultilingualStringValue);
