
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaQuotaOveragePolicy } from './KalturaQuotaOveragePolicy';
import { KalturaProtectionPolicy } from './KalturaProtectionPolicy';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaTimeShiftedTvPartnerSettingsArgs  extends KalturaObjectBaseArgs {
    catchUpEnabled? : boolean;
	cdvrEnabled? : boolean;
	startOverEnabled? : boolean;
	trickPlayEnabled? : boolean;
	recordingScheduleWindowEnabled? : boolean;
	protectionEnabled? : boolean;
	catchUpBufferLength? : number;
	trickPlayBufferLength? : number;
	recordingScheduleWindow? : number;
	paddingBeforeProgramStarts? : number;
	paddingAfterProgramEnds? : number;
	protectionPeriod? : number;
	protectionQuotaPercentage? : number;
	recordingLifetimePeriod? : number;
	cleanupNoticePeriod? : number;
	seriesRecordingEnabled? : boolean;
	nonEntitledChannelPlaybackEnabled? : boolean;
	nonExistingChannelPlaybackEnabled? : boolean;
	quotaOveragePolicy? : KalturaQuotaOveragePolicy;
	protectionPolicy? : KalturaProtectionPolicy;
	recoveryGracePeriod? : number;
	privateCopyEnabled? : boolean;
	defaultQuota? : number;
	personalizedRecording? : boolean;
	maxRecordingConcurrency? : number;
	maxConcurrencyMargin? : number;
}


export class KalturaTimeShiftedTvPartnerSettings extends KalturaObjectBase {

    catchUpEnabled : boolean;
	cdvrEnabled : boolean;
	startOverEnabled : boolean;
	trickPlayEnabled : boolean;
	recordingScheduleWindowEnabled : boolean;
	protectionEnabled : boolean;
	catchUpBufferLength : number;
	trickPlayBufferLength : number;
	recordingScheduleWindow : number;
	paddingBeforeProgramStarts : number;
	paddingAfterProgramEnds : number;
	protectionPeriod : number;
	protectionQuotaPercentage : number;
	recordingLifetimePeriod : number;
	cleanupNoticePeriod : number;
	seriesRecordingEnabled : boolean;
	nonEntitledChannelPlaybackEnabled : boolean;
	nonExistingChannelPlaybackEnabled : boolean;
	quotaOveragePolicy : KalturaQuotaOveragePolicy;
	protectionPolicy : KalturaProtectionPolicy;
	recoveryGracePeriod : number;
	privateCopyEnabled : boolean;
	defaultQuota : number;
	personalizedRecording : boolean;
	maxRecordingConcurrency : number;
	maxConcurrencyMargin : number;

    constructor(data? : KalturaTimeShiftedTvPartnerSettingsArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaTimeShiftedTvPartnerSettings' },
				catchUpEnabled : { type : 'b' },
				cdvrEnabled : { type : 'b' },
				startOverEnabled : { type : 'b' },
				trickPlayEnabled : { type : 'b' },
				recordingScheduleWindowEnabled : { type : 'b' },
				protectionEnabled : { type : 'b' },
				catchUpBufferLength : { type : 'n' },
				trickPlayBufferLength : { type : 'n' },
				recordingScheduleWindow : { type : 'n' },
				paddingBeforeProgramStarts : { type : 'n' },
				paddingAfterProgramEnds : { type : 'n' },
				protectionPeriod : { type : 'n' },
				protectionQuotaPercentage : { type : 'n' },
				recordingLifetimePeriod : { type : 'n' },
				cleanupNoticePeriod : { type : 'n' },
				seriesRecordingEnabled : { type : 'b' },
				nonEntitledChannelPlaybackEnabled : { type : 'b' },
				nonExistingChannelPlaybackEnabled : { type : 'b' },
				quotaOveragePolicy : { type : 'es', subTypeConstructor : KalturaQuotaOveragePolicy, subType : 'KalturaQuotaOveragePolicy' },
				protectionPolicy : { type : 'es', subTypeConstructor : KalturaProtectionPolicy, subType : 'KalturaProtectionPolicy' },
				recoveryGracePeriod : { type : 'n' },
				privateCopyEnabled : { type : 'b' },
				defaultQuota : { type : 'n' },
				personalizedRecording : { type : 'b' },
				maxRecordingConcurrency : { type : 'n' },
				maxConcurrencyMargin : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaTimeShiftedTvPartnerSettings',KalturaTimeShiftedTvPartnerSettings);
