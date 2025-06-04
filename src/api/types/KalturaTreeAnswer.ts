
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaTreeAnswerArgs  extends KalturaObjectBaseArgs {
    answerId? : string;
	text? : string;
	hasNextQuestion? : boolean;
	isSpecial? : boolean;
	specialType? : string;
}


export class KalturaTreeAnswer extends KalturaObjectBase {

    answerId : string;
	text : string;
	hasNextQuestion : boolean;
	isSpecial : boolean;
	specialType : string;

    constructor(data? : KalturaTreeAnswerArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaTreeAnswer' },
				answerId : { type : 's' },
				text : { type : 's' },
				hasNextQuestion : { type : 'b' },
				isSpecial : { type : 'b' },
				specialType : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaTreeAnswer',KalturaTreeAnswer);
