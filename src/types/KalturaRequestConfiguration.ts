
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaRequestConfigurationArgs  extends KalturaObjectBaseArgs {
    partnerId? : number;
	userId? : number;
	language? : string;
	ks? : string;
}

/** 
* Define client request optional configurations
**/
export class KalturaRequestConfiguration extends KalturaObjectBase {

    partnerId : number;
	userId : number;
	language : string;
	ks : string;

    constructor(data? : KalturaRequestConfigurationArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaRequestConfiguration' },
				partnerId : { type : 'n' },
				userId : { type : 'n' },
				language : { type : 's' },
				ks : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaRequestConfiguration',KalturaRequestConfiguration);
