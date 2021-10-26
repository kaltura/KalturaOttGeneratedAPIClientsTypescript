
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaChannelsFilterArgs  extends KalturaFilterArgs {
    idEqual? : number;
	mediaIdEqual? : number;
	nameEqual? : string;
	nameStartsWith? : string;
	idIn? : string;
}


export class KalturaChannelsFilter extends KalturaFilter {

    idEqual : number;
	mediaIdEqual : number;
	nameEqual : string;
	nameStartsWith : string;
	idIn : string;

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
				idIn : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaChannelsFilter',KalturaChannelsFilter);
