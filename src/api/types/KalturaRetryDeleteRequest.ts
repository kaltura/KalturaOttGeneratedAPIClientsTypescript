
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaRetryDeleteRequestArgs  extends KalturaObjectBaseArgs {
    startDate? : number;
	endDate? : number;
}


export class KalturaRetryDeleteRequest extends KalturaObjectBase {

    startDate : number;
	endDate : number;

    constructor(data? : KalturaRetryDeleteRequestArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaRetryDeleteRequest' },
				startDate : { type : 'n' },
				endDate : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaRetryDeleteRequest',KalturaRetryDeleteRequest);
