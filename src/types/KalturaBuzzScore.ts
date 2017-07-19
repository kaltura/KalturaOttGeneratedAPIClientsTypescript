
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaBuzzScoreArgs  extends KalturaObjectBaseArgs {
    normalizedAvgScore? : number;
	updateDate? : number;
	avgScore? : number;
}

/** 
* Buzz score
**/
export class KalturaBuzzScore extends KalturaObjectBase {

    normalizedAvgScore : number;
	updateDate : number;
	avgScore : number;

    constructor(data? : KalturaBuzzScoreArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBuzzScore' },
				normalizedAvgScore : { type : 'n' },
				updateDate : { type : 'n' },
				avgScore : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaBuzzScore',KalturaBuzzScore);
