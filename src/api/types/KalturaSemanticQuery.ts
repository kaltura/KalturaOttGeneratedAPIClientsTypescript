
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaSemanticSubQuery } from './KalturaSemanticSubQuery';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaSemanticQueryArgs  extends KalturaObjectBaseArgs {
    subQueries? : KalturaSemanticSubQuery[];
	title? : string;
}


export class KalturaSemanticQuery extends KalturaObjectBase {

    subQueries : KalturaSemanticSubQuery[];
	title : string;

    constructor(data? : KalturaSemanticQueryArgs)
    {
        super(data);
        if (typeof this.subQueries === 'undefined') this.subQueries = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaSemanticQuery' },
				subQueries : { type : 'a', subTypeConstructor : KalturaSemanticSubQuery, subType : 'KalturaSemanticSubQuery' },
				title : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaSemanticQuery',KalturaSemanticQuery);
