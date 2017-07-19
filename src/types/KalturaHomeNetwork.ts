
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaHomeNetworkArgs  extends KalturaObjectBaseArgs {
    externalId? : string;
	name? : string;
	description? : string;
	isActive? : boolean;
}

/** 
* Home network details
**/
export class KalturaHomeNetwork extends KalturaObjectBase {

    externalId : string;
	name : string;
	description : string;
	isActive : boolean;

    constructor(data? : KalturaHomeNetworkArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaHomeNetwork' },
				externalId : { type : 's' },
				name : { type : 's' },
				description : { type : 's' },
				isActive : { type : 'b' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaHomeNetwork',KalturaHomeNetwork);
