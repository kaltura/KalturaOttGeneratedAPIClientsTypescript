

export enum KalturaBatchJobStatus {
    aborted = 'ABORTED',
	almostDone = 'ALMOST_DONE',
	dontProcess = 'DONT_PROCESS',
	failed = 'FAILED',
	fatal = 'FATAL',
	finished = 'FINISHED',
	finishedPartially = 'FINISHED_PARTIALLY',
	movefile = 'MOVEFILE',
	pending = 'PENDING',
	processed = 'PROCESSED',
	processing = 'PROCESSING',
	queued = 'QUEUED',
	retry = 'RETRY'
}