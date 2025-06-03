
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaTranslationToken } from './KalturaTranslationToken';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaGenerateMetadataResultArgs  extends KalturaObjectBaseArgs {
    enrichedMetadata? : { [key : string] : KalturaTranslationToken};
}


export class KalturaGenerateMetadataResult extends KalturaObjectBase {

    enrichedMetadata : { [key : string] : KalturaTranslationToken};

    constructor(data? : KalturaGenerateMetadataResultArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaGenerateMetadataResult' },
				enrichedMetadata : { type : 'm', subTypeConstructor : KalturaTranslationToken, subType : 'KalturaTranslationToken' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaGenerateMetadataResult',KalturaGenerateMetadataResult);
