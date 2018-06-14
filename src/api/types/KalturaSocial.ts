
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaSocialArgs  extends KalturaObjectBaseArgs {
    name? : string;
	firstName? : string;
	lastName? : string;
	email? : string;
	gender? : string;
	birthday? : string;
	pictureUrl? : string;
}


export class KalturaSocial extends KalturaObjectBase {

    readonly id : string;
	name : string;
	firstName : string;
	lastName : string;
	email : string;
	gender : string;
	readonly userId : string;
	birthday : string;
	readonly status : string;
	pictureUrl : string;

    constructor(data? : KalturaSocialArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaSocial' },
				id : { type : 's', readOnly : true },
				name : { type : 's' },
				firstName : { type : 's' },
				lastName : { type : 's' },
				email : { type : 's' },
				gender : { type : 's' },
				userId : { type : 's', readOnly : true },
				birthday : { type : 's' },
				status : { type : 's', readOnly : true },
				pictureUrl : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaSocial',KalturaSocial);
