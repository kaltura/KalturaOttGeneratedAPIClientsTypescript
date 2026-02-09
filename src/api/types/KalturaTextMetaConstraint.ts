
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaBaseAttributeConstraint, KalturaBaseAttributeConstraintArgs } from './KalturaBaseAttributeConstraint';

export interface KalturaTextMetaConstraintArgs  extends KalturaBaseAttributeConstraintArgs {
    contains? : string;
	equals? : string;
	attributeType? : string;
}


export class KalturaTextMetaConstraint extends KalturaBaseAttributeConstraint {

    contains : string;
	equals : string;
	attributeType : string;

    constructor(data? : KalturaTextMetaConstraintArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaTextMetaConstraint' },
				contains : { type : 's' },
				equals : { type : 's' },
				attributeType : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaTextMetaConstraint',KalturaTextMetaConstraint);
