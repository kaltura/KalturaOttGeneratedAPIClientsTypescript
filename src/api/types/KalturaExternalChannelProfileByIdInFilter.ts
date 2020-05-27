
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaExternalChannelProfileFilter, KalturaExternalChannelProfileFilterArgs } from './KalturaExternalChannelProfileFilter';

export interface KalturaExternalChannelProfileByIdInFilterArgs  extends KalturaExternalChannelProfileFilterArgs {
    idIn? : string;
}


export class KalturaExternalChannelProfileByIdInFilter extends KalturaExternalChannelProfileFilter {

    idIn : string;

    constructor(data? : KalturaExternalChannelProfileByIdInFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaExternalChannelProfileByIdInFilter' },
				idIn : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaExternalChannelProfileByIdInFilter',KalturaExternalChannelProfileByIdInFilter);
