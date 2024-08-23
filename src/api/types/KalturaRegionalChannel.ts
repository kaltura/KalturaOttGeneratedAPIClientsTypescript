
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaStringValue } from './KalturaStringValue';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaRegionalChannelArgs  extends KalturaObjectBaseArgs {
    linearChannelId? : number;
	channelNumber? : number;
	dynamicData? : { [key : string] : KalturaStringValue};
}


export class KalturaRegionalChannel extends KalturaObjectBase {

    linearChannelId : number;
	channelNumber : number;
	dynamicData : { [key : string] : KalturaStringValue};

    constructor(data? : KalturaRegionalChannelArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaRegionalChannel' },
				linearChannelId : { type : 'n' },
				channelNumber : { type : 'n' },
				dynamicData : { type : 'm', subTypeConstructor : KalturaStringValue, subType : 'KalturaStringValue' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaRegionalChannel',KalturaRegionalChannel);
