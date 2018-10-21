
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaBaseSegmentValue, KalturaBaseSegmentValueArgs } from './KalturaBaseSegmentValue';

export interface KalturaDummyValueArgs  extends KalturaBaseSegmentValueArgs {
    
}


export class KalturaDummyValue extends KalturaBaseSegmentValue {

    readonly id : number;

    constructor(data? : KalturaDummyValueArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDummyValue' },
				id : { type : 'n', readOnly : true }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaDummyValue',KalturaDummyValue);
