// smithy-typescript generated code
import { SENSITIVE_STRING } from "@aws-sdk/smithy-client";

import {
  ActionSource,
  ActionStatus,
  AdditionalInferenceSpecificationDefinition,
  AlgorithmSpecification,
  AlgorithmStatus,
  AlgorithmStatusDetails,
  AlgorithmValidationSpecification,
  AnnotationConsolidationConfig,
  AppNetworkAccessType,
  AppSecurityGroupManagement,
  AppSpecification,
  AppStatus,
  AppType,
  ArtifactSource,
  AsyncInferenceConfig,
  AthenaDatasetDefinition,
  AuthMode,
  AutoMLCandidate,
  AutoMLChannel,
  AutoMLJobArtifacts,
  AutoMLJobCompletionCriteria,
  AutoMLJobConfig,
  AutoMLJobObjective,
  AutoMLJobSecondaryStatus,
  AutoMLJobStatus,
  AutoMLOutputDataConfig,
  AutoMLPartialFailureReason,
  BatchStrategy,
  Bias,
  CaptureStatus,
  CategoricalParameter,
  Channel,
  CheckpointConfig,
  CognitoConfig,
  CognitoMemberDefinition,
  CollectionConfiguration,
  CompilationJobStatus,
  ContainerDefinition,
  ContentClassifier,
  ContextSource,
  DataCaptureConfig,
  DataQualityAppSpecification,
  DataQualityBaselineConfig,
  DataQualityJobInput,
  DeploymentConfig,
  DeviceSelectionConfig,
  DomainSettings,
  EdgeDeploymentConfig,
  EdgeDeploymentModelConfig,
  EdgeOutputConfig,
  EdgePresetDeploymentType,
  EndpointInput,
  FeatureDefinition,
  GitConfig,
  HyperParameterTuningJobObjective,
  HyperParameterTuningJobStrategyType,
  InferenceSpecification,
  InputConfig,
  KernelGatewayImageConfig,
  MetadataProperties,
  MetricDefinition,
  MetricsSource,
  ModelApprovalStatus,
  ModelDeployConfig,
  MonitoringConstraintsResource,
  MonitoringNetworkConfig,
  MonitoringOutputConfig,
  MonitoringResources,
  MonitoringStatisticsResource,
  MonitoringStoppingCondition,
  NeoVpcConfig,
  OfflineStoreConfig,
  OnlineStoreConfig,
  OutputConfig,
  OutputDataConfig,
  ParameterRanges,
  ProblemType,
  ProcessingInstanceType,
  ProcessingS3DataDistributionType,
  ProcessingS3InputMode,
  ProcessingS3UploadMode,
  ProductionVariant,
  ProductionVariantAcceleratorType,
  ProductionVariantInstanceType,
  ProductionVariantServerlessConfig,
  PublicWorkforceTaskPrice,
  ResourceConfig,
  ResourceLimits,
  ResourceSpec,
  StoppingCondition,
  Tag,
  TrainingInputMode,
  TrainingInstanceType,
  TrainingSpecification,
  TransformInput,
  TransformJobDefinition,
  TransformOutput,
  TransformResources,
  UserContext,
  UserSettings,
  VpcConfig,
} from "./models_0";

/**
 * <p>The configuration for <code>Hyperband</code>, a multi-fidelity based hyperparameter
 *          tuning strategy. <code>Hyperband</code> uses the final and intermediate results of a
 *          training job to dynamically allocate resources to utilized hyperparameter configurations
 *          while automatically stopping under-performing configurations. This parameter should be
 *          provided only if <code>Hyperband</code> is selected as the <code>StrategyConfig</code>
 *          under the <code>HyperParameterTuningJobConfig</code> API.</p>
 */
export interface HyperbandStrategyConfig {
  /**
   * <p>The minimum number of resources (such as epochs) that can be used by a training job
   *          launched by a hyperparameter tuning job. If the value for <code>MinResource</code> has not
   *          been reached, the training job will not be stopped by <code>Hyperband</code>.</p>
   */
  MinResource?: number;

  /**
   * <p>The maximum number of resources (such as epochs) that can be used by a training job
   *          launched by a hyperparameter tuning job. Once a job reaches the <code>MaxResource</code>
   *          value, it is stopped. If a value for <code>MaxResource</code> is not provided, and
   *             <code>Hyperband</code> is selected as the hyperparameter tuning strategy,
   *             <code>HyperbandTrainingJ</code> attempts to infer <code>MaxResource</code> from the
   *          following keys (if present) in <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_HyperParameterTrainingJobDefinition.html#sagemaker-Type-HyperParameterTrainingJobDefinition-StaticHyperParameters">StaticsHyperParameters</a>:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>epochs</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>numepochs</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>n-epochs</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>n_epochs</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>num_epochs</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>If <code>HyperbandStrategyConfig</code> is unable to infer a value for
   *             <code>MaxResource</code>, it generates a validation error. The maximum value is 20,000
   *          epochs. All metrics that correspond to an objective metric are used to derive <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/automatic-model-tuning-early-stopping.html">early stopping
   *             decisions</a>. For <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/distributed-training.html">distributive</a> training jobs,
   *          ensure that duplicate metrics are not printed in the logs across the individual nodes in a
   *          training job. If multiple nodes are publishing duplicate or incorrect metrics, training
   *          jobs may make an incorrect stopping decision and stop the job prematurely. </p>
   */
  MaxResource?: number;
}

/**
 * <p>The configuration for a training job launched by a hyperparameter tuning job. Choose
 *             <code>Bayesian</code> for Bayesian optimization, and <code>Random</code> for random
 *          search optimization. For more advanced use cases, use <code>Hyperband</code>, which
 *          evaluates objective metrics for training jobs after every epoch. For more information about
 *          strategies, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/automatic-model-tuning-how-it-works.html">How Hyperparameter
 *             Tuning Works</a>.</p>
 */
export interface HyperParameterTuningJobStrategyConfig {
  /**
   * <p>The configuration for the object that specifies the <code>Hyperband</code> strategy.
   *          This parameter is only supported for the <code>Hyperband</code> selection for
   *             <code>Strategy</code> within the <code>HyperParameterTuningJobConfig</code> API.</p>
   */
  HyperbandStrategyConfig?: HyperbandStrategyConfig;
}

export enum TrainingJobEarlyStoppingType {
  AUTO = "Auto",
  OFF = "Off",
}

/**
 * <p>The job completion criteria.</p>
 */
export interface TuningJobCompletionCriteria {
  /**
   * <p>The value of the objective metric.</p>
   */
  TargetObjectiveMetricValue: number | undefined;
}

/**
 * <p>Configures a hyperparameter tuning job.</p>
 */
export interface HyperParameterTuningJobConfig {
  /**
   * <p>Specifies how hyperparameter tuning chooses the combinations of hyperparameter values
   *             to use for the training job it launches. For information about search strategies, see
   *                 <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/automatic-model-tuning-how-it-works.html">How
   *                 Hyperparameter Tuning Works</a>.</p>
   */
  Strategy: HyperParameterTuningJobStrategyType | string | undefined;

  /**
   * <p>The configuration for the <code>Hyperband</code> optimization strategy. This parameter
   *          should be provided only if <code>Hyperband</code> is selected as the strategy for
   *             <code>HyperParameterTuningJobConfig</code>.</p>
   */
  StrategyConfig?: HyperParameterTuningJobStrategyConfig;

  /**
   * <p>The <a>HyperParameterTuningJobObjective</a> object that specifies the
   *             objective
   *             metric for this tuning job.</p>
   */
  HyperParameterTuningJobObjective?: HyperParameterTuningJobObjective;

  /**
   * <p>The <a>ResourceLimits</a> object that specifies the
   *             maximum
   *             number of training jobs and parallel training jobs for this tuning
   *             job.</p>
   */
  ResourceLimits: ResourceLimits | undefined;

  /**
   * <p>The <a>ParameterRanges</a> object that specifies the ranges of
   *             hyperparameters
   *             that this tuning job searches.</p>
   */
  ParameterRanges?: ParameterRanges;

  /**
   * <p>Specifies whether to use early stopping for training jobs launched by the
   *             hyperparameter tuning job. Because the <code>Hyperband</code> strategy has its own
   *             advanced internal early stopping mechanism,
   *             <code>TrainingJobEarlyStoppingType</code> must be <code>OFF</code> to use <code>Hyperband</code>. This parameter can take on one of the following values (the
   *             default value is <code>OFF</code>):</p>
   *         <dl>
   *             <dt>OFF</dt>
   *             <dd>
   *                     <p>Training jobs launched by the hyperparameter tuning job do not use early
   *                         stopping.</p>
   *                 </dd>
   *             <dt>AUTO</dt>
   *             <dd>
   *                     <p>SageMaker stops training jobs launched by the hyperparameter tuning job when
   *                         they are unlikely to perform better than previously completed training jobs.
   *                         For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/automatic-model-tuning-early-stopping.html">Stop Training Jobs Early</a>.</p>
   *                 </dd>
   *          </dl>
   */
  TrainingJobEarlyStoppingType?: TrainingJobEarlyStoppingType | string;

  /**
   * <p>The tuning job's completion criteria.</p>
   */
  TuningJobCompletionCriteria?: TuningJobCompletionCriteria;
}

/**
 * <p>Specifies
 *             which
 *             training algorithm to use for training jobs that a hyperparameter
 *             tuning job launches and the metrics to monitor.</p>
 */
export interface HyperParameterAlgorithmSpecification {
  /**
   * <p> The registry path of the Docker image that contains the training algorithm. For
   *             information about Docker registry paths for built-in algorithms, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sagemaker-algo-docker-registry-paths.html">Algorithms
   *                 Provided by Amazon SageMaker: Common Parameters</a>. SageMaker supports both
   *                 <code>registry/repository[:tag]</code> and <code>registry/repository[@digest]</code>
   *             image path formats. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/your-algorithms.html">Using Your Own Algorithms with Amazon
   *                 SageMaker</a>.</p>
   */
  TrainingImage?: string;

  /**
   * <p>The training input mode that the algorithm supports. For more information about input
   *             modes, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/algos.html">Algorithms</a>.</p>
   *
   *         <p>
   *             <b>Pipe mode</b>
   *          </p>
   *         <p>If an algorithm supports <code>Pipe</code> mode, Amazon SageMaker streams data directly from
   *             Amazon S3 to the container.</p>
   *
   *         <p>
   *             <b>File mode</b>
   *          </p>
   *         <p>If an algorithm supports <code>File</code> mode, SageMaker downloads the training data from
   *             S3 to the provisioned ML storage volume, and mounts the directory to the Docker volume
   *             for the training container.</p>
   *         <p>You must provision the ML storage volume with sufficient capacity to accommodate the
   *             data downloaded from S3. In addition to the training data, the ML storage volume also
   *             stores the output model. The algorithm container uses the ML storage volume to also
   *             store intermediate information, if any.</p>
   *         <p>For distributed algorithms, training data is distributed uniformly. Your training
   *             duration is predictable if the input data objects sizes are approximately the same. SageMaker
   *             does not split the files any further for model training. If the object sizes are skewed,
   *             training won't be optimal as the data distribution is also skewed when one host in a
   *             training cluster is overloaded, thus becoming a bottleneck in training.</p>
   *
   *         <p>
   *             <b>FastFile mode</b>
   *          </p>
   *         <p>If an algorithm supports <code>FastFile</code> mode, SageMaker streams data directly from
   *             S3 to the container with no code changes, and provides file system access to the data.
   *             Users can author their training script to interact with these files as if they were
   *             stored on disk.</p>
   *         <p>
   *             <code>FastFile</code> mode works best when the data is read sequentially. Augmented
   *             manifest files aren't supported. The startup time is lower when there are fewer files in
   *             the S3 bucket provided.</p>
   */
  TrainingInputMode: TrainingInputMode | string | undefined;

  /**
   * <p>The name of the resource algorithm to use for the hyperparameter tuning job. If you
   *             specify a value for this parameter, do not specify a value for
   *                 <code>TrainingImage</code>.</p>
   */
  AlgorithmName?: string;

  /**
   * <p>An array of <a>MetricDefinition</a> objects that specify the
   *             metrics
   *             that the algorithm emits.</p>
   */
  MetricDefinitions?: MetricDefinition[];
}

export enum HyperParameterTuningAllocationStrategy {
  PRIORITIZED = "Prioritized",
}

/**
 * <p>The configuration for hyperparameter tuning resources for use in training jobs
 *             launched by the tuning job. These resources include compute instances and storage
 *             volumes. Specify one or more compute instance configurations and allocation strategies
 *             to select resources (optional).</p>
 */
export interface HyperParameterTuningInstanceConfig {
  /**
   * <p>The instance type used for processing of hyperparameter optimization jobs. Choose from
   *             general purpose (no GPUs) instance types: ml.m5.xlarge, ml.m5.2xlarge, and ml.m5.4xlarge
   *             or compute optimized (no GPUs) instance types: ml.c5.xlarge and ml.c5.2xlarge. For more
   *             information about instance types, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/notebooks-available-instance-types.html">instance type
   *                 descriptions</a>.</p>
   */
  InstanceType: TrainingInstanceType | string | undefined;

  /**
   * <p>The number of instances of the type specified by <code>InstanceType</code>. Choose an
   *             instance count larger than 1 for distributed training algorithms. See <a href="https://docs.aws.amazon.com/data-parallel-use-api.html">SageMaker distributed training
   *                 jobs</a> for more information.</p>
   */
  InstanceCount: number | undefined;

  /**
   * <p>The volume size in GB of the data to be processed for hyperparameter optimization
   *             (optional).</p>
   */
  VolumeSizeInGB: number | undefined;
}

/**
 * <p>The configuration of resources, including compute instances and storage volumes for
 *             use in training jobs launched by hyperparameter tuning jobs. Specify one or more
 *             instance type and count and the allocation strategy for instance selection.</p>
 *         <note>
 *             <p>
 *                <code>HyperParameterTuningResourceConfig</code> supports all of the capabilities
 *                 of ResourceConfig with added functionality for flexible instance management.</p>
 *         </note>
 */
export interface HyperParameterTuningResourceConfig {
  /**
   * <p>The instance type used to run hyperparameter optimization tuning jobs. See <a href="https://docs.aws.amazon.com/notebooks-available-instance-types.html"> descriptions of
   *                 instance types</a> for more information.</p>
   */
  InstanceType?: TrainingInstanceType | string;

  /**
   * <p>The number of compute instances of type <code>InstanceType</code> to use. For <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/data-parallel-use-api.html">distributed training</a>, select a value greater than 1.</p>
   */
  InstanceCount?: number;

  /**
   * <p>The volume size in GB for the storage volume to be used in processing hyperparameter
   *             optimization jobs (optional). These volumes store model artifacts, incremental states
   *             and optionally, scratch space for training algorithms. Do not provide a value for this
   *             parameter if a value for <code>InstanceConfigs</code> is also specified.</p>
   *         <p>Some instance types have a fixed total local storage size. If you select one of these
   *             instances for training, <code>VolumeSizeInGB</code> cannot be greater than this total
   *             size. For a list of instance types with local instance storage and their sizes, see
   *                 <a href="http://aws.amazon.com/releasenotes/host-instance-storage-volumes-table/">instance store volumes</a>.</p>
   *         <note>
   *             <p>SageMaker supports only the <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-volume-types.html">General Purpose SSD
   *                     (gp2)</a> storage volume type.</p>
   *         </note>
   */
  VolumeSizeInGB?: number;

  /**
   * <p>A key used by Amazon Web Services Key Management Service to encrypt data on the storage volume
   *             attached to the compute instances used to run the training job. You can use either of
   *             the following formats to specify a key.</p>
   *         <p>KMS Key ID:</p>
   *         <p>
   *             <code>"1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *          </p>
   *         <p>Amazon Resource Name (ARN) of a KMS key:</p>
   *         <p>
   *             <code>"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *          </p>
   *         <p>Some instances use local storage, which use a <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ssd-instance-store.html">hardware module to
   *                 encrypt</a> storage volumes. If you choose one of these instance types, you
   *             cannot request a <code>VolumeKmsKeyId</code>. For a list of instance types that use
   *             local storage, see <a href="http://aws.amazon.com/releasenotes/host-instance-storage-volumes-table/">instance store
   *                 volumes</a>. For more information about Amazon Web Services Key Management Service, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-security-kms-permissions.html">KMS
   *                 encryption</a> for more information.</p>
   */
  VolumeKmsKeyId?: string;

  /**
   * <p>The strategy that determines the order of preference for resources specified in
   *                 <code>InstanceConfigs</code> used in hyperparameter optimization.</p>
   */
  AllocationStrategy?: HyperParameterTuningAllocationStrategy | string;

  /**
   * <p>A list containing the configuration(s) for one or more resources for processing
   *             hyperparameter jobs. These resources include compute instances and storage volumes to
   *             use in model training jobs launched by hyperparameter tuning jobs. The
   *                 <code>AllocationStrategy</code> controls the order in which multiple configurations
   *             provided in <code>InstanceConfigs</code> are used.</p>
   *         <note>
   *             <p>If you only want to use a single instance configuration inside the
   *                     <code>HyperParameterTuningResourceConfig</code> API, do not provide a value for
   *                     <code>InstanceConfigs</code>. Instead, use <code>InstanceType</code>,
   *                     <code>VolumeSizeInGB</code> and <code>InstanceCount</code>. If you use
   *                     <code>InstanceConfigs</code>, do not provide values for
   *                     <code>InstanceType</code>, <code>VolumeSizeInGB</code> or
   *                     <code>InstanceCount</code>.</p>
   *         </note>
   */
  InstanceConfigs?: HyperParameterTuningInstanceConfig[];
}

/**
 * <p>The retry strategy to use when a training job fails due to an
 *                 <code>InternalServerError</code>. <code>RetryStrategy</code> is specified as part of
 *             the <code>CreateTrainingJob</code> and <code>CreateHyperParameterTuningJob</code>
 *             requests. You can add the <code>StoppingCondition</code> parameter to the request to
 *             limit the training time for the complete job.</p>
 */
export interface RetryStrategy {
  /**
   * <p>The number of times to retry the job. When the job is retried, it's
   *                 <code>SecondaryStatus</code> is changed to <code>STARTING</code>.</p>
   */
  MaximumRetryAttempts: number | undefined;
}

/**
 * <p>Defines
 *             the training jobs launched by a hyperparameter tuning job.</p>
 */
export interface HyperParameterTrainingJobDefinition {
  /**
   * <p>The job definition name.</p>
   */
  DefinitionName?: string;

  /**
   * <p>Defines the objective metric for a hyperparameter tuning job.
   *             Hyperparameter
   *             tuning uses the value of this metric to evaluate the training jobs it launches, and
   *             returns the training job that results in either the highest or lowest value for this
   *             metric, depending on the value you specify for the <code>Type</code>
   *             parameter.</p>
   */
  TuningObjective?: HyperParameterTuningJobObjective;

  /**
   * <p>Specifies ranges of integer, continuous, and categorical hyperparameters that a
   *             hyperparameter tuning job searches. The hyperparameter tuning job launches training jobs
   *             with hyperparameter values within these ranges to find the combination of values that
   *             result in the training job with the best performance as measured by the objective metric
   *             of the hyperparameter tuning job.</p>
   *         <note>
   *             <p>The maximum number of items specified for <code>Array Members</code> refers to the
   *                 maximum number of hyperparameters for each range and also the maximum for the
   *                 hyperparameter tuning job itself. That is, the sum of the number of hyperparameters
   *                 for all the ranges can't exceed the maximum number specified.</p>
   *         </note>
   */
  HyperParameterRanges?: ParameterRanges;

  /**
   * <p>Specifies the values of hyperparameters
   *             that
   *             do not change for the tuning job.</p>
   */
  StaticHyperParameters?: Record<string, string>;

  /**
   * <p>The <a>HyperParameterAlgorithmSpecification</a> object that
   *             specifies
   *             the resource algorithm to use for the training jobs that the tuning
   *             job launches.</p>
   */
  AlgorithmSpecification: HyperParameterAlgorithmSpecification | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the
   *             IAM
   *             role associated with the training jobs that the tuning job
   *             launches.</p>
   */
  RoleArn: string | undefined;

  /**
   * <p>An array of <a>Channel</a> objects that specify
   *             the
   *             input for the training jobs that the tuning job launches.</p>
   */
  InputDataConfig?: Channel[];

  /**
   * <p>The <a>VpcConfig</a> object that
   *             specifies
   *             the VPC that you want the training jobs that this hyperparameter
   *             tuning job launches to connect to. Control access to and from your
   *             training
   *             container by configuring the VPC. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/train-vpc.html">Protect Training Jobs
   *                 by Using an Amazon Virtual Private Cloud</a>.</p>
   */
  VpcConfig?: VpcConfig;

  /**
   * <p>Specifies the path to the Amazon S3 bucket where you
   *             store
   *             model artifacts from the training jobs that the tuning job
   *             launches.</p>
   */
  OutputDataConfig: OutputDataConfig | undefined;

  /**
   * <p>The resources,
   *             including
   *             the compute instances and storage volumes, to use for the training
   *             jobs that the tuning job launches.</p>
   *         <p>Storage volumes store model artifacts and
   *             incremental
   *             states. Training algorithms might also use storage volumes for
   *             scratch
   *             space. If you want SageMaker to use the storage volume to store the
   *             training data, choose <code>File</code> as the <code>TrainingInputMode</code> in the
   *             algorithm specification. For distributed training algorithms, specify an instance count
   *             greater than 1.</p>
   *         <note>
   *             <p>If you want to use hyperparameter optimization with instance type flexibility, use
   *                     <code>HyperParameterTuningResourceConfig</code> instead.</p>
   *         </note>
   */
  ResourceConfig?: ResourceConfig;

  /**
   * <p>Specifies a limit to how long a model hyperparameter training job can run. It also
   *             specifies how long a managed spot training job has to complete. When the job reaches the
   *             time limit, SageMaker ends the training job. Use this API to cap model training costs.</p>
   */
  StoppingCondition: StoppingCondition | undefined;

  /**
   * <p>Isolates the training container. No inbound or outbound network calls can be made,
   *             except for calls between peers within a training cluster for distributed training. If
   *             network isolation is used for training jobs that are configured to use a VPC, SageMaker
   *             downloads and uploads customer data and model artifacts through the specified VPC, but
   *             the training container does not have network access.</p>
   */
  EnableNetworkIsolation?: boolean;

  /**
   * <p>To encrypt all communications between ML compute instances in distributed training,
   *             choose <code>True</code>. Encryption provides greater security for distributed training,
   *             but training might take longer. How long it takes depends on the amount of communication
   *             between compute instances, especially if you use a deep learning algorithm in
   *             distributed training.</p>
   */
  EnableInterContainerTrafficEncryption?: boolean;

  /**
   * <p>A Boolean indicating whether managed spot training is enabled (<code>True</code>) or
   *             not (<code>False</code>).</p>
   */
  EnableManagedSpotTraining?: boolean;

  /**
   * <p>Contains information about the output location for managed spot training checkpoint
   *             data. </p>
   */
  CheckpointConfig?: CheckpointConfig;

  /**
   * <p>The number of times to retry the job when the job fails due to an
   *                 <code>InternalServerError</code>.</p>
   */
  RetryStrategy?: RetryStrategy;

  /**
   * <p>The configuration for the hyperparameter tuning resources, including the compute
   *             instances and storage volumes, used for training jobs launched by the tuning job. By
   *             default, storage volumes hold model artifacts and incremental states. Choose
   *                 <code>File</code> for <code>TrainingInputMode</code> in the
   *                 <code>AlgorithmSpecification</code> parameter to additionally store training data in
   *             the storage volume (optional).</p>
   */
  HyperParameterTuningResourceConfig?: HyperParameterTuningResourceConfig;
}

/**
 * <p>A previously completed or stopped hyperparameter tuning job to be used as a starting
 *             point for a new hyperparameter tuning job.</p>
 */
export interface ParentHyperParameterTuningJob {
  /**
   * <p>The name of the hyperparameter tuning job to be used as a starting point for a new
   *             hyperparameter tuning job.</p>
   */
  HyperParameterTuningJobName?: string;
}

export enum HyperParameterTuningJobWarmStartType {
  IDENTICAL_DATA_AND_ALGORITHM = "IdenticalDataAndAlgorithm",
  TRANSFER_LEARNING = "TransferLearning",
}

/**
 * <p>Specifies the configuration for a hyperparameter tuning job that uses one or more
 *             previous hyperparameter tuning jobs as a starting point. The results of previous tuning
 *             jobs are used to inform which combinations of hyperparameters to search over in the new
 *             tuning job.</p>
 *         <p>All training jobs launched by the new hyperparameter tuning job are evaluated by using
 *             the objective metric, and the training job that performs the best is compared to the
 *             best training jobs from the parent tuning jobs. From these, the training job that
 *             performs the best as measured by the objective metric is returned as the overall best
 *             training job.</p>
 *         <note>
 *             <p>All training jobs launched by parent hyperparameter tuning jobs and the new
 *                 hyperparameter tuning jobs count against the limit of training jobs for the tuning
 *                 job.</p>
 *         </note>
 */
export interface HyperParameterTuningJobWarmStartConfig {
  /**
   * <p>An array of hyperparameter tuning jobs that are used as the starting point for the new
   *             hyperparameter tuning job. For more information about warm starting a hyperparameter
   *             tuning job, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/automatic-model-tuning-warm-start.html">Using a Previous
   *                 Hyperparameter Tuning Job as a Starting Point</a>.</p>
   *         <p>Hyperparameter tuning jobs created before October 1, 2018 cannot be used as parent
   *             jobs for warm start tuning jobs.</p>
   */
  ParentHyperParameterTuningJobs: ParentHyperParameterTuningJob[] | undefined;

  /**
   * <p>Specifies one of the following:</p>
   *         <dl>
   *             <dt>IDENTICAL_DATA_AND_ALGORITHM</dt>
   *             <dd>
   *                     <p>The new hyperparameter tuning job uses the same input data and training
   *                         image as the parent tuning jobs. You can change the hyperparameter ranges to
   *                         search and the maximum number of training jobs that the hyperparameter
   *                         tuning job launches. You cannot use a new version of the training algorithm,
   *                         unless the changes in the new version do not affect the algorithm itself.
   *                         For example, changes that improve logging or adding support for a different
   *                         data format are allowed. You can also change hyperparameters from tunable to
   *                         static, and from static to tunable, but the total number of static plus
   *                         tunable hyperparameters must remain the same as it is in all parent jobs.
   *                         The objective metric for the new tuning job must be the same as for all
   *                         parent jobs.</p>
   *                 </dd>
   *             <dt>TRANSFER_LEARNING</dt>
   *             <dd>
   *                     <p>The new hyperparameter tuning job can include input data, hyperparameter
   *                         ranges, maximum number of concurrent training jobs, and maximum number of
   *                         training jobs that are different than those of its parent hyperparameter
   *                         tuning jobs. The training image can also be a different version from the
   *                         version used in the parent hyperparameter tuning job. You can also change
   *                         hyperparameters from tunable to static, and from static to tunable, but the
   *                         total number of static plus tunable hyperparameters must remain the same as
   *                         it is in all parent jobs. The objective metric for the new tuning job must
   *                         be the same as for all parent jobs.</p>
   *                 </dd>
   *          </dl>
   */
  WarmStartType: HyperParameterTuningJobWarmStartType | string | undefined;
}

export interface CreateHyperParameterTuningJobRequest {
  /**
   * <p>The name of the tuning job. This name is the prefix for the names of all training jobs
   *             that this tuning job launches. The name must be unique within the same Amazon Web Services account and Amazon Web Services Region. The name must have 1 to 32 characters. Valid
   *             characters are a-z, A-Z, 0-9, and : + = @ _ % - (hyphen). The name is not case
   *             sensitive.</p>
   */
  HyperParameterTuningJobName: string | undefined;

  /**
   * <p>The <a>HyperParameterTuningJobConfig</a> object that describes the tuning
   *             job, including the search strategy, the objective metric used to evaluate training jobs,
   *             ranges of parameters to search, and resource limits for the tuning job. For more
   *             information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/automatic-model-tuning-how-it-works.html">How
   *                 Hyperparameter Tuning Works</a>.</p>
   */
  HyperParameterTuningJobConfig: HyperParameterTuningJobConfig | undefined;

  /**
   * <p>The <a>HyperParameterTrainingJobDefinition</a> object that describes the
   *             training jobs that this tuning job launches, including static hyperparameters, input
   *             data configuration, output data configuration, resource configuration, and stopping
   *             condition.</p>
   */
  TrainingJobDefinition?: HyperParameterTrainingJobDefinition;

  /**
   * <p>A list of the <a>HyperParameterTrainingJobDefinition</a> objects launched
   *             for this tuning job.</p>
   */
  TrainingJobDefinitions?: HyperParameterTrainingJobDefinition[];

  /**
   * <p>Specifies the configuration for starting the hyperparameter tuning job using one or
   *             more previous tuning jobs as a starting point. The results of previous tuning jobs are
   *             used to inform which combinations of hyperparameters to search over in the new tuning
   *             job.</p>
   *         <p>All training jobs launched by the new hyperparameter tuning job are evaluated by using
   *             the objective metric. If you specify <code>IDENTICAL_DATA_AND_ALGORITHM</code> as the
   *                 <code>WarmStartType</code> value for the warm start configuration, the training job
   *             that performs the best in the new tuning job is compared to the best training jobs from
   *             the parent tuning jobs. From these, the training job that performs the best as measured
   *             by the objective metric is returned as the overall best training job.</p>
   *         <note>
   *             <p>All training jobs launched by parent hyperparameter tuning jobs and the new
   *                 hyperparameter tuning jobs count against the limit of training jobs for the tuning
   *                 job.</p>
   *         </note>
   */
  WarmStartConfig?: HyperParameterTuningJobWarmStartConfig;

  /**
   * <p>An array of key-value pairs. You can use tags to categorize your Amazon Web Services
   *             resources in different ways, for example, by purpose, owner, or environment. For more
   *             information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services Resources</a>.</p>
   *         <p>Tags that you specify for the tuning job are also added to all training jobs that the
   *             tuning job launches.</p>
   */
  Tags?: Tag[];
}

export interface CreateHyperParameterTuningJobResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the tuning job. SageMaker assigns an ARN to a
   *             hyperparameter tuning job when you create it.</p>
   */
  HyperParameterTuningJobArn: string | undefined;
}

export interface CreateImageRequest {
  /**
   * <p>The description of the image.</p>
   */
  Description?: string;

  /**
   * <p>The display name of the image. If not provided, <code>ImageName</code> is displayed.</p>
   */
  DisplayName?: string;

  /**
   * <p>The name of the image. Must be unique to your account.</p>
   */
  ImageName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of an IAM role that enables Amazon SageMaker to perform tasks on your behalf.</p>
   */
  RoleArn: string | undefined;

  /**
   * <p>A list of tags to apply to the image.</p>
   */
  Tags?: Tag[];
}

export interface CreateImageResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the image.</p>
   */
  ImageArn?: string;
}

export interface CreateImageVersionRequest {
  /**
   * <p>The registry path of the container image to use as the starting point for this
   *         version. The path is an Amazon Elastic Container Registry (ECR) URI in the following format:</p>
   *          <p>
   *             <code><acct-id>.dkr.ecr.<region>.amazonaws.com/<repo-name[:tag] or [@digest]></code>
   *          </p>
   */
  BaseImage: string | undefined;

  /**
   * <p>A unique ID. If not specified, the Amazon Web Services CLI and Amazon Web Services SDKs, such as the SDK for Python
   *         (Boto3), add a unique value to the call.</p>
   */
  ClientToken?: string;

  /**
   * <p>The <code>ImageName</code> of the <code>Image</code> to create a version of.</p>
   */
  ImageName: string | undefined;
}

export interface CreateImageVersionResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the image version.</p>
   */
  ImageVersionArn?: string;
}

/**
 * <p>The configuration for the payload for a recommendation job.</p>
 */
export interface RecommendationJobPayloadConfig {
  /**
   * <p>The Amazon Simple Storage Service (Amazon S3) path where the sample payload is stored. This path must point to a single gzip compressed tar archive (.tar.gz suffix).</p>
   */
  SamplePayloadUrl?: string;

  /**
   * <p>The supported MIME types for the input data.</p>
   */
  SupportedContentTypes?: string[];
}

/**
 * <p>Specifies mandatory fields for running an Inference Recommender job directly in the
 *          <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateInferenceRecommendationsJob.html">CreateInferenceRecommendationsJob</a>
 *          API. The fields specified in <code>ContainerConfig</code> override the corresponding fields in the model package. Use
 *       <code>ContainerConfig</code> if you want to specify these fields for the recommendation job but don't want to edit them in your model package.</p>
 */
export interface RecommendationJobContainerConfig {
  /**
   * <p>The machine learning domain of the model and its components.</p>
   *          <p>Valid Values: <code>COMPUTER_VISION | NATURAL_LANGUAGE_PROCESSING |
   *       MACHINE_LEARNING</code>
   *          </p>
   */
  Domain?: string;

  /**
   * <p>The machine learning task that the model accomplishes.</p>
   *          <p>Valid Values: <code>IMAGE_CLASSIFICATION | OBJECT_DETECTION
   *          | TEXT_GENERATION | IMAGE_SEGMENTATION | FILL_MASK | CLASSIFICATION |
   *       REGRESSION | OTHER</code>
   *          </p>
   */
  Task?: string;

  /**
   * <p>The machine learning framework of the container image.</p>
   *          <p>Valid Values: <code>TENSORFLOW | PYTORCH | XGBOOST | SAGEMAKER-SCIKIT-LEARN</code>
   *          </p>
   */
  Framework?: string;

  /**
   * <p>The framework version of the container image.</p>
   */
  FrameworkVersion?: string;

  /**
   * <p>Specifies the <code>SamplePayloadUrl</code> and all other sample payload-related fields.</p>
   */
  PayloadConfig?: RecommendationJobPayloadConfig;

  /**
   * <p>The name of a pre-trained machine learning model benchmarked by Amazon SageMaker Inference Recommender that matches your model.</p>
   *          <p>Valid Values: <code>efficientnetb7 | unet | xgboost | faster-rcnn-resnet101 | nasnetlarge | vgg16 | inception-v3 | mask-rcnn | sagemaker-scikit-learn |
   *       densenet201-gluon | resnet18v2-gluon | xception | densenet201 | yolov4 | resnet152 | bert-base-cased | xceptionV1-keras | resnet50 | retinanet</code>
   *          </p>
   */
  NearestModelName?: string;

  /**
   * <p>A list of the instance types that are used to generate inferences in real-time.</p>
   */
  SupportedInstanceTypes?: string[];
}

/**
 * <p>Specifies the range of environment parameters</p>
 */
export interface EnvironmentParameterRanges {
  /**
   * <p>Specified a list of parameters for each category.</p>
   */
  CategoricalParameterRanges?: CategoricalParameter[];
}

/**
 * <p>The endpoint configuration for the load test.</p>
 */
export interface EndpointInputConfiguration {
  /**
   * <p>The instance types to use for the load test.</p>
   */
  InstanceType: ProductionVariantInstanceType | string | undefined;

  /**
   * <p>The inference specification name in the model package version.</p>
   */
  InferenceSpecificationName?: string;

  /**
   * <p> The parameter you want to benchmark against.</p>
   */
  EnvironmentParameterRanges?: EnvironmentParameterRanges;
}

/**
 * <p>Specifies the maximum number of jobs that can run in parallel
 *     and the maximum number of jobs that can run.</p>
 */
export interface RecommendationJobResourceLimit {
  /**
   * <p>Defines the maximum number of load tests.</p>
   */
  MaxNumberOfTests?: number;

  /**
   * <p>Defines the maximum number of parallel load tests.</p>
   */
  MaxParallelOfTests?: number;
}

/**
 * <p>Defines the traffic pattern.</p>
 */
export interface Phase {
  /**
   * <p>Specifies how many concurrent users to start with.</p>
   */
  InitialNumberOfUsers?: number;

  /**
   * <p>Specified how many new users to spawn in a minute.</p>
   */
  SpawnRate?: number;

  /**
   * <p>Specifies how long traffic phase should be.</p>
   */
  DurationInSeconds?: number;
}

export enum TrafficType {
  PHASES = "PHASES",
}

/**
 * <p>Defines the traffic pattern of the load test.</p>
 */
export interface TrafficPattern {
  /**
   * <p>Defines the traffic patterns.</p>
   */
  TrafficType?: TrafficType | string;

  /**
   * <p>Defines the phases traffic specification.</p>
   */
  Phases?: Phase[];
}

/**
 * <p>The input configuration of the recommendation job.</p>
 */
export interface RecommendationJobInputConfig {
  /**
   * <p>The Amazon Resource Name (ARN) of a versioned model package.</p>
   */
  ModelPackageVersionArn: string | undefined;

  /**
   * <p>Specifies the maximum duration of the job, in seconds.></p>
   */
  JobDurationInSeconds?: number;

  /**
   * <p>Specifies the traffic pattern of the job.</p>
   */
  TrafficPattern?: TrafficPattern;

  /**
   * <p>Defines the resource limit of the job.</p>
   */
  ResourceLimit?: RecommendationJobResourceLimit;

  /**
   * <p>Specifies the endpoint configuration to use for a job.</p>
   */
  EndpointConfigurations?: EndpointInputConfiguration[];

  /**
   * <p>The Amazon Resource Name (ARN) of a Amazon Web Services Key Management Service (Amazon Web Services KMS) key
   *          that Amazon SageMaker uses to encrypt data on the storage volume attached to the ML compute instance that hosts the endpoint.
   *          This key will be passed to SageMaker Hosting for endpoint creation. </p>
   *
   *          <p>The SageMaker execution role must have <code>kms:CreateGrant</code> permission in order to encrypt data on the storage
   *          volume of the endpoints created for inference recommendation. The inference recommendation job will fail
   *          asynchronously during endpoint configuration creation if the role passed does not have
   *          <code>kms:CreateGrant</code> permission.</p>
   *
   *          <p>The <code>KmsKeyId</code> can be any of the following formats:</p>
   *          <ul>
   *             <li>
   *                <p>// KMS Key ID</p>
   *                <p>
   *                   <code>"1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>// Amazon Resource Name (ARN) of a KMS Key</p>
   *                <p>
   *                   <code>"arn:aws:kms:<region>:<account>:key/<key-id-12ab-34cd-56ef-1234567890ab>"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>// KMS Key Alias</p>
   *                <p>
   *                   <code>"alias/ExampleAlias"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>// Amazon Resource Name (ARN) of a KMS Key Alias</p>
   *                <p>
   *                   <code>"arn:aws:kms:<region>:<account>:alias/<ExampleAlias>"</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>For more information about key identifiers, see
   *          <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#key-id-key-id">Key identifiers (KeyID)</a> in the
   *          Amazon Web Services Key Management Service (Amazon Web Services KMS) documentation.</p>
   */
  VolumeKmsKeyId?: string;

  /**
   * <p>Specifies mandatory fields for running an Inference Recommender job. The fields specified in <code>ContainerConfig</code>
   *          override the corresponding fields in the model package.</p>
   */
  ContainerConfig?: RecommendationJobContainerConfig;
}

export enum RecommendationJobType {
  ADVANCED = "Advanced",
  DEFAULT = "Default",
}

/**
 * <p>Provides information about the output configuration for the compiled
 *          model.</p>
 */
export interface RecommendationJobCompiledOutputConfig {
  /**
   * <p>Identifies the Amazon S3 bucket where you want SageMaker to store the
   *          compiled model artifacts.</p>
   */
  S3OutputUri?: string;
}

/**
 * <p>Provides information about the output configuration for the compiled model.</p>
 */
export interface RecommendationJobOutputConfig {
  /**
   * <p>The Amazon Resource Name (ARN) of a Amazon Web Services Key Management Service (Amazon Web Services KMS) key
   *          that Amazon SageMaker uses to encrypt your output artifacts with Amazon S3 server-side encryption.
   *          The SageMaker execution role must have <code>kms:GenerateDataKey</code> permission.</p>
   *
   *          <p>The <code>KmsKeyId</code> can be any of the following formats:</p>
   *          <ul>
   *             <li>
   *                <p>// KMS Key ID</p>
   *                <p>
   *                   <code>"1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>// Amazon Resource Name (ARN) of a KMS Key</p>
   *                <p>
   *                   <code>"arn:aws:kms:<region>:<account>:key/<key-id-12ab-34cd-56ef-1234567890ab>"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>// KMS Key Alias</p>
   *                <p>
   *                   <code>"alias/ExampleAlias"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>// Amazon Resource Name (ARN) of a KMS Key Alias</p>
   *                <p>
   *                   <code>"arn:aws:kms:<region>:<account>:alias/<ExampleAlias>"</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>For more information about key identifiers, see
   *          <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#key-id-key-id">Key identifiers (KeyID)</a> in the
   *          Amazon Web Services Key Management Service (Amazon Web Services KMS) documentation.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>Provides information about the output configuration for the compiled
   *          model.</p>
   */
  CompiledOutputConfig?: RecommendationJobCompiledOutputConfig;
}

/**
 * <p>The model latency threshold.</p>
 */
export interface ModelLatencyThreshold {
  /**
   * <p>The model latency percentile threshold.</p>
   */
  Percentile?: string;

  /**
   * <p>The model latency percentile value in milliseconds.</p>
   */
  ValueInMilliseconds?: number;
}

/**
 * <p>Specifies conditions for stopping a job. When a job reaches a
 *            stopping condition limit, SageMaker ends the job.</p>
 */
export interface RecommendationJobStoppingConditions {
  /**
   * <p>The maximum number of requests per minute expected for the endpoint.</p>
   */
  MaxInvocations?: number;

  /**
   * <p>The interval of time taken by a model to respond as viewed from SageMaker.
   *           The interval includes the local communication time taken to send the request
   *           and to fetch the response from the container of a model and the time taken to
   *           complete the inference in the container.</p>
   */
  ModelLatencyThresholds?: ModelLatencyThreshold[];
}

export interface CreateInferenceRecommendationsJobRequest {
  /**
   * <p>A name for the recommendation job. The name must be unique within
   *            the Amazon Web Services Region and within your Amazon Web Services account.</p>
   */
  JobName: string | undefined;

  /**
   * <p>Defines the type of recommendation job. Specify <code>Default</code> to initiate an instance
   *            recommendation and <code>Advanced</code> to initiate a load test. If left unspecified,
   *            Amazon SageMaker Inference Recommender will run an instance recommendation (<code>DEFAULT</code>) job.</p>
   */
  JobType: RecommendationJobType | string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of an IAM role that enables Amazon SageMaker
   *     to perform tasks on your behalf.</p>
   */
  RoleArn: string | undefined;

  /**
   * <p>Provides information about the versioned model package Amazon Resource Name (ARN),
   *     the traffic pattern, and endpoint configurations.</p>
   */
  InputConfig: RecommendationJobInputConfig | undefined;

  /**
   * <p>Description of the recommendation job.</p>
   */
  JobDescription?: string;

  /**
   * <p>A set of conditions for stopping a recommendation job.  If any of
   *           the conditions are met, the job is automatically stopped.</p>
   */
  StoppingConditions?: RecommendationJobStoppingConditions;

  /**
   * <p>Provides information about the output artifacts and the KMS key
   *          to use for Amazon S3 server-side encryption.</p>
   */
  OutputConfig?: RecommendationJobOutputConfig;

  /**
   * <p>The metadata that you apply to Amazon Web Services resources to help you
   *            categorize and organize them. Each tag consists of a key and a value, both of
   *            which you define. For more information, see
   *            <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services Resources</a>
   *            in the Amazon Web Services General Reference.</p>
   */
  Tags?: Tag[];
}

export interface CreateInferenceRecommendationsJobResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the recommendation job.</p>
   */
  JobArn: string | undefined;
}

/**
 * <p>Provided configuration information for the worker UI for a labeling job. Provide
 *             either <code>HumanTaskUiArn</code> or <code>UiTemplateS3Uri</code>.</p>
 *         <p>For named entity recognition, 3D point cloud and video frame labeling jobs, use
 *                 <code>HumanTaskUiArn</code>.</p>
 *         <p>For all other Ground Truth built-in task types and custom task types, use
 *                 <code>UiTemplateS3Uri</code> to specify the location of a worker task template in
 *             Amazon S3.</p>
 */
export interface UiConfig {
  /**
   * <p>The Amazon S3 bucket location of the UI template, or worker task template. This is the
   *             template used to render the worker UI and tools for labeling job tasks. For more
   *             information about the contents of a UI template, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-custom-templates-step2.html"> Creating Your Custom
   *                 Labeling Task Template</a>.</p>
   */
  UiTemplateS3Uri?: string;

  /**
   * <p>The ARN of the worker task template used to render the worker UI and tools for
   *             labeling job tasks.</p>
   *         <p>Use this parameter when you are creating a labeling job for named entity recognition,
   *             3D point cloud and video frame labeling jobs. Use your labeling job task type to select
   *             one of the following ARNs and use it with this parameter when you create a labeling job.
   *             Replace <code>aws-region</code> with the Amazon Web Services Region you are creating your labeling job
   *             in. For example, replace <code>aws-region</code> with <code>us-west-1</code> if you
   *             create a labeling job in US West (N. California).</p>
   *         <p>
   *             <b>Named Entity Recognition</b>
   *          </p>
   *         <p>Use the following <code>HumanTaskUiArn</code> for named entity recognition labeling
   *             jobs:</p>
   *         <p>
   *             <code>arn:aws:sagemaker:aws-region:394669845002:human-task-ui/NamedEntityRecognition</code>
   *          </p>
   *
   *         <p>
   *             <b>3D Point Cloud HumanTaskUiArns</b>
   *          </p>
   *
   *         <p>Use this <code>HumanTaskUiArn</code> for 3D point cloud object detection and 3D point
   *             cloud object detection adjustment labeling jobs. </p>
   *         <ul>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:sagemaker:aws-region:394669845002:human-task-ui/PointCloudObjectDetection</code>
   *                 </p>
   *             </li>
   *          </ul>
   *
   *         <p> Use this <code>HumanTaskUiArn</code> for 3D point cloud object tracking and 3D point
   *             cloud object tracking adjustment labeling jobs. </p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:sagemaker:aws-region:394669845002:human-task-ui/PointCloudObjectTracking</code>
   *                 </p>
   *             </li>
   *          </ul>
   *
   *         <p> Use this <code>HumanTaskUiArn</code> for 3D point cloud semantic segmentation and 3D
   *             point cloud semantic segmentation adjustment labeling jobs.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:sagemaker:aws-region:394669845002:human-task-ui/PointCloudSemanticSegmentation</code>
   *                 </p>
   *             </li>
   *          </ul>
   *
   *         <p>
   *             <b>Video Frame HumanTaskUiArns</b>
   *          </p>
   *
   *         <p>Use this <code>HumanTaskUiArn</code> for video frame object detection and video frame
   *             object detection adjustment labeling jobs. </p>
   *         <ul>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:sagemaker:region:394669845002:human-task-ui/VideoObjectDetection</code>
   *                 </p>
   *             </li>
   *          </ul>
   *
   *         <p> Use this <code>HumanTaskUiArn</code> for video frame object tracking and video frame
   *             object tracking adjustment labeling jobs. </p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:sagemaker:aws-region:394669845002:human-task-ui/VideoObjectTracking</code>
   *                 </p>
   *             </li>
   *          </ul>
   */
  HumanTaskUiArn?: string;
}

/**
 * <p>Information required for human workers to complete a labeling task.</p>
 */
export interface HumanTaskConfig {
  /**
   * <p>The Amazon Resource Name (ARN) of the work team assigned to complete the tasks.</p>
   */
  WorkteamArn: string | undefined;

  /**
   * <p>Information about the user interface that workers use to complete the labeling
   *             task.</p>
   */
  UiConfig: UiConfig | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of a Lambda function that is run before a data object
   *             is sent to a human worker. Use this function to provide input to a custom labeling
   *             job.</p>
   *         <p>For <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-task-types.html">built-in
   *                 task types</a>, use one of the following Amazon SageMaker Ground Truth Lambda function ARNs for
   *                 <code>PreHumanTaskLambdaArn</code>. For custom labeling workflows, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-custom-templates-step3.html#sms-custom-templates-step3-prelambda">Pre-annotation Lambda</a>. </p>
   *
   *
   *
   *          <p>
   *             <b>Bounding box</b> - Finds the most similar boxes from
   *                     different workers based on the Jaccard index of the boxes.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:us-east-1:432418664414:function:PRE-BoundingBox</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:us-east-2:266458841044:function:PRE-BoundingBox</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:us-west-2:081040173940:function:PRE-BoundingBox</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ca-central-1:918755190332:function:PRE-BoundingBox</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:eu-west-1:568282634449:function:PRE-BoundingBox</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:eu-west-2:487402164563:function:PRE-BoundingBox</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:eu-central-1:203001061592:function:PRE-BoundingBox</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-northeast-1:477331159723:function:PRE-BoundingBox</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-northeast-2:845288260483:function:PRE-BoundingBox</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-south-1:565803892007:function:PRE-BoundingBox</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-southeast-1:377565633583:function:PRE-BoundingBox</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-southeast-2:454466003867:function:PRE-BoundingBox</code>
   *                 </p>
   *             </li>
   *          </ul>
   *
   *
   *           <p>
   *             <b>Image classification</b> - Uses a variant of the Expectation
   *                     Maximization approach to estimate the true class of an image based on
   *                     annotations from individual workers.</p>
   *
   *         <ul>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:us-east-1:432418664414:function:PRE-ImageMultiClass</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:us-east-2:266458841044:function:PRE-ImageMultiClass</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:us-west-2:081040173940:function:PRE-ImageMultiClass</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ca-central-1:918755190332:function:PRE-ImageMultiClass</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:eu-west-1:568282634449:function:PRE-ImageMultiClass</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:eu-west-2:487402164563:function:PRE-ImageMultiClass</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:eu-central-1:203001061592:function:PRE-ImageMultiClass</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-northeast-1:477331159723:function:PRE-ImageMultiClass</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-northeast-2:845288260483:function:PRE-ImageMultiClass</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-south-1:565803892007:function:PRE-ImageMultiClass</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-southeast-1:377565633583:function:PRE-ImageMultiClass</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-southeast-2:454466003867:function:PRE-ImageMultiClass</code>
   *                 </p>
   *             </li>
   *          </ul>
   *
   *             <p>
   *             <b>Multi-label image classification</b> - Uses a variant of the Expectation
   *                     Maximization approach to estimate the true classes of an image based on
   *                     annotations from individual workers.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-east-1:432418664414:function:PRE-ImageMultiClassMultiLabel</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-east-2:266458841044:function:PRE-ImageMultiClassMultiLabel</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-west-2:081040173940:function:PRE-ImageMultiClassMultiLabel</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ca-central-1:918755190332:function:PRE-ImageMultiClassMultiLabel</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-west-1:568282634449:function:PRE-ImageMultiClassMultiLabel</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-west-2:487402164563:function:PRE-ImageMultiClassMultiLabel</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-central-1:203001061592:function:PRE-ImageMultiClassMultiLabel</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-northeast-1:477331159723:function:PRE-ImageMultiClassMultiLabel</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-northeast-2:845288260483:function:PRE-ImageMultiClassMultiLabel</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-south-1:565803892007:function:PRE-ImageMultiClassMultiLabel</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-southeast-1:377565633583:function:PRE-ImageMultiClassMultiLabel</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-southeast-2:454466003867:function:PRE-ImageMultiClassMultiLabel</code>
   *                </p>
   *             </li>
   *          </ul>
   *
   *             <p>
   *             <b>Semantic segmentation</b> - Treats each pixel in an image as
   *                     a multi-class classification and treats pixel annotations from workers as
   *                     "votes" for the correct label.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:us-east-1:432418664414:function:PRE-SemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:us-east-2:266458841044:function:PRE-SemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:us-west-2:081040173940:function:PRE-SemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ca-central-1:918755190332:function:PRE-SemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:eu-west-1:568282634449:function:PRE-SemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:eu-west-2:487402164563:function:PRE-SemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:eu-central-1:203001061592:function:PRE-SemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-northeast-1:477331159723:function:PRE-SemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-northeast-2:845288260483:function:PRE-SemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-south-1:565803892007:function:PRE-SemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-southeast-1:377565633583:function:PRE-SemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-southeast-2:454466003867:function:PRE-SemanticSegmentation</code>
   *                 </p>
   *             </li>
   *          </ul>
   *
   *             <p>
   *             <b>Text classification</b> - Uses a variant of the Expectation
   *                     Maximization approach to estimate the true class of text based on annotations
   *                     from individual workers.</p>
   *             <ul>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:us-east-1:432418664414:function:PRE-TextMultiClass</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:us-east-2:266458841044:function:PRE-TextMultiClass</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:us-west-2:081040173940:function:PRE-TextMultiClass</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ca-central-1:918755190332:function:PRE-TextMultiClass</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:eu-west-1:568282634449:function:PRE-TextMultiClass</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:eu-west-2:487402164563:function:PRE-TextMultiClass</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:eu-central-1:203001061592:function:PRE-TextMultiClass</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-northeast-1:477331159723:function:PRE-TextMultiClass</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-northeast-2:845288260483:function:PRE-TextMultiClass</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-south-1:565803892007:function:PRE-TextMultiClass</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-southeast-1:377565633583:function:PRE-TextMultiClass</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-southeast-2:454466003867:function:PRE-TextMultiClass</code>
   *                 </p>
   *             </li>
   *          </ul>
   *
   *             <p>
   *             <b>Multi-label text classification</b> - Uses a variant of the
   *                     Expectation Maximization approach to estimate the true classes of text based on
   *                     annotations from individual workers.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-east-1:432418664414:function:PRE-TextMultiClassMultiLabel</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-east-2:266458841044:function:PRE-TextMultiClassMultiLabel</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-west-2:081040173940:function:PRE-TextMultiClassMultiLabel</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ca-central-1:918755190332:function:PRE-TextMultiClassMultiLabel</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-west-1:568282634449:function:PRE-TextMultiClassMultiLabel</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-west-2:487402164563:function:PRE-TextMultiClassMultiLabel</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-central-1:203001061592:function:PRE-TextMultiClassMultiLabel</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-northeast-1:477331159723:function:PRE-TextMultiClassMultiLabel</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-northeast-2:845288260483:function:PRE-TextMultiClassMultiLabel</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-south-1:565803892007:function:PRE-TextMultiClassMultiLabel</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-southeast-1:377565633583:function:PRE-TextMultiClassMultiLabel</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-southeast-2:454466003867:function:PRE-TextMultiClassMultiLabel</code>
   *                </p>
   *             </li>
   *          </ul>
   *
   *             <p>
   *             <b>Named entity recognition</b> - Groups similar selections and
   *                     calculates aggregate boundaries, resolving to most-assigned label.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:us-east-1:432418664414:function:PRE-NamedEntityRecognition</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:us-east-2:266458841044:function:PRE-NamedEntityRecognition</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:us-west-2:081040173940:function:PRE-NamedEntityRecognition</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ca-central-1:918755190332:function:PRE-NamedEntityRecognition</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:eu-west-1:568282634449:function:PRE-NamedEntityRecognition</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:eu-west-2:487402164563:function:PRE-NamedEntityRecognition</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:eu-central-1:203001061592:function:PRE-NamedEntityRecognition</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-northeast-1:477331159723:function:PRE-NamedEntityRecognition</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-northeast-2:845288260483:function:PRE-NamedEntityRecognition</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-south-1:565803892007:function:PRE-NamedEntityRecognition</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-southeast-1:377565633583:function:PRE-NamedEntityRecognition</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-southeast-2:454466003867:function:PRE-NamedEntityRecognition</code>
   *                 </p>
   *             </li>
   *          </ul>
   *
   *
   *
   *
   *         <p>
   *             <b>Video Classification</b> - Use this task type when you need workers to classify videos using
   *             predefined labels that you specify. Workers are shown videos and are asked to choose one
   *             label for each video.</p>
   *
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-east-1:432418664414:function:PRE-VideoMultiClass</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-east-2:266458841044:function:PRE-VideoMultiClass</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-west-2:081040173940:function:PRE-VideoMultiClass</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-west-1:568282634449:function:PRE-VideoMultiClass</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-northeast-1:477331159723:function:PRE-VideoMultiClass</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-southeast-2:454466003867:function:PRE-VideoMultiClass</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-south-1:565803892007:function:PRE-VideoMultiClass</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-central-1:203001061592:function:PRE-VideoMultiClass</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-northeast-2:845288260483:function:PRE-VideoMultiClass</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-west-2:487402164563:function:PRE-VideoMultiClass</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-southeast-1:377565633583:function:PRE-VideoMultiClass</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ca-central-1:918755190332:function:PRE-VideoMultiClass</code>
   *                 </p>
   *             </li>
   *          </ul>
   *
   *         <p>
   *             <b>Video Frame Object Detection</b> - Use this task type to
   *             have workers identify and locate objects in a sequence of video frames (images extracted
   *             from a video) using bounding boxes. For example, you can use this task to ask workers to
   *             identify and localize various objects in a series of video frames, such as cars, bikes,
   *             and pedestrians.</p>
   *
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-east-1:432418664414:function:PRE-VideoObjectDetection</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-east-2:266458841044:function:PRE-VideoObjectDetection</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-west-2:081040173940:function:PRE-VideoObjectDetection</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-west-1:568282634449:function:PRE-VideoObjectDetection</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-northeast-1:477331159723:function:PRE-VideoObjectDetection</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-southeast-2:454466003867:function:PRE-VideoObjectDetection</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-south-1:565803892007:function:PRE-VideoObjectDetection</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-central-1:203001061592:function:PRE-VideoObjectDetection</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-northeast-2:845288260483:function:PRE-VideoObjectDetection</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-west-2:487402164563:function:PRE-VideoObjectDetection</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-southeast-1:377565633583:function:PRE-VideoObjectDetection</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ca-central-1:918755190332:function:PRE-VideoObjectDetection</code>
   *                 </p>
   *             </li>
   *          </ul>
   *
   *         <p>
   *             <b>Video Frame Object Tracking</b> - Use this task type to
   *             have workers track the movement of objects in a sequence of video frames (images
   *             extracted from a video) using bounding boxes. For example, you can use this task to ask
   *             workers to track the movement of objects, such as cars, bikes, and pedestrians. </p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-east-1:432418664414:function:PRE-VideoObjectTracking</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-east-2:266458841044:function:PRE-VideoObjectTracking</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-west-2:081040173940:function:PRE-VideoObjectTracking</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-west-1:568282634449:function:PRE-VideoObjectTracking</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-northeast-1:477331159723:function:PRE-VideoObjectTracking</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-southeast-2:454466003867:function:PRE-VideoObjectTracking</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-south-1:565803892007:function:PRE-VideoObjectTracking</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-central-1:203001061592:function:PRE-VideoObjectTracking</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-northeast-2:845288260483:function:PRE-VideoObjectTracking</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-west-2:487402164563:function:PRE-VideoObjectTracking</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-southeast-1:377565633583:function:PRE-VideoObjectTracking</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ca-central-1:918755190332:function:PRE-VideoObjectTracking</code>
   *                 </p>
   *             </li>
   *          </ul>
   *
   *
   *
   *
   *         <p>
   *             <b>3D Point Cloud Modalities</b>
   *          </p>
   *         <p>Use the following pre-annotation lambdas for 3D point cloud labeling modality tasks.
   *             See <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-point-cloud-task-types.html">3D Point Cloud Task types
   *             </a> to learn more. </p>
   *
   *
   *         <p>
   *             <b>3D Point Cloud Object Detection</b> -
   *         Use this task type when you want workers to classify objects in a 3D point cloud by
   *         drawing 3D cuboids around objects. For example, you can use this task type to ask workers
   *         to identify different types of objects in a point cloud, such as cars, bikes, and pedestrians.</p>
   *                 <ul>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-east-1:432418664414:function:PRE-3DPointCloudObjectDetection</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-east-2:266458841044:function:PRE-3DPointCloudObjectDetection</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-west-2:081040173940:function:PRE-3DPointCloudObjectDetection</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-west-1:568282634449:function:PRE-3DPointCloudObjectDetection</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-northeast-1:477331159723:function:PRE-3DPointCloudObjectDetection</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-southeast-2:454466003867:function:PRE-3DPointCloudObjectDetection</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-south-1:565803892007:function:PRE-3DPointCloudObjectDetection</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-central-1:203001061592:function:PRE-3DPointCloudObjectDetection</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-northeast-2:845288260483:function:PRE-3DPointCloudObjectDetection</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-west-2:487402164563:function:PRE-3DPointCloudObjectDetection</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-southeast-1:377565633583:function:PRE-3DPointCloudObjectDetection</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ca-central-1:918755190332:function:PRE-3DPointCloudObjectDetection</code>
   *                 </p>
   *             </li>
   *          </ul>
   *
   *         <p>
   *             <b>3D Point Cloud Object Tracking</b> -
   *         Use this task type when you want workers to draw 3D cuboids around objects
   *         that appear in a sequence of 3D point cloud frames.
   *         For example, you can use this task type to ask workers to track
   *         the movement of vehicles across multiple point cloud frames.
   *         </p>
   *                 <ul>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:us-east-1:432418664414:function:PRE-3DPointCloudObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-east-2:266458841044:function:PRE-3DPointCloudObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-west-2:081040173940:function:PRE-3DPointCloudObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-west-1:568282634449:function:PRE-3DPointCloudObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-northeast-1:477331159723:function:PRE-3DPointCloudObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-southeast-2:454466003867:function:PRE-3DPointCloudObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-south-1:565803892007:function:PRE-3DPointCloudObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-central-1:203001061592:function:PRE-3DPointCloudObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-northeast-2:845288260483:function:PRE-3DPointCloudObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-west-2:487402164563:function:PRE-3DPointCloudObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-southeast-1:377565633583:function:PRE-3DPointCloudObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ca-central-1:918755190332:function:PRE-3DPointCloudObjectTracking</code>
   *                 </p>
   *             </li>
   *          </ul>
   *
   *
   *
   *         <p>
   *             <b>3D Point Cloud Semantic Segmentation</b> -
   *             Use this task type when you want workers to create a point-level semantic segmentation masks by
   *             painting objects in a 3D point cloud using different colors where each color is assigned to one of
   *             the classes you specify.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-east-1:432418664414:function:PRE-3DPointCloudSemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-east-2:266458841044:function:PRE-3DPointCloudSemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-west-2:081040173940:function:PRE-3DPointCloudSemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-west-1:568282634449:function:PRE-3DPointCloudSemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-northeast-1:477331159723:function:PRE-3DPointCloudSemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-southeast-2:454466003867:function:PRE-3DPointCloudSemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-south-1:565803892007:function:PRE-3DPointCloudSemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-central-1:203001061592:function:PRE-3DPointCloudSemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-northeast-2:845288260483:function:PRE-3DPointCloudSemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-west-2:487402164563:function:PRE-3DPointCloudSemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-southeast-1:377565633583:function:PRE-3DPointCloudSemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ca-central-1:918755190332:function:PRE-3DPointCloudSemanticSegmentation</code>
   *                 </p>
   *             </li>
   *          </ul>
   *
   *         <p>
   *             <b>Use the following ARNs for Label Verification and Adjustment Jobs</b>
   *          </p>
   *         <p>Use label verification and adjustment jobs to review and adjust labels. To learn more,
   *             see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-verification-data.html">Verify and Adjust Labels </a>.</p>
   *
   *             <p>
   *             <b>Bounding box verification</b> - Uses a variant of the
   *                 Expectation Maximization approach to estimate the true class of verification
   *                 judgement for bounding box labels based on annotations from individual
   *                 workers.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-east-1:432418664414:function:PRE-VerificationBoundingBox</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-east-2:266458841044:function:PRE-VerificationBoundingBox</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-west-2:081040173940:function:PRE-VerificationBoundingBox</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-west-1:568282634449:function:PRE-VerificationBoundingBox</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-northeast-1:477331159723:function:PRE-VerificationBoundingBox</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-southeast-2:454466003867:function:PRE-VerificationBoundingBox</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-south-1:565803892007:function:PRE-VerificationBoundingBox</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-central-1:203001061592:function:PRE-VerificationBoundingBox</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-northeast-2:845288260483:function:PRE-VerificationBoundingBox</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-west-2:487402164563:function:PRE-VerificationBoundingBox</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-southeast-1:377565633583:function:PRE-VerificationBoundingBox</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ca-central-1:918755190332:function:PRE-VerificationBoundingBox</code>
   *                </p>
   *             </li>
   *          </ul>
   *
   *             <p>
   *             <b>Bounding box adjustment</b> - Finds the most similar boxes
   *                     from different workers based on the Jaccard index of the adjusted
   *                     annotations.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:us-east-1:432418664414:function:PRE-AdjustmentBoundingBox</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:us-east-2:266458841044:function:PRE-AdjustmentBoundingBox</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:us-west-2:081040173940:function:PRE-AdjustmentBoundingBox</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ca-central-1:918755190332:function:PRE-AdjustmentBoundingBox</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:eu-west-1:568282634449:function:PRE-AdjustmentBoundingBox</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:eu-west-2:487402164563:function:PRE-AdjustmentBoundingBox</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:eu-central-1:203001061592:function:PRE-AdjustmentBoundingBox</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-northeast-1:477331159723:function:PRE-AdjustmentBoundingBox</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-northeast-2:845288260483:function:PRE-AdjustmentBoundingBox</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-south-1:565803892007:function:PRE-AdjustmentBoundingBox</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-southeast-1:377565633583:function:PRE-AdjustmentBoundingBox</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-southeast-2:454466003867:function:PRE-AdjustmentBoundingBox</code>
   *                 </p>
   *             </li>
   *          </ul>
   *
   *             <p>
   *             <b>Semantic segmentation verification</b> - Uses a variant of
   *                     the Expectation Maximization approach to estimate the true class of verification
   *                     judgment for semantic segmentation labels based on annotations from individual
   *                     workers.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:us-east-1:432418664414:function:PRE-VerificationSemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:us-east-2:266458841044:function:PRE-VerificationSemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:us-west-2:081040173940:function:PRE-VerificationSemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ca-central-1:918755190332:function:PRE-VerificationSemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:eu-west-1:568282634449:function:PRE-VerificationSemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:eu-west-2:487402164563:function:PRE-VerificationSemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:eu-central-1:203001061592:function:PRE-VerificationSemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-northeast-1:477331159723:function:PRE-VerificationSemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-northeast-2:845288260483:function:PRE-VerificationSemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-south-1:565803892007:function:PRE-VerificationSemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-southeast-1:377565633583:function:PRE-VerificationSemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-southeast-2:454466003867:function:PRE-VerificationSemanticSegmentation</code>
   *                 </p>
   *             </li>
   *          </ul>
   *
   *             <p>
   *             <b>Semantic segmentation adjustment</b> - Treats each pixel in
   *                     an image as a multi-class classification and treats pixel adjusted annotations
   *                     from workers as "votes" for the correct label.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:us-east-1:432418664414:function:PRE-AdjustmentSemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:us-east-2:266458841044:function:PRE-AdjustmentSemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:us-west-2:081040173940:function:PRE-AdjustmentSemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ca-central-1:918755190332:function:PRE-AdjustmentSemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:eu-west-1:568282634449:function:PRE-AdjustmentSemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:eu-west-2:487402164563:function:PRE-AdjustmentSemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:eu-central-1:203001061592:function:PRE-AdjustmentSemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-northeast-1:477331159723:function:PRE-AdjustmentSemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-northeast-2:845288260483:function:PRE-AdjustmentSemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-south-1:565803892007:function:PRE-AdjustmentSemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-southeast-1:377565633583:function:PRE-AdjustmentSemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-southeast-2:454466003867:function:PRE-AdjustmentSemanticSegmentation</code>
   *                 </p>
   *             </li>
   *          </ul>
   *
   *
   *
   *
   *         <p>
   *             <b>Video Frame Object Detection Adjustment</b> -
   *             Use this task type when you want workers to adjust bounding boxes that workers have added
   *             to video frames to classify and localize objects in a sequence of video frames.</p>
   *
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-east-1:432418664414:function:PRE-AdjustmentVideoObjectDetection</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-east-2:266458841044:function:PRE-AdjustmentVideoObjectDetection</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-west-2:081040173940:function:PRE-AdjustmentVideoObjectDetection</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-west-1:568282634449:function:PRE-AdjustmentVideoObjectDetection</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-northeast-1:477331159723:function:PRE-AdjustmentVideoObjectDetection</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-southeast-2:454466003867:function:PRE-AdjustmentVideoObjectDetection</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-south-1:565803892007:function:PRE-AdjustmentVideoObjectDetection</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-central-1:203001061592:function:PRE-AdjustmentVideoObjectDetection</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-northeast-2:845288260483:function:PRE-AdjustmentVideoObjectDetection</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-west-2:487402164563:function:PRE-AdjustmentVideoObjectDetection</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-southeast-1:377565633583:function:PRE-AdjustmentVideoObjectDetection</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ca-central-1:918755190332:function:PRE-AdjustmentVideoObjectDetection</code>
   *                 </p>
   *             </li>
   *          </ul>
   *
   *         <p>
   *             <b>Video Frame Object Tracking Adjustment</b> -
   *             Use this task type when you want workers to adjust bounding boxes that workers have added
   *             to video frames to track object movement across a sequence of video frames.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-east-1:432418664414:function:PRE-AdjustmentVideoObjectTracking</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-east-2:266458841044:function:PRE-AdjustmentVideoObjectTracking</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-west-2:081040173940:function:PRE-AdjustmentVideoObjectTracking</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-west-1:568282634449:function:PRE-AdjustmentVideoObjectTracking</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-northeast-1:477331159723:function:PRE-AdjustmentVideoObjectTracking</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-southeast-2:454466003867:function:PRE-AdjustmentVideoObjectTracking</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-south-1:565803892007:function:PRE-AdjustmentVideoObjectTracking</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-central-1:203001061592:function:PRE-AdjustmentVideoObjectTracking</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-northeast-2:845288260483:function:PRE-AdjustmentVideoObjectTracking</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-west-2:487402164563:function:PRE-AdjustmentVideoObjectTracking</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-southeast-1:377565633583:function:PRE-AdjustmentVideoObjectTracking</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ca-central-1:918755190332:function:PRE-AdjustmentVideoObjectTracking</code>
   *                 </p>
   *             </li>
   *          </ul>
   *
   *
   *
   *
   *         <p>
   *             <b>3D point cloud object detection adjustment</b> - Adjust
   *             3D cuboids in a point cloud frame. </p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-east-1:432418664414:function:PRE-Adjustment3DPointCloudObjectDetection</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-east-2:266458841044:function:PRE-Adjustment3DPointCloudObjectDetection</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-west-2:081040173940:function:PRE-Adjustment3DPointCloudObjectDetection</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-west-1:568282634449:function:PRE-Adjustment3DPointCloudObjectDetection</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-northeast-1:477331159723:function:PRE-Adjustment3DPointCloudObjectDetection</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-southeast-2:454466003867:function:PRE-Adjustment3DPointCloudObjectDetection</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-south-1:565803892007:function:PRE-Adjustment3DPointCloudObjectDetection</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-central-1:203001061592:function:PRE-Adjustment3DPointCloudObjectDetection</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-northeast-2:845288260483:function:PRE-Adjustment3DPointCloudObjectDetection</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-west-2:487402164563:function:PRE-Adjustment3DPointCloudObjectDetection</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-southeast-1:377565633583:function:PRE-Adjustment3DPointCloudObjectDetection</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ca-central-1:918755190332:function:PRE-Adjustment3DPointCloudObjectDetection</code>
   *                </p>
   *             </li>
   *          </ul>
   *
   *         <p>
   *             <b>3D point cloud object tracking adjustment</b> - Adjust 3D
   *             cuboids across a sequence of point cloud frames. </p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-east-1:432418664414:function:PRE-Adjustment3DPointCloudObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-east-2:266458841044:function:PRE-Adjustment3DPointCloudObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-west-2:081040173940:function:PRE-Adjustment3DPointCloudObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-west-1:568282634449:function:PRE-Adjustment3DPointCloudObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-northeast-1:477331159723:function:PRE-Adjustment3DPointCloudObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-southeast-2:454466003867:function:PRE-Adjustment3DPointCloudObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-south-1:565803892007:function:PRE-Adjustment3DPointCloudObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-central-1:203001061592:function:PRE-Adjustment3DPointCloudObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-northeast-2:845288260483:function:PRE-Adjustment3DPointCloudObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-west-2:487402164563:function:PRE-Adjustment3DPointCloudObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-southeast-1:377565633583:function:PRE-Adjustment3DPointCloudObjectTracking</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ca-central-1:918755190332:function:PRE-Adjustment3DPointCloudObjectTracking</code>
   *                </p>
   *             </li>
   *          </ul>
   *
   *         <p>
   *             <b>3D point cloud semantic segmentation adjustment</b> -
   *             Adjust semantic segmentation masks in a 3D point cloud. </p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-east-1:432418664414:function:PRE-Adjustment3DPointCloudSemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-east-2:266458841044:function:PRE-Adjustment3DPointCloudSemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:us-west-2:081040173940:function:PRE-Adjustment3DPointCloudSemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-west-1:568282634449:function:PRE-Adjustment3DPointCloudSemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-northeast-1:477331159723:function:PRE-Adjustment3DPointCloudSemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-southeast-2:454466003867:function:PRE-Adjustment3DPointCloudSemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-south-1:565803892007:function:PRE-Adjustment3DPointCloudSemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-central-1:203001061592:function:PRE-Adjustment3DPointCloudSemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-northeast-2:845288260483:function:PRE-Adjustment3DPointCloudSemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:eu-west-2:487402164563:function:PRE-Adjustment3DPointCloudSemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ap-southeast-1:377565633583:function:PRE-Adjustment3DPointCloudSemanticSegmentation</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>arn:aws:lambda:ca-central-1:918755190332:function:PRE-Adjustment3DPointCloudSemanticSegmentation</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  PreHumanTaskLambdaArn: string | undefined;

  /**
   * <p>Keywords used to describe the task so that workers on Amazon Mechanical Turk can
   *             discover the task.</p>
   */
  TaskKeywords?: string[];

  /**
   * <p>A title for the task for your human workers.</p>
   */
  TaskTitle: string | undefined;

  /**
   * <p>A description of the task for your human workers.</p>
   */
  TaskDescription: string | undefined;

  /**
   * <p>The number of human workers that will label an object. </p>
   */
  NumberOfHumanWorkersPerDataObject: number | undefined;

  /**
   * <p>The amount of time that a worker has to complete a task. </p>
   *         <p>If you create a custom labeling job, the maximum value for this parameter is 8 hours
   *             (28,800 seconds).</p>
   *         <p>If you create a labeling job using a <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-task-types.html">built-in task type</a> the maximum
   *             for this parameter depends on the task type you use:</p>
   *         <ul>
   *             <li>
   *                 <p>For <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-label-images.html">image</a> and
   *                     <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-label-text.html">text</a> labeling jobs,
   *                     the maximum is 8 hours (28,800 seconds).</p>
   *             </li>
   *             <li>
   *                 <p>For <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-point-cloud.html">3D point cloud</a> and <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-video.html">video frame</a> labeling jobs, the maximum is 30 days (2952,000 seconds) for non-AL mode. For most users, the maximum is also 30 days.</p>
   *             </li>
   *          </ul>
   */
  TaskTimeLimitInSeconds: number | undefined;

  /**
   * <p>The length of time that a task remains available for labeling by human workers. The
   *             default and maximum values for this parameter depend on the type of workforce you
   *             use.</p>
   *         <ul>
   *             <li>
   *                 <p>If you choose the Amazon Mechanical Turk workforce, the maximum is 12 hours (43,200 seconds).
   *                     The default is 6 hours (21,600 seconds).</p>
   *             </li>
   *             <li>
   *                 <p>If you choose a private or vendor workforce, the default value is 30 days (2592,000 seconds) for non-AL mode. For most users, the maximum is also 30 days.</p>
   *             </li>
   *          </ul>
   */
  TaskAvailabilityLifetimeInSeconds?: number;

  /**
   * <p>Defines the maximum number of data objects that can be labeled by human workers at the
   *             same time. Also referred to as batch size. Each object may have more than one worker at one time.
   *             The default value is 1000 objects. To increase the maximum value to 5000 objects, contact Amazon Web Services Support.</p>
   */
  MaxConcurrentTaskCount?: number;

  /**
   * <p>Configures how labels are consolidated across human workers.</p>
   */
  AnnotationConsolidationConfig: AnnotationConsolidationConfig | undefined;

  /**
   * <p>The price that you pay for each task performed by an Amazon Mechanical Turk worker.</p>
   */
  PublicWorkforceTaskPrice?: PublicWorkforceTaskPrice;
}

/**
 * <p>Attributes of the data specified by the customer. Use these to describe the data to be
 *             labeled.</p>
 */
export interface LabelingJobDataAttributes {
  /**
   * <p>Declares that your content is free of personally identifiable information or adult
   *             content. SageMaker may restrict the Amazon Mechanical Turk workers that can view your task
   *             based on this information.</p>
   */
  ContentClassifiers?: (ContentClassifier | string)[];
}

/**
 * <p>The Amazon S3 location of the input data objects.</p>
 */
export interface LabelingJobS3DataSource {
  /**
   * <p>The Amazon S3 location of the manifest file that describes the input data objects. </p>
   *         <p>The input manifest file referenced in <code>ManifestS3Uri</code> must contain one of
   *             the following keys: <code>source-ref</code> or <code>source</code>. The value of the
   *             keys are interpreted as follows:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>source-ref</code>: The source of the object is the Amazon S3 object
   *                     specified in the value. Use this value when the object is a binary object, such
   *                     as an image.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>source</code>: The source of the object is the value. Use this
   *                     value when the object is a text value.</p>
   *             </li>
   *          </ul>
   *         <p>If you are a new user of Ground Truth, it is recommended you review <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-input-data-input-manifest.html">Use an Input Manifest File </a> in the Amazon SageMaker Developer Guide to learn how to
   *             create an input manifest file.</p>
   */
  ManifestS3Uri: string | undefined;
}

/**
 * <p>An Amazon SNS data source used for streaming labeling jobs.</p>
 */
export interface LabelingJobSnsDataSource {
  /**
   * <p>The Amazon SNS input topic Amazon Resource Name (ARN). Specify the ARN of the input topic
   *       you will use to send new data objects to a streaming labeling job.</p>
   */
  SnsTopicArn: string | undefined;
}

/**
 * <p>Provides information about the location of input data.</p>
 *
 *          <p>You must specify at least one of the following: <code>S3DataSource</code> or <code>SnsDataSource</code>.</p>
 *          <p>Use <code>SnsDataSource</code> to specify an SNS input topic
 *     for a streaming labeling job. If you do not specify
 *     and SNS input topic ARN, Ground Truth will create a one-time labeling job.</p>
 *          <p>Use <code>S3DataSource</code> to specify an input
 *     manifest file for both streaming and one-time labeling jobs.
 *     Adding an <code>S3DataSource</code> is optional if you use <code>SnsDataSource</code> to create a streaming labeling job.</p>
 */
export interface LabelingJobDataSource {
  /**
   * <p>The Amazon S3 location of the input data objects.</p>
   */
  S3DataSource?: LabelingJobS3DataSource;

  /**
   * <p>An Amazon SNS data source used for streaming labeling jobs. To learn more, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-streaming-labeling-job.html#sms-streaming-how-it-works-send-data">Send Data to a Streaming Labeling Job</a>. </p>
   */
  SnsDataSource?: LabelingJobSnsDataSource;
}

/**
 * <p>Input configuration information for a labeling job.</p>
 */
export interface LabelingJobInputConfig {
  /**
   * <p>The location of the input data.</p>
   */
  DataSource: LabelingJobDataSource | undefined;

  /**
   * <p>Attributes of the data specified by the customer.</p>
   */
  DataAttributes?: LabelingJobDataAttributes;
}

/**
 * <p>Configure encryption on the storage volume attached to the ML compute instance used to
 *             run automated data labeling model training and inference. </p>
 */
export interface LabelingJobResourceConfig {
  /**
   * <p>The Amazon Web Services Key Management Service (Amazon Web Services KMS) key that Amazon SageMaker uses to encrypt data on the storage volume
   *             attached to the ML compute instance(s) that run the training and inference jobs used for
   *             automated data labeling. </p>
   *         <p>You can only specify a <code>VolumeKmsKeyId</code> when you create a labeling job with
   *             automated data labeling enabled using the API operation <code>CreateLabelingJob</code>.
   *             You cannot specify an Amazon Web Services KMS key to encrypt the storage volume used for
   *             automated data labeling model training and inference when you create a labeling job
   *             using the console. To learn more, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-security.html">Output Data and Storage Volume
   *                 Encryption</a>.</p>
   *         <p>The <code>VolumeKmsKeyId</code> can be any of the following formats:</p>
   *         <ul>
   *             <li>
   *                 <p>KMS Key ID</p>
   *                 <p>
   *                     <code>"1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>Amazon Resource Name (ARN) of a KMS Key</p>
   *                 <p>
   *                     <code>"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                 </p>
   *             </li>
   *          </ul>
   */
  VolumeKmsKeyId?: string;

  /**
   * <p>Specifies a VPC that your training jobs and hosted models have access to. Control
   *             access to and from your training and model containers by configuring the VPC. For more
   *             information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/host-vpc.html">Protect Endpoints by Using an Amazon Virtual Private Cloud</a> and <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/train-vpc.html">Protect Training Jobs
   *                 by Using an Amazon Virtual Private Cloud</a>. </p>
   */
  VpcConfig?: VpcConfig;
}

/**
 * <p>Provides configuration information for auto-labeling of your data objects. A
 *                 <code>LabelingJobAlgorithmsConfig</code> object must be supplied in order to use
 *             auto-labeling.</p>
 */
export interface LabelingJobAlgorithmsConfig {
  /**
   * <p>Specifies the Amazon Resource Name (ARN) of the algorithm used for auto-labeling. You
   *             must select one of the following ARNs:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                     <i>Image classification</i>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:sagemaker:<i>region</i>:027400017018:labeling-job-algorithm-specification/image-classification</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <i>Text classification</i>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:sagemaker:<i>region</i>:027400017018:labeling-job-algorithm-specification/text-classification</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <i>Object detection</i>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:sagemaker:<i>region</i>:027400017018:labeling-job-algorithm-specification/object-detection</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <i>Semantic Segmentation</i>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:sagemaker:<i>region</i>:027400017018:labeling-job-algorithm-specification/semantic-segmentation</code>
   *                 </p>
   *             </li>
   *          </ul>
   */
  LabelingJobAlgorithmSpecificationArn: string | undefined;

  /**
   * <p>At the end of an auto-label job Ground Truth sends the Amazon Resource Name (ARN) of the final
   *             model used for auto-labeling. You can use this model as the starting point for
   *             subsequent similar jobs by providing the ARN of the model here. </p>
   */
  InitialActiveLearningModelArn?: string;

  /**
   * <p>Provides configuration information for a labeling job.</p>
   */
  LabelingJobResourceConfig?: LabelingJobResourceConfig;
}

/**
 * <p>Output configuration information for a labeling job.</p>
 */
export interface LabelingJobOutputConfig {
  /**
   * <p>The Amazon S3 location to write output data.</p>
   */
  S3OutputPath: string | undefined;

  /**
   * <p>The Amazon Web Services Key Management Service ID of the key used to encrypt the output data, if any.</p>
   *         <p>If you provide your own KMS key ID, you must add the required permissions to your KMS
   *             key described in <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-security-permission.html#sms-security-kms-permissions">Encrypt Output Data and Storage Volume with Amazon Web Services KMS</a>.</p>
   *         <p>If you don't provide a KMS key ID, Amazon SageMaker uses the default Amazon Web Services KMS key for Amazon S3 for your
   *             role's account to encrypt your output data.</p>
   *         <p>If you use a bucket policy with an <code>s3:PutObject</code> permission that only
   *             allows objects with server-side encryption, set the condition key of
   *                 <code>s3:x-amz-server-side-encryption</code> to <code>"aws:kms"</code>. For more
   *             information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingKMSEncryption.html">KMS-Managed Encryption Keys</a> in the <i>Amazon Simple Storage Service Developer
   *                 Guide.</i>
   *          </p>
   */
  KmsKeyId?: string;

  /**
   * <p>An Amazon Simple Notification Service (Amazon SNS) output topic ARN. Provide a <code>SnsTopicArn</code> if you want to
   *             do real time chaining to another streaming job and receive an Amazon SNS notifications each
   *             time a data object is submitted by a worker.</p>
   *          <p>If you provide an <code>SnsTopicArn</code> in <code>OutputConfig</code>, when workers
   *             complete labeling tasks, Ground Truth will send labeling task output data to the SNS output
   *             topic you specify here. </p>
   *         <p>To learn more, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-streaming-labeling-job.html#sms-streaming-how-it-works-output-data">Receive Output Data from a Streaming Labeling
   *                 Job</a>. </p>
   */
  SnsTopicArn?: string;
}

/**
 * <p>A set of conditions for stopping a labeling job. If any of the conditions are met, the
 *             job is automatically stopped. You can use these conditions to control the cost of data
 *             labeling.</p>
 *         <note>
 *             <p>Labeling jobs fail after 30 days with an appropriate client error message.</p>
 *         </note>
 */
export interface LabelingJobStoppingConditions {
  /**
   * <p>The maximum number of objects that can be labeled by human workers.</p>
   */
  MaxHumanLabeledObjectCount?: number;

  /**
   * <p>The maximum number of input data objects that should be labeled.</p>
   */
  MaxPercentageOfInputDatasetLabeled?: number;
}

export interface CreateLabelingJobRequest {
  /**
   * <p>The name of the labeling job. This name is used to identify the job in a list of
   *             labeling jobs. Labeling job names must be unique within an Amazon Web Services account and region.
   *                 <code>LabelingJobName</code> is not case sensitive. For example, Example-job and
   *             example-job are considered the same labeling job name by Ground Truth.</p>
   */
  LabelingJobName: string | undefined;

  /**
   * <p>The attribute name to use for the label in the output manifest file. This is the key
   *             for the key/value pair formed with the label that a worker assigns to the object. The
   *                 <code>LabelAttributeName</code> must meet the following requirements.</p>
   *         <ul>
   *             <li>
   *                 <p>The name can't end with "-metadata". </p>
   *             </li>
   *             <li>
   *                 <p>If you are using one of the following <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-task-types.html">built-in task types</a>,
   *                     the attribute name <i>must</i> end with "-ref". If the task type
   *                     you are using is not listed below, the attribute name <i>must
   *                         not</i> end with "-ref".</p>
   *                 <ul>
   *                   <li>
   *                         <p>Image semantic segmentation (<code>SemanticSegmentation)</code>, and
   *                             adjustment (<code>AdjustmentSemanticSegmentation</code>) and
   *                             verification (<code>VerificationSemanticSegmentation</code>) labeling
   *                             jobs for this task type.</p>
   *                     </li>
   *                   <li>
   *                         <p>Video frame object detection (<code>VideoObjectDetection</code>), and
   *                             adjustment and verification
   *                             (<code>AdjustmentVideoObjectDetection</code>) labeling jobs for this
   *                             task type.</p>
   *                     </li>
   *                   <li>
   *                         <p>Video frame object tracking (<code>VideoObjectTracking</code>), and
   *                             adjustment and verification (<code>AdjustmentVideoObjectTracking</code>)
   *                             labeling jobs for this task type.</p>
   *                     </li>
   *                   <li>
   *                         <p>3D point cloud semantic segmentation
   *                                 (<code>3DPointCloudSemanticSegmentation</code>), and adjustment and
   *                             verification (<code>Adjustment3DPointCloudSemanticSegmentation</code>)
   *                             labeling jobs for this task type. </p>
   *                     </li>
   *                   <li>
   *                         <p>3D point cloud object tracking
   *                                 (<code>3DPointCloudObjectTracking</code>), and adjustment and
   *                             verification (<code>Adjustment3DPointCloudObjectTracking</code>)
   *                             labeling jobs for this task type. </p>
   *                     </li>
   *                </ul>
   *             </li>
   *          </ul>
   *         <p></p>
   *         <important>
   *             <p>If you are creating an adjustment or verification labeling job, you must use a
   *                     <i>different</i>
   *                 <code>LabelAttributeName</code> than the one used in the original labeling job. The
   *                 original labeling job is the Ground Truth labeling job that produced the labels that you
   *                 want verified or adjusted. To learn more about adjustment and verification labeling
   *                 jobs, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-verification-data.html">Verify and Adjust
   *                     Labels</a>.</p>
   *         </important>
   */
  LabelAttributeName: string | undefined;

  /**
   * <p>Input data for the labeling job, such as the Amazon S3 location of the data objects and the
   *             location of the manifest file that describes the data objects.</p>
   *         <p>You must specify at least one of the following: <code>S3DataSource</code> or
   *                 <code>SnsDataSource</code>. </p>
   *         <ul>
   *             <li>
   *                 <p>Use <code>SnsDataSource</code> to specify an SNS input topic for a streaming
   *                     labeling job. If you do not specify and SNS input topic ARN, Ground Truth will
   *                     create a one-time labeling job that stops after all data objects in the input
   *                     manifest file have been labeled.</p>
   *             </li>
   *             <li>
   *                 <p>Use <code>S3DataSource</code> to specify an input manifest file for both
   *                     streaming and one-time labeling jobs. Adding an <code>S3DataSource</code> is
   *                     optional if you use <code>SnsDataSource</code> to create a streaming labeling
   *                     job.</p>
   *             </li>
   *          </ul>
   *         <p>If you use the Amazon Mechanical Turk workforce, your input data should not include
   *             confidential information, personal information or protected health information. Use
   *                 <code>ContentClassifiers</code> to specify that your data is free of personally
   *             identifiable information and adult content.</p>
   */
  InputConfig: LabelingJobInputConfig | undefined;

  /**
   * <p>The location of the output data and the Amazon Web Services Key Management Service key ID for the key used to encrypt
   *             the output data, if any.</p>
   */
  OutputConfig: LabelingJobOutputConfig | undefined;

  /**
   * <p>The Amazon Resource Number (ARN) that Amazon SageMaker assumes to perform tasks on your behalf
   *             during data labeling. You must grant this role the necessary permissions so that Amazon SageMaker
   *             can successfully complete data labeling.</p>
   */
  RoleArn: string | undefined;

  /**
   * <p>The S3 URI of the file, referred to as a <i>label category configuration
   *                 file</i>, that defines the categories used to label the data objects.</p>
   *         <p>For 3D point cloud and video frame task types, you can add label category attributes
   *             and frame attributes to your label category configuration file. To learn how, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-point-cloud-label-category-config.html">Create a
   *                 Labeling Category Configuration File for 3D Point Cloud Labeling Jobs</a>. </p>
   *         <p>For named entity recognition jobs, in addition to <code>"labels"</code>, you must
   *             provide worker instructions in the label category configuration file using the
   *                 <code>"instructions"</code> parameter: <code>"instructions":
   *                 {"shortInstruction":"<h1>Add header</h1><p>Add Instructions</p>",
   *                 "fullInstruction":"<p>Add additional instructions.</p>"}</code>. For details
   *             and an example, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-named-entity-recg.html#sms-creating-ner-api">Create a
   *                 Named Entity Recognition Labeling Job (API) </a>.</p>
   *         <p>For all other <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-task-types.html">built-in task types</a> and <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-custom-templates.html">custom
   *                 tasks</a>, your label category configuration file must be a JSON file in the
   *             following format. Identify the labels you want to use by replacing <code>label_1</code>,
   *                 <code>label_2</code>,<code>...</code>,<code>label_n</code> with your label
   *             categories.</p>
   *         <p>
   *             <code>{ </code>
   *          </p>
   *         <p>
   *             <code>"document-version": "2018-11-28",</code>
   *          </p>
   *         <p>
   *             <code>"labels": [{"label": "label_1"},{"label": "label_2"},...{"label":
   *                 "label_n"}]</code>
   *          </p>
   *         <p>
   *             <code>}</code>
   *          </p>
   *         <p>Note the following about the label category configuration file:</p>
   *         <ul>
   *             <li>
   *                 <p>For image classification and text classification (single and multi-label) you
   *                     must specify at least two label categories. For all other task types, the
   *                     minimum number of label categories required is one. </p>
   *             </li>
   *             <li>
   *                 <p>Each label category must be unique, you cannot specify duplicate label
   *                     categories.</p>
   *             </li>
   *             <li>
   *                 <p>If you create a 3D point cloud or video frame adjustment or verification
   *                     labeling job, you must include <code>auditLabelAttributeName</code> in the label
   *                     category configuration. Use this parameter to enter the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateLabelingJob.html#sagemaker-CreateLabelingJob-request-LabelAttributeName">
   *                      <code>LabelAttributeName</code>
   *                   </a> of the labeling job you want to
   *                     adjust or verify annotations of.</p>
   *             </li>
   *          </ul>
   */
  LabelCategoryConfigS3Uri?: string;

  /**
   * <p>A set of conditions for stopping the labeling job. If any of the conditions are met,
   *             the job is automatically stopped. You can use these conditions to control the cost of
   *             data labeling.</p>
   */
  StoppingConditions?: LabelingJobStoppingConditions;

  /**
   * <p>Configures the information required to perform automated data labeling.</p>
   */
  LabelingJobAlgorithmsConfig?: LabelingJobAlgorithmsConfig;

  /**
   * <p>Configures the labeling task and how it is presented to workers; including, but not limited to price, keywords, and batch size (task count).</p>
   */
  HumanTaskConfig: HumanTaskConfig | undefined;

  /**
   * <p>An array of key/value pairs. For more information, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html#allocation-what">Using Cost Allocation Tags</a> in the <i>Amazon Web Services Billing and Cost Management
   *                 User Guide</i>.</p>
   */
  Tags?: Tag[];
}

export interface CreateLabelingJobResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the labeling job. You use this ARN to identify the
   *             labeling job.</p>
   */
  LabelingJobArn: string | undefined;
}

export enum InferenceExecutionMode {
  DIRECT = "Direct",
  SERIAL = "Serial",
}

/**
 * <p>Specifies details about how containers in a multi-container endpoint are run.</p>
 */
export interface InferenceExecutionConfig {
  /**
   * <p>How containers in a multi-container are run. The following values are valid.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>SERIAL</code> - Containers run as a serial pipeline.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>DIRECT</code> - Only the individual container that you specify is
   *                     run.</p>
   *             </li>
   *          </ul>
   */
  Mode: InferenceExecutionMode | string | undefined;
}

export interface CreateModelInput {
  /**
   * <p>The name of the new model.</p>
   */
  ModelName: string | undefined;

  /**
   * <p>The location of the primary docker image containing inference code, associated
   *             artifacts, and custom environment map that the inference code uses when the model is
   *             deployed for predictions. </p>
   */
  PrimaryContainer?: ContainerDefinition;

  /**
   * <p>Specifies the containers in the inference pipeline.</p>
   */
  Containers?: ContainerDefinition[];

  /**
   * <p>Specifies details of how containers in a multi-container endpoint are called.</p>
   */
  InferenceExecutionConfig?: InferenceExecutionConfig;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that SageMaker can assume to access model
   *             artifacts and docker image for deployment on ML compute instances or for batch transform
   *             jobs. Deploying on ML compute instances is part of model hosting. For more information,
   *             see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sagemaker-roles.html">SageMaker
   *                 Roles</a>. </p>
   *         <note>
   *             <p>To be able to pass this role to SageMaker, the caller of this API must have the
   *                     <code>iam:PassRole</code> permission.</p>
   *         </note>
   */
  ExecutionRoleArn: string | undefined;

  /**
   * <p>An array of key-value pairs. You can use tags to categorize your Amazon Web Services
   *             resources in different ways, for example, by purpose, owner, or environment. For more
   *             information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services Resources</a>.</p>
   */
  Tags?: Tag[];

  /**
   * <p>A <a>VpcConfig</a> object that specifies the VPC that you want your model
   *             to connect to. Control access to and from your model container by configuring the VPC.
   *                 <code>VpcConfig</code> is used in hosting services and in batch transform. For more
   *             information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/host-vpc.html">Protect Endpoints by Using an Amazon Virtual Private Cloud</a> and <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/batch-vpc.html">Protect Data in Batch
   *                 Transform Jobs by Using an Amazon Virtual Private Cloud</a>.</p>
   */
  VpcConfig?: VpcConfig;

  /**
   * <p>Isolates the model container. No inbound or outbound network calls can be made to or
   *             from the model container.</p>
   */
  EnableNetworkIsolation?: boolean;
}

export interface CreateModelOutput {
  /**
   * <p>The ARN of the model created in SageMaker.</p>
   */
  ModelArn: string | undefined;
}

/**
 * <p>Docker container image configuration object for the model bias job.</p>
 */
export interface ModelBiasAppSpecification {
  /**
   * <p>The container image to be run by the model bias job.</p>
   */
  ImageUri: string | undefined;

  /**
   * <p>JSON formatted S3 file that defines bias parameters. For more information on this JSON
   *          configuration file, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/clarify-config-json-monitor-bias-parameters.html">Configure bias
   *          parameters</a>.</p>
   */
  ConfigUri: string | undefined;

  /**
   * <p>Sets the environment variables in the Docker container.</p>
   */
  Environment?: Record<string, string>;
}

/**
 * <p>The configuration for a baseline model bias job.</p>
 */
export interface ModelBiasBaselineConfig {
  /**
   * <p>The name of the baseline model bias job.</p>
   */
  BaseliningJobName?: string;

  /**
   * <p>The constraints resource for a monitoring job.</p>
   */
  ConstraintsResource?: MonitoringConstraintsResource;
}

/**
 * <p>The ground truth labels for the dataset used for the monitoring job.</p>
 */
export interface MonitoringGroundTruthS3Input {
  /**
   * <p>The address of the Amazon S3 location of the ground truth labels.</p>
   */
  S3Uri?: string;
}

/**
 * <p>Inputs for the model bias job.</p>
 */
export interface ModelBiasJobInput {
  /**
   * <p>Input object for the endpoint</p>
   */
  EndpointInput: EndpointInput | undefined;

  /**
   * <p>Location of ground truth labels to use in model bias job.</p>
   */
  GroundTruthS3Input: MonitoringGroundTruthS3Input | undefined;
}

export interface CreateModelBiasJobDefinitionRequest {
  /**
   * <p>The name of the bias job definition. The name must be unique within an Amazon Web Services Region in the
   *          Amazon Web Services account.</p>
   */
  JobDefinitionName: string | undefined;

  /**
   * <p>The baseline configuration for a model bias job.</p>
   */
  ModelBiasBaselineConfig?: ModelBiasBaselineConfig;

  /**
   * <p>Configures the model bias job to run a specified Docker container image.</p>
   */
  ModelBiasAppSpecification: ModelBiasAppSpecification | undefined;

  /**
   * <p>Inputs for the model bias job.</p>
   */
  ModelBiasJobInput: ModelBiasJobInput | undefined;

  /**
   * <p>The output configuration for monitoring jobs.</p>
   */
  ModelBiasJobOutputConfig: MonitoringOutputConfig | undefined;

  /**
   * <p>Identifies the resources to deploy for a monitoring job.</p>
   */
  JobResources: MonitoringResources | undefined;

  /**
   * <p>Networking options for a model bias job.</p>
   */
  NetworkConfig?: MonitoringNetworkConfig;

  /**
   * <p>The Amazon Resource Name (ARN) of an IAM role that Amazon SageMaker can assume to
   *          perform tasks on your behalf.</p>
   */
  RoleArn: string | undefined;

  /**
   * <p>A time limit for how long the monitoring job is allowed to run before stopping.</p>
   */
  StoppingCondition?: MonitoringStoppingCondition;

  /**
   * <p>(Optional) An array of key-value pairs. For more information, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html#allocation-whatURL">Using Cost Allocation Tags</a> in the <i>Amazon Web Services Billing and Cost Management
   *             User Guide</i>.</p>
   */
  Tags?: Tag[];
}

export interface CreateModelBiasJobDefinitionResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the model bias job.</p>
   */
  JobDefinitionArn: string | undefined;
}

/**
 * <p>Docker container image configuration object for the model explainability job.</p>
 */
export interface ModelExplainabilityAppSpecification {
  /**
   * <p>The container image to be run by the model explainability job.</p>
   */
  ImageUri: string | undefined;

  /**
   * <p>JSON formatted S3 file that defines explainability parameters. For more information on
   *          this JSON configuration file, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/clarify-config-json-monitor-model-explainability-parameters.html">Configure model
   *             explainability parameters</a>.</p>
   */
  ConfigUri: string | undefined;

  /**
   * <p>Sets the environment variables in the Docker container.</p>
   */
  Environment?: Record<string, string>;
}

/**
 * <p>The configuration for a baseline model explainability job.</p>
 */
export interface ModelExplainabilityBaselineConfig {
  /**
   * <p>The name of the baseline model explainability job.</p>
   */
  BaseliningJobName?: string;

  /**
   * <p>The constraints resource for a monitoring job.</p>
   */
  ConstraintsResource?: MonitoringConstraintsResource;
}

/**
 * <p>Inputs for the model explainability job.</p>
 */
export interface ModelExplainabilityJobInput {
  /**
   * <p>Input object for the endpoint</p>
   */
  EndpointInput: EndpointInput | undefined;
}

export interface CreateModelExplainabilityJobDefinitionRequest {
  /**
   * <p> The name of the model explainability job definition. The name must be unique within an
   *          Amazon Web Services Region in the Amazon Web Services account.</p>
   */
  JobDefinitionName: string | undefined;

  /**
   * <p>The baseline configuration for a model explainability job.</p>
   */
  ModelExplainabilityBaselineConfig?: ModelExplainabilityBaselineConfig;

  /**
   * <p>Configures the model explainability job to run a specified Docker container
   *          image.</p>
   */
  ModelExplainabilityAppSpecification: ModelExplainabilityAppSpecification | undefined;

  /**
   * <p>Inputs for the model explainability job.</p>
   */
  ModelExplainabilityJobInput: ModelExplainabilityJobInput | undefined;

  /**
   * <p>The output configuration for monitoring jobs.</p>
   */
  ModelExplainabilityJobOutputConfig: MonitoringOutputConfig | undefined;

  /**
   * <p>Identifies the resources to deploy for a monitoring job.</p>
   */
  JobResources: MonitoringResources | undefined;

  /**
   * <p>Networking options for a model explainability job.</p>
   */
  NetworkConfig?: MonitoringNetworkConfig;

  /**
   * <p>The Amazon Resource Name (ARN) of an IAM role that Amazon SageMaker can assume to
   *          perform tasks on your behalf.</p>
   */
  RoleArn: string | undefined;

  /**
   * <p>A time limit for how long the monitoring job is allowed to run before stopping.</p>
   */
  StoppingCondition?: MonitoringStoppingCondition;

  /**
   * <p>(Optional) An array of key-value pairs. For more information, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html#allocation-whatURL">Using Cost Allocation Tags</a> in the <i>Amazon Web Services Billing and Cost Management
   *             User Guide</i>.</p>
   */
  Tags?: Tag[];
}

export interface CreateModelExplainabilityJobDefinitionResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the model explainability job.</p>
   */
  JobDefinitionArn: string | undefined;
}

/**
 * <p>Contains details regarding the file source.</p>
 */
export interface FileSource {
  /**
   * <p>The type of content stored in the file source.</p>
   */
  ContentType?: string;

  /**
   * <p>The digest of the file source.</p>
   */
  ContentDigest?: string;

  /**
   * <p>The Amazon S3 URI for the file source.</p>
   */
  S3Uri: string | undefined;
}

/**
 * <p>Represents the drift check bias baselines that can be used when the model monitor is set using the
 *             model package.</p>
 */
export interface DriftCheckBias {
  /**
   * <p>The bias config file for a model.</p>
   */
  ConfigFile?: FileSource;

  /**
   * <p>The pre-training constraints.</p>
   */
  PreTrainingConstraints?: MetricsSource;

  /**
   * <p>The post-training constraints.</p>
   */
  PostTrainingConstraints?: MetricsSource;
}

/**
 * <p>Represents the drift check explainability baselines that can be used when the model monitor is set
 *             using the model package. </p>
 */
export interface DriftCheckExplainability {
  /**
   * <p>The drift check explainability constraints.</p>
   */
  Constraints?: MetricsSource;

  /**
   * <p>The explainability config file for the model.</p>
   */
  ConfigFile?: FileSource;
}

/**
 * <p>Represents the drift check data quality baselines that can be used when the model monitor is set using
 *             the model package. </p>
 */
export interface DriftCheckModelDataQuality {
  /**
   * <p>The drift check model data quality statistics.</p>
   */
  Statistics?: MetricsSource;

  /**
   * <p>The drift check model data quality constraints.</p>
   */
  Constraints?: MetricsSource;
}

/**
 * <p>Represents the drift check model quality baselines that can be used when the model monitor is set using
 *             the model package. </p>
 */
export interface DriftCheckModelQuality {
  /**
   * <p>The drift check model quality statistics.</p>
   */
  Statistics?: MetricsSource;

  /**
   * <p>The drift check model quality constraints.</p>
   */
  Constraints?: MetricsSource;
}

/**
 * <p>Represents the drift check baselines that can be used when the model monitor is set using the model
 *             package. </p>
 */
export interface DriftCheckBaselines {
  /**
   * <p>Represents the drift check bias baselines that can be used when the model monitor is set using the model
   *             package. </p>
   */
  Bias?: DriftCheckBias;

  /**
   * <p>Represents the drift check explainability baselines that can be used when the model monitor is set using
   *             the model package. </p>
   */
  Explainability?: DriftCheckExplainability;

  /**
   * <p>Represents the drift check model quality baselines that can be used when the model monitor is set using
   *             the model package.</p>
   */
  ModelQuality?: DriftCheckModelQuality;

  /**
   * <p>Represents the drift check model data quality baselines that can be used when the model monitor is set
   *             using the model package.</p>
   */
  ModelDataQuality?: DriftCheckModelDataQuality;
}

/**
 * <p>Contains explainability metrics for a model.</p>
 */
export interface Explainability {
  /**
   * <p>The explainability report for a model.</p>
   */
  Report?: MetricsSource;
}

/**
 * <p>Data quality constraints and statistics for a model.</p>
 */
export interface ModelDataQuality {
  /**
   * <p>Data quality statistics for a model.</p>
   */
  Statistics?: MetricsSource;

  /**
   * <p>Data quality constraints for a model.</p>
   */
  Constraints?: MetricsSource;
}

/**
 * <p>Model quality statistics and constraints.</p>
 */
export interface ModelQuality {
  /**
   * <p>Model quality statistics.</p>
   */
  Statistics?: MetricsSource;

  /**
   * <p>Model quality constraints.</p>
   */
  Constraints?: MetricsSource;
}

/**
 * <p>Contains metrics captured from a model.</p>
 */
export interface ModelMetrics {
  /**
   * <p>Metrics that measure the quality of a model.</p>
   */
  ModelQuality?: ModelQuality;

  /**
   * <p>Metrics that measure the quality of the input data for a model.</p>
   */
  ModelDataQuality?: ModelDataQuality;

  /**
   * <p>Metrics that measure bais in a model.</p>
   */
  Bias?: Bias;

  /**
   * <p>Metrics that help explain a model.</p>
   */
  Explainability?: Explainability;
}

/**
 * <p>Specifies an algorithm that was used to create the model package. The algorithm must
 *             be either an algorithm resource in your SageMaker account or an algorithm in Amazon Web Services Marketplace that you are subscribed to.</p>
 */
export interface SourceAlgorithm {
  /**
   * <p>The Amazon S3 path where the model artifacts, which result from model training, are stored.
   *             This path must point to a single <code>gzip</code> compressed tar archive
   *                 (<code>.tar.gz</code> suffix).</p>
   *         <note>
   *             <p>The model artifacts must be in an S3 bucket that is in the same region as the
   *                 algorithm.</p>
   *         </note>
   */
  ModelDataUrl?: string;

  /**
   * <p>The name of an algorithm that was used to create the model package. The algorithm must
   *             be either an algorithm resource in your SageMaker account or an algorithm in Amazon Web Services Marketplace that you are subscribed to.</p>
   */
  AlgorithmName: string | undefined;
}

/**
 * <p>A list of algorithms that were used to create a model package.</p>
 */
export interface SourceAlgorithmSpecification {
  /**
   * <p>A list of the algorithms that were used to create a model package.</p>
   */
  SourceAlgorithms: SourceAlgorithm[] | undefined;
}

/**
 * <p>Contains data, such as the inputs and targeted instance types that are used in the
 *             process of validating the model package.</p>
 *         <p>The data provided in the validation profile is made available to your buyers on Amazon Web Services
 *             Marketplace.</p>
 */
export interface ModelPackageValidationProfile {
  /**
   * <p>The name of the profile for the model package.</p>
   */
  ProfileName: string | undefined;

  /**
   * <p>The <code>TransformJobDefinition</code> object that describes the transform job used
   *             for the validation of the model package.</p>
   */
  TransformJobDefinition: TransformJobDefinition | undefined;
}

/**
 * <p>Specifies batch transform jobs that SageMaker runs to validate your model package.</p>
 */
export interface ModelPackageValidationSpecification {
  /**
   * <p>The IAM roles to be used for the validation of the model package.</p>
   */
  ValidationRole: string | undefined;

  /**
   * <p>An array of <code>ModelPackageValidationProfile</code> objects, each of which
   *             specifies a batch transform job that SageMaker runs to validate your model package.</p>
   */
  ValidationProfiles: ModelPackageValidationProfile[] | undefined;
}

export interface CreateModelPackageInput {
  /**
   * <p>The name of the model package. The name must have 1 to 63 characters. Valid characters
   *             are a-z, A-Z, 0-9, and - (hyphen).</p>
   *         <p>This parameter is required for unversioned models. It is not applicable to versioned
   *             models.</p>
   */
  ModelPackageName?: string;

  /**
   * <p>The name or Amazon Resource Name (ARN) of the model package group that this model version belongs to.</p>
   *         <p>This parameter is required for versioned models, and does not apply to unversioned
   *             models.</p>
   */
  ModelPackageGroupName?: string;

  /**
   * <p>A description of the model package.</p>
   */
  ModelPackageDescription?: string;

  /**
   * <p>Specifies details about inference jobs that can be run with models based on this model
   *             package, including the following:</p>
   *         <ul>
   *             <li>
   *                 <p>The Amazon ECR paths of containers that contain the inference code and model
   *                     artifacts.</p>
   *             </li>
   *             <li>
   *                 <p>The instance types that the model package supports for transform jobs and
   *                     real-time endpoints used for inference.</p>
   *             </li>
   *             <li>
   *                 <p>The input and output content formats that the model package supports for
   *                     inference.</p>
   *             </li>
   *          </ul>
   */
  InferenceSpecification?: InferenceSpecification;

  /**
   * <p>Specifies configurations for one or more transform jobs that SageMaker runs to test the
   *             model package.</p>
   */
  ValidationSpecification?: ModelPackageValidationSpecification;

  /**
   * <p>Details about the algorithm that was used to create the model package.</p>
   */
  SourceAlgorithmSpecification?: SourceAlgorithmSpecification;

  /**
   * <p>Whether to certify the model package for listing on Amazon Web Services Marketplace.</p>
   *         <p>This parameter is optional for unversioned models, and does not apply to versioned
   *             models.</p>
   */
  CertifyForMarketplace?: boolean;

  /**
   * <p>A list of key value pairs associated with the model. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services
   *             resources</a> in the <i>Amazon Web Services General Reference Guide</i>.</p>
   */
  Tags?: Tag[];

  /**
   * <p>Whether the model is approved for deployment.</p>
   *         <p>This parameter is optional for versioned models, and does not apply to unversioned
   *             models.</p>
   *         <p>For versioned models, the value of this parameter must be set to <code>Approved</code>
   *         to deploy the model.</p>
   */
  ModelApprovalStatus?: ModelApprovalStatus | string;

  /**
   * <p>Metadata properties of the tracking entity, trial, or trial component.</p>
   */
  MetadataProperties?: MetadataProperties;

  /**
   * <p>A structure that contains model metrics reports.</p>
   */
  ModelMetrics?: ModelMetrics;

  /**
   * <p>A unique token that guarantees that the call to this API is idempotent.</p>
   */
  ClientToken?: string;

  /**
   * <p>The metadata properties associated with the model package versions.</p>
   */
  CustomerMetadataProperties?: Record<string, string>;

  /**
   * <p>Represents the drift check baselines that can be used when the model monitor is set using the model package.
   *             For more information, see the topic on <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/pipelines-quality-clarify-baseline-lifecycle.html#pipelines-quality-clarify-baseline-drift-detection">Drift Detection against Previous Baselines in SageMaker Pipelines</a> in the <i>Amazon SageMaker Developer Guide</i>.
   *         </p>
   */
  DriftCheckBaselines?: DriftCheckBaselines;

  /**
   * <p>The machine learning domain of your model package and its components. Common
   *     machine learning domains include computer vision and natural language processing.</p>
   */
  Domain?: string;

  /**
   * <p>The machine learning task your model package accomplishes. Common machine
   *     learning tasks include object detection and image classification. The following
   *     tasks are supported by Inference Recommender:
   *    <code>"IMAGE_CLASSIFICATION"</code> | <code>"OBJECT_DETECTION"</code> | <code>"TEXT_GENERATION"</code> |<code>"IMAGE_SEGMENTATION"</code> |
   *    <code>"FILL_MASK"</code> | <code>"CLASSIFICATION"</code> | <code>"REGRESSION"</code> | <code>"OTHER"</code>.</p>
   *          <p>Specify "OTHER" if none of the tasks listed fit your use case.</p>
   */
  Task?: string;

  /**
   * <p>The Amazon Simple Storage Service (Amazon S3) path where the sample payload are stored. This path must point
   *     to a single gzip compressed tar archive (.tar.gz suffix).</p>
   */
  SamplePayloadUrl?: string;

  /**
   * <p>An array of additional Inference Specification objects. Each additional
   *     Inference Specification specifies artifacts based on this model package that can
   *     be used on inference endpoints. Generally used with SageMaker Neo to store the
   *     compiled artifacts. </p>
   */
  AdditionalInferenceSpecifications?: AdditionalInferenceSpecificationDefinition[];
}

export interface CreateModelPackageOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the new model package.</p>
   */
  ModelPackageArn: string | undefined;
}

export interface CreateModelPackageGroupInput {
  /**
   * <p>The name of the model group.</p>
   */
  ModelPackageGroupName: string | undefined;

  /**
   * <p>A description for the model group.</p>
   */
  ModelPackageGroupDescription?: string;

  /**
   * <p>A list of key value pairs associated with the model group. For more information, see
   *             <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services
   *                 resources</a> in the <i>Amazon Web Services General Reference Guide</i>.</p>
   */
  Tags?: Tag[];
}

export interface CreateModelPackageGroupOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the model group.</p>
   */
  ModelPackageGroupArn: string | undefined;
}

export enum MonitoringProblemType {
  BINARY_CLASSIFICATION = "BinaryClassification",
  MULTICLASS_CLASSIFICATION = "MulticlassClassification",
  REGRESSION = "Regression",
}

/**
 * <p>Container image configuration object for the monitoring job.</p>
 */
export interface ModelQualityAppSpecification {
  /**
   * <p>The address of the container image that the monitoring job runs.</p>
   */
  ImageUri: string | undefined;

  /**
   * <p>Specifies the entrypoint for a container that the monitoring job runs.</p>
   */
  ContainerEntrypoint?: string[];

  /**
   * <p>An array of arguments for the container used to run the monitoring job.</p>
   */
  ContainerArguments?: string[];

  /**
   * <p>An Amazon S3 URI to a script that is called per row prior to running analysis. It can
   *          base64 decode the payload and convert it into a flatted json so that the built-in container
   *          can use the converted data. Applicable only for the built-in (first party)
   *          containers.</p>
   */
  RecordPreprocessorSourceUri?: string;

  /**
   * <p>An Amazon S3 URI to a script that is called after analysis has been performed.
   *          Applicable only for the built-in (first party) containers.</p>
   */
  PostAnalyticsProcessorSourceUri?: string;

  /**
   * <p>The machine learning problem type of the model that the monitoring job monitors.</p>
   */
  ProblemType?: MonitoringProblemType | string;

  /**
   * <p>Sets the environment variables in the container that the monitoring job runs.</p>
   */
  Environment?: Record<string, string>;
}

/**
 * <p>Configuration for monitoring constraints and monitoring statistics. These baseline
 *          resources are compared against the results of the current job from the series of jobs
 *          scheduled to collect data periodically.</p>
 */
export interface ModelQualityBaselineConfig {
  /**
   * <p>The name of the job that performs baselining for the monitoring job.</p>
   */
  BaseliningJobName?: string;

  /**
   * <p>The constraints resource for a monitoring job.</p>
   */
  ConstraintsResource?: MonitoringConstraintsResource;
}

/**
 * <p>The input for the model quality monitoring job. Currently endponts are supported for
 *          input for model quality monitoring jobs.</p>
 */
export interface ModelQualityJobInput {
  /**
   * <p>Input object for the endpoint</p>
   */
  EndpointInput: EndpointInput | undefined;

  /**
   * <p>The ground truth label provided for the model.</p>
   */
  GroundTruthS3Input: MonitoringGroundTruthS3Input | undefined;
}

export interface CreateModelQualityJobDefinitionRequest {
  /**
   * <p>The name of the monitoring job definition.</p>
   */
  JobDefinitionName: string | undefined;

  /**
   * <p>Specifies the constraints and baselines for the monitoring job.</p>
   */
  ModelQualityBaselineConfig?: ModelQualityBaselineConfig;

  /**
   * <p>The container that runs the monitoring job.</p>
   */
  ModelQualityAppSpecification: ModelQualityAppSpecification | undefined;

  /**
   * <p>A list of the inputs that are monitored. Currently endpoints are supported.</p>
   */
  ModelQualityJobInput: ModelQualityJobInput | undefined;

  /**
   * <p>The output configuration for monitoring jobs.</p>
   */
  ModelQualityJobOutputConfig: MonitoringOutputConfig | undefined;

  /**
   * <p>Identifies the resources to deploy for a monitoring job.</p>
   */
  JobResources: MonitoringResources | undefined;

  /**
   * <p>Specifies the network configuration for the monitoring job.</p>
   */
  NetworkConfig?: MonitoringNetworkConfig;

  /**
   * <p>The Amazon Resource Name (ARN) of an IAM role that Amazon SageMaker can assume to
   *          perform tasks on your behalf.</p>
   */
  RoleArn: string | undefined;

  /**
   * <p>A time limit for how long the monitoring job is allowed to run before stopping.</p>
   */
  StoppingCondition?: MonitoringStoppingCondition;

  /**
   * <p>(Optional) An array of key-value pairs. For more information, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html#allocation-whatURL">Using Cost Allocation Tags</a> in the <i>Amazon Web Services Billing and Cost Management
   *             User Guide</i>.</p>
   */
  Tags?: Tag[];
}

export interface CreateModelQualityJobDefinitionResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the model quality monitoring job.</p>
   */
  JobDefinitionArn: string | undefined;
}

/**
 * <p>Configuration for monitoring constraints and monitoring statistics. These baseline
 *          resources are compared against the results of the current job from the series of jobs
 *          scheduled to collect data periodically.</p>
 */
export interface MonitoringBaselineConfig {
  /**
   * <p>The name of the job that performs baselining for the monitoring job.</p>
   */
  BaseliningJobName?: string;

  /**
   * <p>The baseline constraint file in Amazon S3 that the current monitoring job should
   *          validated against.</p>
   */
  ConstraintsResource?: MonitoringConstraintsResource;

  /**
   * <p>The baseline statistics file in Amazon S3 that the current monitoring job should be
   *          validated against.</p>
   */
  StatisticsResource?: MonitoringStatisticsResource;
}

/**
 * <p>Container image configuration object for the monitoring job.</p>
 */
export interface MonitoringAppSpecification {
  /**
   * <p>The container image to be run by the monitoring job.</p>
   */
  ImageUri: string | undefined;

  /**
   * <p>Specifies the entrypoint for a container used to run the monitoring job.</p>
   */
  ContainerEntrypoint?: string[];

  /**
   * <p>An array of arguments for the container used to run the monitoring job.</p>
   */
  ContainerArguments?: string[];

  /**
   * <p>An Amazon S3 URI to a script that is called per row prior to running analysis. It can
   *          base64 decode the payload and convert it into a flatted json so that the built-in container
   *          can use the converted data. Applicable only for the built-in (first party)
   *          containers.</p>
   */
  RecordPreprocessorSourceUri?: string;

  /**
   * <p>An Amazon S3 URI to a script that is called after analysis has been performed.
   *          Applicable only for the built-in (first party) containers.</p>
   */
  PostAnalyticsProcessorSourceUri?: string;
}

/**
 * <p>The inputs for a monitoring job.</p>
 */
export interface MonitoringInput {
  /**
   * <p>The endpoint for a monitoring job.</p>
   */
  EndpointInput: EndpointInput | undefined;
}

/**
 * <p>Networking options for a job, such as network traffic encryption between containers,
 *          whether to allow inbound and outbound network calls to and from containers, and the VPC
 *          subnets and security groups to use for VPC-enabled jobs.</p>
 */
export interface NetworkConfig {
  /**
   * <p>Whether to encrypt all communications between distributed processing jobs. Choose
   *             <code>True</code> to encrypt communications. Encryption provides greater security for distributed
   *             processing jobs, but the processing might take longer.</p>
   */
  EnableInterContainerTrafficEncryption?: boolean;

  /**
   * <p>Whether to allow inbound and outbound network calls to and from the containers used for
   *          the processing job.</p>
   */
  EnableNetworkIsolation?: boolean;

  /**
   * <p>Specifies a VPC that your training jobs and hosted models have access to. Control
   *             access to and from your training and model containers by configuring the VPC. For more
   *             information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/host-vpc.html">Protect Endpoints by Using an Amazon Virtual Private Cloud</a> and <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/train-vpc.html">Protect Training Jobs
   *                 by Using an Amazon Virtual Private Cloud</a>. </p>
   */
  VpcConfig?: VpcConfig;
}

/**
 * <p>Defines the monitoring job.</p>
 */
export interface MonitoringJobDefinition {
  /**
   * <p>Baseline configuration used to validate that the data conforms to the specified
   *          constraints and statistics</p>
   */
  BaselineConfig?: MonitoringBaselineConfig;

  /**
   * <p>The array of inputs for the monitoring job. Currently we support monitoring an Amazon SageMaker
   *          Endpoint.</p>
   */
  MonitoringInputs: MonitoringInput[] | undefined;

  /**
   * <p>The array of outputs from the monitoring job to be uploaded to Amazon Simple Storage
   *          Service (Amazon S3).</p>
   */
  MonitoringOutputConfig: MonitoringOutputConfig | undefined;

  /**
   * <p>Identifies the resources, ML compute instances, and ML storage volumes to deploy for a
   *          monitoring job. In distributed processing, you specify more than one instance.</p>
   */
  MonitoringResources: MonitoringResources | undefined;

  /**
   * <p>Configures the monitoring job to run a specified Docker container image.</p>
   */
  MonitoringAppSpecification: MonitoringAppSpecification | undefined;

  /**
   * <p>Specifies a time limit for how long the monitoring job is allowed to run.</p>
   */
  StoppingCondition?: MonitoringStoppingCondition;

  /**
   * <p>Sets the environment variables in the Docker container.</p>
   */
  Environment?: Record<string, string>;

  /**
   * <p>Specifies networking options for an monitoring job.</p>
   */
  NetworkConfig?: NetworkConfig;

  /**
   * <p>The Amazon Resource Name (ARN) of an IAM role that Amazon SageMaker can assume to perform tasks on
   *          your behalf.</p>
   */
  RoleArn: string | undefined;
}

export enum MonitoringType {
  DATA_QUALITY = "DataQuality",
  MODEL_BIAS = "ModelBias",
  MODEL_EXPLAINABILITY = "ModelExplainability",
  MODEL_QUALITY = "ModelQuality",
}

/**
 * <p>Configuration details about the monitoring schedule.</p>
 */
export interface ScheduleConfig {
  /**
   * <p>A cron expression that describes details about the monitoring schedule.</p>
   *
   *          <p>Currently the only supported cron expressions are:</p>
   *          <ul>
   *             <li>
   *                <p>If you want to set the job to start every hour, please use the following:</p>
   *                <p>
   *                   <code>Hourly: cron(0 * ? * * *)</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>If you want to start the job daily:</p>
   *                <p>
   *                   <code>cron(0 [00-23] ? * * *)</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>For example, the following are valid cron expressions:</p>
   *          <ul>
   *             <li>
   *                <p>Daily at noon UTC: <code>cron(0 12 ? * * *)</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Daily at midnight UTC: <code>cron(0 0 ? * * *)</code>
   *                </p>
   *             </li>
   *          </ul>
   *
   *          <p>To support running every 6, 12 hours, the following are also supported:</p>
   *          <p>
   *             <code>cron(0 [00-23]/[01-24] ? * * *)</code>
   *          </p>
   *          <p>For example, the following are valid cron expressions:</p>
   *          <ul>
   *             <li>
   *                <p>Every 12 hours, starting at 5pm UTC: <code>cron(0 17/12 ? * * *)</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Every two hours starting at midnight: <code>cron(0 0/2 ? * * *)</code>
   *                </p>
   *             </li>
   *          </ul>
   *
   *          <note>
   *             <ul>
   *                <li>
   *                   <p>Even though the cron expression is set to start at 5PM UTC, note that there
   *                   could be a delay of 0-20 minutes from the actual requested time to run the
   *                   execution. </p>
   *                </li>
   *                <li>
   *                   <p>We recommend that if you would like a daily schedule, you do not provide this
   *                   parameter. Amazon SageMaker will pick a time for running every day.</p>
   *                </li>
   *             </ul>
   *          </note>
   */
  ScheduleExpression: string | undefined;
}

/**
 * <p>Configures the monitoring schedule and defines the monitoring job.</p>
 */
export interface MonitoringScheduleConfig {
  /**
   * <p>Configures the monitoring schedule.</p>
   */
  ScheduleConfig?: ScheduleConfig;

  /**
   * <p>Defines the monitoring job.</p>
   */
  MonitoringJobDefinition?: MonitoringJobDefinition;

  /**
   * <p>The name of the monitoring job definition to schedule.</p>
   */
  MonitoringJobDefinitionName?: string;

  /**
   * <p>The type of the monitoring job definition to schedule.</p>
   */
  MonitoringType?: MonitoringType | string;
}

export interface CreateMonitoringScheduleRequest {
  /**
   * <p>The name of the monitoring schedule. The name must be unique within an Amazon Web Services Region within
   *          an Amazon Web Services account.</p>
   */
  MonitoringScheduleName: string | undefined;

  /**
   * <p>The configuration object that specifies the monitoring schedule and defines the
   *          monitoring job.</p>
   */
  MonitoringScheduleConfig: MonitoringScheduleConfig | undefined;

  /**
   * <p>(Optional) An array of key-value pairs. For more information, see <a href=" https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html#allocation-whatURL">Using Cost Allocation Tags</a> in the <i>Amazon Web Services Billing and Cost Management
   *             User Guide</i>.</p>
   */
  Tags?: Tag[];
}

export interface CreateMonitoringScheduleResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the monitoring schedule.</p>
   */
  MonitoringScheduleArn: string | undefined;
}

export enum NotebookInstanceAcceleratorType {
  ML_EIA1_LARGE = "ml.eia1.large",
  ML_EIA1_MEDIUM = "ml.eia1.medium",
  ML_EIA1_XLARGE = "ml.eia1.xlarge",
  ML_EIA2_LARGE = "ml.eia2.large",
  ML_EIA2_MEDIUM = "ml.eia2.medium",
  ML_EIA2_XLARGE = "ml.eia2.xlarge",
}

export enum DirectInternetAccess {
  DISABLED = "Disabled",
  ENABLED = "Enabled",
}

/**
 * <p>Information on the IMDS configuration of the notebook instance</p>
 */
export interface InstanceMetadataServiceConfiguration {
  /**
   * <p>Indicates the minimum IMDS version that the notebook instance supports. When passed as part of <code>CreateNotebookInstance</code>, if no value is selected, then it defaults to IMDSv1. This means that both IMDSv1 and IMDSv2 are supported. If passed as part of <code>UpdateNotebookInstance</code>, there is no default.</p>
   */
  MinimumInstanceMetadataServiceVersion: string | undefined;
}

export enum _InstanceType {
  ML_C4_2XLARGE = "ml.c4.2xlarge",
  ML_C4_4XLARGE = "ml.c4.4xlarge",
  ML_C4_8XLARGE = "ml.c4.8xlarge",
  ML_C4_XLARGE = "ml.c4.xlarge",
  ML_C5D_18XLARGE = "ml.c5d.18xlarge",
  ML_C5D_2XLARGE = "ml.c5d.2xlarge",
  ML_C5D_4XLARGE = "ml.c5d.4xlarge",
  ML_C5D_9XLARGE = "ml.c5d.9xlarge",
  ML_C5D_XLARGE = "ml.c5d.xlarge",
  ML_C5_18XLARGE = "ml.c5.18xlarge",
  ML_C5_2XLARGE = "ml.c5.2xlarge",
  ML_C5_4XLARGE = "ml.c5.4xlarge",
  ML_C5_9XLARGE = "ml.c5.9xlarge",
  ML_C5_XLARGE = "ml.c5.xlarge",
  ML_G4DN_12XLARGE = "ml.g4dn.12xlarge",
  ML_G4DN_16XLARGE = "ml.g4dn.16xlarge",
  ML_G4DN_2XLARGE = "ml.g4dn.2xlarge",
  ML_G4DN_4XLARGE = "ml.g4dn.4xlarge",
  ML_G4DN_8XLARGE = "ml.g4dn.8xlarge",
  ML_G4DN_XLARGE = "ml.g4dn.xlarge",
  ML_G5_12XLARGE = "ml.g5.12xlarge",
  ML_G5_16XLARGE = "ml.g5.16xlarge",
  ML_G5_24XLARGE = "ml.g5.24xlarge",
  ML_G5_2XLARGE = "ml.g5.2xlarge",
  ML_G5_48XLARGE = "ml.g5.48xlarge",
  ML_G5_4XLARGE = "ml.g5.4xlarge",
  ML_G5_8XLARGE = "ml.g5.8xlarge",
  ML_G5_XLARGE = "ml.g5.xlarge",
  ML_M4_10XLARGE = "ml.m4.10xlarge",
  ML_M4_16XLARGE = "ml.m4.16xlarge",
  ML_M4_2XLARGE = "ml.m4.2xlarge",
  ML_M4_4XLARGE = "ml.m4.4xlarge",
  ML_M4_XLARGE = "ml.m4.xlarge",
  ML_M5D_12XLARGE = "ml.m5d.12xlarge",
  ML_M5D_16XLARGE = "ml.m5d.16xlarge",
  ML_M5D_24XLARGE = "ml.m5d.24xlarge",
  ML_M5D_2XLARGE = "ml.m5d.2xlarge",
  ML_M5D_4XLARGE = "ml.m5d.4xlarge",
  ML_M5D_8XLARGE = "ml.m5d.8xlarge",
  ML_M5D_LARGE = "ml.m5d.large",
  ML_M5D_XLARGE = "ml.m5d.xlarge",
  ML_M5_12XLARGE = "ml.m5.12xlarge",
  ML_M5_24XLARGE = "ml.m5.24xlarge",
  ML_M5_2XLARGE = "ml.m5.2xlarge",
  ML_M5_4XLARGE = "ml.m5.4xlarge",
  ML_M5_XLARGE = "ml.m5.xlarge",
  ML_P2_16XLARGE = "ml.p2.16xlarge",
  ML_P2_8XLARGE = "ml.p2.8xlarge",
  ML_P2_XLARGE = "ml.p2.xlarge",
  ML_P3DN_24XLARGE = "ml.p3dn.24xlarge",
  ML_P3_16XLARGE = "ml.p3.16xlarge",
  ML_P3_2XLARGE = "ml.p3.2xlarge",
  ML_P3_8XLARGE = "ml.p3.8xlarge",
  ML_R5_12XLARGE = "ml.r5.12xlarge",
  ML_R5_16XLARGE = "ml.r5.16xlarge",
  ML_R5_24XLARGE = "ml.r5.24xlarge",
  ML_R5_2XLARGE = "ml.r5.2xlarge",
  ML_R5_4XLARGE = "ml.r5.4xlarge",
  ML_R5_8XLARGE = "ml.r5.8xlarge",
  ML_R5_LARGE = "ml.r5.large",
  ML_R5_XLARGE = "ml.r5.xlarge",
  ML_T2_2XLARGE = "ml.t2.2xlarge",
  ML_T2_LARGE = "ml.t2.large",
  ML_T2_MEDIUM = "ml.t2.medium",
  ML_T2_XLARGE = "ml.t2.xlarge",
  ML_T3_2XLARGE = "ml.t3.2xlarge",
  ML_T3_LARGE = "ml.t3.large",
  ML_T3_MEDIUM = "ml.t3.medium",
  ML_T3_XLARGE = "ml.t3.xlarge",
}

export enum RootAccess {
  DISABLED = "Disabled",
  ENABLED = "Enabled",
}

export interface CreateNotebookInstanceInput {
  /**
   * <p>The name of the new notebook instance.</p>
   */
  NotebookInstanceName: string | undefined;

  /**
   * <p>The type of ML compute instance to launch for the notebook instance.</p>
   */
  InstanceType: _InstanceType | string | undefined;

  /**
   * <p>The ID of the subnet in a VPC to which you would like to have a connectivity from
   *             your ML compute instance. </p>
   */
  SubnetId?: string;

  /**
   * <p>The VPC security group IDs, in the form sg-xxxxxxxx. The security groups must be
   *             for the same VPC as specified in the subnet. </p>
   */
  SecurityGroupIds?: string[];

  /**
   * <p> When you send any requests to Amazon Web Services resources from the notebook
   *             instance, SageMaker assumes this role to perform tasks on your behalf. You must grant this
   *             role necessary permissions so SageMaker can perform these tasks. The policy must allow the
   *             SageMaker service principal (sagemaker.amazonaws.com) permissions to assume this role. For
   *             more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sagemaker-roles.html">SageMaker Roles</a>. </p>
   *         <note>
   *             <p>To be able to pass this role to SageMaker, the caller of this API must have the
   *                     <code>iam:PassRole</code> permission.</p>
   *         </note>
   */
  RoleArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of a Amazon Web Services Key Management Service key that
   *             SageMaker uses to encrypt data on the storage volume attached to your notebook instance. The
   *             KMS key you provide must be enabled. For information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/enabling-keys.html">Enabling and Disabling
   *                 Keys</a> in the <i>Amazon Web Services Key Management Service Developer
   *                 Guide</i>.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>An array of key-value pairs. You can use tags to categorize your Amazon Web Services
   *             resources in different ways, for example, by purpose, owner, or environment. For more
   *             information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services Resources</a>.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The name of a lifecycle configuration to associate with the notebook instance. For
   *             information about lifestyle configurations, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/notebook-lifecycle-config.html">Step 2.1: (Optional)
   *                 Customize a Notebook Instance</a>.</p>
   */
  LifecycleConfigName?: string;

  /**
   * <p>Sets whether SageMaker provides internet access to the notebook instance. If you set this
   *             to <code>Disabled</code> this notebook instance is able to access resources only in your
   *             VPC, and is not be able to connect to SageMaker training and endpoint services unless you
   *             configure a NAT Gateway in your VPC.</p>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/appendix-additional-considerations.html#appendix-notebook-and-internet-access">Notebook Instances Are Internet-Enabled by Default</a>. You can set the value
   *             of this parameter to <code>Disabled</code> only if you set a value for the
   *                 <code>SubnetId</code> parameter.</p>
   */
  DirectInternetAccess?: DirectInternetAccess | string;

  /**
   * <p>The size, in GB, of the ML storage volume to attach to the notebook instance. The
   *             default value is 5 GB.</p>
   */
  VolumeSizeInGB?: number;

  /**
   * <p>A list of Elastic Inference (EI) instance types to associate with this notebook
   *             instance. Currently, only one instance type can be associated with a notebook instance.
   *             For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/ei.html">Using Elastic Inference in Amazon SageMaker</a>.</p>
   */
  AcceleratorTypes?: (NotebookInstanceAcceleratorType | string)[];

  /**
   * <p>A Git repository to associate with the notebook instance as its default code
   *             repository. This can be either the name of a Git repository stored as a resource in your
   *             account, or the URL of a Git repository in <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/welcome.html">Amazon Web Services CodeCommit</a>
   *             or in any other Git repository. When you open a notebook instance, it opens in the
   *             directory that contains this repository. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/nbi-git-repo.html">Associating Git
   *                 Repositories with SageMaker Notebook Instances</a>.</p>
   */
  DefaultCodeRepository?: string;

  /**
   * <p>An array of up to three Git repositories to associate with the notebook instance.
   *             These can be either the names of Git repositories stored as resources in your account,
   *             or the URL of Git repositories in <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/welcome.html">Amazon Web Services CodeCommit</a>
   *             or in any other Git repository. These repositories are cloned at the same level as the
   *             default repository of your notebook instance. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/nbi-git-repo.html">Associating Git
   *                 Repositories with SageMaker Notebook Instances</a>.</p>
   */
  AdditionalCodeRepositories?: string[];

  /**
   * <p>Whether root access is enabled or disabled for users of the notebook instance. The
   *             default value is <code>Enabled</code>.</p>
   *         <note>
   *             <p>Lifecycle configurations need root access to be able to set up a notebook
   *                 instance. Because of this, lifecycle configurations associated with a notebook
   *                 instance always run with root access even if you disable root access for
   *                 users.</p>
   *         </note>
   */
  RootAccess?: RootAccess | string;

  /**
   * <p>The platform identifier of the notebook instance runtime environment.</p>
   */
  PlatformIdentifier?: string;

  /**
   * <p>Information on the IMDS configuration of the notebook instance</p>
   */
  InstanceMetadataServiceConfiguration?: InstanceMetadataServiceConfiguration;
}

export interface CreateNotebookInstanceOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the notebook instance. </p>
   */
  NotebookInstanceArn?: string;
}

/**
 * <p>Contains the notebook instance lifecycle configuration script.</p>
 *         <p>Each lifecycle configuration script has a limit of 16384 characters.</p>
 *         <p>The value of the <code>$PATH</code> environment variable that is available to both
 *             scripts is <code>/sbin:bin:/usr/sbin:/usr/bin</code>.</p>
 *         <p>View CloudWatch Logs for notebook instance lifecycle configurations in log group
 *                 <code>/aws/sagemaker/NotebookInstances</code> in log stream
 *                 <code>[notebook-instance-name]/[LifecycleConfigHook]</code>.</p>
 *         <p>Lifecycle configuration scripts cannot run for longer than 5 minutes. If a script runs
 *             for longer than 5 minutes, it fails and the notebook instance is not created or
 *             started.</p>
 *         <p>For information about notebook instance lifestyle configurations, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/notebook-lifecycle-config.html">Step
 *                 2.1: (Optional) Customize a Notebook Instance</a>.</p>
 */
export interface NotebookInstanceLifecycleHook {
  /**
   * <p>A base64-encoded string that contains a shell script for a notebook instance lifecycle
   *             configuration.</p>
   */
  Content?: string;
}

export interface CreateNotebookInstanceLifecycleConfigInput {
  /**
   * <p>The name of the lifecycle configuration.</p>
   */
  NotebookInstanceLifecycleConfigName: string | undefined;

  /**
   * <p>A shell script that runs only once, when you create a notebook instance. The shell
   *             script must be a base64-encoded string.</p>
   */
  OnCreate?: NotebookInstanceLifecycleHook[];

  /**
   * <p>A shell script that runs every time you start a notebook instance, including when you
   *             create the notebook instance. The shell script must be a base64-encoded string.</p>
   */
  OnStart?: NotebookInstanceLifecycleHook[];
}

export interface CreateNotebookInstanceLifecycleConfigOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the lifecycle configuration.</p>
   */
  NotebookInstanceLifecycleConfigArn?: string;
}

/**
 * <p>Configuration that controls the parallelism of the pipeline.
 *             By default, the parallelism configuration specified applies to all
 *             executions of the pipeline unless overridden.</p>
 */
export interface ParallelismConfiguration {
  /**
   * <p>The max number of steps that can be executed in parallel. </p>
   */
  MaxParallelExecutionSteps: number | undefined;
}

/**
 * <p>The location of the pipeline definition stored in Amazon S3.</p>
 */
export interface PipelineDefinitionS3Location {
  /**
   * <p>Name of the S3 bucket.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The object key (or key name) uniquely identifies the
   *             object in an S3 bucket. </p>
   */
  ObjectKey: string | undefined;

  /**
   * <p>Version Id of the pipeline definition file. If not specified, Amazon SageMaker
   *             will retrieve the latest version.</p>
   */
  VersionId?: string;
}

export interface CreatePipelineRequest {
  /**
   * <p>The name of the pipeline.</p>
   */
  PipelineName: string | undefined;

  /**
   * <p>The display name of the pipeline.</p>
   */
  PipelineDisplayName?: string;

  /**
   * <p>The JSON pipeline definition of the pipeline.</p>
   */
  PipelineDefinition?: string;

  /**
   * <p>The location of the pipeline definition stored in Amazon S3. If specified,
   *             SageMaker will retrieve the pipeline definition from this location.</p>
   */
  PipelineDefinitionS3Location?: PipelineDefinitionS3Location;

  /**
   * <p>A description of the pipeline.</p>
   */
  PipelineDescription?: string;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *          operation. An idempotent operation completes no more than one time.</p>
   */
  ClientRequestToken?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the role used by the pipeline to access and create resources.</p>
   */
  RoleArn: string | undefined;

  /**
   * <p>A list of tags to apply to the created pipeline.</p>
   */
  Tags?: Tag[];

  /**
   * <p>This is the configuration that controls the parallelism of the pipeline.
   *             If specified, it applies to all runs of this pipeline by default.</p>
   */
  ParallelismConfiguration?: ParallelismConfiguration;
}

export interface CreatePipelineResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the created pipeline.</p>
   */
  PipelineArn?: string;
}

export interface CreatePresignedDomainUrlRequest {
  /**
   * <p>The domain ID.</p>
   */
  DomainId: string | undefined;

  /**
   * <p>The name of the UserProfile to sign-in as.</p>
   */
  UserProfileName: string | undefined;

  /**
   * <p>The session expiration duration in seconds. This value defaults to 43200.</p>
   */
  SessionExpirationDurationInSeconds?: number;

  /**
   * <p>The number of seconds until the pre-signed URL expires. This value defaults to
   *          300.</p>
   */
  ExpiresInSeconds?: number;
}

export interface CreatePresignedDomainUrlResponse {
  /**
   * <p>The presigned URL.</p>
   */
  AuthorizedUrl?: string;
}

export interface CreatePresignedNotebookInstanceUrlInput {
  /**
   * <p>The name of the notebook instance.</p>
   */
  NotebookInstanceName: string | undefined;

  /**
   * <p>The duration of the session, in seconds. The default is 12 hours.</p>
   */
  SessionExpirationDurationInSeconds?: number;
}

export interface CreatePresignedNotebookInstanceUrlOutput {
  /**
   * <p>A JSON object that contains the URL string. </p>
   */
  AuthorizedUrl?: string;
}

/**
 * <p>Associates a SageMaker job as a trial component with an experiment and trial. Specified when
 *       you call the following APIs:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>CreateProcessingJob</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>CreateTrainingJob</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>CreateTransformJob</a>
 *                </p>
 *             </li>
 *          </ul>
 */
export interface ExperimentConfig {
  /**
   * <p>The name of an existing experiment to associate the trial component with.</p>
   */
  ExperimentName?: string;

  /**
   * <p>The name of an existing trial to associate the trial component with. If not specified, a
   *       new trial is created.</p>
   */
  TrialName?: string;

  /**
   * <p>The display name for the trial component. If this key isn't specified, the display name is
   *       the trial component name.</p>
   */
  TrialComponentDisplayName?: string;
}

export enum DataDistributionType {
  FULLYREPLICATED = "FullyReplicated",
  SHARDEDBYS3KEY = "ShardedByS3Key",
}

export enum InputMode {
  FILE = "File",
  PIPE = "Pipe",
}

export enum RedshiftResultCompressionType {
  BZIP2 = "BZIP2",
  GZIP = "GZIP",
  NONE = "None",
  SNAPPY = "SNAPPY",
  ZSTD = "ZSTD",
}

export enum RedshiftResultFormat {
  CSV = "CSV",
  PARQUET = "PARQUET",
}

/**
 * <p>Configuration for Redshift Dataset Definition input.</p>
 */
export interface RedshiftDatasetDefinition {
  /**
   * <p>The Redshift cluster Identifier.</p>
   */
  ClusterId: string | undefined;

  /**
   * <p>The name of the Redshift database used in Redshift query execution.</p>
   */
  Database: string | undefined;

  /**
   * <p>The database user name used in Redshift query execution.</p>
   */
  DbUser: string | undefined;

  /**
   * <p>The SQL query statements to be executed.</p>
   */
  QueryString: string | undefined;

  /**
   * <p>The IAM role attached to your Redshift cluster that Amazon SageMaker uses to generate datasets.</p>
   */
  ClusterRoleArn: string | undefined;

  /**
   * <p>The location in Amazon S3 where the Redshift query results are stored.</p>
   */
  OutputS3Uri: string | undefined;

  /**
   * <p>The Amazon Web Services Key Management Service (Amazon Web Services KMS) key that Amazon SageMaker uses to encrypt data from a
   *             Redshift execution.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>The data storage format for Redshift query results.</p>
   */
  OutputFormat: RedshiftResultFormat | string | undefined;

  /**
   * <p>The compression used for Redshift query results.</p>
   */
  OutputCompression?: RedshiftResultCompressionType | string;
}

/**
 * <p>Configuration for Dataset Definition inputs. The Dataset Definition input must specify
 *             exactly one of either <code>AthenaDatasetDefinition</code> or <code>RedshiftDatasetDefinition</code>
 *             types.</p>
 */
export interface DatasetDefinition {
  /**
   * <p>Configuration for Athena Dataset Definition input.</p>
   */
  AthenaDatasetDefinition?: AthenaDatasetDefinition;

  /**
   * <p>Configuration for Redshift Dataset Definition input.</p>
   */
  RedshiftDatasetDefinition?: RedshiftDatasetDefinition;

  /**
   * <p>The local path where you want Amazon SageMaker to download the Dataset Definition inputs to run a
   *             processing job. <code>LocalPath</code> is an absolute path to the input data. This is a required
   *             parameter when <code>AppManaged</code> is <code>False</code> (default).</p>
   */
  LocalPath?: string;

  /**
   * <p>Whether the generated dataset is <code>FullyReplicated</code> or
   *             <code>ShardedByS3Key</code> (default).</p>
   */
  DataDistributionType?: DataDistributionType | string;

  /**
   * <p>Whether to use <code>File</code> or <code>Pipe</code> input mode. In <code>File</code> (default) mode,
   *             Amazon SageMaker copies the data from the input source onto the local Amazon Elastic Block Store
   *             (Amazon EBS) volumes before starting your training algorithm. This is the most commonly used
   *             input mode. In <code>Pipe</code> mode, Amazon SageMaker streams input data from the source directly to your
   *             algorithm without using the EBS volume.</p>
   */
  InputMode?: InputMode | string;
}

export enum ProcessingS3CompressionType {
  GZIP = "Gzip",
  NONE = "None",
}

export enum ProcessingS3DataType {
  MANIFEST_FILE = "ManifestFile",
  S3_PREFIX = "S3Prefix",
}

/**
 * <p>Configuration for downloading input data from Amazon S3 into the processing container.</p>
 */
export interface ProcessingS3Input {
  /**
   * <p>The URI of the Amazon S3 prefix Amazon SageMaker downloads data required to run a processing job.</p>
   */
  S3Uri: string | undefined;

  /**
   * <p>The local path in your container where you want Amazon SageMaker to write input data to.
   *             <code>LocalPath</code> is an absolute path to the input data and must begin with
   *             <code>/opt/ml/processing/</code>. <code>LocalPath</code> is a required
   *             parameter when <code>AppManaged</code> is <code>False</code> (default).</p>
   */
  LocalPath?: string;

  /**
   * <p>Whether you use an <code>S3Prefix</code> or a <code>ManifestFile</code> for
   *             the data type. If you choose <code>S3Prefix</code>, <code>S3Uri</code> identifies a key
   *             name prefix. Amazon SageMaker uses all objects with the specified key name prefix for the processing
   *             job. If you choose <code>ManifestFile</code>, <code>S3Uri</code> identifies an object
   *             that is a manifest file containing a list of object keys that you want Amazon SageMaker to use for
   *             the processing job.</p>
   */
  S3DataType: ProcessingS3DataType | string | undefined;

  /**
   * <p>Whether to use <code>File</code> or <code>Pipe</code> input mode. In File mode, Amazon SageMaker copies the data
   *             from the input source onto the local ML storage volume before starting your processing
   *             container. This is the most commonly used input mode. In <code>Pipe</code> mode, Amazon SageMaker
   *             streams input data from the source directly to your processing container into named
   *             pipes without using the ML storage volume.</p>
   */
  S3InputMode?: ProcessingS3InputMode | string;

  /**
   * <p>Whether to distribute the data from Amazon S3 to all processing instances with
   *             <code>FullyReplicated</code>, or whether the data from Amazon S3 is shared by Amazon S3 key,
   *             downloading one shard of data to each processing instance.</p>
   */
  S3DataDistributionType?: ProcessingS3DataDistributionType | string;

  /**
   * <p>Whether to GZIP-decompress the data in Amazon S3 as it is streamed into the processing
   *             container. <code>Gzip</code> can only be used when <code>Pipe</code> mode is
   *             specified as the <code>S3InputMode</code>. In <code>Pipe</code> mode, Amazon SageMaker streams input
   *             data from the source directly to your container without using the EBS volume.</p>
   */
  S3CompressionType?: ProcessingS3CompressionType | string;
}

/**
 * <p>The inputs for a processing job. The processing input must specify exactly one of either
 *             <code>S3Input</code> or <code>DatasetDefinition</code> types.</p>
 */
export interface ProcessingInput {
  /**
   * <p>The name for the processing job input.</p>
   */
  InputName: string | undefined;

  /**
   * <p>When <code>True</code>, input operations such as data download are managed natively by the
   *             processing job application. When <code>False</code> (default), input operations are managed by Amazon SageMaker.</p>
   */
  AppManaged?: boolean;

  /**
   * <p>Configuration for downloading input data from Amazon S3 into the processing container.</p>
   */
  S3Input?: ProcessingS3Input;

  /**
   * <p>Configuration for a Dataset Definition input. </p>
   */
  DatasetDefinition?: DatasetDefinition;
}

/**
 * <p>Configuration for processing job outputs in Amazon SageMaker Feature Store.</p>
 */
export interface ProcessingFeatureStoreOutput {
  /**
   * <p>The name of the Amazon SageMaker FeatureGroup to use as the destination for processing job output. Note that your
   *             processing script is responsible for putting records into your Feature Store.</p>
   */
  FeatureGroupName: string | undefined;
}

/**
 * <p>Configuration for uploading output data to Amazon S3 from the processing container.</p>
 */
export interface ProcessingS3Output {
  /**
   * <p>A URI that identifies the Amazon S3 bucket where you want Amazon SageMaker to save the results of
   *             a processing job.</p>
   */
  S3Uri: string | undefined;

  /**
   * <p>The local path of a directory where you want Amazon SageMaker to upload its contents to Amazon S3.
   *             <code>LocalPath</code> is an absolute path to a directory containing output files.
   *             This directory will be created by the platform and exist when your container's
   *             entrypoint is invoked.</p>
   */
  LocalPath: string | undefined;

  /**
   * <p>Whether to upload the results of the processing job continuously or after the job
   *             completes.</p>
   */
  S3UploadMode: ProcessingS3UploadMode | string | undefined;
}

/**
 * <p>Describes the results of a processing job. The processing output must specify exactly one of
 *             either <code>S3Output</code> or <code>FeatureStoreOutput</code> types.</p>
 */
export interface ProcessingOutput {
  /**
   * <p>The name for the processing job output.</p>
   */
  OutputName: string | undefined;

  /**
   * <p>Configuration for processing job outputs in Amazon S3.</p>
   */
  S3Output?: ProcessingS3Output;

  /**
   * <p>Configuration for processing job outputs in Amazon SageMaker Feature Store. This processing output
   *             type is only supported when <code>AppManaged</code> is specified. </p>
   */
  FeatureStoreOutput?: ProcessingFeatureStoreOutput;

  /**
   * <p>When <code>True</code>, output operations such as data upload are managed natively by the
   *             processing job application. When <code>False</code> (default), output operations are managed by
   *             Amazon SageMaker.</p>
   */
  AppManaged?: boolean;
}

/**
 * <p>Configuration for uploading output from the processing container.</p>
 */
export interface ProcessingOutputConfig {
  /**
   * <p>An array of outputs configuring the data to upload from the processing container.</p>
   */
  Outputs: ProcessingOutput[] | undefined;

  /**
   * <p>The Amazon Web Services Key Management Service (Amazon Web Services KMS) key that Amazon SageMaker uses to encrypt the processing
   *             job output. <code>KmsKeyId</code> can be an ID of a KMS key, ARN of a KMS key, alias of
   *             a KMS key, or alias of a KMS key. The <code>KmsKeyId</code> is applied to all
   *             outputs.</p>
   */
  KmsKeyId?: string;
}

/**
 * <p>Configuration for the cluster used to run a processing job.</p>
 */
export interface ProcessingClusterConfig {
  /**
   * <p>The number of ML compute instances to use in the processing job. For distributed
   *             processing jobs, specify a value greater than 1. The default value is 1.</p>
   */
  InstanceCount: number | undefined;

  /**
   * <p>The ML compute instance type for the processing job.</p>
   */
  InstanceType: ProcessingInstanceType | string | undefined;

  /**
   * <p>The size of the ML storage volume in gigabytes that you want to provision. You must
   *             specify sufficient ML storage for your scenario.</p>
   *         <note>
   *             <p>Certain Nitro-based instances include local storage with a fixed total size,
   *                 dependent on the instance type. When using these instances for processing, Amazon SageMaker mounts
   *                 the local instance storage instead of Amazon EBS gp2 storage. You can't request a
   *                 <code>VolumeSizeInGB</code> greater than the total size of the local instance
   *                 storage.</p>
   *             <p>For a list of instance types that support local instance storage, including the
   *                 total size per instance type, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/InstanceStorage.html#instance-store-volumes">Instance Store Volumes</a>.</p>
   *         </note>
   */
  VolumeSizeInGB: number | undefined;

  /**
   * <p>The Amazon Web Services Key Management Service (Amazon Web Services KMS) key that Amazon SageMaker uses to encrypt data on the
   *             storage volume attached to the ML compute instance(s) that run the processing job.
   *         </p>
   *         <note>
   *             <p>Certain Nitro-based instances include local storage, dependent on the instance
   *                 type. Local storage volumes are encrypted using a hardware module on the instance.
   *                 You can't request a <code>VolumeKmsKeyId</code> when using an instance type with
   *                 local storage.</p>
   *             <p>For a list of instance types that support local instance storage, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/InstanceStorage.html#instance-store-volumes">Instance Store Volumes</a>.</p>
   *             <p>For more information about local instance storage encryption, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ssd-instance-store.html">SSD
   *                 Instance Store Volumes</a>.</p>
   *         </note>
   */
  VolumeKmsKeyId?: string;
}

/**
 * <p>Identifies the resources, ML compute instances, and ML storage volumes to deploy for a
 *             processing job. In distributed training, you specify more than one instance.</p>
 */
export interface ProcessingResources {
  /**
   * <p>The configuration for the resources in a cluster used to run the processing
   *             job.</p>
   */
  ClusterConfig: ProcessingClusterConfig | undefined;
}

/**
 * <p>Configures conditions under which the processing job should be stopped, such as how long
 *             the processing job has been running. After the condition is met, the processing job is stopped.</p>
 */
export interface ProcessingStoppingCondition {
  /**
   * <p>Specifies the maximum runtime in seconds.</p>
   */
  MaxRuntimeInSeconds: number | undefined;
}

export interface CreateProcessingJobRequest {
  /**
   * <p>An array of inputs configuring the data to download into the
   *             processing container.</p>
   */
  ProcessingInputs?: ProcessingInput[];

  /**
   * <p>Output configuration for the processing job.</p>
   */
  ProcessingOutputConfig?: ProcessingOutputConfig;

  /**
   * <p> The name of the processing job. The name must be unique within an Amazon Web Services Region in the
   *             Amazon Web Services account.</p>
   */
  ProcessingJobName: string | undefined;

  /**
   * <p>Identifies the resources, ML compute instances, and ML storage volumes to deploy for a
   *             processing job. In distributed training, you specify more than one instance.</p>
   */
  ProcessingResources: ProcessingResources | undefined;

  /**
   * <p>The time limit for how long the processing job is allowed to run.</p>
   */
  StoppingCondition?: ProcessingStoppingCondition;

  /**
   * <p>Configures the processing job to run a specified Docker container image.</p>
   */
  AppSpecification: AppSpecification | undefined;

  /**
   * <p>The environment variables to set in the Docker container. Up to
   *             100 key and values entries in the map are supported.</p>
   */
  Environment?: Record<string, string>;

  /**
   * <p>Networking options for a processing job, such as whether to allow inbound and
   *             outbound network calls to and from processing containers, and the VPC subnets and
   *             security groups to use for VPC-enabled processing jobs.</p>
   */
  NetworkConfig?: NetworkConfig;

  /**
   * <p>The Amazon Resource Name (ARN) of an IAM role that Amazon SageMaker can assume to perform tasks on
   *             your behalf.</p>
   */
  RoleArn: string | undefined;

  /**
   * <p>(Optional) An array of key-value pairs. For more information, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html#allocation-whatURL">Using Cost Allocation Tags</a> in the <i>Amazon Web Services Billing and Cost Management
   *                 User Guide</i>.</p>
   */
  Tags?: Tag[];

  /**
   * <p>Associates a SageMaker job as a trial component with an experiment and trial. Specified when
   *       you call the following APIs:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <a>CreateProcessingJob</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>CreateTrainingJob</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>CreateTransformJob</a>
   *                </p>
   *             </li>
   *          </ul>
   */
  ExperimentConfig?: ExperimentConfig;
}

export interface CreateProcessingJobResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the processing job.</p>
   */
  ProcessingJobArn: string | undefined;
}

/**
 * <p>A key value pair used when you provision a project as a service catalog product. For
 *             information, see <a href="https://docs.aws.amazon.com/servicecatalog/latest/adminguide/introduction.html">What is Amazon Web Services Service
 *                 Catalog</a>.</p>
 */
export interface ProvisioningParameter {
  /**
   * <p>The key that identifies a provisioning parameter.</p>
   */
  Key?: string;

  /**
   * <p>The value of the provisioning parameter.</p>
   */
  Value?: string;
}

/**
 * <p>Details that you specify to provision a service catalog product. For information about
 *             service catalog, see <a href="https://docs.aws.amazon.com/servicecatalog/latest/adminguide/introduction.html">What is Amazon Web Services Service
 *                 Catalog</a>.</p>
 */
export interface ServiceCatalogProvisioningDetails {
  /**
   * <p>The ID of the product to provision.</p>
   */
  ProductId: string | undefined;

  /**
   * <p>The ID of the provisioning artifact.</p>
   */
  ProvisioningArtifactId?: string;

  /**
   * <p>The path identifier of the product. This value is optional if the product has a default path, and required if the product has more than one path. </p>
   */
  PathId?: string;

  /**
   * <p>A list of key value pairs that you specify when you provision a product.</p>
   */
  ProvisioningParameters?: ProvisioningParameter[];
}

export interface CreateProjectInput {
  /**
   * <p>The name of the project.</p>
   */
  ProjectName: string | undefined;

  /**
   * <p>A description for the project.</p>
   */
  ProjectDescription?: string;

  /**
   * <p>The product ID and provisioning artifact ID to provision a service catalog. The provisioning
   *             artifact ID will default to the latest provisioning artifact ID of the product, if you don't
   *             provide the provisioning artifact ID. For more information, see <a href="https://docs.aws.amazon.com/servicecatalog/latest/adminguide/introduction.html">What is Amazon Web Services Service
   *                 Catalog</a>.</p>
   */
  ServiceCatalogProvisioningDetails: ServiceCatalogProvisioningDetails | undefined;

  /**
   * <p>An array of key-value pairs that you want to use to organize and track your Amazon Web Services
   *             resource costs. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services resources</a> in the <i>Amazon Web Services General Reference Guide</i>.</p>
   */
  Tags?: Tag[];
}

export interface CreateProjectOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the project.</p>
   */
  ProjectArn: string | undefined;

  /**
   * <p>The ID of the new project.</p>
   */
  ProjectId: string | undefined;
}

export enum StudioLifecycleConfigAppType {
  JupyterServer = "JupyterServer",
  KernelGateway = "KernelGateway",
}

export interface CreateStudioLifecycleConfigRequest {
  /**
   * <p>The name of the Studio Lifecycle Configuration to create.</p>
   */
  StudioLifecycleConfigName: string | undefined;

  /**
   * <p>The content of your Studio Lifecycle Configuration script. This content must be base64 encoded.</p>
   */
  StudioLifecycleConfigContent: string | undefined;

  /**
   * <p>The App type that the Lifecycle Configuration is attached to.</p>
   */
  StudioLifecycleConfigAppType: StudioLifecycleConfigAppType | string | undefined;

  /**
   * <p>Tags to be associated with the Lifecycle Configuration. Each tag consists of a key and an optional value. Tag keys must be unique per resource. Tags are searchable using the Search API. </p>
   */
  Tags?: Tag[];
}

export interface CreateStudioLifecycleConfigResponse {
  /**
   * <p>The ARN of your created Lifecycle Configuration.</p>
   */
  StudioLifecycleConfigArn?: string;
}

/**
 * <p>Configuration information for the Debugger hook parameters, metric and tensor collections, and
 *             storage paths. To learn more about
 *             how to configure the <code>DebugHookConfig</code> parameter,
 *             see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/debugger-createtrainingjob-api.html">Use the SageMaker and Debugger Configuration API Operations to Create, Update, and Debug Your Training Job</a>.</p>
 */
export interface DebugHookConfig {
  /**
   * <p>Path to local storage location for metrics and tensors. Defaults to
   *                 <code>/opt/ml/output/tensors/</code>.</p>
   */
  LocalPath?: string;

  /**
   * <p>Path to Amazon S3 storage location for metrics and tensors.</p>
   */
  S3OutputPath: string | undefined;

  /**
   * <p>Configuration information for the Debugger hook parameters.</p>
   */
  HookParameters?: Record<string, string>;

  /**
   * <p>Configuration information for Debugger tensor collections. To learn more about
   *             how to configure the <code>CollectionConfiguration</code> parameter,
   *             see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/debugger-createtrainingjob-api.html">Use the SageMaker and Debugger Configuration API Operations to Create, Update, and Debug Your Training Job</a>.
   *         </p>
   */
  CollectionConfigurations?: CollectionConfiguration[];
}

/**
 * <p>Configuration information for SageMaker Debugger rules for debugging. To learn more about
 *             how to configure the <code>DebugRuleConfiguration</code> parameter,
 *             see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/debugger-createtrainingjob-api.html">Use the SageMaker and Debugger Configuration API Operations to Create, Update, and Debug Your Training Job</a>.</p>
 */
export interface DebugRuleConfiguration {
  /**
   * <p>The name of the rule configuration. It must be unique relative to other rule
   *             configuration names.</p>
   */
  RuleConfigurationName: string | undefined;

  /**
   * <p>Path to local storage location for output of rules. Defaults to
   *                 <code>/opt/ml/processing/output/rule/</code>.</p>
   */
  LocalPath?: string;

  /**
   * <p>Path to Amazon S3 storage location for rules.</p>
   */
  S3OutputPath?: string;

  /**
   * <p>The Amazon Elastic Container (ECR) Image for the managed rule evaluation.</p>
   */
  RuleEvaluatorImage: string | undefined;

  /**
   * <p>The instance type to deploy a Debugger custom rule for debugging a training job.</p>
   */
  InstanceType?: ProcessingInstanceType | string;

  /**
   * <p>The size, in GB, of the ML storage volume attached to the processing instance.</p>
   */
  VolumeSizeInGB?: number;

  /**
   * <p>Runtime configuration for rule container.</p>
   */
  RuleParameters?: Record<string, string>;
}

/**
 * <p>Configuration information for Debugger system monitoring, framework profiling, and
 *             storage paths.</p>
 */
export interface ProfilerConfig {
  /**
   * <p>Path to Amazon S3 storage location for system and framework metrics.</p>
   */
  S3OutputPath: string | undefined;

  /**
   * <p>A time interval for capturing system metrics in milliseconds. Available values are
   *             100, 200, 500, 1000 (1 second), 5000 (5 seconds), and 60000 (1 minute) milliseconds. The default value is 500 milliseconds.</p>
   */
  ProfilingIntervalInMilliseconds?: number;

  /**
   * <p>Configuration information for capturing framework metrics. Available key strings for different profiling options are
   *             <code>DetailedProfilingConfig</code>, <code>PythonProfilingConfig</code>, and <code>DataLoaderProfilingConfig</code>.
   *             The following codes are configuration structures for the <code>ProfilingParameters</code> parameter. To learn more about
   *             how to configure the <code>ProfilingParameters</code> parameter,
   *             see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/debugger-createtrainingjob-api.html">Use the SageMaker and Debugger Configuration API Operations to Create, Update, and Debug Your Training Job</a>.
   *         </p>
   */
  ProfilingParameters?: Record<string, string>;
}

/**
 * <p>Configuration information for profiling rules.</p>
 */
export interface ProfilerRuleConfiguration {
  /**
   * <p>The name of the rule configuration. It must be unique relative to other rule configuration names.</p>
   */
  RuleConfigurationName: string | undefined;

  /**
   * <p>Path to local storage location for output of rules. Defaults to <code>/opt/ml/processing/output/rule/</code>. </p>
   */
  LocalPath?: string;

  /**
   * <p>Path to Amazon S3 storage location for rules.</p>
   */
  S3OutputPath?: string;

  /**
   * <p>The Amazon Elastic Container (ECR) Image for the managed rule evaluation.</p>
   */
  RuleEvaluatorImage: string | undefined;

  /**
   * <p>The instance type to deploy a Debugger custom rule for profiling a training job.</p>
   */
  InstanceType?: ProcessingInstanceType | string;

  /**
   * <p>The size, in GB, of the ML storage volume attached to the processing instance.</p>
   */
  VolumeSizeInGB?: number;

  /**
   * <p>Runtime configuration for rule container.</p>
   */
  RuleParameters?: Record<string, string>;
}

/**
 * <p>Configuration of storage locations for the Debugger TensorBoard output data.</p>
 */
export interface TensorBoardOutputConfig {
  /**
   * <p>Path to local storage location for tensorBoard output. Defaults to
   *                 <code>/opt/ml/output/tensorboard</code>.</p>
   */
  LocalPath?: string;

  /**
   * <p>Path to Amazon S3 storage location for TensorBoard output.</p>
   */
  S3OutputPath: string | undefined;
}

export interface CreateTrainingJobRequest {
  /**
   * <p>The name of the training job. The name must be unique within an Amazon Web Services
   *             Region in an Amazon Web Services account. </p>
   */
  TrainingJobName: string | undefined;

  /**
   * <p>Algorithm-specific parameters that influence the quality of the model. You set
   *             hyperparameters before you start the learning process. For a list of hyperparameters for
   *             each training algorithm provided by SageMaker, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/algos.html">Algorithms</a>. </p>
   *         <p>You can specify a maximum of 100 hyperparameters. Each hyperparameter is a
   *             key-value pair. Each key and value is limited to 256 characters, as specified by the
   *                 <code>Length Constraint</code>. </p>
   *         <important>
   *             <p>You must not include any security-sensitive information, such as
   *             account access IDs, secrets, and tokens, in the dictionary for configuring
   *             hyperparameters. SageMaker rejects the training job request and returns an
   *             exception error for detected credentials, if such user input is found.</p>
   *          </important>
   */
  HyperParameters?: Record<string, string>;

  /**
   * <p>The registry path of the Docker image that contains the training algorithm and
   *             algorithm-specific metadata, including the input mode. For more information about
   *             algorithms provided by SageMaker, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/algos.html">Algorithms</a>. For information about
   *             providing your own algorithms, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/your-algorithms.html">Using Your Own Algorithms with Amazon
   *                 SageMaker</a>. </p>
   */
  AlgorithmSpecification: AlgorithmSpecification | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of an IAM role that SageMaker can assume to perform
   *             tasks on your behalf. </p>
   *         <p>During model training, SageMaker needs your permission to read input data from an S3
   *             bucket, download a Docker image that contains training code, write model artifacts to an
   *             S3 bucket, write logs to Amazon CloudWatch Logs, and publish metrics to Amazon CloudWatch. You grant
   *             permissions for all of these tasks to an IAM role. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sagemaker-roles.html">SageMaker
   *                 Roles</a>. </p>
   *         <note>
   *             <p>To be able to pass this role to SageMaker, the caller of this API must have the
   *                     <code>iam:PassRole</code> permission.</p>
   *         </note>
   */
  RoleArn: string | undefined;

  /**
   * <p>An array of <code>Channel</code> objects. Each channel is a named input source.
   *                 <code>InputDataConfig</code> describes the input data and its location. </p>
   *         <p>Algorithms can accept input data from one or more channels. For example, an
   *             algorithm might have two channels of input data, <code>training_data</code> and
   *                 <code>validation_data</code>. The configuration for each channel provides the S3,
   *             EFS, or FSx location where the input data is stored. It also provides information about
   *             the stored data: the MIME type, compression method, and whether the data is wrapped in
   *             RecordIO format. </p>
   *         <p>Depending on the input mode that the algorithm supports, SageMaker either copies input
   *             data files from an S3 bucket to a local directory in the Docker container, or makes it
   *             available as input streams. For example, if you specify an EFS location, input data
   *             files are available as input streams. They do not need to be downloaded.</p>
   */
  InputDataConfig?: Channel[];

  /**
   * <p>Specifies the path to the S3 location where you want to store model artifacts. SageMaker
   *             creates subfolders for the artifacts. </p>
   */
  OutputDataConfig: OutputDataConfig | undefined;

  /**
   * <p>The resources, including the ML compute instances and ML storage volumes, to use
   *             for model training. </p>
   *         <p>ML storage volumes store model artifacts and incremental states. Training
   *             algorithms might also use ML storage volumes for scratch space. If you want SageMaker to use
   *             the ML storage volume to store the training data, choose <code>File</code> as the
   *                 <code>TrainingInputMode</code> in the algorithm specification. For distributed
   *             training algorithms, specify an instance count greater than 1.</p>
   */
  ResourceConfig: ResourceConfig | undefined;

  /**
   * <p>A <a>VpcConfig</a> object that specifies the VPC that you want your
   *             training job to connect to. Control access to and from your training container by
   *             configuring the VPC. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/train-vpc.html">Protect Training Jobs by Using an Amazon
   *                 Virtual Private Cloud</a>.</p>
   */
  VpcConfig?: VpcConfig;

  /**
   * <p>Specifies a limit to how long a model training job can run. It also specifies how long
   *             a managed Spot training job has to complete. When the job reaches the time limit, SageMaker
   *             ends the training job. Use this API to cap model training costs.</p>
   *         <p>To stop a job, SageMaker sends the algorithm the <code>SIGTERM</code> signal, which delays
   *             job termination for 120 seconds. Algorithms can use this 120-second window to save the
   *             model artifacts, so the results of training are not lost. </p>
   */
  StoppingCondition: StoppingCondition | undefined;

  /**
   * <p>An array of key-value pairs. You can use tags to categorize your Amazon Web Services
   *             resources in different ways, for example, by purpose, owner, or environment. For more
   *             information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services Resources</a>.</p>
   */
  Tags?: Tag[];

  /**
   * <p>Isolates the training container. No inbound or outbound network calls can be made,
   *             except for calls between peers within a training cluster for distributed training. If
   *             you enable network isolation for training jobs that are configured to use a VPC, SageMaker
   *             downloads and uploads customer data and model artifacts through the specified VPC, but
   *             the training container does not have network access.</p>
   */
  EnableNetworkIsolation?: boolean;

  /**
   * <p>To encrypt all communications between ML compute instances in distributed training,
   *             choose <code>True</code>. Encryption provides greater security for distributed training,
   *             but training might take longer. How long it takes depends on the amount of communication
   *             between compute instances, especially if you use a deep learning algorithm in
   *             distributed training. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/train-encrypt.html">Protect Communications Between ML
   *                 Compute Instances in a Distributed Training Job</a>.</p>
   */
  EnableInterContainerTrafficEncryption?: boolean;

  /**
   * <p>To train models using managed spot training, choose <code>True</code>. Managed spot
   *             training provides a fully managed and scalable infrastructure for training machine
   *             learning models. this option is useful when training jobs can be interrupted and when
   *             there is flexibility when the training job is run. </p>
   *         <p>The complete and intermediate results of jobs are stored in an Amazon S3 bucket, and can be
   *             used as a starting point to train models incrementally. Amazon SageMaker provides metrics and
   *             logs in CloudWatch. They can be used to see when managed spot training jobs are running,
   *             interrupted, resumed, or completed. </p>
   */
  EnableManagedSpotTraining?: boolean;

  /**
   * <p>Contains information about the output location for managed spot training checkpoint
   *             data.</p>
   */
  CheckpointConfig?: CheckpointConfig;

  /**
   * <p>Configuration information for the Debugger hook parameters, metric and tensor collections, and
   *             storage paths. To learn more about
   *             how to configure the <code>DebugHookConfig</code> parameter,
   *             see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/debugger-createtrainingjob-api.html">Use the SageMaker and Debugger Configuration API Operations to Create, Update, and Debug Your Training Job</a>.</p>
   */
  DebugHookConfig?: DebugHookConfig;

  /**
   * <p>Configuration information for Debugger rules for debugging output tensors.</p>
   */
  DebugRuleConfigurations?: DebugRuleConfiguration[];

  /**
   * <p>Configuration of storage locations for the Debugger TensorBoard output data.</p>
   */
  TensorBoardOutputConfig?: TensorBoardOutputConfig;

  /**
   * <p>Associates a SageMaker job as a trial component with an experiment and trial. Specified when
   *       you call the following APIs:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <a>CreateProcessingJob</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>CreateTrainingJob</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>CreateTransformJob</a>
   *                </p>
   *             </li>
   *          </ul>
   */
  ExperimentConfig?: ExperimentConfig;

  /**
   * <p>Configuration information for Debugger system monitoring, framework profiling, and
   *             storage paths.</p>
   */
  ProfilerConfig?: ProfilerConfig;

  /**
   * <p>Configuration information for Debugger rules for profiling system and framework
   *             metrics.</p>
   */
  ProfilerRuleConfigurations?: ProfilerRuleConfiguration[];

  /**
   * <p>The environment variables to set in the Docker container.</p>
   */
  Environment?: Record<string, string>;

  /**
   * <p>The number of times to retry the job when the job fails due to an
   *                 <code>InternalServerError</code>.</p>
   */
  RetryStrategy?: RetryStrategy;
}

export interface CreateTrainingJobResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the training job.</p>
   */
  TrainingJobArn: string | undefined;
}

export enum JoinSource {
  INPUT = "Input",
  NONE = "None",
}

/**
 * <p>The data structure used to specify the data to be used for inference in a batch
 *             transform job and to associate the data that is relevant to the prediction results in
 *             the output. The input filter provided allows you to exclude input data that is not
 *             needed for inference in a batch transform job. The output filter provided allows you to
 *             include input data relevant to interpreting the predictions in the output from the job.
 *             For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/batch-transform-data-processing.html">Associate Prediction
 *                 Results with their Corresponding Input Records</a>.</p>
 */
export interface DataProcessing {
  /**
   * <p>A <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/batch-transform-data-processing.html#data-processing-operators">JSONPath</a> expression used to select a portion of the input data to pass to
   *             the algorithm. Use the <code>InputFilter</code> parameter to exclude fields, such as an
   *             ID column, from the input. If you want SageMaker to pass the entire input dataset to the
   *             algorithm, accept the default value <code>$</code>.</p>
   *         <p>Examples: <code>"$"</code>, <code>"$[1:]"</code>, <code>"$.features"</code>
   *          </p>
   */
  InputFilter?: string;

  /**
   * <p>A <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/batch-transform-data-processing.html#data-processing-operators">JSONPath</a> expression used to select a portion of the joined dataset to save
   *             in the output file for a batch transform job. If you want SageMaker to store the entire input
   *             dataset in the output file, leave the default value, <code>$</code>. If you specify
   *             indexes that aren't within the dimension size of the joined dataset, you get an
   *             error.</p>
   *         <p>Examples: <code>"$"</code>, <code>"$[0,5:]"</code>,
   *                 <code>"$['id','SageMakerOutput']"</code>
   *          </p>
   */
  OutputFilter?: string;

  /**
   * <p>Specifies the source of the data to join with the transformed data. The valid values
   *             are <code>None</code> and <code>Input</code>. The default value is <code>None</code>,
   *             which specifies not to join the input with the transformed data. If you want the batch
   *             transform job to join the original input data with the transformed data, set
   *                 <code>JoinSource</code> to <code>Input</code>. You can specify
   *                 <code>OutputFilter</code> as an additional filter to select a portion of the joined
   *             dataset and store it in the output file.</p>
   *         <p>For JSON or JSONLines objects, such as a JSON array, SageMaker adds the transformed data to
   *             the input JSON object in an attribute called <code>SageMakerOutput</code>. The joined
   *             result for JSON must be a key-value pair object. If the input is not a key-value pair
   *             object, SageMaker creates a new JSON file. In the new JSON file, and the input data is stored
   *             under the <code>SageMakerInput</code> key and the results are stored in
   *                 <code>SageMakerOutput</code>.</p>
   *         <p>For CSV data, SageMaker takes each row as a JSON array and joins the transformed data with
   *             the input by appending each transformed row to the end of the input. The joined data has
   *             the original input data followed by the transformed data and the output is a CSV
   *             file.</p>
   *         <p>For information on how joining in applied, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/batch-transform-data-processing.html#batch-transform-data-processing-workflow">Workflow for Associating Inferences with Input Records</a>.</p>
   */
  JoinSource?: JoinSource | string;
}

/**
 * <p>Configures the timeout and maximum number of retries for processing a transform job
 *             invocation.</p>
 */
export interface ModelClientConfig {
  /**
   * <p>The timeout value in seconds for an invocation request. The default value is
   *             600.</p>
   */
  InvocationsTimeoutInSeconds?: number;

  /**
   * <p>The maximum number of retries when invocation requests are failing. The default value
   *             is 3.</p>
   */
  InvocationsMaxRetries?: number;
}

export interface CreateTransformJobRequest {
  /**
   * <p>The name of the transform job. The name must be unique within an Amazon Web Services Region in an
   *             Amazon Web Services account. </p>
   */
  TransformJobName: string | undefined;

  /**
   * <p>The name of the model that you want to use for the transform job.
   *             <code>ModelName</code> must be the name of an existing Amazon SageMaker model within an Amazon Web Services
   *             Region in an Amazon Web Services account.</p>
   */
  ModelName: string | undefined;

  /**
   * <p>The maximum number of parallel requests that can be sent to each instance in a
   *             transform job. If <code>MaxConcurrentTransforms</code> is set to <code>0</code> or left
   *             unset, Amazon SageMaker checks the optional execution-parameters to determine the settings for your
   *             chosen algorithm. If the execution-parameters endpoint is not enabled, the default value
   *             is <code>1</code>. For more information on execution-parameters, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/your-algorithms-batch-code.html#your-algorithms-batch-code-how-containe-serves-requests">How Containers Serve Requests</a>. For built-in algorithms, you don't need to
   *             set a value for <code>MaxConcurrentTransforms</code>.</p>
   */
  MaxConcurrentTransforms?: number;

  /**
   * <p>Configures the timeout and maximum number of retries for processing a transform job
   *             invocation.</p>
   */
  ModelClientConfig?: ModelClientConfig;

  /**
   * <p>The maximum allowed size of the payload, in MB. A <i>payload</i> is the
   *             data portion of a record (without metadata). The value in <code>MaxPayloadInMB</code>
   *             must be greater than, or equal to, the size of a single record. To estimate the size of
   *             a record in MB, divide the size of your dataset by the number of records. To ensure that
   *             the records fit within the maximum payload size, we recommend using a slightly larger
   *             value. The default value is <code>6</code> MB.
   *             </p>
   *         <p>The value of <code>MaxPayloadInMB</code> cannot be greater than 100 MB. If you specify
   *             the <code>MaxConcurrentTransforms</code> parameter, the value of
   *                 <code>(MaxConcurrentTransforms * MaxPayloadInMB)</code> also cannot exceed 100
   *             MB.</p>
   *         <p>For cases where the payload might be arbitrarily large and is transmitted using HTTP
   *             chunked encoding, set the value to <code>0</code>.
   *             This
   *             feature works only in supported algorithms. Currently, Amazon SageMaker built-in
   *             algorithms do not support HTTP chunked encoding.</p>
   */
  MaxPayloadInMB?: number;

  /**
   * <p>Specifies the number of records to include in a mini-batch for an HTTP inference
   *             request. A <i>record</i>
   *             <i></i> is a single unit of input data that
   *             inference can be made on. For example, a single line in a CSV file is a record. </p>
   *         <p>To enable the batch strategy, you must set the <code>SplitType</code> property to
   *                 <code>Line</code>, <code>RecordIO</code>, or <code>TFRecord</code>.</p>
   *         <p>To use only one record when making an HTTP invocation request to a container, set
   *                 <code>BatchStrategy</code> to <code>SingleRecord</code> and <code>SplitType</code>
   *             to <code>Line</code>.</p>
   *         <p>To fit as many records in a mini-batch as can fit within the
   *                 <code>MaxPayloadInMB</code> limit, set <code>BatchStrategy</code> to
   *                 <code>MultiRecord</code> and <code>SplitType</code> to <code>Line</code>.</p>
   */
  BatchStrategy?: BatchStrategy | string;

  /**
   * <p>The environment variables to set in the Docker container. We support up to 16 key and
   *             values entries in the map.</p>
   */
  Environment?: Record<string, string>;

  /**
   * <p>Describes the input source and
   *             the
   *             way the transform job consumes it.</p>
   */
  TransformInput: TransformInput | undefined;

  /**
   * <p>Describes the results of the transform job.</p>
   */
  TransformOutput: TransformOutput | undefined;

  /**
   * <p>Describes the resources, including
   *             ML
   *             instance types and ML instance count, to use for the transform
   *             job.</p>
   */
  TransformResources: TransformResources | undefined;

  /**
   * <p>The data structure used to specify the data to be used for inference in a batch
   *             transform job and to associate the data that is relevant to the prediction results in
   *             the output. The input filter provided allows you to exclude input data that is not
   *             needed for inference in a batch transform job. The output filter provided allows you to
   *             include input data relevant to interpreting the predictions in the output from the job.
   *             For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/batch-transform-data-processing.html">Associate Prediction
   *                 Results with their Corresponding Input Records</a>.</p>
   */
  DataProcessing?: DataProcessing;

  /**
   * <p>(Optional)
   *             An
   *             array of key-value pairs. For more information, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html#allocation-what">Using
   *                 Cost Allocation Tags</a> in the <i>Amazon Web Services Billing and Cost Management User
   *                 Guide</i>.</p>
   */
  Tags?: Tag[];

  /**
   * <p>Associates a SageMaker job as a trial component with an experiment and trial. Specified when
   *       you call the following APIs:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <a>CreateProcessingJob</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>CreateTrainingJob</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>CreateTransformJob</a>
   *                </p>
   *             </li>
   *          </ul>
   */
  ExperimentConfig?: ExperimentConfig;
}

export interface CreateTransformJobResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the transform job.</p>
   */
  TransformJobArn: string | undefined;
}

export interface CreateTrialRequest {
  /**
   * <p>The name of the trial. The name must be unique in your Amazon Web Services account and is not
   *       case-sensitive.</p>
   */
  TrialName: string | undefined;

  /**
   * <p>The name of the trial as displayed. The name doesn't need to be unique. If
   *         <code>DisplayName</code> isn't specified, <code>TrialName</code> is displayed.</p>
   */
  DisplayName?: string;

  /**
   * <p>The name of the experiment to associate the trial with.</p>
   */
  ExperimentName: string | undefined;

  /**
   * <p>Metadata properties of the tracking entity, trial, or trial component.</p>
   */
  MetadataProperties?: MetadataProperties;

  /**
   * <p>A list of tags to associate with the trial. You can use <a>Search</a> API to
   *       search on the tags.</p>
   */
  Tags?: Tag[];
}

export interface CreateTrialResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the trial.</p>
   */
  TrialArn?: string;
}

/**
 * <p>Represents an input or output artifact of a trial component. You specify
 *         <code>TrialComponentArtifact</code> as part of the <code>InputArtifacts</code> and
 *         <code>OutputArtifacts</code> parameters in the <a>CreateTrialComponent</a>
 *       request.</p>
 *          <p>Examples of input artifacts are datasets, algorithms, hyperparameters, source code, and
 *       instance types. Examples of output artifacts are metrics, snapshots, logs, and images.</p>
 */
export interface TrialComponentArtifact {
  /**
   * <p>The media type of the artifact, which indicates the type of data in the artifact file. The
   *       media type consists of a <i>type</i> and a <i>subtype</i>
   *       concatenated with a slash (/) character, for example, text/csv, image/jpeg, and s3/uri. The
   *       type specifies the category of the media. The subtype specifies the kind of data.</p>
   */
  MediaType?: string;

  /**
   * <p>The location of the artifact.</p>
   */
  Value: string | undefined;
}

/**
 * <p>The value of a hyperparameter. Only one of <code>NumberValue</code> or
 *         <code>StringValue</code> can be specified.</p>
 *          <p>This object is specified in the <a>CreateTrialComponent</a> request.</p>
 */
export type TrialComponentParameterValue =
  | TrialComponentParameterValue.NumberValueMember
  | TrialComponentParameterValue.StringValueMember
  | TrialComponentParameterValue.$UnknownMember;

export namespace TrialComponentParameterValue {
  /**
   * <p>The string value of a categorical hyperparameter. If you specify a value for this
   *       parameter, you can't specify the <code>NumberValue</code> parameter.</p>
   */
  export interface StringValueMember {
    StringValue: string;
    NumberValue?: never;
    $unknown?: never;
  }

  /**
   * <p>The numeric value of a numeric hyperparameter. If you specify a value for this parameter,
   *       you can't specify the <code>StringValue</code> parameter.</p>
   */
  export interface NumberValueMember {
    StringValue?: never;
    NumberValue: number;
    $unknown?: never;
  }

  export interface $UnknownMember {
    StringValue?: never;
    NumberValue?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    StringValue: (value: string) => T;
    NumberValue: (value: number) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: TrialComponentParameterValue, visitor: Visitor<T>): T => {
    if (value.StringValue !== undefined) return visitor.StringValue(value.StringValue);
    if (value.NumberValue !== undefined) return visitor.NumberValue(value.NumberValue);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

export enum TrialComponentPrimaryStatus {
  COMPLETED = "Completed",
  FAILED = "Failed",
  IN_PROGRESS = "InProgress",
  STOPPED = "Stopped",
  STOPPING = "Stopping",
}

/**
 * <p>The status of the trial component.</p>
 */
export interface TrialComponentStatus {
  /**
   * <p>The status of the trial component.</p>
   */
  PrimaryStatus?: TrialComponentPrimaryStatus | string;

  /**
   * <p>If the component failed, a message describing why.</p>
   */
  Message?: string;
}

export interface CreateTrialComponentRequest {
  /**
   * <p>The name of the component. The name must be unique in your Amazon Web Services account and is not
   *       case-sensitive.</p>
   */
  TrialComponentName: string | undefined;

  /**
   * <p>The name of the component as displayed. The name doesn't need to be unique. If
   *         <code>DisplayName</code> isn't specified, <code>TrialComponentName</code> is
   *       displayed.</p>
   */
  DisplayName?: string;

  /**
   * <p>The status of the component. States include:</p>
   *          <ul>
   *             <li>
   *                <p>InProgress</p>
   *             </li>
   *             <li>
   *                <p>Completed</p>
   *             </li>
   *             <li>
   *                <p>Failed</p>
   *             </li>
   *          </ul>
   */
  Status?: TrialComponentStatus;

  /**
   * <p>When the component started.</p>
   */
  StartTime?: Date;

  /**
   * <p>When the component ended.</p>
   */
  EndTime?: Date;

  /**
   * <p>The hyperparameters for the component.</p>
   */
  Parameters?: Record<string, TrialComponentParameterValue>;

  /**
   * <p>The input artifacts for the component. Examples of input artifacts are datasets,
   *       algorithms, hyperparameters, source code, and instance types.</p>
   */
  InputArtifacts?: Record<string, TrialComponentArtifact>;

  /**
   * <p>The output artifacts for the component. Examples of output artifacts are metrics,
   *       snapshots, logs, and images.</p>
   */
  OutputArtifacts?: Record<string, TrialComponentArtifact>;

  /**
   * <p>Metadata properties of the tracking entity, trial, or trial component.</p>
   */
  MetadataProperties?: MetadataProperties;

  /**
   * <p>A list of tags to associate with the component. You can use <a>Search</a> API
   *       to search on the tags.</p>
   */
  Tags?: Tag[];
}

export interface CreateTrialComponentResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the trial component.</p>
   */
  TrialComponentArn?: string;
}

export interface CreateUserProfileRequest {
  /**
   * <p>The ID of the associated Domain.</p>
   */
  DomainId: string | undefined;

  /**
   * <p>A name for the UserProfile. This value is not case sensitive.</p>
   */
  UserProfileName: string | undefined;

  /**
   * <p>A specifier for the type of value specified in SingleSignOnUserValue.  Currently, the only supported value is "UserName".
   *           If the Domain's AuthMode is Amazon Web Services SSO, this field is required.  If the Domain's AuthMode is not Amazon Web Services SSO, this field cannot be specified.
   *        </p>
   */
  SingleSignOnUserIdentifier?: string;

  /**
   * <p>The username of the associated Amazon Web Services Single Sign-On User for this UserProfile.  If the Domain's AuthMode is Amazon Web Services SSO, this field is
   *           required, and must match a valid username of a user in your directory.  If the Domain's AuthMode is not Amazon Web Services SSO, this field cannot be specified.
   *        </p>
   */
  SingleSignOnUserValue?: string;

  /**
   * <p>Each tag consists of a key and an optional value.
   *          Tag keys must be unique per resource.</p>
   *          <p>Tags that you specify for the User Profile are also added to all Apps that the
   *           User Profile launches.</p>
   */
  Tags?: Tag[];

  /**
   * <p>A collection of settings.</p>
   */
  UserSettings?: UserSettings;
}

export interface CreateUserProfileResponse {
  /**
   * <p>The user profile Amazon Resource Name (ARN).</p>
   */
  UserProfileArn?: string;
}

/**
 * <p>Use this parameter to configure your OIDC Identity Provider (IdP).</p>
 */
export interface OidcConfig {
  /**
   * <p>The OIDC IdP client ID used to configure your private workforce.</p>
   */
  ClientId: string | undefined;

  /**
   * <p>The OIDC IdP client secret used to configure your private workforce.</p>
   */
  ClientSecret: string | undefined;

  /**
   * <p>The OIDC IdP issuer used to configure your private workforce.</p>
   */
  Issuer: string | undefined;

  /**
   * <p>The OIDC IdP authorization endpoint used to configure your private workforce.</p>
   */
  AuthorizationEndpoint: string | undefined;

  /**
   * <p>The OIDC IdP token endpoint used to configure your private workforce.</p>
   */
  TokenEndpoint: string | undefined;

  /**
   * <p>The OIDC IdP user information endpoint used to configure your private workforce.</p>
   */
  UserInfoEndpoint: string | undefined;

  /**
   * <p>The OIDC IdP logout endpoint used to configure your private workforce.</p>
   */
  LogoutEndpoint: string | undefined;

  /**
   * <p>The OIDC IdP JSON Web Key Set (Jwks) URI used to configure your private workforce.</p>
   */
  JwksUri: string | undefined;
}

/**
 * <p>A list of IP address ranges (<a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Subnets.html">CIDRs</a>). Used to create an allow
 *             list of IP addresses for a private workforce. Workers will only be able to login to their worker portal from an
 *             IP address within this range. By default, a workforce isn't restricted to specific IP addresses.</p>
 */
export interface SourceIpConfig {
  /**
   * <p>A list of one to ten <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Subnets.html">Classless Inter-Domain Routing</a> (CIDR) values.</p>
   *         <p>Maximum: Ten CIDR values</p>
   *         <note>
   *             <p>The following Length Constraints apply to individual CIDR values in
   *                 the CIDR value list.</p>
   *         </note>
   */
  Cidrs: string[] | undefined;
}

/**
 * <p>The VPC object you use to create or update a workforce.</p>
 */
export interface WorkforceVpcConfigRequest {
  /**
   * <p>The ID of the VPC that the workforce uses for communication.</p>
   */
  VpcId?: string;

  /**
   * <p>The VPC security group IDs, in the form sg-xxxxxxxx. The security groups must be for the same VPC as specified in the subnet.</p>
   */
  SecurityGroupIds?: string[];

  /**
   * <p>The ID of the subnets in the VPC that you want to connect.</p>
   */
  Subnets?: string[];
}

export interface CreateWorkforceRequest {
  /**
   * <p>Use this parameter to configure an Amazon Cognito private workforce.
   *       A single Cognito workforce is created using and corresponds to a single
   *       <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools.html">
   *       Amazon Cognito user pool</a>.</p>
   *
   *          <p>Do not use <code>OidcConfig</code> if you specify values for
   *       <code>CognitoConfig</code>.</p>
   */
  CognitoConfig?: CognitoConfig;

  /**
   * <p>Use this parameter to configure a private workforce using your own OIDC Identity Provider.</p>
   *          <p>Do not use <code>CognitoConfig</code> if you specify values for
   *       <code>OidcConfig</code>.</p>
   */
  OidcConfig?: OidcConfig;

  /**
   * <p>A list of IP address ranges (<a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Subnets.html">CIDRs</a>). Used to create an allow
   *             list of IP addresses for a private workforce. Workers will only be able to login to their worker portal from an
   *             IP address within this range. By default, a workforce isn't restricted to specific IP addresses.</p>
   */
  SourceIpConfig?: SourceIpConfig;

  /**
   * <p>The name of the private workforce.</p>
   */
  WorkforceName: string | undefined;

  /**
   * <p>An array of key-value pairs that contain metadata to help you categorize and
   *       organize our workforce. Each tag consists of a key and a value,
   *       both of which you define.</p>
   */
  Tags?: Tag[];

  /**
   * <p>Use this parameter to configure a workforce using VPC.</p>
   */
  WorkforceVpcConfig?: WorkforceVpcConfigRequest;
}

export interface CreateWorkforceResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the workforce.</p>
   */
  WorkforceArn: string | undefined;
}

/**
 * <p>A list of user groups that exist in your OIDC Identity Provider (IdP).
 *             One to ten groups can be used to create a single private work team.
 *             When you add a user group to the list of <code>Groups</code>, you can add that user group to one or more
 *             private work teams. If you add a user group to a private work team, all workers in that user group
 *             are added to the work team.</p>
 */
export interface OidcMemberDefinition {
  /**
   * <p>A list of comma seperated strings that identifies
   *             user groups in your OIDC IdP. Each user group is
   *             made up of a group of private workers.</p>
   */
  Groups: string[] | undefined;
}

/**
 * <p>Defines an Amazon Cognito or your own OIDC IdP user group that is part of a work team.</p>
 */
export interface MemberDefinition {
  /**
   * <p>The Amazon Cognito user group that is part of the work team.</p>
   */
  CognitoMemberDefinition?: CognitoMemberDefinition;

  /**
   * <p>A list user groups that exist in your OIDC Identity Provider (IdP).
   *             One to ten groups can be used to create a single private work team.
   *             When you add a user group to the list of <code>Groups</code>, you can add that user group to one or more
   *             private work teams. If you add a user group to a private work team, all workers in that user group
   *             are added to the work team.</p>
   */
  OidcMemberDefinition?: OidcMemberDefinition;
}

/**
 * <p>Configures Amazon SNS notifications of available or expiring work items for work
 *             teams.</p>
 */
export interface NotificationConfiguration {
  /**
   * <p>The ARN for the Amazon SNS topic to which notifications should be published.</p>
   */
  NotificationTopicArn?: string;
}

export interface CreateWorkteamRequest {
  /**
   * <p>The name of the work team. Use this name to identify the work team.</p>
   */
  WorkteamName: string | undefined;

  /**
   * <p>The name of the workforce.</p>
   */
  WorkforceName?: string;

  /**
   * <p>A list of <code>MemberDefinition</code> objects that contains objects that identify
   *             the workers that make up the work team. </p>
   *         <p>Workforces can be created using Amazon Cognito or your own OIDC Identity Provider (IdP). For
   *             private workforces created using Amazon Cognito use <code>CognitoMemberDefinition</code>. For
   *             workforces created using your own OIDC identity provider (IdP) use
   *                 <code>OidcMemberDefinition</code>. Do not provide input for both of these parameters
   *             in a single request.</p>
   *         <p>For workforces created using Amazon Cognito, private work teams correspond to Amazon Cognito
   *                 <i>user groups</i> within the user pool used to create a workforce. All of the
   *                 <code>CognitoMemberDefinition</code> objects that make up the member definition must
   *             have the same <code>ClientId</code> and <code>UserPool</code> values. To add a Amazon
   *             Cognito user group to an existing worker pool, see <a href="">Adding groups to a User
   *                 Pool</a>. For more information about user pools, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools.html">Amazon Cognito User
   *                 Pools</a>.</p>
   *         <p>For workforces created using your own OIDC IdP, specify the user groups that you want to
   *         include in your private work team in <code>OidcMemberDefinition</code> by listing those groups
   *         in <code>Groups</code>.</p>
   */
  MemberDefinitions: MemberDefinition[] | undefined;

  /**
   * <p>A description of the work team.</p>
   */
  Description: string | undefined;

  /**
   * <p>Configures notification of workers regarding available or expiring work items.</p>
   */
  NotificationConfiguration?: NotificationConfiguration;

  /**
   * <p>An array of key-value pairs.</p>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html">Resource
   *                 Tag</a> and <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html#allocation-what">Using
   *                     Cost Allocation Tags</a> in the <i> Amazon Web Services Billing and Cost Management User
   *                 Guide</i>.</p>
   */
  Tags?: Tag[];
}

export interface CreateWorkteamResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the work team. You can use this ARN to identify the
   *             work team.</p>
   */
  WorkteamArn?: string;
}

/**
 * <p>The currently active data capture configuration used by your Endpoint.</p>
 */
export interface DataCaptureConfigSummary {
  /**
   * <p>Whether data capture is enabled or disabled.</p>
   */
  EnableCapture: boolean | undefined;

  /**
   * <p>Whether data capture is currently functional.</p>
   */
  CaptureStatus: CaptureStatus | string | undefined;

  /**
   * <p>The percentage of requests being captured by your Endpoint.</p>
   */
  CurrentSamplingPercentage: number | undefined;

  /**
   * <p>The Amazon S3 location being used to capture the data.</p>
   */
  DestinationS3Uri: string | undefined;

  /**
   * <p>The KMS key being used to encrypt the data in Amazon S3.</p>
   */
  KmsKeyId: string | undefined;
}

export enum RuleEvaluationStatus {
  ERROR = "Error",
  IN_PROGRESS = "InProgress",
  ISSUES_FOUND = "IssuesFound",
  NO_ISSUES_FOUND = "NoIssuesFound",
  STOPPED = "Stopped",
  STOPPING = "Stopping",
}

/**
 * <p>Information about the status of the rule evaluation.</p>
 */
export interface DebugRuleEvaluationStatus {
  /**
   * <p>The name of the rule configuration.</p>
   */
  RuleConfigurationName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the rule evaluation job.</p>
   */
  RuleEvaluationJobArn?: string;

  /**
   * <p>Status of the rule evaluation.</p>
   */
  RuleEvaluationStatus?: RuleEvaluationStatus | string;

  /**
   * <p>Details from the rule evaluation.</p>
   */
  StatusDetails?: string;

  /**
   * <p>Timestamp when the rule evaluation status was last modified.</p>
   */
  LastModifiedTime?: Date;
}

export interface DeleteActionRequest {
  /**
   * <p>The name of the action to delete.</p>
   */
  ActionName: string | undefined;
}

export interface DeleteActionResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the action.</p>
   */
  ActionArn?: string;
}

export interface DeleteAlgorithmInput {
  /**
   * <p>The name of the algorithm to delete.</p>
   */
  AlgorithmName: string | undefined;
}

export interface DeleteAppRequest {
  /**
   * <p>The domain ID.</p>
   */
  DomainId: string | undefined;

  /**
   * <p>The user profile name.</p>
   */
  UserProfileName: string | undefined;

  /**
   * <p>The type of app.</p>
   */
  AppType: AppType | string | undefined;

  /**
   * <p>The name of the app.</p>
   */
  AppName: string | undefined;
}

export interface DeleteAppImageConfigRequest {
  /**
   * <p>The name of the AppImageConfig to delete.</p>
   */
  AppImageConfigName: string | undefined;
}

export interface DeleteArtifactRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the artifact to delete.</p>
   */
  ArtifactArn?: string;

  /**
   * <p>The URI of the source.</p>
   */
  Source?: ArtifactSource;
}

export interface DeleteArtifactResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the artifact.</p>
   */
  ArtifactArn?: string;
}

export interface DeleteAssociationRequest {
  /**
   * <p>The ARN of the source.</p>
   */
  SourceArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the destination.</p>
   */
  DestinationArn: string | undefined;
}

export interface DeleteAssociationResponse {
  /**
   * <p>The ARN of the source.</p>
   */
  SourceArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the destination.</p>
   */
  DestinationArn?: string;
}

export interface DeleteCodeRepositoryInput {
  /**
   * <p>The name of the Git repository to delete.</p>
   */
  CodeRepositoryName: string | undefined;
}

export interface DeleteContextRequest {
  /**
   * <p>The name of the context to delete.</p>
   */
  ContextName: string | undefined;
}

export interface DeleteContextResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the context.</p>
   */
  ContextArn?: string;
}

export interface DeleteDataQualityJobDefinitionRequest {
  /**
   * <p>The name of the data quality monitoring job definition to delete.</p>
   */
  JobDefinitionName: string | undefined;
}

export interface DeleteDeviceFleetRequest {
  /**
   * <p>The name of the fleet to delete.</p>
   */
  DeviceFleetName: string | undefined;
}

export enum RetentionType {
  Delete = "Delete",
  Retain = "Retain",
}

/**
 * <p>The retention policy for data stored on an Amazon Elastic File System (EFS) volume.</p>
 */
export interface RetentionPolicy {
  /**
   * <p>The default is <code>Retain</code>, which specifies to keep the data stored on the EFS volume.</p>
   *          <p>Specify <code>Delete</code> to delete the data stored on the EFS volume.</p>
   */
  HomeEfsFileSystem?: RetentionType | string;
}

export interface DeleteDomainRequest {
  /**
   * <p>The domain ID.</p>
   */
  DomainId: string | undefined;

  /**
   * <p>The retention policy for this domain, which specifies whether resources will be retained after the Domain is deleted.
   *            By default, all resources are retained (not automatically deleted).
   *        </p>
   */
  RetentionPolicy?: RetentionPolicy;
}

export interface DeleteEdgeDeploymentPlanRequest {
  /**
   * <p>The name of the edge deployment plan to delete.</p>
   */
  EdgeDeploymentPlanName: string | undefined;
}

export interface DeleteEdgeDeploymentStageRequest {
  /**
   * <p>The name of the edge deployment plan from which the stage will be deleted.</p>
   */
  EdgeDeploymentPlanName: string | undefined;

  /**
   * <p>The name of the stage.</p>
   */
  StageName: string | undefined;
}

export interface DeleteEndpointInput {
  /**
   * <p>The name of the endpoint that you want to delete.</p>
   */
  EndpointName: string | undefined;
}

export interface DeleteEndpointConfigInput {
  /**
   * <p>The name of the endpoint configuration that you want to delete.</p>
   */
  EndpointConfigName: string | undefined;
}

export interface DeleteExperimentRequest {
  /**
   * <p>The name of the experiment to delete.</p>
   */
  ExperimentName: string | undefined;
}

export interface DeleteExperimentResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the experiment that is being deleted.</p>
   */
  ExperimentArn?: string;
}

export interface DeleteFeatureGroupRequest {
  /**
   * <p>The name of the <code>FeatureGroup</code> you want to delete. The name must be unique
   *          within an Amazon Web Services Region in an Amazon Web Services account. </p>
   */
  FeatureGroupName: string | undefined;
}

export interface DeleteFlowDefinitionRequest {
  /**
   * <p>The name of the flow definition you are deleting.</p>
   */
  FlowDefinitionName: string | undefined;
}

export interface DeleteFlowDefinitionResponse {}

export interface DeleteHumanTaskUiRequest {
  /**
   * <p>The name of the human task user interface (work task template) you want to delete.</p>
   */
  HumanTaskUiName: string | undefined;
}

export interface DeleteHumanTaskUiResponse {}

export interface DeleteImageRequest {
  /**
   * <p>The name of the image to delete.</p>
   */
  ImageName: string | undefined;
}

export interface DeleteImageResponse {}

export interface DeleteImageVersionRequest {
  /**
   * <p>The name of the image.</p>
   */
  ImageName: string | undefined;

  /**
   * <p>The version to delete.</p>
   */
  Version: number | undefined;
}

export interface DeleteImageVersionResponse {}

export interface DeleteModelInput {
  /**
   * <p>The name of the model to delete.</p>
   */
  ModelName: string | undefined;
}

export interface DeleteModelBiasJobDefinitionRequest {
  /**
   * <p>The name of the model bias job definition to delete.</p>
   */
  JobDefinitionName: string | undefined;
}

export interface DeleteModelExplainabilityJobDefinitionRequest {
  /**
   * <p>The name of the model explainability job definition to delete.</p>
   */
  JobDefinitionName: string | undefined;
}

export interface DeleteModelPackageInput {
  /**
   * <p>The name or Amazon Resource Name (ARN) of the model package to delete.</p>
   *         <p>When you specify a name, the name must have 1 to 63 characters. Valid
   *             characters are a-z, A-Z, 0-9, and - (hyphen).</p>
   */
  ModelPackageName: string | undefined;
}

export interface DeleteModelPackageGroupInput {
  /**
   * <p>The name of the model group to delete.</p>
   */
  ModelPackageGroupName: string | undefined;
}

export interface DeleteModelPackageGroupPolicyInput {
  /**
   * <p>The name of the model group for which to delete the policy.</p>
   */
  ModelPackageGroupName: string | undefined;
}

export interface DeleteModelQualityJobDefinitionRequest {
  /**
   * <p>The name of the model quality monitoring job definition to delete.</p>
   */
  JobDefinitionName: string | undefined;
}

export interface DeleteMonitoringScheduleRequest {
  /**
   * <p>The name of the monitoring schedule to delete.</p>
   */
  MonitoringScheduleName: string | undefined;
}

export interface DeleteNotebookInstanceInput {
  /**
   * <p>The name of the SageMaker notebook instance to delete.</p>
   */
  NotebookInstanceName: string | undefined;
}

export interface DeleteNotebookInstanceLifecycleConfigInput {
  /**
   * <p>The name of the lifecycle configuration to delete.</p>
   */
  NotebookInstanceLifecycleConfigName: string | undefined;
}

export interface DeletePipelineRequest {
  /**
   * <p>The name of the pipeline to delete.</p>
   */
  PipelineName: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *          operation. An idempotent operation completes no more than one time.</p>
   */
  ClientRequestToken?: string;
}

export interface DeletePipelineResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the pipeline to delete.</p>
   */
  PipelineArn?: string;
}

export interface DeleteProjectInput {
  /**
   * <p>The name of the project to delete.</p>
   */
  ProjectName: string | undefined;
}

export interface DeleteStudioLifecycleConfigRequest {
  /**
   * <p>The name of the Studio Lifecycle Configuration to delete.</p>
   */
  StudioLifecycleConfigName: string | undefined;
}

export interface DeleteTagsInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource whose tags you want to
   *             delete.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>An array or one or more tag keys to delete.</p>
   */
  TagKeys: string[] | undefined;
}

export interface DeleteTagsOutput {}

export interface DeleteTrialRequest {
  /**
   * <p>The name of the trial to delete.</p>
   */
  TrialName: string | undefined;
}

export interface DeleteTrialResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the trial that is being deleted.</p>
   */
  TrialArn?: string;
}

export interface DeleteTrialComponentRequest {
  /**
   * <p>The name of the component to delete.</p>
   */
  TrialComponentName: string | undefined;
}

export interface DeleteTrialComponentResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the component is being deleted.</p>
   */
  TrialComponentArn?: string;
}

export interface DeleteUserProfileRequest {
  /**
   * <p>The domain ID.</p>
   */
  DomainId: string | undefined;

  /**
   * <p>The user profile name.</p>
   */
  UserProfileName: string | undefined;
}

export interface DeleteWorkforceRequest {
  /**
   * <p>The name of the workforce.</p>
   */
  WorkforceName: string | undefined;
}

export interface DeleteWorkforceResponse {}

export interface DeleteWorkteamRequest {
  /**
   * <p>The name of the work team to delete.</p>
   */
  WorkteamName: string | undefined;
}

export interface DeleteWorkteamResponse {
  /**
   * <p>Returns <code>true</code> if the work team was successfully deleted; otherwise,
   *             returns <code>false</code>.</p>
   */
  Success: boolean | undefined;
}

/**
 * <p>Gets the Amazon EC2 Container Registry path of the docker image of the model that is hosted in this <a>ProductionVariant</a>.</p>
 *         <p>If you used the <code>registry/repository[:tag]</code> form to specify the image path
 *             of the primary container when you created the model hosted in this
 *                 <code>ProductionVariant</code>, the path resolves to a path of the form
 *                 <code>registry/repository[@digest]</code>. A digest is a hash value that identifies
 *             a specific version of an image. For information about Amazon ECR paths, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/docker-pull-ecr-image.html">Pulling an Image</a> in the <i>Amazon ECR User Guide</i>.</p>
 */
export interface DeployedImage {
  /**
   * <p>The image path you specified when you created the model.</p>
   */
  SpecifiedImage?: string;

  /**
   * <p>The specific digest path of the image hosted in this
   *             <code>ProductionVariant</code>.</p>
   */
  ResolvedImage?: string;

  /**
   * <p>The date and time when the image path for the model resolved to the
   *                 <code>ResolvedImage</code>
   *          </p>
   */
  ResolutionTime?: Date;
}

export enum StageStatus {
  Creating = "CREATING",
  Deployed = "DEPLOYED",
  Failed = "FAILED",
  InProgress = "INPROGRESS",
  ReadyToDeploy = "READYTODEPLOY",
  Starting = "STARTING",
  Stopped = "STOPPED",
  Stopping = "STOPPING",
}

/**
 * <p>Contains information summarizing the deployment stage results.</p>
 */
export interface EdgeDeploymentStatus {
  /**
   * <p>The general status of the current stage.</p>
   */
  StageStatus: StageStatus | string | undefined;

  /**
   * <p>The number of edge devices with the successful deployment in the current stage.</p>
   */
  EdgeDeploymentSuccessInStage: number | undefined;

  /**
   * <p>The number of edge devices yet to pick up the deployment in current stage, or in progress.</p>
   */
  EdgeDeploymentPendingInStage: number | undefined;

  /**
   * <p>The number of edge devices that failed the deployment in current stage.</p>
   */
  EdgeDeploymentFailedInStage: number | undefined;

  /**
   * <p>A detailed message about deployment status in current stage.</p>
   */
  EdgeDeploymentStatusMessage?: string;

  /**
   * <p>The time when the deployment API started.</p>
   */
  EdgeDeploymentStageStartTime?: Date;
}

/**
 * <p>Contains information summarizing the deployment stage results.</p>
 */
export interface DeploymentStageStatusSummary {
  /**
   * <p>The name of the stage.</p>
   */
  StageName: string | undefined;

  /**
   * <p>Configuration of the devices in the stage.</p>
   */
  DeviceSelectionConfig: DeviceSelectionConfig | undefined;

  /**
   * <p>Configuration of the deployment details.</p>
   */
  DeploymentConfig: EdgeDeploymentConfig | undefined;

  /**
   * <p>General status of the current state.</p>
   */
  DeploymentStatus: EdgeDeploymentStatus | undefined;
}

export interface DeregisterDevicesRequest {
  /**
   * <p>The name of the fleet the devices belong to.</p>
   */
  DeviceFleetName: string | undefined;

  /**
   * <p>The unique IDs of the devices.</p>
   */
  DeviceNames: string[] | undefined;
}

export interface DescribeActionRequest {
  /**
   * <p>The name of the action to describe.</p>
   */
  ActionName: string | undefined;
}

export interface DescribeActionResponse {
  /**
   * <p>The name of the action.</p>
   */
  ActionName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the action.</p>
   */
  ActionArn?: string;

  /**
   * <p>The source of the action.</p>
   */
  Source?: ActionSource;

  /**
   * <p>The type of the action.</p>
   */
  ActionType?: string;

  /**
   * <p>The description of the action.</p>
   */
  Description?: string;

  /**
   * <p>The status of the action.</p>
   */
  Status?: ActionStatus | string;

  /**
   * <p>A list of the action's properties.</p>
   */
  Properties?: Record<string, string>;

  /**
   * <p>When the action was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>Information about the user who created or modified an experiment, trial, trial
   *       component, lineage group, or project.</p>
   */
  CreatedBy?: UserContext;

  /**
   * <p>When the action was last modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>Information about the user who created or modified an experiment, trial, trial
   *       component, lineage group, or project.</p>
   */
  LastModifiedBy?: UserContext;

  /**
   * <p>Metadata properties of the tracking entity, trial, or trial component.</p>
   */
  MetadataProperties?: MetadataProperties;

  /**
   * <p>The Amazon Resource Name (ARN) of the lineage group.</p>
   */
  LineageGroupArn?: string;
}

export interface DescribeAlgorithmInput {
  /**
   * <p>The name of the algorithm to describe.</p>
   */
  AlgorithmName: string | undefined;
}

export interface DescribeAlgorithmOutput {
  /**
   * <p>The name of the algorithm being described.</p>
   */
  AlgorithmName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the algorithm.</p>
   */
  AlgorithmArn: string | undefined;

  /**
   * <p>A brief summary about the algorithm.</p>
   */
  AlgorithmDescription?: string;

  /**
   * <p>A timestamp specifying when the algorithm was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>Details about training jobs run by this algorithm.</p>
   */
  TrainingSpecification: TrainingSpecification | undefined;

  /**
   * <p>Details about inference jobs that the algorithm runs.</p>
   */
  InferenceSpecification?: InferenceSpecification;

  /**
   * <p>Details about configurations for one or more training jobs that SageMaker runs to test the
   *             algorithm.</p>
   */
  ValidationSpecification?: AlgorithmValidationSpecification;

  /**
   * <p>The current status of the algorithm.</p>
   */
  AlgorithmStatus: AlgorithmStatus | string | undefined;

  /**
   * <p>Details about the current status of the algorithm.</p>
   */
  AlgorithmStatusDetails: AlgorithmStatusDetails | undefined;

  /**
   * <p>The product identifier of the algorithm.</p>
   */
  ProductId?: string;

  /**
   * <p>Whether the algorithm is certified to be listed in Amazon Web Services
   *             Marketplace.</p>
   */
  CertifyForMarketplace?: boolean;
}

export interface DescribeAppRequest {
  /**
   * <p>The domain ID.</p>
   */
  DomainId: string | undefined;

  /**
   * <p>The user profile name.</p>
   */
  UserProfileName: string | undefined;

  /**
   * <p>The type of app.</p>
   */
  AppType: AppType | string | undefined;

  /**
   * <p>The name of the app.</p>
   */
  AppName: string | undefined;
}

export interface DescribeAppResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the app.</p>
   */
  AppArn?: string;

  /**
   * <p>The type of app.</p>
   */
  AppType?: AppType | string;

  /**
   * <p>The name of the app.</p>
   */
  AppName?: string;

  /**
   * <p>The domain ID.</p>
   */
  DomainId?: string;

  /**
   * <p>The user profile name.</p>
   */
  UserProfileName?: string;

  /**
   * <p>The status.</p>
   */
  Status?: AppStatus | string;

  /**
   * <p>The timestamp of the last health check.</p>
   */
  LastHealthCheckTimestamp?: Date;

  /**
   * <p>The timestamp of the last user's activity. <code>LastUserActivityTimestamp</code> is also updated when SageMaker performs health checks without user activity. As a result, this value is set to the same value as <code>LastHealthCheckTimestamp</code>.</p>
   */
  LastUserActivityTimestamp?: Date;

  /**
   * <p>The creation time.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The failure reason.</p>
   */
  FailureReason?: string;

  /**
   * <p>The instance type and the Amazon Resource Name (ARN) of the SageMaker image created on the instance.</p>
   */
  ResourceSpec?: ResourceSpec;
}

export interface DescribeAppImageConfigRequest {
  /**
   * <p>The name of the AppImageConfig to describe.</p>
   */
  AppImageConfigName: string | undefined;
}

export interface DescribeAppImageConfigResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the AppImageConfig.</p>
   */
  AppImageConfigArn?: string;

  /**
   * <p>The name of the AppImageConfig.</p>
   */
  AppImageConfigName?: string;

  /**
   * <p>When the AppImageConfig was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>When the AppImageConfig was last modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>The configuration of a KernelGateway app.</p>
   */
  KernelGatewayImageConfig?: KernelGatewayImageConfig;
}

export interface DescribeArtifactRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the artifact to describe.</p>
   */
  ArtifactArn: string | undefined;
}

export interface DescribeArtifactResponse {
  /**
   * <p>The name of the artifact.</p>
   */
  ArtifactName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the artifact.</p>
   */
  ArtifactArn?: string;

  /**
   * <p>The source of the artifact.</p>
   */
  Source?: ArtifactSource;

  /**
   * <p>The type of the artifact.</p>
   */
  ArtifactType?: string;

  /**
   * <p>A list of the artifact's properties.</p>
   */
  Properties?: Record<string, string>;

  /**
   * <p>When the artifact was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>Information about the user who created or modified an experiment, trial, trial
   *       component, lineage group, or project.</p>
   */
  CreatedBy?: UserContext;

  /**
   * <p>When the artifact was last modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>Information about the user who created or modified an experiment, trial, trial
   *       component, lineage group, or project.</p>
   */
  LastModifiedBy?: UserContext;

  /**
   * <p>Metadata properties of the tracking entity, trial, or trial component.</p>
   */
  MetadataProperties?: MetadataProperties;

  /**
   * <p>The Amazon Resource Name (ARN) of the lineage group.</p>
   */
  LineageGroupArn?: string;
}

export interface DescribeAutoMLJobRequest {
  /**
   * <p>Requests information about an AutoML job using its unique name.</p>
   */
  AutoMLJobName: string | undefined;
}

/**
 * <p>Provides information about the endpoint of the model deployment.</p>
 */
export interface ModelDeployResult {
  /**
   * <p>The name of the endpoint to which the model has been deployed.</p>
   *          <note>
   *             <p>If model deployment fails, this field is omitted from the response.</p>
   *          </note>
   */
  EndpointName?: string;
}

/**
 * <p>The resolved attributes.</p>
 */
export interface ResolvedAttributes {
  /**
   * <p>Specifies a metric to minimize or maximize as the objective of a job.</p>
   */
  AutoMLJobObjective?: AutoMLJobObjective;

  /**
   * <p>The problem type.</p>
   */
  ProblemType?: ProblemType | string;

  /**
   * <p>How long a job is allowed to run, or how many candidates a job is allowed to
   *          generate.</p>
   */
  CompletionCriteria?: AutoMLJobCompletionCriteria;
}

export interface DescribeAutoMLJobResponse {
  /**
   * <p>Returns the name of the AutoML job.</p>
   */
  AutoMLJobName: string | undefined;

  /**
   * <p>Returns the ARN of the AutoML job.</p>
   */
  AutoMLJobArn: string | undefined;

  /**
   * <p>Returns the input data configuration for the AutoML job..</p>
   */
  InputDataConfig: AutoMLChannel[] | undefined;

  /**
   * <p>Returns the job's output data config.</p>
   */
  OutputDataConfig: AutoMLOutputDataConfig | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon Web Services Identity and Access Management (IAM) role that
   *          has read permission to the input data location and write permission to the output data
   *          location in Amazon S3.</p>
   */
  RoleArn: string | undefined;

  /**
   * <p>Returns the job's objective.</p>
   */
  AutoMLJobObjective?: AutoMLJobObjective;

  /**
   * <p>Returns the job's problem type.</p>
   */
  ProblemType?: ProblemType | string;

  /**
   * <p>Returns the configuration for the AutoML job.</p>
   */
  AutoMLJobConfig?: AutoMLJobConfig;

  /**
   * <p>Returns the creation time of the AutoML job.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>Returns the end time of the AutoML job.</p>
   */
  EndTime?: Date;

  /**
   * <p>Returns the job's last modified time.</p>
   */
  LastModifiedTime: Date | undefined;

  /**
   * <p>Returns the failure reason for an AutoML job, when applicable.</p>
   */
  FailureReason?: string;

  /**
   * <p>Returns a list of reasons for partial failures within an AutoML job.</p>
   */
  PartialFailureReasons?: AutoMLPartialFailureReason[];

  /**
   * <p>Returns the job's best <code>AutoMLCandidate</code>.</p>
   */
  BestCandidate?: AutoMLCandidate;

  /**
   * <p>Returns the status of the AutoML job.</p>
   */
  AutoMLJobStatus: AutoMLJobStatus | string | undefined;

  /**
   * <p>Returns the secondary status of the AutoML job.</p>
   */
  AutoMLJobSecondaryStatus: AutoMLJobSecondaryStatus | string | undefined;

  /**
   * <p>Indicates whether the output for an AutoML job generates candidate definitions
   *          only.</p>
   */
  GenerateCandidateDefinitionsOnly?: boolean;

  /**
   * <p>Returns information on the job's artifacts found in
   *          <code>AutoMLJobArtifacts</code>.</p>
   */
  AutoMLJobArtifacts?: AutoMLJobArtifacts;

  /**
   * <p>This contains <code>ProblemType</code>, <code>AutoMLJobObjective</code>, and
   *             <code>CompletionCriteria</code>. If you do not provide these values, they are
   *          auto-inferred. If you do provide them, the values used are the ones you provide.</p>
   */
  ResolvedAttributes?: ResolvedAttributes;

  /**
   * <p>Indicates whether the model was deployed automatically to an endpoint and the name of
   *          that endpoint if deployed automatically.</p>
   */
  ModelDeployConfig?: ModelDeployConfig;

  /**
   * <p>Provides information about endpoint for the model deployment.</p>
   */
  ModelDeployResult?: ModelDeployResult;
}

export interface DescribeCodeRepositoryInput {
  /**
   * <p>The name of the Git repository to describe.</p>
   */
  CodeRepositoryName: string | undefined;
}

export interface DescribeCodeRepositoryOutput {
  /**
   * <p>The name of the Git repository.</p>
   */
  CodeRepositoryName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Git repository.</p>
   */
  CodeRepositoryArn: string | undefined;

  /**
   * <p>The date and time that the repository was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>The date and time that the repository was last changed.</p>
   */
  LastModifiedTime: Date | undefined;

  /**
   * <p>Configuration details about the repository, including the URL where the repository is
   *             located, the default branch, and the Amazon Resource Name (ARN) of the Amazon Web Services Secrets Manager secret that contains the credentials used to access the
   *             repository.</p>
   */
  GitConfig?: GitConfig;
}

export interface DescribeCompilationJobRequest {
  /**
   * <p>The name of the model compilation job that you want information about.</p>
   */
  CompilationJobName: string | undefined;
}

/**
 * <p>Provides information about the location that is configured for storing model
 *             artifacts. </p>
 *         <p>Model artifacts are the output that results from training a model, and typically
 *             consist of trained parameters, a model definition that describes how to compute
 *             inferences, and other metadata.</p>
 */
export interface ModelArtifacts {
  /**
   * <p>The path of the S3 object that contains the model artifacts. For example,
   *                 <code>s3://bucket-name/keynameprefix/model.tar.gz</code>.</p>
   */
  S3ModelArtifacts: string | undefined;
}

/**
 * <p>Provides information to verify the integrity of stored model artifacts. </p>
 */
export interface ModelDigests {
  /**
   * <p>Provides a hash value that uniquely identifies the stored model
   *             artifacts.</p>
   */
  ArtifactDigest?: string;
}

export interface DescribeCompilationJobResponse {
  /**
   * <p>The name of the model compilation job.</p>
   */
  CompilationJobName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the model compilation job.</p>
   */
  CompilationJobArn: string | undefined;

  /**
   * <p>The status of the model compilation job.</p>
   */
  CompilationJobStatus: CompilationJobStatus | string | undefined;

  /**
   * <p>The time when the model compilation job started the <code>CompilationJob</code>
   *             instances. </p>
   *         <p>You are billed for the time between this timestamp and the timestamp in the <a>DescribeCompilationJobResponse$CompilationEndTime</a> field. In Amazon CloudWatch Logs,
   *             the start time might be later than this time. That's because it takes time to download
   *             the compilation job, which depends on the size of the compilation job container. </p>
   */
  CompilationStartTime?: Date;

  /**
   * <p>The time when the model compilation job on a compilation job instance ended. For a
   *             successful or stopped job, this is when the job's model artifacts have finished
   *             uploading. For a failed job, this is when Amazon SageMaker detected that the job failed. </p>
   */
  CompilationEndTime?: Date;

  /**
   * <p>Specifies a limit to how long a model compilation job can run. When the job reaches
   *             the time limit, Amazon SageMaker ends the compilation job. Use this API to cap model training
   *             costs.</p>
   */
  StoppingCondition: StoppingCondition | undefined;

  /**
   * <p>The inference image to use when compiling a model.
   *             Specify an image only if the target device is a cloud instance.</p>
   */
  InferenceImage?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the versioned model package that was
   *     provided to SageMaker Neo when you initiated a compilation job.</p>
   */
  ModelPackageVersionArn?: string;

  /**
   * <p>The time that the model compilation job was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>The time that the status
   *             of
   *             the model compilation job was last modified.</p>
   */
  LastModifiedTime: Date | undefined;

  /**
   * <p>If a model compilation job failed, the reason it failed. </p>
   */
  FailureReason: string | undefined;

  /**
   * <p>Information about the location in Amazon S3 that has been configured for storing the model
   *             artifacts used in the compilation job.</p>
   */
  ModelArtifacts: ModelArtifacts | undefined;

  /**
   * <p>Provides a BLAKE2 hash value that identifies the compiled model artifacts in Amazon S3.</p>
   */
  ModelDigests?: ModelDigests;

  /**
   * <p>The Amazon Resource Name (ARN) of an IAM role that Amazon SageMaker assumes to perform the model
   *             compilation job.</p>
   */
  RoleArn: string | undefined;

  /**
   * <p>Information about the location in Amazon S3 of the input model artifacts, the name and
   *             shape of the expected data inputs, and the framework in which the model was
   *             trained.</p>
   */
  InputConfig: InputConfig | undefined;

  /**
   * <p>Information about the output location for the compiled model and the target device
   *             that the model runs on.</p>
   */
  OutputConfig: OutputConfig | undefined;

  /**
   * <p>A <a>VpcConfig</a> object that specifies the VPC that you want your
   *             compilation job to connect to. Control access to your models by
   *             configuring the VPC. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/neo-vpc.html">Protect Compilation Jobs by Using an Amazon
   *                 Virtual Private Cloud</a>.</p>
   */
  VpcConfig?: NeoVpcConfig;
}

export interface DescribeContextRequest {
  /**
   * <p>The name of the context to describe.</p>
   */
  ContextName: string | undefined;
}

export interface DescribeContextResponse {
  /**
   * <p>The name of the context.</p>
   */
  ContextName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the context.</p>
   */
  ContextArn?: string;

  /**
   * <p>The source of the context.</p>
   */
  Source?: ContextSource;

  /**
   * <p>The type of the context.</p>
   */
  ContextType?: string;

  /**
   * <p>The description of the context.</p>
   */
  Description?: string;

  /**
   * <p>A list of the context's properties.</p>
   */
  Properties?: Record<string, string>;

  /**
   * <p>When the context was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>Information about the user who created or modified an experiment, trial, trial
   *       component, lineage group, or project.</p>
   */
  CreatedBy?: UserContext;

  /**
   * <p>When the context was last modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>Information about the user who created or modified an experiment, trial, trial
   *       component, lineage group, or project.</p>
   */
  LastModifiedBy?: UserContext;

  /**
   * <p>The Amazon Resource Name (ARN) of the lineage group.</p>
   */
  LineageGroupArn?: string;
}

export interface DescribeDataQualityJobDefinitionRequest {
  /**
   * <p>The name of the data quality monitoring job definition to describe.</p>
   */
  JobDefinitionName: string | undefined;
}

export interface DescribeDataQualityJobDefinitionResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the data quality monitoring job definition.</p>
   */
  JobDefinitionArn: string | undefined;

  /**
   * <p>The name of the data quality monitoring job definition.</p>
   */
  JobDefinitionName: string | undefined;

  /**
   * <p>The time that the data quality monitoring job definition was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>The constraints and baselines for the data quality monitoring job definition.</p>
   */
  DataQualityBaselineConfig?: DataQualityBaselineConfig;

  /**
   * <p>Information about the container that runs the data quality monitoring job.</p>
   */
  DataQualityAppSpecification: DataQualityAppSpecification | undefined;

  /**
   * <p>The list of inputs for the data quality monitoring job. Currently endpoints are
   *          supported.</p>
   */
  DataQualityJobInput: DataQualityJobInput | undefined;

  /**
   * <p>The output configuration for monitoring jobs.</p>
   */
  DataQualityJobOutputConfig: MonitoringOutputConfig | undefined;

  /**
   * <p>Identifies the resources to deploy for a monitoring job.</p>
   */
  JobResources: MonitoringResources | undefined;

  /**
   * <p>The networking configuration for the data quality monitoring job.</p>
   */
  NetworkConfig?: MonitoringNetworkConfig;

  /**
   * <p>The Amazon Resource Name (ARN) of an IAM role that Amazon SageMaker can assume to
   *          perform tasks on your behalf.</p>
   */
  RoleArn: string | undefined;

  /**
   * <p>A time limit for how long the monitoring job is allowed to run before stopping.</p>
   */
  StoppingCondition?: MonitoringStoppingCondition;
}

export interface DescribeDeviceRequest {
  /**
   * <p>Next token of device description.</p>
   */
  NextToken?: string;

  /**
   * <p>The unique ID of the device.</p>
   */
  DeviceName: string | undefined;

  /**
   * <p>The name of the fleet the devices belong to.</p>
   */
  DeviceFleetName: string | undefined;
}

/**
 * <p>The model on the edge device.</p>
 */
export interface EdgeModel {
  /**
   * <p>The name of the model.</p>
   */
  ModelName: string | undefined;

  /**
   * <p>The model version.</p>
   */
  ModelVersion: string | undefined;

  /**
   * <p>The timestamp of the last data sample taken.</p>
   */
  LatestSampleTime?: Date;

  /**
   * <p>The timestamp of the last inference that was made.</p>
   */
  LatestInference?: Date;
}

export interface DescribeDeviceResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the device.</p>
   */
  DeviceArn?: string;

  /**
   * <p>The unique identifier of the device.</p>
   */
  DeviceName: string | undefined;

  /**
   * <p>A description of the device.</p>
   */
  Description?: string;

  /**
   * <p>The name of the fleet the device belongs to.</p>
   */
  DeviceFleetName: string | undefined;

  /**
   * <p>The Amazon Web Services Internet of Things (IoT) object thing name associated with the device.</p>
   */
  IotThingName?: string;

  /**
   * <p>The timestamp of the last registration or de-reregistration.</p>
   */
  RegistrationTime: Date | undefined;

  /**
   * <p>The last heartbeat received from the device.</p>
   */
  LatestHeartbeat?: Date;

  /**
   * <p>Models on the device.</p>
   */
  Models?: EdgeModel[];

  /**
   * <p>The maximum number of models.</p>
   */
  MaxModels?: number;

  /**
   * <p>The response from the last list when returning a list large enough to need tokening.</p>
   */
  NextToken?: string;

  /**
   * <p>Edge Manager agent version.</p>
   */
  AgentVersion?: string;
}

export interface DescribeDeviceFleetRequest {
  /**
   * <p>The name of the fleet.</p>
   */
  DeviceFleetName: string | undefined;
}

export interface DescribeDeviceFleetResponse {
  /**
   * <p>The name of the fleet.</p>
   */
  DeviceFleetName: string | undefined;

  /**
   * <p>The The Amazon Resource Name (ARN) of the fleet.</p>
   */
  DeviceFleetArn: string | undefined;

  /**
   * <p>The output configuration for storing sampled data.</p>
   */
  OutputConfig: EdgeOutputConfig | undefined;

  /**
   * <p>A description of the fleet.</p>
   */
  Description?: string;

  /**
   * <p>Timestamp of when the device fleet was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>Timestamp of when the device fleet was last updated.</p>
   */
  LastModifiedTime: Date | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) that has access to Amazon Web Services Internet of Things (IoT).</p>
   */
  RoleArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) alias created in Amazon Web Services Internet of Things (IoT).</p>
   */
  IotRoleAlias?: string;
}

export interface DescribeDomainRequest {
  /**
   * <p>The domain ID.</p>
   */
  DomainId: string | undefined;
}

export enum DomainStatus {
  Delete_Failed = "Delete_Failed",
  Deleting = "Deleting",
  Failed = "Failed",
  InService = "InService",
  Pending = "Pending",
  Update_Failed = "Update_Failed",
  Updating = "Updating",
}

export interface DescribeDomainResponse {
  /**
   * <p>The domain's Amazon Resource Name (ARN).</p>
   */
  DomainArn?: string;

  /**
   * <p>The domain ID.</p>
   */
  DomainId?: string;

  /**
   * <p>The domain name.</p>
   */
  DomainName?: string;

  /**
   * <p>The ID of the Amazon Elastic File System (EFS) managed by this Domain.</p>
   */
  HomeEfsFileSystemId?: string;

  /**
   * <p>The Amazon Web Services SSO managed application instance ID.</p>
   */
  SingleSignOnManagedApplicationInstanceId?: string;

  /**
   * <p>The status.</p>
   */
  Status?: DomainStatus | string;

  /**
   * <p>The creation time.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The last modified time.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>The failure reason.</p>
   */
  FailureReason?: string;

  /**
   * <p>The domain's authentication mode.</p>
   */
  AuthMode?: AuthMode | string;

  /**
   * <p>Settings which are applied to UserProfiles in this domain if settings are not explicitly specified
   *            in a given UserProfile.
   *        </p>
   */
  DefaultUserSettings?: UserSettings;

  /**
   * <p>Specifies the VPC used for non-EFS traffic. The default value is
   *         <code>PublicInternetOnly</code>.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>PublicInternetOnly</code> - Non-EFS traffic is through a VPC managed by
   *             Amazon SageMaker, which allows direct internet access</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>VpcOnly</code> - All Studio traffic is through the specified VPC and subnets</p>
   *             </li>
   *          </ul>
   */
  AppNetworkAccessType?: AppNetworkAccessType | string;

  /**
   * @deprecated
   *
   * <p>Use <code>KmsKeyId</code>.</p>
   */
  HomeEfsFileSystemKmsKeyId?: string;

  /**
   * <p>The VPC subnets that Studio uses for communication.</p>
   */
  SubnetIds?: string[];

  /**
   * <p>The domain's URL.</p>
   */
  Url?: string;

  /**
   * <p>The ID of the Amazon Virtual Private Cloud (VPC) that Studio uses for communication.</p>
   */
  VpcId?: string;

  /**
   * <p>The Amazon Web Services KMS customer managed key used to encrypt
   *          the EFS volume attached to the domain.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>A collection of <code>Domain</code> settings.</p>
   */
  DomainSettings?: DomainSettings;

  /**
   * <p>The entity that creates and manages the required security groups for inter-app
   *             communication in <code>VPCOnly</code> mode. Required when
   *                 <code>CreateDomain.AppNetworkAccessType</code> is <code>VPCOnly</code> and
   *                 <code>DomainSettings.RStudioServerProDomainSettings.DomainExecutionRoleArn</code> is
   *             provided.</p>
   */
  AppSecurityGroupManagement?: AppSecurityGroupManagement | string;

  /**
   * <p>The ID of the security group that authorizes traffic between the
   *                 <code>RSessionGateway</code> apps and the <code>RStudioServerPro</code> app.</p>
   */
  SecurityGroupIdForDomainBoundary?: string;
}

export interface DescribeEdgeDeploymentPlanRequest {
  /**
   * <p>The name of the deployment plan to describe.</p>
   */
  EdgeDeploymentPlanName: string | undefined;

  /**
   * <p>If the edge deployment plan has enough stages to require tokening, then this is the response from the last list of stages returned.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to select (50 by default).</p>
   */
  MaxResults?: number;
}

export interface DescribeEdgeDeploymentPlanResponse {
  /**
   * <p>The ARN of edge deployment plan.</p>
   */
  EdgeDeploymentPlanArn: string | undefined;

  /**
   * <p>The name of the edge deployment plan.</p>
   */
  EdgeDeploymentPlanName: string | undefined;

  /**
   * <p>List of models associated with the edge deployment plan.</p>
   */
  ModelConfigs: EdgeDeploymentModelConfig[] | undefined;

  /**
   * <p>The device fleet used for this edge deployment plan.</p>
   */
  DeviceFleetName: string | undefined;

  /**
   * <p>The number of edge devices with the successful deployment.</p>
   */
  EdgeDeploymentSuccess?: number;

  /**
   * <p>The number of edge devices yet to pick up deployment, or in progress.</p>
   */
  EdgeDeploymentPending?: number;

  /**
   * <p>The number of edge devices that failed the deployment.</p>
   */
  EdgeDeploymentFailed?: number;

  /**
   * <p>List of stages in the edge deployment plan.</p>
   */
  Stages: DeploymentStageStatusSummary[] | undefined;

  /**
   * <p>Token to use when calling the next set of stages in the edge deployment plan.</p>
   */
  NextToken?: string;

  /**
   * <p>The time when the edge deployment plan was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The time when the edge deployment plan was last updated.</p>
   */
  LastModifiedTime?: Date;
}

export interface DescribeEdgePackagingJobRequest {
  /**
   * <p>The name of the edge packaging job.</p>
   */
  EdgePackagingJobName: string | undefined;
}

export enum EdgePackagingJobStatus {
  Completed = "COMPLETED",
  Failed = "FAILED",
  InProgress = "INPROGRESS",
  Starting = "STARTING",
  Stopped = "STOPPED",
  Stopping = "STOPPING",
}

export enum EdgePresetDeploymentStatus {
  Completed = "COMPLETED",
  Failed = "FAILED",
}

/**
 * <p>The output of a SageMaker Edge Manager deployable resource.</p>
 */
export interface EdgePresetDeploymentOutput {
  /**
   * <p>The deployment type created by SageMaker Edge Manager. Currently only
   *      supports Amazon Web Services IoT Greengrass Version 2 components.</p>
   */
  Type: EdgePresetDeploymentType | string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the generated deployable resource.</p>
   */
  Artifact?: string;

  /**
   * <p>The status of the deployable resource.</p>
   */
  Status?: EdgePresetDeploymentStatus | string;

  /**
   * <p>Returns a message describing the status of the deployed resource.</p>
   */
  StatusMessage?: string;
}

export interface DescribeEdgePackagingJobResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the edge packaging job.</p>
   */
  EdgePackagingJobArn: string | undefined;

  /**
   * <p>The name of the edge packaging job.</p>
   */
  EdgePackagingJobName: string | undefined;

  /**
   * <p>The name of the SageMaker Neo compilation job that is used to locate model artifacts that are being packaged.</p>
   */
  CompilationJobName?: string;

  /**
   * <p>The name of the model.</p>
   */
  ModelName?: string;

  /**
   * <p>The version of the model.</p>
   */
  ModelVersion?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of an IAM role that enables Amazon SageMaker to  download and upload the model, and to contact Neo.</p>
   */
  RoleArn?: string;

  /**
   * <p>The output configuration for the edge packaging job.</p>
   */
  OutputConfig?: EdgeOutputConfig;

  /**
   * <p>The Amazon Web Services KMS key to use when encrypting the EBS volume the job run on.</p>
   */
  ResourceKey?: string;

  /**
   * <p>The current status of the packaging job.</p>
   */
  EdgePackagingJobStatus: EdgePackagingJobStatus | string | undefined;

  /**
   * <p>Returns a message describing the job status and error messages.</p>
   */
  EdgePackagingJobStatusMessage?: string;

  /**
   * <p>The timestamp of when the packaging job was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The timestamp of when the job was last updated.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>The Amazon Simple Storage (S3) URI where model artifacts ares stored.</p>
   */
  ModelArtifact?: string;

  /**
   * <p>The signature document of files in the model artifact.</p>
   */
  ModelSignature?: string;

  /**
   * <p>The output of a SageMaker Edge Manager deployable resource.</p>
   */
  PresetDeploymentOutput?: EdgePresetDeploymentOutput;
}

export interface DescribeEndpointInput {
  /**
   * <p>The name of the endpoint.</p>
   */
  EndpointName: string | undefined;
}

export enum EndpointStatus {
  CREATING = "Creating",
  DELETING = "Deleting",
  FAILED = "Failed",
  IN_SERVICE = "InService",
  OUT_OF_SERVICE = "OutOfService",
  ROLLING_BACK = "RollingBack",
  SYSTEM_UPDATING = "SystemUpdating",
  UPDATING = "Updating",
}

export enum VariantStatus {
  ACTIVATING_TRAFFIC = "ActivatingTraffic",
  BAKING = "Baking",
  CREATING = "Creating",
  DELETING = "Deleting",
  UPDATING = "Updating",
}

/**
 * <p>Describes the status of the production variant.</p>
 */
export interface ProductionVariantStatus {
  /**
   * <p>The endpoint variant status which describes the current deployment stage status or
   *             operational status.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>Creating</code>: Creating inference resources for the production
   *                     variant.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Deleting</code>: Terminating inference resources for the production
   *                     variant.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Updating</code>: Updating capacity for the production variant.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>ActivatingTraffic</code>: Turning on traffic for the production
   *                     variant.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Baking</code>: Waiting period to monitor the CloudWatch alarms in the
   *                     automatic rollback configuration.</p>
   *             </li>
   *          </ul>
   */
  Status: VariantStatus | string | undefined;

  /**
   * <p>A message that describes the status of the production variant.</p>
   */
  StatusMessage?: string;

  /**
   * <p>The start time of the current status change.</p>
   */
  StartTime?: Date;
}

/**
 * <p>The production variant summary for a deployment when an endpoint is creating or
 *             updating with the <code>
 *                <a>CreateEndpoint</a>
 *             </code> or <code>
 *                <a>UpdateEndpoint</a>
 *             </code> operations. Describes the <code>VariantStatus
 *             </code>, weight and capacity for a production variant associated with an endpoint.
 *         </p>
 */
export interface PendingProductionVariantSummary {
  /**
   * <p>The name of the variant.</p>
   */
  VariantName: string | undefined;

  /**
   * <p>An array of <code>DeployedImage</code> objects that specify the Amazon EC2 Container
   *             Registry paths of the inference images deployed on instances of this
   *                 <code>ProductionVariant</code>.</p>
   */
  DeployedImages?: DeployedImage[];

  /**
   * <p>The weight associated with the variant.</p>
   */
  CurrentWeight?: number;

  /**
   * <p>The requested weight for the variant in this deployment, as specified in the endpoint
   *             configuration for the endpoint. The value is taken from the request to the <code>
   *                <a>CreateEndpointConfig</a>
   *             </code> operation.</p>
   */
  DesiredWeight?: number;

  /**
   * <p>The number of instances associated with the variant.</p>
   */
  CurrentInstanceCount?: number;

  /**
   * <p>The number of instances requested in this deployment, as specified in the endpoint
   *             configuration for the endpoint. The value is taken from the request to the <code>
   *                <a>CreateEndpointConfig</a>
   *             </code> operation.</p>
   */
  DesiredInstanceCount?: number;

  /**
   * <p>The type of instances associated with the variant.</p>
   */
  InstanceType?: ProductionVariantInstanceType | string;

  /**
   * <p>The size of the Elastic Inference (EI) instance to use for the production variant. EI
   *             instances provide on-demand GPU computing for inference. For more information, see
   *                 <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/ei.html">Using Elastic
   *                 Inference in Amazon SageMaker</a>.</p>
   */
  AcceleratorType?: ProductionVariantAcceleratorType | string;

  /**
   * <p>The endpoint variant status which describes the current deployment stage status or
   *             operational status.</p>
   */
  VariantStatus?: ProductionVariantStatus[];

  /**
   * <p>The serverless configuration for the endpoint.</p>
   */
  CurrentServerlessConfig?: ProductionVariantServerlessConfig;

  /**
   * <p>The serverless configuration requested for this deployment, as specified in the endpoint configuration for the endpoint.</p>
   */
  DesiredServerlessConfig?: ProductionVariantServerlessConfig;
}

/**
 * <p>The summary of an in-progress deployment when an endpoint is creating or updating with
 *             a new endpoint configuration.</p>
 */
export interface PendingDeploymentSummary {
  /**
   * <p>The name of the endpoint configuration used in the deployment. </p>
   */
  EndpointConfigName: string | undefined;

  /**
   * <p>List of <code>PendingProductionVariantSummary</code> objects.</p>
   */
  ProductionVariants?: PendingProductionVariantSummary[];

  /**
   * <p>The start time of the deployment.</p>
   */
  StartTime?: Date;
}

/**
 * <p>Describes weight and capacities for a production variant associated with an
 *             endpoint. If you sent a request to the <code>UpdateEndpointWeightsAndCapacities</code>
 *             API and the endpoint status is <code>Updating</code>, you get different desired and
 *             current values. </p>
 */
export interface ProductionVariantSummary {
  /**
   * <p>The name of the variant.</p>
   */
  VariantName: string | undefined;

  /**
   * <p>An array of <code>DeployedImage</code> objects that specify the Amazon EC2 Container Registry paths of the
   *             inference images deployed on instances of this <code>ProductionVariant</code>.</p>
   */
  DeployedImages?: DeployedImage[];

  /**
   * <p>The weight associated with the variant.</p>
   */
  CurrentWeight?: number;

  /**
   * <p>The requested weight, as specified in the
   *                 <code>UpdateEndpointWeightsAndCapacities</code> request. </p>
   */
  DesiredWeight?: number;

  /**
   * <p>The number of instances associated with the variant.</p>
   */
  CurrentInstanceCount?: number;

  /**
   * <p>The number of instances requested in the
   *                 <code>UpdateEndpointWeightsAndCapacities</code> request. </p>
   */
  DesiredInstanceCount?: number;

  /**
   * <p>The endpoint variant status which describes the current deployment stage status or
   *             operational status.</p>
   */
  VariantStatus?: ProductionVariantStatus[];

  /**
   * <p>The serverless configuration for the endpoint.</p>
   */
  CurrentServerlessConfig?: ProductionVariantServerlessConfig;

  /**
   * <p>The serverless configuration requested for the endpoint update.</p>
   */
  DesiredServerlessConfig?: ProductionVariantServerlessConfig;
}

export interface DescribeEndpointOutput {
  /**
   * <p>Name of the endpoint.</p>
   */
  EndpointName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the endpoint.</p>
   */
  EndpointArn: string | undefined;

  /**
   * <p>The name of the endpoint configuration associated with this endpoint.</p>
   */
  EndpointConfigName: string | undefined;

  /**
   * <p> An array of <a>ProductionVariantSummary</a> objects, one for each model
   *             hosted behind this endpoint. </p>
   */
  ProductionVariants?: ProductionVariantSummary[];

  /**
   * <p>The currently active data capture configuration used by your Endpoint.</p>
   */
  DataCaptureConfig?: DataCaptureConfigSummary;

  /**
   * <p>The status of the endpoint.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>OutOfService</code>: Endpoint is not available to take incoming
   *                     requests.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Creating</code>: <a>CreateEndpoint</a> is executing.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Updating</code>: <a>UpdateEndpoint</a> or <a>UpdateEndpointWeightsAndCapacities</a> is executing.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>SystemUpdating</code>: Endpoint is undergoing maintenance and cannot be
   *                     updated or deleted or re-scaled until it has completed. This maintenance
   *                     operation does not change any customer-specified values such as VPC config, KMS
   *                     encryption, model, instance type, or instance count.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>RollingBack</code>: Endpoint fails to scale up or down or change its
   *                     variant weight and is in the process of rolling back to its previous
   *                     configuration. Once the rollback completes, endpoint returns to an
   *                         <code>InService</code> status. This transitional status only applies to an
   *                     endpoint that has autoscaling enabled and is undergoing variant weight or
   *                     capacity changes as part of an <a>UpdateEndpointWeightsAndCapacities</a> call or when the <a>UpdateEndpointWeightsAndCapacities</a> operation is called
   *                     explicitly.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>InService</code>: Endpoint is available to process incoming
   *                     requests.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Deleting</code>: <a>DeleteEndpoint</a> is executing.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Failed</code>: Endpoint could not be created, updated, or re-scaled. Use
   *                         <a>DescribeEndpointOutput$FailureReason</a> for information about
   *                     the failure. <a>DeleteEndpoint</a> is the only operation that can be
   *                     performed on a failed endpoint.</p>
   *             </li>
   *          </ul>
   */
  EndpointStatus: EndpointStatus | string | undefined;

  /**
   * <p>If the status of the endpoint is <code>Failed</code>, the reason why it failed.
   *         </p>
   */
  FailureReason?: string;

  /**
   * <p>A timestamp that shows when the endpoint was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>A timestamp that shows when the endpoint was last modified.</p>
   */
  LastModifiedTime: Date | undefined;

  /**
   * <p>The most recent deployment configuration for the endpoint.</p>
   */
  LastDeploymentConfig?: DeploymentConfig;

  /**
   * <p>Returns the description of an endpoint configuration created using the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateEndpointConfig.html">
   *                <code>CreateEndpointConfig</code>
   *             </a> API.</p>
   */
  AsyncInferenceConfig?: AsyncInferenceConfig;

  /**
   * <p>Returns the summary of an in-progress deployment. This field is only returned when the
   *             endpoint is creating or updating with a new endpoint configuration.</p>
   */
  PendingDeploymentSummary?: PendingDeploymentSummary;
}

export interface DescribeEndpointConfigInput {
  /**
   * <p>The name of the endpoint configuration.</p>
   */
  EndpointConfigName: string | undefined;
}

export interface DescribeEndpointConfigOutput {
  /**
   * <p>Name of the SageMaker endpoint configuration.</p>
   */
  EndpointConfigName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the endpoint configuration.</p>
   */
  EndpointConfigArn: string | undefined;

  /**
   * <p>An array of <code>ProductionVariant</code> objects, one for each model that you
   *             want to host at this endpoint.</p>
   */
  ProductionVariants: ProductionVariant[] | undefined;

  /**
   * <p>Configuration to control how SageMaker captures inference data.</p>
   */
  DataCaptureConfig?: DataCaptureConfig;

  /**
   * <p>Amazon Web Services KMS key ID Amazon SageMaker uses to encrypt data when storing it on
   *             the ML storage volume attached to the instance.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>A timestamp that shows when the endpoint configuration was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>Returns the description of an endpoint configuration created using the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateEndpointConfig.html">
   *                <code>CreateEndpointConfig</code>
   *             </a> API.</p>
   */
  AsyncInferenceConfig?: AsyncInferenceConfig;
}

export interface DescribeExperimentRequest {
  /**
   * <p>The name of the experiment to describe.</p>
   */
  ExperimentName: string | undefined;
}

/**
 * <p>The source of the experiment.</p>
 */
export interface ExperimentSource {
  /**
   * <p>The Amazon Resource Name (ARN) of the source.</p>
   */
  SourceArn: string | undefined;

  /**
   * <p>The source type.</p>
   */
  SourceType?: string;
}

export interface DescribeExperimentResponse {
  /**
   * <p>The name of the experiment.</p>
   */
  ExperimentName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the experiment.</p>
   */
  ExperimentArn?: string;

  /**
   * <p>The name of the experiment as displayed. If <code>DisplayName</code> isn't specified,
   *         <code>ExperimentName</code> is displayed.</p>
   */
  DisplayName?: string;

  /**
   * <p>The ARN of the source and, optionally, the type.</p>
   */
  Source?: ExperimentSource;

  /**
   * <p>The description of the experiment.</p>
   */
  Description?: string;

  /**
   * <p>When the experiment was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>Who created the experiment.</p>
   */
  CreatedBy?: UserContext;

  /**
   * <p>When the experiment was last modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>Who last modified the experiment.</p>
   */
  LastModifiedBy?: UserContext;
}

export interface DescribeFeatureGroupRequest {
  /**
   * <p>The name of the <code>FeatureGroup</code> you want described. </p>
   */
  FeatureGroupName: string | undefined;

  /**
   * <p>A token to resume pagination of the list of <code>Features</code>
   *             (<code>FeatureDefinitions</code>). 2,500 <code>Features</code> are returned by
   *          default.</p>
   */
  NextToken?: string;
}

export enum FeatureGroupStatus {
  CREATED = "Created",
  CREATE_FAILED = "CreateFailed",
  CREATING = "Creating",
  DELETE_FAILED = "DeleteFailed",
  DELETING = "Deleting",
}

export enum LastUpdateStatusValue {
  FAILED = "Failed",
  IN_PROGRESS = "InProgress",
  SUCCESSFUL = "Successful",
}

/**
 * <p>A value that indicates whether the update was successful.</p>
 */
export interface LastUpdateStatus {
  /**
   * <p>A value that indicates whether the update was made successful.</p>
   */
  Status: LastUpdateStatusValue | string | undefined;

  /**
   * <p>If the update wasn't successful, indicates the reason why it failed.</p>
   */
  FailureReason?: string;
}

export enum OfflineStoreStatusValue {
  ACTIVE = "Active",
  BLOCKED = "Blocked",
  DISABLED = "Disabled",
}

/**
 * <p>The status of <code>OfflineStore</code>.</p>
 */
export interface OfflineStoreStatus {
  /**
   * <p>An <code>OfflineStore</code> status.</p>
   */
  Status: OfflineStoreStatusValue | string | undefined;

  /**
   * <p>The justification for why the OfflineStoreStatus is Blocked (if applicable).</p>
   */
  BlockedReason?: string;
}

export interface DescribeFeatureGroupResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the <code>FeatureGroup</code>.  </p>
   */
  FeatureGroupArn: string | undefined;

  /**
   * <p>he name of the <code>FeatureGroup</code>.</p>
   */
  FeatureGroupName: string | undefined;

  /**
   * <p>The name of the <code>Feature</code> used for <code>RecordIdentifier</code>, whose value
   *          uniquely identifies a record stored in the feature store.</p>
   */
  RecordIdentifierFeatureName: string | undefined;

  /**
   * <p>The name of the feature that stores the <code>EventTime</code> of a Record in a
   *          <code>FeatureGroup</code>.</p>
   *          <p> An <code>EventTime</code> is a point in time when a new event occurs that
   *          corresponds to the creation or update of a <code>Record</code> in a
   *             <code>FeatureGroup</code>. All <code>Records</code> in the <code>FeatureGroup</code>
   *          have a corresponding <code>EventTime</code>.</p>
   */
  EventTimeFeatureName: string | undefined;

  /**
   * <p>A list of the <code>Features</code> in the <code>FeatureGroup</code>.
   *          Each feature is defined by a <code>FeatureName</code> and <code>FeatureType</code>.</p>
   */
  FeatureDefinitions: FeatureDefinition[] | undefined;

  /**
   * <p>A timestamp indicating when SageMaker created the <code>FeatureGroup</code>.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>A timestamp indicating when the feature group was last updated.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>The configuration for the <code>OnlineStore</code>.</p>
   */
  OnlineStoreConfig?: OnlineStoreConfig;

  /**
   * <p>The configuration of the <code>OfflineStore</code>, inducing the S3 location of the
   *          <code>OfflineStore</code>, Amazon Web Services Glue or Amazon Web Services Hive data catalogue configurations, and the
   *          security configuration.</p>
   */
  OfflineStoreConfig?: OfflineStoreConfig;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM execution role used to persist data into the
   *          <code>OfflineStore</code> if an <code>OfflineStoreConfig</code> is provided.</p>
   */
  RoleArn?: string;

  /**
   * <p>The status of the feature group.</p>
   */
  FeatureGroupStatus?: FeatureGroupStatus | string;

  /**
   * <p>The status of the <code>OfflineStore</code>. Notifies you if replicating data into the
   *             <code>OfflineStore</code> has failed. Returns either: <code>Active</code> or
   *             <code>Blocked</code>
   *          </p>
   */
  OfflineStoreStatus?: OfflineStoreStatus;

  /**
   * <p>A value indicating whether the update made to the feature group was successful.</p>
   */
  LastUpdateStatus?: LastUpdateStatus;

  /**
   * <p>The reason that the <code>FeatureGroup</code> failed to be replicated in the
   *             <code>OfflineStore</code>. This is failure can occur because:</p>
   *          <ul>
   *             <li>
   *                <p>The <code>FeatureGroup</code> could not be created in the
   *                   <code>OfflineStore</code>.</p>
   *             </li>
   *             <li>
   *                <p>The <code>FeatureGroup</code> could not be deleted from the
   *                   <code>OfflineStore</code>.</p>
   *             </li>
   *          </ul>
   */
  FailureReason?: string;

  /**
   * <p>A free form description of the feature group.</p>
   */
  Description?: string;

  /**
   * <p>A token to resume pagination of the list of <code>Features</code>
   *             (<code>FeatureDefinitions</code>).</p>
   */
  NextToken: string | undefined;

  /**
   * <p>The size of the <code>OnlineStore</code> in bytes.</p>
   */
  OnlineStoreTotalSizeBytes?: number;
}

export interface DescribeFeatureMetadataRequest {
  /**
   * <p>The name of the feature group containing the feature.</p>
   */
  FeatureGroupName: string | undefined;

  /**
   * <p>The name of the feature.</p>
   */
  FeatureName: string | undefined;
}

/**
 * @internal
 */
export const HyperbandStrategyConfigFilterSensitiveLog = (obj: HyperbandStrategyConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const HyperParameterTuningJobStrategyConfigFilterSensitiveLog = (
  obj: HyperParameterTuningJobStrategyConfig
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TuningJobCompletionCriteriaFilterSensitiveLog = (obj: TuningJobCompletionCriteria): any => ({
  ...obj,
});

/**
 * @internal
 */
export const HyperParameterTuningJobConfigFilterSensitiveLog = (obj: HyperParameterTuningJobConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const HyperParameterAlgorithmSpecificationFilterSensitiveLog = (
  obj: HyperParameterAlgorithmSpecification
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const HyperParameterTuningInstanceConfigFilterSensitiveLog = (obj: HyperParameterTuningInstanceConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const HyperParameterTuningResourceConfigFilterSensitiveLog = (obj: HyperParameterTuningResourceConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RetryStrategyFilterSensitiveLog = (obj: RetryStrategy): any => ({
  ...obj,
});

/**
 * @internal
 */
export const HyperParameterTrainingJobDefinitionFilterSensitiveLog = (
  obj: HyperParameterTrainingJobDefinition
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ParentHyperParameterTuningJobFilterSensitiveLog = (obj: ParentHyperParameterTuningJob): any => ({
  ...obj,
});

/**
 * @internal
 */
export const HyperParameterTuningJobWarmStartConfigFilterSensitiveLog = (
  obj: HyperParameterTuningJobWarmStartConfig
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateHyperParameterTuningJobRequestFilterSensitiveLog = (
  obj: CreateHyperParameterTuningJobRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateHyperParameterTuningJobResponseFilterSensitiveLog = (
  obj: CreateHyperParameterTuningJobResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateImageRequestFilterSensitiveLog = (obj: CreateImageRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateImageResponseFilterSensitiveLog = (obj: CreateImageResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateImageVersionRequestFilterSensitiveLog = (obj: CreateImageVersionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateImageVersionResponseFilterSensitiveLog = (obj: CreateImageVersionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RecommendationJobPayloadConfigFilterSensitiveLog = (obj: RecommendationJobPayloadConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RecommendationJobContainerConfigFilterSensitiveLog = (obj: RecommendationJobContainerConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EnvironmentParameterRangesFilterSensitiveLog = (obj: EnvironmentParameterRanges): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EndpointInputConfigurationFilterSensitiveLog = (obj: EndpointInputConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RecommendationJobResourceLimitFilterSensitiveLog = (obj: RecommendationJobResourceLimit): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PhaseFilterSensitiveLog = (obj: Phase): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TrafficPatternFilterSensitiveLog = (obj: TrafficPattern): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RecommendationJobInputConfigFilterSensitiveLog = (obj: RecommendationJobInputConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RecommendationJobCompiledOutputConfigFilterSensitiveLog = (
  obj: RecommendationJobCompiledOutputConfig
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RecommendationJobOutputConfigFilterSensitiveLog = (obj: RecommendationJobOutputConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModelLatencyThresholdFilterSensitiveLog = (obj: ModelLatencyThreshold): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RecommendationJobStoppingConditionsFilterSensitiveLog = (
  obj: RecommendationJobStoppingConditions
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateInferenceRecommendationsJobRequestFilterSensitiveLog = (
  obj: CreateInferenceRecommendationsJobRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateInferenceRecommendationsJobResponseFilterSensitiveLog = (
  obj: CreateInferenceRecommendationsJobResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UiConfigFilterSensitiveLog = (obj: UiConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const HumanTaskConfigFilterSensitiveLog = (obj: HumanTaskConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LabelingJobDataAttributesFilterSensitiveLog = (obj: LabelingJobDataAttributes): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LabelingJobS3DataSourceFilterSensitiveLog = (obj: LabelingJobS3DataSource): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LabelingJobSnsDataSourceFilterSensitiveLog = (obj: LabelingJobSnsDataSource): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LabelingJobDataSourceFilterSensitiveLog = (obj: LabelingJobDataSource): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LabelingJobInputConfigFilterSensitiveLog = (obj: LabelingJobInputConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LabelingJobResourceConfigFilterSensitiveLog = (obj: LabelingJobResourceConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LabelingJobAlgorithmsConfigFilterSensitiveLog = (obj: LabelingJobAlgorithmsConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LabelingJobOutputConfigFilterSensitiveLog = (obj: LabelingJobOutputConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LabelingJobStoppingConditionsFilterSensitiveLog = (obj: LabelingJobStoppingConditions): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateLabelingJobRequestFilterSensitiveLog = (obj: CreateLabelingJobRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateLabelingJobResponseFilterSensitiveLog = (obj: CreateLabelingJobResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InferenceExecutionConfigFilterSensitiveLog = (obj: InferenceExecutionConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateModelInputFilterSensitiveLog = (obj: CreateModelInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateModelOutputFilterSensitiveLog = (obj: CreateModelOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModelBiasAppSpecificationFilterSensitiveLog = (obj: ModelBiasAppSpecification): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModelBiasBaselineConfigFilterSensitiveLog = (obj: ModelBiasBaselineConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MonitoringGroundTruthS3InputFilterSensitiveLog = (obj: MonitoringGroundTruthS3Input): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModelBiasJobInputFilterSensitiveLog = (obj: ModelBiasJobInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateModelBiasJobDefinitionRequestFilterSensitiveLog = (
  obj: CreateModelBiasJobDefinitionRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateModelBiasJobDefinitionResponseFilterSensitiveLog = (
  obj: CreateModelBiasJobDefinitionResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModelExplainabilityAppSpecificationFilterSensitiveLog = (
  obj: ModelExplainabilityAppSpecification
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModelExplainabilityBaselineConfigFilterSensitiveLog = (obj: ModelExplainabilityBaselineConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModelExplainabilityJobInputFilterSensitiveLog = (obj: ModelExplainabilityJobInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateModelExplainabilityJobDefinitionRequestFilterSensitiveLog = (
  obj: CreateModelExplainabilityJobDefinitionRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateModelExplainabilityJobDefinitionResponseFilterSensitiveLog = (
  obj: CreateModelExplainabilityJobDefinitionResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FileSourceFilterSensitiveLog = (obj: FileSource): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DriftCheckBiasFilterSensitiveLog = (obj: DriftCheckBias): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DriftCheckExplainabilityFilterSensitiveLog = (obj: DriftCheckExplainability): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DriftCheckModelDataQualityFilterSensitiveLog = (obj: DriftCheckModelDataQuality): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DriftCheckModelQualityFilterSensitiveLog = (obj: DriftCheckModelQuality): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DriftCheckBaselinesFilterSensitiveLog = (obj: DriftCheckBaselines): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ExplainabilityFilterSensitiveLog = (obj: Explainability): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModelDataQualityFilterSensitiveLog = (obj: ModelDataQuality): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModelQualityFilterSensitiveLog = (obj: ModelQuality): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModelMetricsFilterSensitiveLog = (obj: ModelMetrics): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SourceAlgorithmFilterSensitiveLog = (obj: SourceAlgorithm): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SourceAlgorithmSpecificationFilterSensitiveLog = (obj: SourceAlgorithmSpecification): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModelPackageValidationProfileFilterSensitiveLog = (obj: ModelPackageValidationProfile): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModelPackageValidationSpecificationFilterSensitiveLog = (
  obj: ModelPackageValidationSpecification
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateModelPackageInputFilterSensitiveLog = (obj: CreateModelPackageInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateModelPackageOutputFilterSensitiveLog = (obj: CreateModelPackageOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateModelPackageGroupInputFilterSensitiveLog = (obj: CreateModelPackageGroupInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateModelPackageGroupOutputFilterSensitiveLog = (obj: CreateModelPackageGroupOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModelQualityAppSpecificationFilterSensitiveLog = (obj: ModelQualityAppSpecification): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModelQualityBaselineConfigFilterSensitiveLog = (obj: ModelQualityBaselineConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModelQualityJobInputFilterSensitiveLog = (obj: ModelQualityJobInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateModelQualityJobDefinitionRequestFilterSensitiveLog = (
  obj: CreateModelQualityJobDefinitionRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateModelQualityJobDefinitionResponseFilterSensitiveLog = (
  obj: CreateModelQualityJobDefinitionResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MonitoringBaselineConfigFilterSensitiveLog = (obj: MonitoringBaselineConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MonitoringAppSpecificationFilterSensitiveLog = (obj: MonitoringAppSpecification): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MonitoringInputFilterSensitiveLog = (obj: MonitoringInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NetworkConfigFilterSensitiveLog = (obj: NetworkConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MonitoringJobDefinitionFilterSensitiveLog = (obj: MonitoringJobDefinition): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ScheduleConfigFilterSensitiveLog = (obj: ScheduleConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MonitoringScheduleConfigFilterSensitiveLog = (obj: MonitoringScheduleConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateMonitoringScheduleRequestFilterSensitiveLog = (obj: CreateMonitoringScheduleRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateMonitoringScheduleResponseFilterSensitiveLog = (obj: CreateMonitoringScheduleResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InstanceMetadataServiceConfigurationFilterSensitiveLog = (
  obj: InstanceMetadataServiceConfiguration
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateNotebookInstanceInputFilterSensitiveLog = (obj: CreateNotebookInstanceInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateNotebookInstanceOutputFilterSensitiveLog = (obj: CreateNotebookInstanceOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NotebookInstanceLifecycleHookFilterSensitiveLog = (obj: NotebookInstanceLifecycleHook): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateNotebookInstanceLifecycleConfigInputFilterSensitiveLog = (
  obj: CreateNotebookInstanceLifecycleConfigInput
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateNotebookInstanceLifecycleConfigOutputFilterSensitiveLog = (
  obj: CreateNotebookInstanceLifecycleConfigOutput
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ParallelismConfigurationFilterSensitiveLog = (obj: ParallelismConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PipelineDefinitionS3LocationFilterSensitiveLog = (obj: PipelineDefinitionS3Location): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreatePipelineRequestFilterSensitiveLog = (obj: CreatePipelineRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreatePipelineResponseFilterSensitiveLog = (obj: CreatePipelineResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreatePresignedDomainUrlRequestFilterSensitiveLog = (obj: CreatePresignedDomainUrlRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreatePresignedDomainUrlResponseFilterSensitiveLog = (obj: CreatePresignedDomainUrlResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreatePresignedNotebookInstanceUrlInputFilterSensitiveLog = (
  obj: CreatePresignedNotebookInstanceUrlInput
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreatePresignedNotebookInstanceUrlOutputFilterSensitiveLog = (
  obj: CreatePresignedNotebookInstanceUrlOutput
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ExperimentConfigFilterSensitiveLog = (obj: ExperimentConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RedshiftDatasetDefinitionFilterSensitiveLog = (obj: RedshiftDatasetDefinition): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DatasetDefinitionFilterSensitiveLog = (obj: DatasetDefinition): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ProcessingS3InputFilterSensitiveLog = (obj: ProcessingS3Input): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ProcessingInputFilterSensitiveLog = (obj: ProcessingInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ProcessingFeatureStoreOutputFilterSensitiveLog = (obj: ProcessingFeatureStoreOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ProcessingS3OutputFilterSensitiveLog = (obj: ProcessingS3Output): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ProcessingOutputFilterSensitiveLog = (obj: ProcessingOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ProcessingOutputConfigFilterSensitiveLog = (obj: ProcessingOutputConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ProcessingClusterConfigFilterSensitiveLog = (obj: ProcessingClusterConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ProcessingResourcesFilterSensitiveLog = (obj: ProcessingResources): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ProcessingStoppingConditionFilterSensitiveLog = (obj: ProcessingStoppingCondition): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateProcessingJobRequestFilterSensitiveLog = (obj: CreateProcessingJobRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateProcessingJobResponseFilterSensitiveLog = (obj: CreateProcessingJobResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ProvisioningParameterFilterSensitiveLog = (obj: ProvisioningParameter): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ServiceCatalogProvisioningDetailsFilterSensitiveLog = (obj: ServiceCatalogProvisioningDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateProjectInputFilterSensitiveLog = (obj: CreateProjectInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateProjectOutputFilterSensitiveLog = (obj: CreateProjectOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateStudioLifecycleConfigRequestFilterSensitiveLog = (obj: CreateStudioLifecycleConfigRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateStudioLifecycleConfigResponseFilterSensitiveLog = (
  obj: CreateStudioLifecycleConfigResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DebugHookConfigFilterSensitiveLog = (obj: DebugHookConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DebugRuleConfigurationFilterSensitiveLog = (obj: DebugRuleConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ProfilerConfigFilterSensitiveLog = (obj: ProfilerConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ProfilerRuleConfigurationFilterSensitiveLog = (obj: ProfilerRuleConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TensorBoardOutputConfigFilterSensitiveLog = (obj: TensorBoardOutputConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateTrainingJobRequestFilterSensitiveLog = (obj: CreateTrainingJobRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateTrainingJobResponseFilterSensitiveLog = (obj: CreateTrainingJobResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DataProcessingFilterSensitiveLog = (obj: DataProcessing): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModelClientConfigFilterSensitiveLog = (obj: ModelClientConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateTransformJobRequestFilterSensitiveLog = (obj: CreateTransformJobRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateTransformJobResponseFilterSensitiveLog = (obj: CreateTransformJobResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateTrialRequestFilterSensitiveLog = (obj: CreateTrialRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateTrialResponseFilterSensitiveLog = (obj: CreateTrialResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TrialComponentArtifactFilterSensitiveLog = (obj: TrialComponentArtifact): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TrialComponentParameterValueFilterSensitiveLog = (obj: TrialComponentParameterValue): any => {
  if (obj.StringValue !== undefined) return { StringValue: obj.StringValue };
  if (obj.NumberValue !== undefined) return { NumberValue: obj.NumberValue };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const TrialComponentStatusFilterSensitiveLog = (obj: TrialComponentStatus): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateTrialComponentRequestFilterSensitiveLog = (obj: CreateTrialComponentRequest): any => ({
  ...obj,
  ...(obj.Parameters && {
    Parameters: Object.entries(obj.Parameters).reduce(
      (acc: any, [key, value]: [string, TrialComponentParameterValue]) => ({
        ...acc,
        [key]: TrialComponentParameterValueFilterSensitiveLog(value),
      }),
      {}
    ),
  }),
});

/**
 * @internal
 */
export const CreateTrialComponentResponseFilterSensitiveLog = (obj: CreateTrialComponentResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateUserProfileRequestFilterSensitiveLog = (obj: CreateUserProfileRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateUserProfileResponseFilterSensitiveLog = (obj: CreateUserProfileResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const OidcConfigFilterSensitiveLog = (obj: OidcConfig): any => ({
  ...obj,
  ...(obj.ClientSecret && { ClientSecret: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const SourceIpConfigFilterSensitiveLog = (obj: SourceIpConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const WorkforceVpcConfigRequestFilterSensitiveLog = (obj: WorkforceVpcConfigRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateWorkforceRequestFilterSensitiveLog = (obj: CreateWorkforceRequest): any => ({
  ...obj,
  ...(obj.OidcConfig && { OidcConfig: OidcConfigFilterSensitiveLog(obj.OidcConfig) }),
});

/**
 * @internal
 */
export const CreateWorkforceResponseFilterSensitiveLog = (obj: CreateWorkforceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const OidcMemberDefinitionFilterSensitiveLog = (obj: OidcMemberDefinition): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MemberDefinitionFilterSensitiveLog = (obj: MemberDefinition): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NotificationConfigurationFilterSensitiveLog = (obj: NotificationConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateWorkteamRequestFilterSensitiveLog = (obj: CreateWorkteamRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateWorkteamResponseFilterSensitiveLog = (obj: CreateWorkteamResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DataCaptureConfigSummaryFilterSensitiveLog = (obj: DataCaptureConfigSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DebugRuleEvaluationStatusFilterSensitiveLog = (obj: DebugRuleEvaluationStatus): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteActionRequestFilterSensitiveLog = (obj: DeleteActionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteActionResponseFilterSensitiveLog = (obj: DeleteActionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteAlgorithmInputFilterSensitiveLog = (obj: DeleteAlgorithmInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteAppRequestFilterSensitiveLog = (obj: DeleteAppRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteAppImageConfigRequestFilterSensitiveLog = (obj: DeleteAppImageConfigRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteArtifactRequestFilterSensitiveLog = (obj: DeleteArtifactRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteArtifactResponseFilterSensitiveLog = (obj: DeleteArtifactResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteAssociationRequestFilterSensitiveLog = (obj: DeleteAssociationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteAssociationResponseFilterSensitiveLog = (obj: DeleteAssociationResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteCodeRepositoryInputFilterSensitiveLog = (obj: DeleteCodeRepositoryInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteContextRequestFilterSensitiveLog = (obj: DeleteContextRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteContextResponseFilterSensitiveLog = (obj: DeleteContextResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteDataQualityJobDefinitionRequestFilterSensitiveLog = (
  obj: DeleteDataQualityJobDefinitionRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteDeviceFleetRequestFilterSensitiveLog = (obj: DeleteDeviceFleetRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RetentionPolicyFilterSensitiveLog = (obj: RetentionPolicy): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteDomainRequestFilterSensitiveLog = (obj: DeleteDomainRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteEdgeDeploymentPlanRequestFilterSensitiveLog = (obj: DeleteEdgeDeploymentPlanRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteEdgeDeploymentStageRequestFilterSensitiveLog = (obj: DeleteEdgeDeploymentStageRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteEndpointInputFilterSensitiveLog = (obj: DeleteEndpointInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteEndpointConfigInputFilterSensitiveLog = (obj: DeleteEndpointConfigInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteExperimentRequestFilterSensitiveLog = (obj: DeleteExperimentRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteExperimentResponseFilterSensitiveLog = (obj: DeleteExperimentResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteFeatureGroupRequestFilterSensitiveLog = (obj: DeleteFeatureGroupRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteFlowDefinitionRequestFilterSensitiveLog = (obj: DeleteFlowDefinitionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteFlowDefinitionResponseFilterSensitiveLog = (obj: DeleteFlowDefinitionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteHumanTaskUiRequestFilterSensitiveLog = (obj: DeleteHumanTaskUiRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteHumanTaskUiResponseFilterSensitiveLog = (obj: DeleteHumanTaskUiResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteImageRequestFilterSensitiveLog = (obj: DeleteImageRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteImageResponseFilterSensitiveLog = (obj: DeleteImageResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteImageVersionRequestFilterSensitiveLog = (obj: DeleteImageVersionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteImageVersionResponseFilterSensitiveLog = (obj: DeleteImageVersionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteModelInputFilterSensitiveLog = (obj: DeleteModelInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteModelBiasJobDefinitionRequestFilterSensitiveLog = (
  obj: DeleteModelBiasJobDefinitionRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteModelExplainabilityJobDefinitionRequestFilterSensitiveLog = (
  obj: DeleteModelExplainabilityJobDefinitionRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteModelPackageInputFilterSensitiveLog = (obj: DeleteModelPackageInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteModelPackageGroupInputFilterSensitiveLog = (obj: DeleteModelPackageGroupInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteModelPackageGroupPolicyInputFilterSensitiveLog = (obj: DeleteModelPackageGroupPolicyInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteModelQualityJobDefinitionRequestFilterSensitiveLog = (
  obj: DeleteModelQualityJobDefinitionRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteMonitoringScheduleRequestFilterSensitiveLog = (obj: DeleteMonitoringScheduleRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteNotebookInstanceInputFilterSensitiveLog = (obj: DeleteNotebookInstanceInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteNotebookInstanceLifecycleConfigInputFilterSensitiveLog = (
  obj: DeleteNotebookInstanceLifecycleConfigInput
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeletePipelineRequestFilterSensitiveLog = (obj: DeletePipelineRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeletePipelineResponseFilterSensitiveLog = (obj: DeletePipelineResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteProjectInputFilterSensitiveLog = (obj: DeleteProjectInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteStudioLifecycleConfigRequestFilterSensitiveLog = (obj: DeleteStudioLifecycleConfigRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteTagsInputFilterSensitiveLog = (obj: DeleteTagsInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteTagsOutputFilterSensitiveLog = (obj: DeleteTagsOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteTrialRequestFilterSensitiveLog = (obj: DeleteTrialRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteTrialResponseFilterSensitiveLog = (obj: DeleteTrialResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteTrialComponentRequestFilterSensitiveLog = (obj: DeleteTrialComponentRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteTrialComponentResponseFilterSensitiveLog = (obj: DeleteTrialComponentResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteUserProfileRequestFilterSensitiveLog = (obj: DeleteUserProfileRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteWorkforceRequestFilterSensitiveLog = (obj: DeleteWorkforceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteWorkforceResponseFilterSensitiveLog = (obj: DeleteWorkforceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteWorkteamRequestFilterSensitiveLog = (obj: DeleteWorkteamRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteWorkteamResponseFilterSensitiveLog = (obj: DeleteWorkteamResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeployedImageFilterSensitiveLog = (obj: DeployedImage): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EdgeDeploymentStatusFilterSensitiveLog = (obj: EdgeDeploymentStatus): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeploymentStageStatusSummaryFilterSensitiveLog = (obj: DeploymentStageStatusSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeregisterDevicesRequestFilterSensitiveLog = (obj: DeregisterDevicesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeActionRequestFilterSensitiveLog = (obj: DescribeActionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeActionResponseFilterSensitiveLog = (obj: DescribeActionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeAlgorithmInputFilterSensitiveLog = (obj: DescribeAlgorithmInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeAlgorithmOutputFilterSensitiveLog = (obj: DescribeAlgorithmOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeAppRequestFilterSensitiveLog = (obj: DescribeAppRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeAppResponseFilterSensitiveLog = (obj: DescribeAppResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeAppImageConfigRequestFilterSensitiveLog = (obj: DescribeAppImageConfigRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeAppImageConfigResponseFilterSensitiveLog = (obj: DescribeAppImageConfigResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeArtifactRequestFilterSensitiveLog = (obj: DescribeArtifactRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeArtifactResponseFilterSensitiveLog = (obj: DescribeArtifactResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeAutoMLJobRequestFilterSensitiveLog = (obj: DescribeAutoMLJobRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModelDeployResultFilterSensitiveLog = (obj: ModelDeployResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ResolvedAttributesFilterSensitiveLog = (obj: ResolvedAttributes): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeAutoMLJobResponseFilterSensitiveLog = (obj: DescribeAutoMLJobResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeCodeRepositoryInputFilterSensitiveLog = (obj: DescribeCodeRepositoryInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeCodeRepositoryOutputFilterSensitiveLog = (obj: DescribeCodeRepositoryOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeCompilationJobRequestFilterSensitiveLog = (obj: DescribeCompilationJobRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModelArtifactsFilterSensitiveLog = (obj: ModelArtifacts): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModelDigestsFilterSensitiveLog = (obj: ModelDigests): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeCompilationJobResponseFilterSensitiveLog = (obj: DescribeCompilationJobResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeContextRequestFilterSensitiveLog = (obj: DescribeContextRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeContextResponseFilterSensitiveLog = (obj: DescribeContextResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeDataQualityJobDefinitionRequestFilterSensitiveLog = (
  obj: DescribeDataQualityJobDefinitionRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeDataQualityJobDefinitionResponseFilterSensitiveLog = (
  obj: DescribeDataQualityJobDefinitionResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeDeviceRequestFilterSensitiveLog = (obj: DescribeDeviceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EdgeModelFilterSensitiveLog = (obj: EdgeModel): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeDeviceResponseFilterSensitiveLog = (obj: DescribeDeviceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeDeviceFleetRequestFilterSensitiveLog = (obj: DescribeDeviceFleetRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeDeviceFleetResponseFilterSensitiveLog = (obj: DescribeDeviceFleetResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeDomainRequestFilterSensitiveLog = (obj: DescribeDomainRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeDomainResponseFilterSensitiveLog = (obj: DescribeDomainResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeEdgeDeploymentPlanRequestFilterSensitiveLog = (obj: DescribeEdgeDeploymentPlanRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeEdgeDeploymentPlanResponseFilterSensitiveLog = (obj: DescribeEdgeDeploymentPlanResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeEdgePackagingJobRequestFilterSensitiveLog = (obj: DescribeEdgePackagingJobRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EdgePresetDeploymentOutputFilterSensitiveLog = (obj: EdgePresetDeploymentOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeEdgePackagingJobResponseFilterSensitiveLog = (obj: DescribeEdgePackagingJobResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeEndpointInputFilterSensitiveLog = (obj: DescribeEndpointInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ProductionVariantStatusFilterSensitiveLog = (obj: ProductionVariantStatus): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PendingProductionVariantSummaryFilterSensitiveLog = (obj: PendingProductionVariantSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PendingDeploymentSummaryFilterSensitiveLog = (obj: PendingDeploymentSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ProductionVariantSummaryFilterSensitiveLog = (obj: ProductionVariantSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeEndpointOutputFilterSensitiveLog = (obj: DescribeEndpointOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeEndpointConfigInputFilterSensitiveLog = (obj: DescribeEndpointConfigInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeEndpointConfigOutputFilterSensitiveLog = (obj: DescribeEndpointConfigOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeExperimentRequestFilterSensitiveLog = (obj: DescribeExperimentRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ExperimentSourceFilterSensitiveLog = (obj: ExperimentSource): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeExperimentResponseFilterSensitiveLog = (obj: DescribeExperimentResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeFeatureGroupRequestFilterSensitiveLog = (obj: DescribeFeatureGroupRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LastUpdateStatusFilterSensitiveLog = (obj: LastUpdateStatus): any => ({
  ...obj,
});

/**
 * @internal
 */
export const OfflineStoreStatusFilterSensitiveLog = (obj: OfflineStoreStatus): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeFeatureGroupResponseFilterSensitiveLog = (obj: DescribeFeatureGroupResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeFeatureMetadataRequestFilterSensitiveLog = (obj: DescribeFeatureMetadataRequest): any => ({
  ...obj,
});
