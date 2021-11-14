
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaSearchPriorityGroupFilterArgs  extends KalturaFilterArgs {
    activeOnlyEqual? : boolean;
	idEqual? : number;
}


export class KalturaSearchPriorityGroupFilter extends KalturaFilter {

    activeOnlyEqual : boolean;
	idEqual : number;

    constructor(data? : KalturaSearchPriorityGroupFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaSearchPriorityGroupFilter' },
				activeOnlyEqual : { type : 'b' },
				idEqual : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaSearchPriorityGroupFilter',KalturaSearchPriorityGroupFilter);
