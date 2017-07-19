
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaSocialStatus } from './KalturaSocialStatus';
import { KalturaSocialNetwork } from './KalturaSocialNetwork';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaNetworkActionStatusArgs  extends KalturaObjectBaseArgs {
    status? : KalturaSocialStatus;
	network? : KalturaSocialNetwork;
}


export class KalturaNetworkActionStatus extends KalturaObjectBase {

    status : KalturaSocialStatus;
	network : KalturaSocialNetwork;

    constructor(data? : KalturaNetworkActionStatusArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaNetworkActionStatus' },
				status : { type : 'es', subTypeConstructor : KalturaSocialStatus, subType : 'KalturaSocialStatus' },
				network : { type : 'es', subTypeConstructor : KalturaSocialNetwork, subType : 'KalturaSocialNetwork' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaNetworkActionStatus',KalturaNetworkActionStatus);
