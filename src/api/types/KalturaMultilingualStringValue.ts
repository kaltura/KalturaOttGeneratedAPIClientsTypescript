
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaTranslationToken } from './KalturaTranslationToken';
import { KalturaValue, KalturaValueArgs } from './KalturaValue';

export interface KalturaMultilingualStringValueArgs  extends KalturaValueArgs {
    multilingualValue? : KalturaTranslationToken[];
}


export class KalturaMultilingualStringValue extends KalturaValue {

    readonly value : string;
	multilingualValue : KalturaTranslationToken[];

    constructor(data? : KalturaMultilingualStringValueArgs)
    {
        super(data);
        if (typeof this.multilingualValue === 'undefined') this.multilingualValue = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaMultilingualStringValue' },
				value : { type : 's', readOnly : true },
				multilingualValue : { type : 'a', subTypeConstructor : KalturaTranslationToken, subType : 'KalturaTranslationToken' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaMultilingualStringValue',KalturaMultilingualStringValue);
