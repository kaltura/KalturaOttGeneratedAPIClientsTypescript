
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaStringValue } from './KalturaStringValue';
import { KalturaIngestProfileAutofillPolicy } from './KalturaIngestProfileAutofillPolicy';
import { KalturaIngestProfileOverlapPolicy } from './KalturaIngestProfileOverlapPolicy';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaIngestProfileArgs  extends KalturaObjectBaseArgs {
    name? : string;
	externalId? : string;
	assetTypeId? : number;
	transformationAdapterUrl? : string;
	transformationAdapterSettings? : { [key : string] : KalturaStringValue};
	transformationAdapterSharedSecret? : string;
	defaultAutoFillPolicy? : KalturaIngestProfileAutofillPolicy;
	defaultOverlapPolicy? : KalturaIngestProfileOverlapPolicy;
}


export class KalturaIngestProfile extends KalturaObjectBase {

    readonly id : number;
	name : string;
	externalId : string;
	assetTypeId : number;
	transformationAdapterUrl : string;
	transformationAdapterSettings : { [key : string] : KalturaStringValue};
	transformationAdapterSharedSecret : string;
	defaultAutoFillPolicy : KalturaIngestProfileAutofillPolicy;
	defaultOverlapPolicy : KalturaIngestProfileOverlapPolicy;

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
				transformationAdapterSettings : { type : 'm', subTypeConstructor : KalturaStringValue, subType : 'KalturaStringValue' },
				transformationAdapterSharedSecret : { type : 's' },
				defaultAutoFillPolicy : { type : 'es', subTypeConstructor : KalturaIngestProfileAutofillPolicy, subType : 'KalturaIngestProfileAutofillPolicy' },
				defaultOverlapPolicy : { type : 'es', subTypeConstructor : KalturaIngestProfileOverlapPolicy, subType : 'KalturaIngestProfileOverlapPolicy' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaIngestProfile',KalturaIngestProfile);
