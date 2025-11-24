
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaSearchType } from './KalturaSearchType';
import { KalturaSearchCondition } from './KalturaSearchCondition';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaSearchScopeArgs  extends KalturaObjectBaseArgs {
    type? : KalturaSearchType;
	filters? : KalturaSearchCondition[];
}


export class KalturaSearchScope extends KalturaObjectBase {

    type : KalturaSearchType;
	filters : KalturaSearchCondition[];

    constructor(data? : KalturaSearchScopeArgs)
    {
        super(data);
        if (typeof this.filters === 'undefined') this.filters = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaSearchScope' },
				type : { type : 'es', subTypeConstructor : KalturaSearchType, subType : 'KalturaSearchType' },
				filters : { type : 'a', subTypeConstructor : KalturaSearchCondition, subType : 'KalturaSearchCondition' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaSearchScope',KalturaSearchScope);
