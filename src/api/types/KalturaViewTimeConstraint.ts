
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaViewTimeConstraintArgs  extends KalturaObjectBaseArgs {
    startTime? : string;
	endTime? : string;
}


export class KalturaViewTimeConstraint extends KalturaObjectBase {

    startTime : string;
	endTime : string;

    constructor(data? : KalturaViewTimeConstraintArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaViewTimeConstraint' },
				startTime : { type : 's' },
				endTime : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaViewTimeConstraint',KalturaViewTimeConstraint);
