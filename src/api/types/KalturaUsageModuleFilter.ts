
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaUsageModuleFilterArgs  extends KalturaFilterArgs {
    idEqual? : number;
}


export class KalturaUsageModuleFilter extends KalturaFilter {

    idEqual : number;

    constructor(data? : KalturaUsageModuleFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaUsageModuleFilter' },
				idEqual : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaUsageModuleFilter',KalturaUsageModuleFilter);
