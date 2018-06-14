
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaLanguage } from './KalturaLanguage';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaLanguageListResponseArgs  extends KalturaListResponseArgs {
    objects? : KalturaLanguage[];
}


export class KalturaLanguageListResponse extends KalturaListResponse {

    objects : KalturaLanguage[];

    constructor(data? : KalturaLanguageListResponseArgs)
    {
        super(data);
        if (typeof this.objects === 'undefined') this.objects = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaLanguageListResponse' },
				objects : { type : 'a', subTypeConstructor : KalturaLanguage, subType : 'KalturaLanguage' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaLanguageListResponse',KalturaLanguageListResponse);
