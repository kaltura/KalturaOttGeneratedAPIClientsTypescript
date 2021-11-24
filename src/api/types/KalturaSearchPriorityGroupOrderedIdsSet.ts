
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaSearchPriorityGroupOrderedIdsSetArgs  extends KalturaObjectBaseArgs {
    priorityGroupIds? : string;
}


export class KalturaSearchPriorityGroupOrderedIdsSet extends KalturaObjectBase {

    priorityGroupIds : string;

    constructor(data? : KalturaSearchPriorityGroupOrderedIdsSetArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaSearchPriorityGroupOrderedIdsSet' },
				priorityGroupIds : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaSearchPriorityGroupOrderedIdsSet',KalturaSearchPriorityGroupOrderedIdsSet);
