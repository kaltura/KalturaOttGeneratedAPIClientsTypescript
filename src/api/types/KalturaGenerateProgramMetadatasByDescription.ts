
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaGenerateMetadataByDescription, KalturaGenerateMetadataByDescriptionArgs } from './KalturaGenerateMetadataByDescription';

export interface KalturaGenerateProgramMetadatasByDescriptionArgs  extends KalturaGenerateMetadataByDescriptionArgs {
    regenerate? : boolean;
}


export class KalturaGenerateProgramMetadatasByDescription extends KalturaGenerateMetadataByDescription {

    regenerate : boolean;

    constructor(data? : KalturaGenerateProgramMetadatasByDescriptionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaGenerateProgramMetadatasByDescription' },
				regenerate : { type : 'b' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaGenerateProgramMetadatasByDescription',KalturaGenerateProgramMetadatasByDescription);
