
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaValue, KalturaValueArgs } from './KalturaValue';

export interface KalturaLongValueArgs  extends KalturaValueArgs {
    value? : number;
}


export class KalturaLongValue extends KalturaValue {

    value : number;

    constructor(data? : KalturaLongValueArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaLongValue' },
				value : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaLongValue',KalturaLongValue);
