
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaUserInterestTopic } from './KalturaUserInterestTopic';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaUserInterestArgs  extends KalturaObjectBaseArgs {
    topic? : KalturaUserInterestTopic;
}


export class KalturaUserInterest extends KalturaObjectBase {

    readonly id : string;
	topic : KalturaUserInterestTopic;

    constructor(data? : KalturaUserInterestArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaUserInterest' },
				id : { type : 's', readOnly : true },
				topic : { type : 'o', subTypeConstructor : KalturaUserInterestTopic, subType : 'KalturaUserInterestTopic' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaUserInterest',KalturaUserInterest);
