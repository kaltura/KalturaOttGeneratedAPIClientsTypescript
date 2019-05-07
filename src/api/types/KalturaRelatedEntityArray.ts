
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaRelatedEntity } from './KalturaRelatedEntity';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaRelatedEntityArrayArgs  extends KalturaObjectBaseArgs {
    objects? : KalturaRelatedEntity[];
}


export class KalturaRelatedEntityArray extends KalturaObjectBase {

    objects : KalturaRelatedEntity[];

    constructor(data? : KalturaRelatedEntityArrayArgs)
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
                objectType : { type : 'c', default : 'KalturaRelatedEntityArray' },
				objects : { type : 'a', subTypeConstructor : KalturaRelatedEntity, subType : 'KalturaRelatedEntity' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaRelatedEntityArray',KalturaRelatedEntityArray);
