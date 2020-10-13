import {
  AccountCustomization,
  AssignmentStatus,
  ColumnGroup,
  DashboardPublishOptions,
  DashboardSearchFilter,
  DashboardSourceEntity,
  DashboardSummary,
  DataSetImportMode,
  DataSourceCredentials,
  DataSourceParameters,
  Group,
  LogicalTable,
  PhysicalTable,
  ResourcePermission,
  ResourceStatus,
  RowLevelPermissionDataSet,
  SslProperties,
  Tag,
  TemplateAlias,
  TemplateSourceEntity,
  ThemeAlias,
  ThemeConfiguration,
  User,
  UserRole,
  VpcConnectionProperties,
  _Parameters,
} from "./models_0";
import { SENSITIVE_STRING } from "@aws-sdk/smithy-client";

export interface RegisterUserResponse {
  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>The URL the user visits to complete registration and provide a password. This is
   * 			returned only for users with an identity type of <code>QUICKSIGHT</code>.</p>
   */
  UserInvitationUrl?: string;

  /**
   * <p>The user name.</p>
   */
  User?: User;
}

export namespace RegisterUserResponse {
  export const filterSensitiveLog = (obj: RegisterUserResponse): any => ({
    ...obj,
  });
}

export interface SearchDashboardsRequest {
  /**
   * <p>The maximum number of results to be returned per request.</p>
   */
  MaxResults?: number;

  /**
   * <p>The ID of the AWS account that contains the user whose dashboards you're searching for.
   * 		</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The filters to apply to the search. Currently, you can search only by user name,
   * 			for example, <code>"Filters": [
   * 				{
   * 				"Name": "QUICKSIGHT_USER",
   * 				"Operator": "StringEquals",
   * 				"Value": "arn:aws:quicksight:us-east-1:1:user/default/UserName1"
   * 				}
   * 				]</code>
   *          </p>
   */
  Filters: DashboardSearchFilter[] | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  NextToken?: string;
}

export namespace SearchDashboardsRequest {
  export const filterSensitiveLog = (obj: SearchDashboardsRequest): any => ({
    ...obj,
  });
}

export interface SearchDashboardsResponse {
  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>The list of dashboards owned by the user specified in <code>Filters</code> in your request.</p>
   */
  DashboardSummaryList?: DashboardSummary[];

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  NextToken?: string;
}

export namespace SearchDashboardsResponse {
  export const filterSensitiveLog = (obj: SearchDashboardsResponse): any => ({
    ...obj,
  });
}

export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource that you want to tag.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>Contains a map of the key-value pairs for the resource tag or tags assigned to the resource.</p>
   */
  Tags: Tag[] | undefined;
}

export namespace TagResourceRequest {
  export const filterSensitiveLog = (obj: TagResourceRequest): any => ({
    ...obj,
  });
}

export interface TagResourceResponse {
  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;
}

export namespace TagResourceResponse {
  export const filterSensitiveLog = (obj: TagResourceResponse): any => ({
    ...obj,
  });
}

export interface UntagResourceRequest {
  /**
   * <p>The keys of the key-value pairs for the resource tag or tags assigned to the resource.</p>
   */
  TagKeys: string[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the resource that you want to untag.</p>
   */
  ResourceArn: string | undefined;
}

export namespace UntagResourceRequest {
  export const filterSensitiveLog = (obj: UntagResourceRequest): any => ({
    ...obj,
  });
}

export interface UntagResourceResponse {
  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;
}

export namespace UntagResourceResponse {
  export const filterSensitiveLog = (obj: UntagResourceResponse): any => ({
    ...obj,
  });
}

export interface UpdateAccountCustomizationRequest {
  /**
   * <p>The ID for the AWS account that you want to update QuickSight customizations for.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The namespace associated with the customization that you're updating.</p>
   */
  Namespace?: string;

  /**
   * <p>The customizations you want to update in QuickSight.</p>
   */
  AccountCustomization: AccountCustomization | undefined;
}

export namespace UpdateAccountCustomizationRequest {
  export const filterSensitiveLog = (obj: UpdateAccountCustomizationRequest): any => ({
    ...obj,
  });
}

export interface UpdateAccountCustomizationResponse {
  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>The customizations associated with your QuickSight subscription.</p>
   */
  AccountCustomization?: AccountCustomization;

  /**
   * <p>The ID for the AWS account that you want to update QuickSight customizations for.</p>
   */
  AwsAccountId?: string;

  /**
   * <p>The namespace associated with the customization that you're updating.</p>
   */
  Namespace?: string;
}

export namespace UpdateAccountCustomizationResponse {
  export const filterSensitiveLog = (obj: UpdateAccountCustomizationResponse): any => ({
    ...obj,
  });
}

export interface UpdateAccountSettingsRequest {
  /**
   * <p>The ID for the AWS account that contains the QuickSight namespaces that you want to list.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>Email address used to send notifications regarding administration of QuickSight.</p>
   */
  NotificationEmail?: string;

  /**
   * <p>The default namespace for this AWS Account. Currently, the default is <code>default</code>. IAM users who register for the first time with QuickSight provide an email that becomes associated with the default namespace.</p>
   */
  DefaultNamespace: string | undefined;
}

export namespace UpdateAccountSettingsRequest {
  export const filterSensitiveLog = (obj: UpdateAccountSettingsRequest): any => ({
    ...obj,
  });
}

export interface UpdateAccountSettingsResponse {
  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;
}

export namespace UpdateAccountSettingsResponse {
  export const filterSensitiveLog = (obj: UpdateAccountSettingsResponse): any => ({
    ...obj,
  });
}

export interface UpdateDashboardRequest {
  /**
   * <p>The entity that you are using as a source when you update the dashboard. In
   * 			<code>SourceEntity</code>, you specify the type of object you're using as source. You
   * 			can only update a dashboard from a template, so you use a <code>SourceTemplate</code>
   * 			entity. If you need to update a dashboard from an analysis, first convert the analysis
   * 			to a template by using the <a>CreateTemplate</a> API operation. For
   * 			<code>SourceTemplate</code>, specify the Amazon Resource Name (ARN) of the source
   * 			template. The <code>SourceTemplate</code> ARN can contain any AWS Account and any QuickSight-supported
   * 			AWS Region. </p>
   * 		       <p>Use the <code>DataSetReferences</code> entity within <code>SourceTemplate</code>
   * 			to list the replacement datasets for the placeholders listed
   * 			in the original. The schema in each dataset must match its placeholder. </p>
   */
  SourceEntity: DashboardSourceEntity | undefined;

  /**
   * <p>Options for publishing the dashboard when you create it:</p>
   * 		       <ul>
   *             <li>
   * 				           <p>
   *                   <code>AvailabilityStatus</code> for <code>AdHocFilteringOption</code> - This status can be
   * 					either <code>ENABLED</code> or <code>DISABLED</code>. When this is set to
   * 						<code>DISABLED</code>, QuickSight disables the left filter pane on the
   * 					published dashboard, which can be used for ad hoc (one-time) filtering. This
   * 					option is <code>ENABLED</code> by default. </p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>AvailabilityStatus</code> for <code>ExportToCSVOption</code> - This status can be
   * 					either <code>ENABLED</code> or <code>DISABLED</code>. The visual option to
   * 					export data to .csv format isn't enabled when this is set to
   * 						<code>DISABLED</code>. This option is <code>ENABLED</code> by default. </p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>VisibilityState</code> for <code>SheetControlsOption</code> - This visibility state
   * 					can be either <code>COLLAPSED</code> or <code>EXPANDED</code>. This option is
   * 					<code>COLLAPSED</code> by default. </p>
   * 			         </li>
   *          </ul>
   */
  DashboardPublishOptions?: DashboardPublishOptions;

  /**
   * <p>The Amazon Resource Name (ARN) of the theme that is being used for this dashboard. If you add a value
   * 			for this field, it overrides the value that was originally associated with the entity. The theme ARN must
   * 			exist in the same AWS account where you create the dashboard.</p>
   */
  ThemeArn?: string;

  /**
   * <p>A structure that contains the parameters of the dashboard. These are parameter overrides for
   * 			a dashboard. A dashboard can have any type of parameters, and some parameters might
   * 			accept multiple values.</p>
   */
  Parameters?: _Parameters;

  /**
   * <p>The ID for the dashboard.</p>
   */
  DashboardId: string | undefined;

  /**
   * <p>A description for the first version of the dashboard being created.</p>
   */
  VersionDescription?: string;

  /**
   * <p>The ID of the AWS account that contains the dashboard that you're updating.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The display name of the dashboard.</p>
   */
  Name: string | undefined;
}

export namespace UpdateDashboardRequest {
  export const filterSensitiveLog = (obj: UpdateDashboardRequest): any => ({
    ...obj,
  });
}

export interface UpdateDashboardResponse {
  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  Arn?: string;

  /**
   * <p>The ARN of the dashboard, including the version number.</p>
   */
  VersionArn?: string;

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;

  /**
   * <p>The ID for the dashboard.</p>
   */
  DashboardId?: string;

  /**
   * <p>The creation status of the request.</p>
   */
  CreationStatus?: ResourceStatus | string;
}

export namespace UpdateDashboardResponse {
  export const filterSensitiveLog = (obj: UpdateDashboardResponse): any => ({
    ...obj,
  });
}

export interface UpdateDashboardPermissionsRequest {
  /**
   * <p>The ID of the AWS account that contains the dashboard whose permissions you're
   * 			updating.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID for the dashboard.</p>
   */
  DashboardId: string | undefined;

  /**
   * <p>The permissions that you want to grant on this resource.</p>
   */
  GrantPermissions?: ResourcePermission[];

  /**
   * <p>The permissions that you want to revoke from this resource.</p>
   */
  RevokePermissions?: ResourcePermission[];
}

export namespace UpdateDashboardPermissionsRequest {
  export const filterSensitiveLog = (obj: UpdateDashboardPermissionsRequest): any => ({
    ...obj,
  });
}

export interface UpdateDashboardPermissionsResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the dashboard.</p>
   */
  DashboardArn?: string;

  /**
   * <p>Information about the permissions on the dashboard.</p>
   */
  Permissions?: ResourcePermission[];

  /**
   * <p>The ID for the dashboard.</p>
   */
  DashboardId?: string;

  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;
}

export namespace UpdateDashboardPermissionsResponse {
  export const filterSensitiveLog = (obj: UpdateDashboardPermissionsResponse): any => ({
    ...obj,
  });
}

export interface UpdateDashboardPublishedVersionRequest {
  /**
   * <p>The version number of the dashboard.</p>
   */
  VersionNumber: number | undefined;

  /**
   * <p>The ID of the AWS account that contains the dashboard that you're updating.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID for the dashboard.</p>
   */
  DashboardId: string | undefined;
}

export namespace UpdateDashboardPublishedVersionRequest {
  export const filterSensitiveLog = (obj: UpdateDashboardPublishedVersionRequest): any => ({
    ...obj,
  });
}

export interface UpdateDashboardPublishedVersionResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the dashboard.</p>
   */
  DashboardArn?: string;

  /**
   * <p>The ID for the dashboard.</p>
   */
  DashboardId?: string;

  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;
}

export namespace UpdateDashboardPublishedVersionResponse {
  export const filterSensitiveLog = (obj: UpdateDashboardPublishedVersionResponse): any => ({
    ...obj,
  });
}

export interface UpdateDataSetRequest {
  /**
   * <p>Groupings of columns that work together in certain QuickSight features. Currently, only geospatial hierarchy is supported.</p>
   */
  ColumnGroups?: ColumnGroup[];

  /**
   * <p>Indicates whether you want to import the data into SPICE.</p>
   */
  ImportMode: DataSetImportMode | string | undefined;

  /**
   * <p>The row-level security configuration for the data you want to create.</p>
   */
  RowLevelPermissionDataSet?: RowLevelPermissionDataSet;

  /**
   * <p>Declares the physical tables that are available in the underlying data sources.</p>
   */
  PhysicalTableMap: { [key: string]: PhysicalTable } | undefined;

  /**
   * <p>The display name for the dataset.</p>
   */
  Name: string | undefined;

  /**
   * <p>Configures the combination and transformation of the data from the physical tables.</p>
   */
  LogicalTableMap?: { [key: string]: LogicalTable };

  /**
   * <p>The ID for the dataset that you want to update. This ID is unique per AWS Region for each
   * 			AWS account.</p>
   */
  DataSetId: string | undefined;

  /**
   * <p>The AWS account ID.</p>
   */
  AwsAccountId: string | undefined;
}

export namespace UpdateDataSetRequest {
  export const filterSensitiveLog = (obj: UpdateDataSetRequest): any => ({
    ...obj,
  });
}

export interface UpdateDataSetResponse {
  /**
   * <p>The ID of the ingestion, which is triggered as a result of dataset creation if the import
   * 			mode is SPICE.</p>
   */
  IngestionId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the dataset.</p>
   */
  Arn?: string;

  /**
   * <p>The ID for the dataset that you want to create. This ID is unique per AWS Region for each AWS account.</p>
   */
  DataSetId?: string;

  /**
   * <p>The ARN for the ingestion, which is triggered as a result of dataset creation if the import
   * 			mode is SPICE.</p>
   */
  IngestionArn?: string;

  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;
}

export namespace UpdateDataSetResponse {
  export const filterSensitiveLog = (obj: UpdateDataSetResponse): any => ({
    ...obj,
  });
}

export interface UpdateDataSetPermissionsRequest {
  /**
   * <p>The AWS account ID.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID for the dataset whose permissions you want to update. This ID is unique per AWS
   * 			Region for each AWS account.</p>
   */
  DataSetId: string | undefined;

  /**
   * <p>The resource permissions that you want to grant to the dataset.</p>
   */
  GrantPermissions?: ResourcePermission[];

  /**
   * <p>The resource permissions that you want to revoke from the dataset.</p>
   */
  RevokePermissions?: ResourcePermission[];
}

export namespace UpdateDataSetPermissionsRequest {
  export const filterSensitiveLog = (obj: UpdateDataSetPermissionsRequest): any => ({
    ...obj,
  });
}

export interface UpdateDataSetPermissionsResponse {
  /**
   * <p>The ID for the dataset whose permissions you want to update. This ID is unique per AWS
   * 			Region for each AWS account.</p>
   */
  DataSetId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the dataset.</p>
   */
  DataSetArn?: string;

  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;
}

export namespace UpdateDataSetPermissionsResponse {
  export const filterSensitiveLog = (obj: UpdateDataSetPermissionsResponse): any => ({
    ...obj,
  });
}

export interface UpdateDataSourceRequest {
  /**
   * <p>A display name for the data source.</p>
   */
  Name: string | undefined;

  /**
   * <p>The credentials that QuickSight that uses to connect to your underlying source. Currently,
   * 			only credentials based on user name and password are supported.</p>
   */
  Credentials?: DataSourceCredentials;

  /**
   * <p>The ID of the data source. This ID is unique per AWS Region for each AWS account. </p>
   */
  DataSourceId: string | undefined;

  /**
   * <p>The AWS account ID.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The parameters that QuickSight uses to connect to your underlying source.</p>
   */
  DataSourceParameters?: DataSourceParameters;

  /**
   * <p>Secure Socket Layer (SSL) properties that apply when QuickSight connects to your underlying
   * 			source.</p>
   */
  SslProperties?: SslProperties;

  /**
   * <p>Use this parameter only when you want QuickSight to use a VPC connection when connecting to
   * 			your underlying source.</p>
   */
  VpcConnectionProperties?: VpcConnectionProperties;
}

export namespace UpdateDataSourceRequest {
  export const filterSensitiveLog = (obj: UpdateDataSourceRequest): any => ({
    ...obj,
    ...(obj.Credentials && { Credentials: SENSITIVE_STRING }),
  });
}

export interface UpdateDataSourceResponse {
  /**
   * <p>The update status of the data source's last update.</p>
   */
  UpdateStatus?: ResourceStatus | string;

  /**
   * <p>The ID of the data source. This ID is unique per AWS Region for each AWS account.</p>
   */
  DataSourceId?: string;

  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the data source.</p>
   */
  Arn?: string;
}

export namespace UpdateDataSourceResponse {
  export const filterSensitiveLog = (obj: UpdateDataSourceResponse): any => ({
    ...obj,
  });
}

export interface UpdateDataSourcePermissionsRequest {
  /**
   * <p>The ID of the data source. This ID is unique per AWS Region for each AWS account. </p>
   */
  DataSourceId: string | undefined;

  /**
   * <p>A list of resource permissions that you want to grant on the data source.</p>
   */
  GrantPermissions?: ResourcePermission[];

  /**
   * <p>The AWS account ID.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>A list of resource permissions that you want to revoke on the data source.</p>
   */
  RevokePermissions?: ResourcePermission[];
}

export namespace UpdateDataSourcePermissionsRequest {
  export const filterSensitiveLog = (obj: UpdateDataSourcePermissionsRequest): any => ({
    ...obj,
  });
}

export interface UpdateDataSourcePermissionsResponse {
  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>The ID of the data source. This ID is unique per AWS Region for each AWS account.</p>
   */
  DataSourceId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the data source.</p>
   */
  DataSourceArn?: string;
}

export namespace UpdateDataSourcePermissionsResponse {
  export const filterSensitiveLog = (obj: UpdateDataSourcePermissionsResponse): any => ({
    ...obj,
  });
}

export interface UpdateGroupRequest {
  /**
   * <p>The ID for the AWS account that the group is in. Currently, you use the ID for the AWS
   * 			account that contains your Amazon QuickSight account.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The namespace. Currently, you should set this to <code>default</code>.</p>
   */
  Namespace: string | undefined;

  /**
   * <p>The description for the group that you want to update.</p>
   */
  Description?: string;

  /**
   * <p>The name of the group that you want to update.</p>
   */
  GroupName: string | undefined;
}

export namespace UpdateGroupRequest {
  export const filterSensitiveLog = (obj: UpdateGroupRequest): any => ({
    ...obj,
  });
}

export interface UpdateGroupResponse {
  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>The name of the group.</p>
   */
  Group?: Group;
}

export namespace UpdateGroupResponse {
  export const filterSensitiveLog = (obj: UpdateGroupResponse): any => ({
    ...obj,
  });
}

export interface UpdateIAMPolicyAssignmentRequest {
  /**
   * <p>The ARN for the IAM policy to apply to the QuickSight users and groups
   * 			specified in this assignment.</p>
   */
  PolicyArn?: string;

  /**
   * <p>The status of the assignment. Possible values are as follows:</p>
   * 		       <ul>
   *             <li>
   *                <p>
   *                   <code>ENABLED</code> - Anything specified in this assignment is used when creating the data
   * 				source.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DISABLED</code> - This assignment isn't used when creating the data source.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DRAFT</code> - This assignment is an unfinished draft and isn't used when creating the
   * 				data source.</p>
   *             </li>
   *          </ul>
   */
  AssignmentStatus?: AssignmentStatus | string;

  /**
   * <p>The name of the assignment. This name must be unique within an AWS account.</p>
   */
  AssignmentName: string | undefined;

  /**
   * <p>The QuickSight users, groups, or both that you want to assign the policy to.</p>
   */
  Identities?: { [key: string]: string[] };

  /**
   * <p>The ID of the AWS account that contains the IAM policy assignment.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The namespace of the assignment.</p>
   */
  Namespace: string | undefined;
}

export namespace UpdateIAMPolicyAssignmentRequest {
  export const filterSensitiveLog = (obj: UpdateIAMPolicyAssignmentRequest): any => ({
    ...obj,
  });
}

export interface UpdateIAMPolicyAssignmentResponse {
  /**
   * <p>The ARN for the IAM policy applied to the QuickSight users and groups specified in this
   * 			assignment.</p>
   */
  PolicyArn?: string;

  /**
   * <p>The status of the assignment. Possible values are as follows:</p>
   * 		       <ul>
   *             <li>
   *                <p>
   *                   <code>ENABLED</code> - Anything specified in this assignment is used when creating the data
   * 				source.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DISABLED</code> - This assignment isn't used when creating the data source.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DRAFT</code> - This assignment is an unfinished draft and isn't used when creating the
   * 				data source.</p>
   *             </li>
   *          </ul>
   */
  AssignmentStatus?: AssignmentStatus | string;

  /**
   * <p>The name of the assignment. </p>
   */
  AssignmentName?: string;

  /**
   * <p>The QuickSight users, groups, or both that the IAM policy is assigned to.</p>
   */
  Identities?: { [key: string]: string[] };

  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>The ID of the assignment.</p>
   */
  AssignmentId?: string;
}

export namespace UpdateIAMPolicyAssignmentResponse {
  export const filterSensitiveLog = (obj: UpdateIAMPolicyAssignmentResponse): any => ({
    ...obj,
  });
}

export interface UpdateTemplateRequest {
  /**
   * <p>The entity that you are using as a source when you update the template. In
   * 			<code>SourceEntity</code>, you specify the type of object you're using as source:
   * 			<code>SourceTemplate</code> for a template or <code>SourceAnalysis</code> for an
   * 			analysis. Both of these require an Amazon Resource Name (ARN). For
   * 			<code>SourceTemplate</code>, specify the ARN of the source template. For
   * 			<code>SourceAnalysis</code>, specify the ARN of the source analysis. The <code>SourceTemplate</code>
   * 			ARN can contain any AWS Account and any QuickSight-supported AWS Region. </p>
   * 		       <p>Use the <code>DataSetReferences</code> entity within <code>SourceTemplate</code> or
   * 			<code>SourceAnalysis</code> to list the replacement datasets for the placeholders listed
   * 			in the original. The schema in each dataset must match its placeholder. </p>
   */
  SourceEntity: TemplateSourceEntity | undefined;

  /**
   * <p>A description of the current template version that is being updated. Every time you call
   * 				<code>UpdateTemplate</code>, you create a new version of the template. Each version
   * 			of the template maintains a description of the version in the
   * 				<code>VersionDescription</code> field.</p>
   */
  VersionDescription?: string;

  /**
   * <p>The ID for the template.</p>
   */
  TemplateId: string | undefined;

  /**
   * <p>The ID of the AWS account that contains the template that you're updating.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The name for the template.</p>
   */
  Name?: string;
}

export namespace UpdateTemplateRequest {
  export const filterSensitiveLog = (obj: UpdateTemplateRequest): any => ({
    ...obj,
  });
}

export interface UpdateTemplateResponse {
  /**
   * <p>The creation status of the template.</p>
   */
  CreationStatus?: ResourceStatus | string;

  /**
   * <p>The Amazon Resource Name (ARN) for the template.</p>
   */
  Arn?: string;

  /**
   * <p>The ARN for the template, including the version information of the first version.</p>
   */
  VersionArn?: string;

  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>The ID for the template.</p>
   */
  TemplateId?: string;
}

export namespace UpdateTemplateResponse {
  export const filterSensitiveLog = (obj: UpdateTemplateResponse): any => ({
    ...obj,
  });
}

export interface UpdateTemplateAliasRequest {
  /**
   * <p>The ID of the AWS account that contains the template alias that you're updating.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The version number of the template.</p>
   */
  TemplateVersionNumber: number | undefined;

  /**
   * <p>The alias of the template that you want to update. If you name a specific alias, you update
   * 			the version that the alias points to. You can specify the latest version of the template
   * 			by providing the keyword <code>$LATEST</code> in the <code>AliasName</code> parameter.
   * 			The keyword <code>$PUBLISHED</code> doesn't apply to templates.</p>
   */
  AliasName: string | undefined;

  /**
   * <p>The ID for the template.</p>
   */
  TemplateId: string | undefined;
}

export namespace UpdateTemplateAliasRequest {
  export const filterSensitiveLog = (obj: UpdateTemplateAliasRequest): any => ({
    ...obj,
  });
}

export interface UpdateTemplateAliasResponse {
  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>The template alias.</p>
   */
  TemplateAlias?: TemplateAlias;
}

export namespace UpdateTemplateAliasResponse {
  export const filterSensitiveLog = (obj: UpdateTemplateAliasResponse): any => ({
    ...obj,
  });
}

export interface UpdateTemplatePermissionsRequest {
  /**
   * <p>A list of resource permissions to be revoked from the template. </p>
   */
  RevokePermissions?: ResourcePermission[];

  /**
   * <p>The ID for the template.</p>
   */
  TemplateId: string | undefined;

  /**
   * <p>A list of resource permissions to be granted on the template. </p>
   */
  GrantPermissions?: ResourcePermission[];

  /**
   * <p>The ID of the AWS account that contains the template.</p>
   */
  AwsAccountId: string | undefined;
}

export namespace UpdateTemplatePermissionsRequest {
  export const filterSensitiveLog = (obj: UpdateTemplatePermissionsRequest): any => ({
    ...obj,
  });
}

export interface UpdateTemplatePermissionsResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the template.</p>
   */
  TemplateArn?: string;

  /**
   * <p>The ID for the template.</p>
   */
  TemplateId?: string;

  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>A list of resource permissions to be set on the template.</p>
   */
  Permissions?: ResourcePermission[];
}

export namespace UpdateTemplatePermissionsResponse {
  export const filterSensitiveLog = (obj: UpdateTemplatePermissionsResponse): any => ({
    ...obj,
  });
}

export interface UpdateThemeRequest {
  /**
   * <p>The theme configuration, which contains the theme display properties.</p>
   */
  Configuration?: ThemeConfiguration;

  /**
   * <p>The ID for the theme.</p>
   */
  ThemeId: string | undefined;

  /**
   * <p>The theme ID, defined by Amazon QuickSight, that a custom theme inherits from.
   * 		All themes initially inherit from a default QuickSight theme.</p>
   */
  BaseThemeId: string | undefined;

  /**
   * <p>A description of the theme version that you're updating Every time that you call
   * 				<code>UpdateTheme</code>, you create a new version of the theme. Each version of the
   * 			theme maintains a description of the version in <code>VersionDescription</code>.</p>
   */
  VersionDescription?: string;

  /**
   * <p>The name for the theme.</p>
   */
  Name?: string;

  /**
   * <p>The ID of the AWS account that contains the theme that you're updating.</p>
   */
  AwsAccountId: string | undefined;
}

export namespace UpdateThemeRequest {
  export const filterSensitiveLog = (obj: UpdateThemeRequest): any => ({
    ...obj,
  });
}

export interface UpdateThemeResponse {
  /**
   * <p>The ID for the theme.</p>
   */
  ThemeId?: string;

  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) for the new version of the theme.</p>
   */
  VersionArn?: string;

  /**
   * <p>The creation status of the theme.</p>
   */
  CreationStatus?: ResourceStatus | string;

  /**
   * <p>The Amazon Resource Name (ARN) for the theme.</p>
   */
  Arn?: string;
}

export namespace UpdateThemeResponse {
  export const filterSensitiveLog = (obj: UpdateThemeResponse): any => ({
    ...obj,
  });
}

export interface UpdateThemeAliasRequest {
  /**
   * <p>The version number of the theme that the alias should reference.</p>
   */
  ThemeVersionNumber: number | undefined;

  /**
   * <p>The name of the theme alias that you want to update.</p>
   */
  AliasName: string | undefined;

  /**
   * <p>The ID of the AWS account that contains the theme alias that you're updating.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID for the theme.</p>
   */
  ThemeId: string | undefined;
}

export namespace UpdateThemeAliasRequest {
  export const filterSensitiveLog = (obj: UpdateThemeAliasRequest): any => ({
    ...obj,
  });
}

export interface UpdateThemeAliasResponse {
  /**
   * <p>Information about the theme alias.</p>
   */
  ThemeAlias?: ThemeAlias;

  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;
}

export namespace UpdateThemeAliasResponse {
  export const filterSensitiveLog = (obj: UpdateThemeAliasResponse): any => ({
    ...obj,
  });
}

export interface UpdateThemePermissionsRequest {
  /**
   * <p>A list of resource permissions to be revoked from the theme.</p>
   */
  RevokePermissions?: ResourcePermission[];

  /**
   * <p>The ID for the theme.</p>
   */
  ThemeId: string | undefined;

  /**
   * <p>The ID of the AWS account that contains the theme.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>A list of resource permissions to be granted for the theme.</p>
   */
  GrantPermissions?: ResourcePermission[];
}

export namespace UpdateThemePermissionsRequest {
  export const filterSensitiveLog = (obj: UpdateThemePermissionsRequest): any => ({
    ...obj,
  });
}

export interface UpdateThemePermissionsResponse {
  /**
   * <p>The resulting list of resource permissions for the theme.</p>
   */
  Permissions?: ResourcePermission[];

  /**
   * <p>The ID for the theme.</p>
   */
  ThemeId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the theme.</p>
   */
  ThemeArn?: string;

  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;
}

export namespace UpdateThemePermissionsResponse {
  export const filterSensitiveLog = (obj: UpdateThemePermissionsResponse): any => ({
    ...obj,
  });
}

export interface UpdateUserRequest {
  /**
   * <p>The namespace. Currently, you should set this to <code>default</code>.</p>
   */
  Namespace: string | undefined;

  /**
   * <p>The name of the custom permissions profile that you want to assign to this user.
   *         Currently, custom permissions profile names are assigned to permissions profiles in the
   *         QuickSight console. You use this API to assign the named set of permissions to a
   *         QuickSight user. </p>
   */
  CustomPermissionsName?: string;

  /**
   * <p>The email address of the user that you want to update.</p>
   */
  Email: string | undefined;

  /**
   * <p>The ID for the AWS account that the user is in. Currently, you use the ID for the AWS
   * 			account that contains your Amazon QuickSight account.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The Amazon QuickSight user name that you want to update.</p>
   */
  UserName: string | undefined;

  /**
   * <p>A flag that you use to indicate that you want to remove all custom permissions
   *             from this user. Using this parameter resets the user to the state
   *             it was in before a custom permissions profile was applied. This parameter defaults to
   *             NULL and it doesn't accept any other value.</p>
   */
  UnapplyCustomPermissions?: boolean;

  /**
   * <p>The Amazon QuickSight role of the user. The user role can be one of the
   * 			following:</p>
   * 		       <ul>
   *             <li>
   * 				           <p>
   *                   <code>READER</code>: A user who has read-only access to dashboards.</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>AUTHOR</code>: A user who can create data sources, datasets, analyses, and
   * 					dashboards.</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>ADMIN</code>: A user who is an author, who can also manage Amazon QuickSight
   * 					settings.</p>
   * 			         </li>
   *          </ul>
   */
  Role: UserRole | string | undefined;
}

export namespace UpdateUserRequest {
  export const filterSensitiveLog = (obj: UpdateUserRequest): any => ({
    ...obj,
  });
}

export interface UpdateUserResponse {
  /**
   * <p>The Amazon QuickSight user.</p>
   */
  User?: User;

  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;
}

export namespace UpdateUserResponse {
  export const filterSensitiveLog = (obj: UpdateUserResponse): any => ({
    ...obj,
  });
}