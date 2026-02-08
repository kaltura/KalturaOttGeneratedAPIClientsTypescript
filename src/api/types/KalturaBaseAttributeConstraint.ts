
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaBaseAttributeConstraintArgs  extends KalturaObjectBaseArgs {
    attributeType? : string;
	key? : string;
}


export class KalturaBaseAttributeConstraint extends KalturaObjectBase {

    attributeType : string;
	key : string;

    constructor(data? : KalturaBaseAttributeConstraintArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBaseAttributeConstraint' },
				attributeType : { type : 's' },
				key : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaBaseAttributeConstraint',KalturaBaseAttributeConstraint);
