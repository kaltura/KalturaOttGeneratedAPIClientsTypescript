
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaMonetizationType } from './KalturaMonetizationType';
import { KalturaMathemticalOperatorType } from './KalturaMathemticalOperatorType';
import { KalturaSegmentSource, KalturaSegmentSourceArgs } from './KalturaSegmentSource';

export interface KalturaMonetizationSourceArgs  extends KalturaSegmentSourceArgs {
    type? : KalturaMonetizationType;
	operator? : KalturaMathemticalOperatorType;
	days? : number;
}


export class KalturaMonetizationSource extends KalturaSegmentSource {

    type : KalturaMonetizationType;
	operator : KalturaMathemticalOperatorType;
	days : number;

    constructor(data? : KalturaMonetizationSourceArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaMonetizationSource' },
				type : { type : 'es', subTypeConstructor : KalturaMonetizationType, subType : 'KalturaMonetizationType' },
				operator : { type : 'es', subTypeConstructor : KalturaMathemticalOperatorType, subType : 'KalturaMathemticalOperatorType' },
				days : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaMonetizationSource',KalturaMonetizationSource);
