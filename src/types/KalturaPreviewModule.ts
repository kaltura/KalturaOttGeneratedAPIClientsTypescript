
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaPreviewModuleArgs  extends KalturaObjectBaseArgs {
    name? : string;
	lifeCycle? : number;
	nonRenewablePeriod? : number;
}


export class KalturaPreviewModule extends KalturaObjectBase {

    readonly id : number;
	name : string;
	lifeCycle : number;
	nonRenewablePeriod : number;

    constructor(data? : KalturaPreviewModuleArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaPreviewModule' },
				id : { type : 'n', readOnly : true },
				name : { type : 's' },
				lifeCycle : { type : 'n' },
				nonRenewablePeriod : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaPreviewModule',KalturaPreviewModule);
