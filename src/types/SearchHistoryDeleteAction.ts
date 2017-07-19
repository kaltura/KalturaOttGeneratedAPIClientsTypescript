
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface SearchHistoryDeleteActionArgs  extends KalturaRequestArgs {
    id : string;
}

/** 
* Delete a specific search history.              Possible error code: 2032 -
* ItemNotFound
**/
export class SearchHistoryDeleteAction extends KalturaRequest<boolean> {

    id : string;

    constructor(data : SearchHistoryDeleteActionArgs)
    {
        super(data, {responseType : 'b', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'searchhistory' },
				action : { type : 'c', default : 'delete' },
				id : { type : 's' }
            }
        );
        return result;
    }
}

