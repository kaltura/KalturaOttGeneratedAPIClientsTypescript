
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaSocialServiceIdArgs  extends KalturaObjectBaseArgs {
    
}


export class KalturaSocialServiceId extends KalturaObjectBase {

    readonly serviceId : string;

    constructor(data? : KalturaSocialServiceIdArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaSocialServiceId' },
				serviceId : { type : 's', readOnly : true }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaSocialServiceId',KalturaSocialServiceId);
