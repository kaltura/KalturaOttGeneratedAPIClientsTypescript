
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaBaseAttributeConstraint, KalturaBaseAttributeConstraintArgs } from './KalturaBaseAttributeConstraint';

export interface KalturaTagsMetaConstraintArgs  extends KalturaBaseAttributeConstraintArgs {
    oneOf? : string;
}


export class KalturaTagsMetaConstraint extends KalturaBaseAttributeConstraint {

    oneOf : string;

    constructor(data? : KalturaTagsMetaConstraintArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaTagsMetaConstraint' },
				oneOf : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaTagsMetaConstraint',KalturaTagsMetaConstraint);
