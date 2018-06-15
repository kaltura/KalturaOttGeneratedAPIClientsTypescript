
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaMultilingualStringValue } from './KalturaMultilingualStringValue';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaMultilingualStringValueArrayArgs  extends KalturaObjectBaseArgs {
    objects? : KalturaMultilingualStringValue[];
}


export class KalturaMultilingualStringValueArray extends KalturaObjectBase {

    objects : KalturaMultilingualStringValue[];

    constructor(data? : KalturaMultilingualStringValueArrayArgs)
    {
        super(data);
        if (typeof this.objects === 'undefined') this.objects = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaMultilingualStringValueArray' },
				objects : { type : 'a', subTypeConstructor : KalturaMultilingualStringValue, subType : 'KalturaMultilingualStringValue' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaMultilingualStringValueArray',KalturaMultilingualStringValueArray);
