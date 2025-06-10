
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaStringValue } from './KalturaStringValue';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaTreeQuestionArgs  extends KalturaObjectBaseArgs {
    questionId? : string;
	text? : string;
	level? : number;
	metadataTypes? : KalturaStringValue[];
}


export class KalturaTreeQuestion extends KalturaObjectBase {

    questionId : string;
	text : string;
	level : number;
	metadataTypes : KalturaStringValue[];

    constructor(data? : KalturaTreeQuestionArgs)
    {
        super(data);
        if (typeof this.metadataTypes === 'undefined') this.metadataTypes = [];
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
				level : { type : 'n' },
				metadataTypes : { type : 'a', subTypeConstructor : KalturaStringValue, subType : 'KalturaStringValue' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaTreeQuestion',KalturaTreeQuestion);
