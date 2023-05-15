
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaChannelsBaseFilter, KalturaChannelsBaseFilterArgs } from './KalturaChannelsBaseFilter';

export interface KalturaChannelsFilterArgs  extends KalturaChannelsBaseFilterArgs {
    idEqual? : number;
	mediaIdEqual? : number;
	nameEqual? : string;
	nameStartsWith? : string;
	idIn? : string;
	assetUserRuleIdIn? : string;
}


export class KalturaChannelsFilter extends KalturaChannelsBaseFilter {

    idEqual : number;
	mediaIdEqual : number;
	nameEqual : string;
	nameStartsWith : string;
	idIn : string;
	assetUserRuleIdIn : string;

    constructor(data? : KalturaChannelsFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaChannelsFilter' },
				idEqual : { type : 'n' },
				mediaIdEqual : { type : 'n' },
				nameEqual : { type : 's' },
				nameStartsWith : { type : 's' },
				idIn : { type : 's' },
				assetUserRuleIdIn : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaChannelsFilter',KalturaChannelsFilter);
