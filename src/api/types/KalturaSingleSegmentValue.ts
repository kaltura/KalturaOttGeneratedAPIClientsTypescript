
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaBaseSegmentValue, KalturaBaseSegmentValueArgs } from './KalturaBaseSegmentValue';

export interface KalturaSingleSegmentValueArgs  extends KalturaBaseSegmentValueArgs {
    
}


export class KalturaSingleSegmentValue extends KalturaBaseSegmentValue {

    readonly id : number;

    constructor(data? : KalturaSingleSegmentValueArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaSingleSegmentValue' },
				id : { type : 'n', readOnly : true }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaSingleSegmentValue',KalturaSingleSegmentValue);
