
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaSocialNetwork } from './KalturaSocialNetwork';
import { KalturaSocialActionPrivacy } from './KalturaSocialActionPrivacy';
import { KalturaSocialPrivacy } from './KalturaSocialPrivacy';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaActionPermissionItemArgs  extends KalturaObjectBaseArgs {
    network? : KalturaSocialNetwork;
	actionPrivacy? : KalturaSocialActionPrivacy;
	privacy? : KalturaSocialPrivacy;
	action? : string;
}


export class KalturaActionPermissionItem extends KalturaObjectBase {

    network : KalturaSocialNetwork;
	actionPrivacy : KalturaSocialActionPrivacy;
	privacy : KalturaSocialPrivacy;
	action : string;

    constructor(data? : KalturaActionPermissionItemArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaActionPermissionItem' },
				network : { type : 'es', subTypeConstructor : KalturaSocialNetwork, subType : 'KalturaSocialNetwork' },
				actionPrivacy : { type : 'es', subTypeConstructor : KalturaSocialActionPrivacy, subType : 'KalturaSocialActionPrivacy' },
				privacy : { type : 'es', subTypeConstructor : KalturaSocialPrivacy, subType : 'KalturaSocialPrivacy' },
				action : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaActionPermissionItem',KalturaActionPermissionItem);
