
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaDurationUnit } from './KalturaDurationUnit';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaDurationArgs  extends KalturaObjectBaseArgs {
    unit? : KalturaDurationUnit;
	value? : number;
}


export class KalturaDuration extends KalturaObjectBase {

    unit : KalturaDurationUnit;
	value : number;

    constructor(data? : KalturaDurationArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDuration' },
				unit : { type : 'es', subTypeConstructor : KalturaDurationUnit, subType : 'KalturaDurationUnit' },
				value : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaDuration',KalturaDuration);
