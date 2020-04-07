
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaIotDefaultArgs  extends KalturaObjectBaseArgs {
    poolId? : string;
	region? : string;
	appClientId? : string;
}


export class KalturaIotDefault extends KalturaObjectBase {

    poolId : string;
	region : string;
	appClientId : string;

    constructor(data? : KalturaIotDefaultArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaIotDefault' },
				poolId : { type : 's' },
				region : { type : 's' },
				appClientId : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaIotDefault',KalturaIotDefault);
