
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface FavoriteDeleteActionArgs  extends KalturaRequestArgs {
    id : number;
}

/** 
* Remove media from user&#39;s favorite list
**/
export class FavoriteDeleteAction extends KalturaRequest<boolean> {

    id : number;

    constructor(data : FavoriteDeleteActionArgs)
    {
        super(data, {responseType : 'b', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'favorite' },
				action : { type : 'c', default : 'delete' },
				id : { type : 'n' }
            }
        );
        return result;
    }
}

