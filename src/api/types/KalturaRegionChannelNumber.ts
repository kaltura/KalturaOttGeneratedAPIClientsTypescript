
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaStringValue } from './KalturaStringValue';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaRegionChannelNumberArgs  extends KalturaObjectBaseArgs {
    regionId? : number;
	channelNumber? : number;
	dynamicData? : { [key : string] : KalturaStringValue};
}


export class KalturaRegionChannelNumber extends KalturaObjectBase {

    regionId : number;
	channelNumber : number;
	dynamicData : { [key : string] : KalturaStringValue};

    constructor(data? : KalturaRegionChannelNumberArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaRegionChannelNumber' },
				regionId : { type : 'n' },
				channelNumber : { type : 'n' },
				dynamicData : { type : 'm', subTypeConstructor : KalturaStringValue, subType : 'KalturaStringValue' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaRegionChannelNumber',KalturaRegionChannelNumber);
