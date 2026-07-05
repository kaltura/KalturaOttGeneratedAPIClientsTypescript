
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaBaseAttributeConstraint, KalturaBaseAttributeConstraintArgs } from './KalturaBaseAttributeConstraint';

export interface KalturaSubtitleLanguageConstraintArgs  extends KalturaBaseAttributeConstraintArgs {
    languageCodes? : string;
}


export class KalturaSubtitleLanguageConstraint extends KalturaBaseAttributeConstraint {

    languageCodes : string;

    constructor(data? : KalturaSubtitleLanguageConstraintArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaSubtitleLanguageConstraint' },
				languageCodes : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaSubtitleLanguageConstraint',KalturaSubtitleLanguageConstraint);
