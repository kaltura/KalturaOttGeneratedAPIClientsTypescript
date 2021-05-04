
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaMessage } from './KalturaMessage';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaActionResultArgs  extends KalturaObjectBaseArgs {
    
}


export class KalturaActionResult extends KalturaObjectBase {

    readonly id : number;
	readonly result : KalturaMessage;

    constructor(data? : KalturaActionResultArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaActionResult' },
				id : { type : 'n', readOnly : true },
				result : { type : 'o', readOnly : true, subTypeConstructor : KalturaMessage, subType : 'KalturaMessage' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaActionResult',KalturaActionResult);
