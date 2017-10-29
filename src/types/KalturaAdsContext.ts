
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaAdsSource } from './KalturaAdsSource';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaAdsContextArgs  extends KalturaObjectBaseArgs {
    sources? : KalturaAdsSource[];
}


export class KalturaAdsContext extends KalturaObjectBase {

    sources : KalturaAdsSource[];

    constructor(data? : KalturaAdsContextArgs)
    {
        super(data);
        if (typeof this.sources === 'undefined') this.sources = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaAdsContext' },
				sources : { type : 'a', subTypeConstructor : KalturaAdsSource, subType : 'KalturaAdsSource' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaAdsContext',KalturaAdsContext);
