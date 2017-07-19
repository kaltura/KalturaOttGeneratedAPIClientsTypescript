
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaOTTCategory } from './KalturaOTTCategory';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface OttCategoryGetActionArgs  extends KalturaRequestArgs {
    id : number;
}

/** 
* Retrieve the list of categories (hierarchical) and their associated channels
**/
export class OttCategoryGetAction extends KalturaRequest<KalturaOTTCategory> {

    id : number;

    constructor(data : OttCategoryGetActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaOTTCategory', responseConstructor : KalturaOTTCategory  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'ottcategory' },
				action : { type : 'c', default : 'get' },
				id : { type : 'n' }
            }
        );
        return result;
    }
}

