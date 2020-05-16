
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaSSOAdapterProfileInvoke } from './KalturaSSOAdapterProfileInvoke';

import { KalturaKeyValue } from './KalturaKeyValue';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface SsoAdapterProfileInvokeActionArgs  extends KalturaRequestArgs {
    intent : string;
	adapterData : KalturaKeyValue[];
}

/**
 * Build request payload for service 'ssoAdapterProfile' action 'invoke'.
 *
 * Usage: Request validation against 3rd party
 *
 * Server response type:         KalturaSSOAdapterProfileInvoke
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class SsoAdapterProfileInvokeAction extends KalturaRequest<KalturaSSOAdapterProfileInvoke> {

    intent : string;
	adapterData : KalturaKeyValue[];

    constructor(data : SsoAdapterProfileInvokeActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaSSOAdapterProfileInvoke', responseConstructor : KalturaSSOAdapterProfileInvoke  });
        if (typeof this.adapterData === 'undefined') this.adapterData = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'ssoadapterprofile' },
				action : { type : 'c', default : 'invoke' },
				intent : { type : 's' },
				adapterData : { type : 'a', subTypeConstructor : KalturaKeyValue, subType : 'KalturaKeyValue' }
            }
        );
        return result;
    }
}

