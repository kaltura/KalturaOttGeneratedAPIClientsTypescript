
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaCrudObject, KalturaCrudObjectArgs } from './KalturaCrudObject';

export interface KalturaDeviceReferenceDataArgs  extends KalturaCrudObjectArgs {
    name? : string;
	status? : boolean;
}


export class KalturaDeviceReferenceData extends KalturaCrudObject {

    readonly id : number;
	name : string;
	status : boolean;

    constructor(data? : KalturaDeviceReferenceDataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDeviceReferenceData' },
				id : { type : 'n', readOnly : true },
				name : { type : 's' },
				status : { type : 'b' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaDeviceReferenceData',KalturaDeviceReferenceData);
