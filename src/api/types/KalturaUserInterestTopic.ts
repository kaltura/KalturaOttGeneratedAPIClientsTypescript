
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaUserInterestTopicArgs  extends KalturaObjectBaseArgs {
    metaId? : string;
	value? : string;
	parentTopic? : KalturaUserInterestTopic;
}


export class KalturaUserInterestTopic extends KalturaObjectBase {

    metaId : string;
	value : string;
	parentTopic : KalturaUserInterestTopic;

    constructor(data? : KalturaUserInterestTopicArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaUserInterestTopic' },
				metaId : { type : 's' },
				value : { type : 's' },
				parentTopic : { type : 'o', subTypeConstructor : KalturaUserInterestTopic, subType : 'KalturaUserInterestTopic' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaUserInterestTopic',KalturaUserInterestTopic);
