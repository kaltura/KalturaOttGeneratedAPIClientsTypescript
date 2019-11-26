
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaRegexExpressionArgs  extends KalturaObjectBaseArgs {
    expression? : string;
	description? : string;
}


export class KalturaRegexExpression extends KalturaObjectBase {

    expression : string;
	description : string;

    constructor(data? : KalturaRegexExpressionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaRegexExpression' },
				expression : { type : 's' },
				description : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaRegexExpression',KalturaRegexExpression);
