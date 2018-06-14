
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaValue, KalturaValueArgs } from './KalturaValue';

export interface KalturaDoubleValueArgs  extends KalturaValueArgs {
    value? : number;
}


export class KalturaDoubleValue extends KalturaValue {

    value : number;

    constructor(data? : KalturaDoubleValueArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDoubleValue' },
				value : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaDoubleValue',KalturaDoubleValue);
