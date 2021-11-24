
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaTranslationToken } from './KalturaTranslationToken';
import { KalturaSearchPriorityCriteria } from './KalturaSearchPriorityCriteria';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaSearchPriorityGroupArgs  extends KalturaObjectBaseArgs {
    multilingualName? : KalturaTranslationToken[];
	criteria? : KalturaSearchPriorityCriteria;
}


export class KalturaSearchPriorityGroup extends KalturaObjectBase {

    readonly id : number;
	readonly name : string;
	multilingualName : KalturaTranslationToken[];
	criteria : KalturaSearchPriorityCriteria;

    constructor(data? : KalturaSearchPriorityGroupArgs)
    {
        super(data);
        if (typeof this.multilingualName === 'undefined') this.multilingualName = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaSearchPriorityGroup' },
				id : { type : 'n', readOnly : true },
				name : { type : 's', readOnly : true },
				multilingualName : { type : 'a', subTypeConstructor : KalturaTranslationToken, subType : 'KalturaTranslationToken' },
				criteria : { type : 'o', subTypeConstructor : KalturaSearchPriorityCriteria, subType : 'KalturaSearchPriorityCriteria' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaSearchPriorityGroup',KalturaSearchPriorityGroup);
