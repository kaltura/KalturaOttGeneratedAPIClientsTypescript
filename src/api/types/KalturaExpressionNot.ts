
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaUserSessionProfileExpression, KalturaUserSessionProfileExpressionArgs } from './KalturaUserSessionProfileExpression';

export interface KalturaExpressionNotArgs  extends KalturaUserSessionProfileExpressionArgs {
    expression? : KalturaUserSessionProfileExpression;
}


export class KalturaExpressionNot extends KalturaUserSessionProfileExpression {

    expression : KalturaUserSessionProfileExpression;

    constructor(data? : KalturaExpressionNotArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaExpressionNot' },
				expression : { type : 'o', subTypeConstructor : KalturaUserSessionProfileExpression, subType : 'KalturaUserSessionProfileExpression' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaExpressionNot',KalturaExpressionNot);
