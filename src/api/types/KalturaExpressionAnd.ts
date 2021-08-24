
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaUserSessionProfileExpression, KalturaUserSessionProfileExpressionArgs } from './KalturaUserSessionProfileExpression';

export interface KalturaExpressionAndArgs  extends KalturaUserSessionProfileExpressionArgs {
    expressions? : KalturaUserSessionProfileExpression[];
}


export class KalturaExpressionAnd extends KalturaUserSessionProfileExpression {

    expressions : KalturaUserSessionProfileExpression[];

    constructor(data? : KalturaExpressionAndArgs)
    {
        super(data);
        if (typeof this.expressions === 'undefined') this.expressions = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaExpressionAnd' },
				expressions : { type : 'a', subTypeConstructor : KalturaUserSessionProfileExpression, subType : 'KalturaUserSessionProfileExpression' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaExpressionAnd',KalturaExpressionAnd);
