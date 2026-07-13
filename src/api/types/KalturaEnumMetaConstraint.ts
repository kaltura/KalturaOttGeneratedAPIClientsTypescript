
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaBaseAttributeConstraint, KalturaBaseAttributeConstraintArgs } from './KalturaBaseAttributeConstraint';

export interface KalturaEnumMetaConstraintArgs  extends KalturaBaseAttributeConstraintArgs {
    oneOf? : string;
}


export class KalturaEnumMetaConstraint extends KalturaBaseAttributeConstraint {

    oneOf : string;

    constructor(data? : KalturaEnumMetaConstraintArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaEnumMetaConstraint' },
				oneOf : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaEnumMetaConstraint',KalturaEnumMetaConstraint);
