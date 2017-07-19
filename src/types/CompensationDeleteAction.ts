
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface CompensationDeleteActionArgs  extends KalturaRequestArgs {
    id : number;
}

/** 
* Delete a compensation by identifier
**/
export class CompensationDeleteAction extends KalturaRequest<void> {

    id : number;

    constructor(data : CompensationDeleteActionArgs)
    {
        super(data, {responseType : 'v', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'compensation' },
				action : { type : 'c', default : 'delete' },
				id : { type : 'n' }
            }
        );
        return result;
    }
}

