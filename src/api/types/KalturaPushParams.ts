
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaPushParamsArgs  extends KalturaObjectBaseArgs {
    token? : string;
	externalToken? : string;
}


export class KalturaPushParams extends KalturaObjectBase {

    token : string;
	externalToken : string;

    constructor(data? : KalturaPushParamsArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaPushParams' },
				token : { type : 's' },
				externalToken : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaPushParams',KalturaPushParams);
