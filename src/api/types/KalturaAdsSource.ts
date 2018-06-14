
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaAdsPolicy } from './KalturaAdsPolicy';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaAdsSourceArgs  extends KalturaObjectBaseArgs {
    type? : string;
	adsPolicy? : KalturaAdsPolicy;
	adsParam? : string;
}


export class KalturaAdsSource extends KalturaObjectBase {

    readonly id : number;
	type : string;
	adsPolicy : KalturaAdsPolicy;
	adsParam : string;

    constructor(data? : KalturaAdsSourceArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaAdsSource' },
				id : { type : 'n', readOnly : true },
				type : { type : 's' },
				adsPolicy : { type : 'es', subTypeConstructor : KalturaAdsPolicy, subType : 'KalturaAdsPolicy' },
				adsParam : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaAdsSource',KalturaAdsSource);
