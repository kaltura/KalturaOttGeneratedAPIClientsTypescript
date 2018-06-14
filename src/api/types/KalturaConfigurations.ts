
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaPlatform } from './KalturaPlatform';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaConfigurationsArgs  extends KalturaObjectBaseArgs {
    configurationGroupId? : string;
	appName? : string;
	clientVersion? : string;
	platform? : KalturaPlatform;
	externalPushId? : string;
	isForceUpdate? : boolean;
	content? : string;
}


export class KalturaConfigurations extends KalturaObjectBase {

    readonly id : string;
	readonly partnerId : number;
	configurationGroupId : string;
	appName : string;
	clientVersion : string;
	platform : KalturaPlatform;
	externalPushId : string;
	isForceUpdate : boolean;
	content : string;

    constructor(data? : KalturaConfigurationsArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaConfigurations' },
				id : { type : 's', readOnly : true },
				partnerId : { type : 'n', readOnly : true },
				configurationGroupId : { type : 's' },
				appName : { type : 's' },
				clientVersion : { type : 's' },
				platform : { type : 'es', subTypeConstructor : KalturaPlatform, subType : 'KalturaPlatform' },
				externalPushId : { type : 's' },
				isForceUpdate : { type : 'b' },
				content : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaConfigurations',KalturaConfigurations);
