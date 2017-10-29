
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaRelatedObjectFilter } from './KalturaRelatedObjectFilter';
import { KalturaBaseResponseProfile, KalturaBaseResponseProfileArgs } from './KalturaBaseResponseProfile';

export interface KalturaDetachedResponseProfileArgs  extends KalturaBaseResponseProfileArgs {
    name? : string;
	filter? : KalturaRelatedObjectFilter;
	relatedProfiles? : KalturaDetachedResponseProfile[];
}


export class KalturaDetachedResponseProfile extends KalturaBaseResponseProfile {

    name : string;
	filter : KalturaRelatedObjectFilter;
	relatedProfiles : KalturaDetachedResponseProfile[];

    constructor(data? : KalturaDetachedResponseProfileArgs)
    {
        super(data);
        if (typeof this.relatedProfiles === 'undefined') this.relatedProfiles = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDetachedResponseProfile' },
				name : { type : 's' },
				filter : { type : 'o', subTypeConstructor : KalturaRelatedObjectFilter, subType : 'KalturaRelatedObjectFilter' },
				relatedProfiles : { type : 'a', subTypeConstructor : KalturaDetachedResponseProfile, subType : 'KalturaDetachedResponseProfile' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaDetachedResponseProfile',KalturaDetachedResponseProfile);
