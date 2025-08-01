
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaTreeQuestionArgs  extends KalturaObjectBaseArgs {
    questionId? : string;
	text? : string;
	level? : number;
}


export class KalturaTreeQuestion extends KalturaObjectBase {

    questionId : string;
	text : string;
	level : number;

    constructor(data? : KalturaTreeQuestionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaTreeQuestion' },
				questionId : { type : 's' },
				text : { type : 's' },
				level : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaTreeQuestion',KalturaTreeQuestion);
