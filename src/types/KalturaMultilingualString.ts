
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaTranslationToken } from './KalturaTranslationToken';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaMultilingualStringArgs  extends KalturaObjectBaseArgs {
    values? : KalturaTranslationToken[];
}

/** 
* Translated string
**/
export class KalturaMultilingualString extends KalturaObjectBase {

    values : KalturaTranslationToken[];

    constructor(data? : KalturaMultilingualStringArgs)
    {
        super(data);
        if (typeof this.values === 'undefined') this.values = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaMultilingualString' },
				values : { type : 'a', subTypeConstructor : KalturaTranslationToken, subType : 'KalturaTranslationToken' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaMultilingualString',KalturaMultilingualString);
