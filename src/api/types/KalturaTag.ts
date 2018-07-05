
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaTranslationToken } from './KalturaTranslationToken';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaTagArgs  extends KalturaObjectBaseArgs {
    type? : number;
	tag? : string;
	multilingualTag? : KalturaTranslationToken[];
}


export class KalturaTag extends KalturaObjectBase {

    readonly id : number;
	type : number;
	tag : string;
	multilingualTag : KalturaTranslationToken[];

    constructor(data? : KalturaTagArgs)
    {
        super(data);
        if (typeof this.multilingualTag === 'undefined') this.multilingualTag = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaTag' },
				id : { type : 'n', readOnly : true },
				type : { type : 'n' },
				tag : { type : 's' },
				multilingualTag : { type : 'a', subTypeConstructor : KalturaTranslationToken, subType : 'KalturaTranslationToken' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaTag',KalturaTag);
