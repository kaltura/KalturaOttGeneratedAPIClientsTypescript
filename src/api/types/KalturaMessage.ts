
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaStringValue } from './KalturaStringValue';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaMessageArgs  extends KalturaObjectBaseArgs {
    code? : number;
	message? : string;
	args? : { [key : string] : KalturaStringValue};
}


export class KalturaMessage extends KalturaObjectBase {

    code : number;
	message : string;
	args : { [key : string] : KalturaStringValue};

    constructor(data? : KalturaMessageArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaMessage' },
				code : { type : 'n' },
				message : { type : 's' },
				args : { type : 'm', subTypeConstructor : KalturaStringValue, subType : 'KalturaStringValue' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaMessage',KalturaMessage);
