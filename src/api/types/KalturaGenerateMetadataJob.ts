
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaGenerateMetadataStatus } from './KalturaGenerateMetadataStatus';
import { KalturaGenerateMetadataJobType } from './KalturaGenerateMetadataJobType';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaGenerateMetadataJobArgs  extends KalturaObjectBaseArgs {
    
}


export class KalturaGenerateMetadataJob extends KalturaObjectBase {

    readonly id : number;
	readonly createDate : number;
	readonly updateDate : number;
	readonly sourceName : string;
	readonly status : KalturaGenerateMetadataStatus;
	readonly errorMessage : string;
	readonly type : KalturaGenerateMetadataJobType;

    constructor(data? : KalturaGenerateMetadataJobArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaGenerateMetadataJob' },
				id : { type : 'n', readOnly : true },
				createDate : { type : 'n', readOnly : true },
				updateDate : { type : 'n', readOnly : true },
				sourceName : { type : 's', readOnly : true },
				status : { type : 'es', readOnly : true, subTypeConstructor : KalturaGenerateMetadataStatus, subType : 'KalturaGenerateMetadataStatus' },
				errorMessage : { type : 's', readOnly : true },
				type : { type : 'es', readOnly : true, subTypeConstructor : KalturaGenerateMetadataJobType, subType : 'KalturaGenerateMetadataJobType' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaGenerateMetadataJob',KalturaGenerateMetadataJob);
