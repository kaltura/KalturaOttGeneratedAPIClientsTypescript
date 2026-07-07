
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaBaseAttributeConstraint, KalturaBaseAttributeConstraintArgs } from './KalturaBaseAttributeConstraint';

export interface KalturaNumberMetaConstraintArgs  extends KalturaBaseAttributeConstraintArgs {
    equals? : number;
	greaterThan? : number;
	smallerThan? : number;
}


export class KalturaNumberMetaConstraint extends KalturaBaseAttributeConstraint {

    equals : number;
	greaterThan : number;
	smallerThan : number;

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
				equals : { type : 'n' },
				greaterThan : { type : 'n' },
				smallerThan : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaNumberMetaConstraint',KalturaNumberMetaConstraint);
