
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaPricePlanFilterArgs  extends KalturaFilterArgs {
    idIn? : string;
}


export class KalturaPricePlanFilter extends KalturaFilter {

    idIn : string;

    constructor(data? : KalturaPricePlanFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaPricePlanFilter' },
				idIn : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaPricePlanFilter',KalturaPricePlanFilter);
