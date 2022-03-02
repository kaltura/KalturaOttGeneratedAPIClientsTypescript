
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaStringValue } from './KalturaStringValue';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaEpgIngestErrorMessageArgs  extends KalturaObjectBaseArgs {
    message? : string;
	code? : string;
	args? : { [key : string] : KalturaStringValue};
}


export class KalturaEpgIngestErrorMessage extends KalturaObjectBase {

    message : string;
	code : string;
	args : { [key : string] : KalturaStringValue};

    constructor(data? : KalturaEpgIngestErrorMessageArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaEpgIngestErrorMessage' },
				message : { type : 's' },
				code : { type : 's' },
				args : { type : 'm', subTypeConstructor : KalturaStringValue, subType : 'KalturaStringValue' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaEpgIngestErrorMessage',KalturaEpgIngestErrorMessage);
