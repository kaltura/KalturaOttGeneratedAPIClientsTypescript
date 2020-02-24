
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaAnnouncementFilterArgs  extends KalturaFilterArgs {
    idIn? : string;
}


export class KalturaAnnouncementFilter extends KalturaFilter {

    idIn : string;

    constructor(data? : KalturaAnnouncementFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaAnnouncementFilter' },
				idIn : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaAnnouncementFilter',KalturaAnnouncementFilter);
