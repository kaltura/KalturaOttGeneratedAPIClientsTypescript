
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaTranslationToken } from './KalturaTranslationToken';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaSemanticSubQueryArgs  extends KalturaObjectBaseArgs {
    text? : string;
	name? : KalturaTranslationToken;
}


export class KalturaSemanticSubQuery extends KalturaObjectBase {

    text : string;
	name : KalturaTranslationToken;

    constructor(data? : KalturaSemanticSubQueryArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaSemanticSubQuery' },
				text : { type : 's' },
				name : { type : 'o', subTypeConstructor : KalturaTranslationToken, subType : 'KalturaTranslationToken' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaSemanticSubQuery',KalturaSemanticSubQuery);
