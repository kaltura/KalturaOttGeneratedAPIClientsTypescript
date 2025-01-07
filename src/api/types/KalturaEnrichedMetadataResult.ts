
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaTranslationToken } from './KalturaTranslationToken';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaEnrichedMetadataResultArgs  extends KalturaObjectBaseArgs {
    enrichedMetadata? : { [key : string] : KalturaTranslationToken};
}


export class KalturaEnrichedMetadataResult extends KalturaObjectBase {

    enrichedMetadata : { [key : string] : KalturaTranslationToken};

    constructor(data? : KalturaEnrichedMetadataResultArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaEnrichedMetadataResult' },
				enrichedMetadata : { type : 'm', subTypeConstructor : KalturaTranslationToken, subType : 'KalturaTranslationToken' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaEnrichedMetadataResult',KalturaEnrichedMetadataResult);
