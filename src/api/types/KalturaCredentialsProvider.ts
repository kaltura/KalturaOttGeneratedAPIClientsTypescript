
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaCognitoIdentity } from './KalturaCognitoIdentity';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaCredentialsProviderArgs  extends KalturaObjectBaseArgs {
    cognitoIdentity? : KalturaCognitoIdentity;
}


export class KalturaCredentialsProvider extends KalturaObjectBase {

    cognitoIdentity : KalturaCognitoIdentity;

    constructor(data? : KalturaCredentialsProviderArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaCredentialsProvider' },
				cognitoIdentity : { type : 'o', subTypeConstructor : KalturaCognitoIdentity, subType : 'KalturaCognitoIdentity' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaCredentialsProvider',KalturaCredentialsProvider);
