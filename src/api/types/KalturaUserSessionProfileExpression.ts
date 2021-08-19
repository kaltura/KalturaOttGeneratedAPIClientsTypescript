
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaCondition, KalturaConditionArgs } from './KalturaCondition';

export interface KalturaUserSessionProfileExpressionArgs  extends KalturaConditionArgs {
    
}


export class KalturaUserSessionProfileExpression extends KalturaCondition {

    

    constructor(data? : KalturaUserSessionProfileExpressionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaUserSessionProfileExpression' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaUserSessionProfileExpression',KalturaUserSessionProfileExpression);
