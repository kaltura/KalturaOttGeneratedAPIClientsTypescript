
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaUserSessionProfileExpressionArgs  extends KalturaObjectBaseArgs {
    
}


export class KalturaUserSessionProfileExpression extends KalturaObjectBase {

    

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
