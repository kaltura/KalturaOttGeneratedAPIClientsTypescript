
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface CDVRAdapterProfileDeleteActionArgs  extends KalturaRequestArgs {
    adapterId : number;
}

/** 
* Delete C-DVR adapter by C-DVR adapter id
**/
export class CDVRAdapterProfileDeleteAction extends KalturaRequest<boolean> {

    adapterId : number;

    constructor(data : CDVRAdapterProfileDeleteActionArgs)
    {
        super(data, {responseType : 'b', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'cdvradapterprofile' },
				action : { type : 'c', default : 'delete' },
				adapterId : { type : 'n' }
            }
        );
        return result;
    }
}

