
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaDefaultArgs  extends KalturaObjectBaseArgs {
    poolId? : string;
	region? : string;
	appClientId? : string;
}


export class KalturaDefault extends KalturaObjectBase {

    poolId : string;
	region : string;
	appClientId : string;

    constructor(data? : KalturaDefaultArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDefault' },
				poolId : { type : 's' },
				region : { type : 's' },
				appClientId : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaDefault',KalturaDefault);
