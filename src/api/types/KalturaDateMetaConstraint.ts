
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaBaseAttributeConstraint, KalturaBaseAttributeConstraintArgs } from './KalturaBaseAttributeConstraint';

export interface KalturaDateMetaConstraintArgs  extends KalturaBaseAttributeConstraintArgs {
    equals? : string;
	greaterThan? : string;
	smallerThan? : string;
}


export class KalturaDateMetaConstraint extends KalturaBaseAttributeConstraint {

    equals : string;
	greaterThan : string;
	smallerThan : string;

    constructor(data? : KalturaDateMetaConstraintArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDateMetaConstraint' },
				equals : { type : 's' },
				greaterThan : { type : 's' },
				smallerThan : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaDateMetaConstraint',KalturaDateMetaConstraint);
