
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaSubtitlesFilterArgs  extends KalturaFilterArgs {
    idIn? : string;
	fileNameContains? : string;
}


export class KalturaSubtitlesFilter extends KalturaFilter {

    idIn : string;
	fileNameContains : string;

    constructor(data? : KalturaSubtitlesFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaSubtitlesFilter' },
				idIn : { type : 's' },
				fileNameContains : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaSubtitlesFilter',KalturaSubtitlesFilter);
