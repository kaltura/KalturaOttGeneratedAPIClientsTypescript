
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaIngestProfileArgs  extends KalturaObjectBaseArgs {
    name? : string;
	externalId? : string;
	assetTypeId? : number;
	transformationAdapterUrl? : string;
	transformationAdapterSettings? : string;
	transformationAdapterSharedSecret? : string;
	defaultAutoFillPolicy? : number;
	defaultOverlapPolicy? : number;
}


export class KalturaIngestProfile extends KalturaObjectBase {

    readonly id : number;
	name : string;
	externalId : string;
	assetTypeId : number;
	transformationAdapterUrl : string;
	transformationAdapterSettings : string;
	transformationAdapterSharedSecret : string;
	defaultAutoFillPolicy : number;
	defaultOverlapPolicy : number;

    constructor(data? : KalturaIngestProfileArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaIngestProfile' },
				id : { type : 'n', readOnly : true },
				name : { type : 's' },
				externalId : { type : 's' },
				assetTypeId : { type : 'n' },
				transformationAdapterUrl : { type : 's' },
				transformationAdapterSettings : { type : 's' },
				transformationAdapterSharedSecret : { type : 's' },
				defaultAutoFillPolicy : { type : 'n' },
				defaultOverlapPolicy : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaIngestProfile',KalturaIngestProfile);
