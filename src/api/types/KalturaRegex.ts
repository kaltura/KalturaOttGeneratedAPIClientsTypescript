
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaRegexArgs  extends KalturaObjectBaseArgs {
    expression? : string;
	description? : string;
}


export class KalturaRegex extends KalturaObjectBase {

    expression : string;
	description : string;

    constructor(data? : KalturaRegexArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaRegex' },
				expression : { type : 's' },
				description : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaRegex',KalturaRegex);
