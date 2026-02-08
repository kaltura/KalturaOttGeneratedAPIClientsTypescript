
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaBaseAttributeConstraint, KalturaBaseAttributeConstraintArgs } from './KalturaBaseAttributeConstraint';

export interface KalturaNumberMetaConstraintArgs  extends KalturaBaseAttributeConstraintArgs {
    equals? : string;
	greaterThan? : string;
	smallerThan? : string;
}


export class KalturaNumberMetaConstraint extends KalturaBaseAttributeConstraint {

    equals : string;
	greaterThan : string;
	smallerThan : string;

    constructor(data? : KalturaNumberMetaConstraintArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaNumberMetaConstraint' },
				equals : { type : 's' },
				greaterThan : { type : 's' },
				smallerThan : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaNumberMetaConstraint',KalturaNumberMetaConstraint);
