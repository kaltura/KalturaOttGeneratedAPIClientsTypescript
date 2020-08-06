
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaUserRoleType } from './KalturaUserRoleType';
import { KalturaUserRoleProfile } from './KalturaUserRoleProfile';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaUserRoleFilterArgs  extends KalturaFilterArgs {
    idIn? : string;
	currentUserRoleIdsContains? : boolean;
	typeEqual? : KalturaUserRoleType;
	profileEqual? : KalturaUserRoleProfile;
}


export class KalturaUserRoleFilter extends KalturaFilter {

    idIn : string;
	currentUserRoleIdsContains : boolean;
	typeEqual : KalturaUserRoleType;
	profileEqual : KalturaUserRoleProfile;

    constructor(data? : KalturaUserRoleFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaUserRoleFilter' },
				idIn : { type : 's' },
				currentUserRoleIdsContains : { type : 'b' },
				typeEqual : { type : 'es', subTypeConstructor : KalturaUserRoleType, subType : 'KalturaUserRoleType' },
				profileEqual : { type : 'es', subTypeConstructor : KalturaUserRoleProfile, subType : 'KalturaUserRoleProfile' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaUserRoleFilter',KalturaUserRoleFilter);
