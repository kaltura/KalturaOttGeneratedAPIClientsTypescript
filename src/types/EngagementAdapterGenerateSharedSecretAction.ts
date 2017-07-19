
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaEngagementAdapter } from './KalturaEngagementAdapter';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface EngagementAdapterGenerateSharedSecretActionArgs  extends KalturaRequestArgs {
    id : number;
}

/** 
* Generate engagement adapter shared secret
**/
export class EngagementAdapterGenerateSharedSecretAction extends KalturaRequest<KalturaEngagementAdapter> {

    id : number;

    constructor(data : EngagementAdapterGenerateSharedSecretActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaEngagementAdapter', responseConstructor : KalturaEngagementAdapter  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'engagementadapter' },
				action : { type : 'c', default : 'generateSharedSecret' },
				id : { type : 'n' }
            }
        );
        return result;
    }
}

