// smithy-typescript generated code
import {
  _InstanceType,
  ActiveInstance,
  ActivityStatus,
  AllocationStrategy,
  AllowedPrincipal,
  AlternatePathHint,
  AnalysisAclRule,
  AnalysisComponent,
  AnalysisRouteTableRoute,
  AnalysisSecurityGroupRule,
  AssociationStatus,
  BatchState,
  CurrencyCodeValues,
  IamInstanceProfileAssociation,
  IamInstanceProfileSpecification,
  InstanceEventWindow,
  IpPermission,
  PathComponent,
  PortRange,
  ReservedInstancesListing,
  ResourceType,
  SecurityGroupRule,
  Subnet,
  SubnetIpv6CidrBlockAssociation,
  Tag,
  TagSpecification,
  Tenancy,
  TransitGatewayAssociation,
  TransitGatewayAssociationState,
  TransitGatewayAttachmentResourceType,
  TransitGatewayAttachmentState,
  TransitGatewayMulticastDomainAssociations,
  TransitGatewayPeeringAttachment,
  TransitGatewayPolicyTableAssociation,
  TransitGatewayRouteTableRoute,
  TransitGatewayVpcAttachment,
  TrunkInterfaceAssociation,
  UserIdGroupPair,
  Vpc,
  VpcCidrBlockAssociation,
  VpcIpv6CidrBlockAssociation,
  VpcPeeringConnection,
} from "./models_0";
import {
  AttributeValue,
  BlockDeviceMapping,
  FleetLaunchTemplateSpecification,
  FleetType,
  GroupIdentifier,
  InstanceInterruptionBehavior,
  InstanceIpv6Address,
  InstanceRequirements,
  Ipv4PrefixSpecificationRequest,
  Ipv6PrefixSpecificationRequest,
  ManagedPrefixList,
  NatGateway,
  NetworkAcl,
  NetworkInsightsAccessScope,
  NetworkInsightsPath,
  NetworkInterface,
  NetworkInterfaceAttachment,
  NetworkInterfacePermission,
  PlacementGroup,
  PrivateIpAddressSpecification,
  ReplaceRootVolumeTask,
  RouteTable,
  Snapshot,
  SnapshotState,
  SpotDatafeedSubscription,
  SpotInstanceStateFault,
  SpotInstanceType,
  StorageTier,
  TargetCapacityUnitType,
  TrafficMirrorFilter,
  VolumeType,
} from "./models_1";
import {
  ConnectionNotification,
  DnsEntry,
  DnsNameState,
  Filter,
  IpAddressType,
  PayerResponsibility,
  ServiceConfiguration,
  ServiceConnectivityType,
  ServiceTypeDetail,
  State,
  TrafficMirrorSession,
  TrafficMirrorTarget,
  TransitGateway,
  TransitGatewayConnect,
  TransitGatewayConnectPeer,
  TransitGatewayMulticastDomain,
  TransitGatewayPolicyTable,
  TransitGatewayRouteTable,
  TransitGatewayRouteTableAnnouncement,
  Volume,
  VpcEndpoint,
  VpnConnection,
  VpnGateway,
} from "./models_2";
import {
  AttributeBooleanValue,
  EventInformation,
  FastLaunchLaunchTemplateSpecificationResponse,
  FastLaunchResourceType,
  FastLaunchSnapshotConfigurationResponse,
  FastLaunchStateCode,
  FastSnapshotRestoreStateCode,
  IdFormat,
  PermissionGroup,
  ProductCode,
} from "./models_3";

/**
 * <p>Describes a local gateway virtual interface group.</p>
 */
export interface LocalGatewayVirtualInterfaceGroup {
  /**
   * <p>The ID of the virtual interface group.</p>
   */
  LocalGatewayVirtualInterfaceGroupId?: string;

  /**
   * <p>The IDs of the virtual interfaces.</p>
   */
  LocalGatewayVirtualInterfaceIds?: string[];

  /**
   * <p>The ID of the local gateway.</p>
   */
  LocalGatewayId?: string;

  /**
   * <p>The ID of the Amazon Web Services account that owns the local gateway virtual interface group.</p>
   */
  OwnerId?: string;

  /**
   * <p>The tags assigned to the virtual interface group.</p>
   */
  Tags?: Tag[];
}

export interface DescribeLocalGatewayVirtualInterfaceGroupsResult {
  /**
   * <p>The virtual interface groups.</p>
   */
  LocalGatewayVirtualInterfaceGroups?: LocalGatewayVirtualInterfaceGroup[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export interface DescribeLocalGatewayVirtualInterfacesRequest {
  /**
   * <p>The IDs of the virtual interfaces.</p>
   */
  LocalGatewayVirtualInterfaceIds?: string[];

  /**
   * <p>One or more filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>local-address</code> - The local address.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>local-bgp-asn</code> - The Border Gateway Protocol (BGP) Autonomous System Number (ASN)
   *                of the local gateway.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>local-gateway-id</code> - The ID of the local gateway.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>local-gateway-virtual-interface-id</code> - The ID of the virtual interface.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>owner-id</code> - The ID of the Amazon Web Services account that owns the local gateway virtual interface.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>peer-address</code> - The peer address.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>peer-bgp-asn</code> - The peer BGP ASN.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>vlan</code> - The ID of the VLAN.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * <p>Describes a local gateway virtual interface.</p>
 */
export interface LocalGatewayVirtualInterface {
  /**
   * <p>The ID of the virtual interface.</p>
   */
  LocalGatewayVirtualInterfaceId?: string;

  /**
   * <p>The ID of the local gateway.</p>
   */
  LocalGatewayId?: string;

  /**
   * <p>The ID of the VLAN.</p>
   */
  Vlan?: number;

  /**
   * <p>The local address.</p>
   */
  LocalAddress?: string;

  /**
   * <p>The peer address.</p>
   */
  PeerAddress?: string;

  /**
   * <p>The Border Gateway Protocol (BGP) Autonomous System Number (ASN) of the local gateway.</p>
   */
  LocalBgpAsn?: number;

  /**
   * <p>The peer BGP ASN.</p>
   */
  PeerBgpAsn?: number;

  /**
   * <p>The ID of the Amazon Web Services account that owns the local gateway virtual interface.</p>
   */
  OwnerId?: string;

  /**
   * <p>The tags assigned to the virtual interface.</p>
   */
  Tags?: Tag[];
}

export interface DescribeLocalGatewayVirtualInterfacesResult {
  /**
   * <p>Information about the virtual interfaces.</p>
   */
  LocalGatewayVirtualInterfaces?: LocalGatewayVirtualInterface[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export interface DescribeManagedPrefixListsRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>One or more filters.</p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <code>owner-id</code> - The ID of the prefix list owner.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>prefix-list-id</code> - The ID of the prefix list.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>prefix-list-name</code> - The name of the prefix list.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>One or more prefix list IDs.</p>
   */
  PrefixListIds?: string[];
}

export interface DescribeManagedPrefixListsResult {
  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;

  /**
   * <p>Information about the prefix lists.</p>
   */
  PrefixLists?: ManagedPrefixList[];
}

export interface DescribeMovingAddressesRequest {
  /**
   * <p>One or more filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>moving-status</code> - The status of the Elastic IP address
   *           (<code>MovingToVpc</code> | <code>RestoringToClassic</code>).</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The maximum number of results to return for the request in a single page. The remaining
   *       results of the initial request can be seen by sending another request with the returned
   *       <code>NextToken</code> value. This value can be between 5 and 1000; if
   *       <code>MaxResults</code> is given a value outside of this range, an error is returned.</p>
   *          <p>Default: If no value is provided, the default is 1000.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>One or more Elastic IP addresses.</p>
   */
  PublicIps?: string[];
}

export enum MoveStatus {
  movingToVpc = "movingToVpc",
  restoringToClassic = "restoringToClassic",
}

/**
 * <p>Describes the status of a moving Elastic IP address.</p>
 *          <note>
 *             <p>We are retiring EC2-Classic on August 15, 2022. We recommend that you migrate from EC2-Classic to a VPC. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-migrate.html">Migrate from EC2-Classic to a VPC</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 *          </note>
 */
export interface MovingAddressStatus {
  /**
   * <p>The status of the Elastic IP address that's being moved to the EC2-VPC platform, or restored to the EC2-Classic platform.</p>
   */
  MoveStatus?: MoveStatus | string;

  /**
   * <p>The Elastic IP address.</p>
   */
  PublicIp?: string;
}

export interface DescribeMovingAddressesResult {
  /**
   * <p>The status for each Elastic IP address.</p>
   */
  MovingAddressStatuses?: MovingAddressStatus[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export interface DescribeNatGatewaysRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>One or more filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>nat-gateway-id</code> - The ID of the NAT gateway.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>state</code> - The state of the NAT gateway (<code>pending</code> |
   *               <code>failed</code> | <code>available</code> | <code>deleting</code> | <code>deleted</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>subnet-id</code> - The ID of the subnet in which the NAT gateway resides.</p>
   *             </li>
   *             <li>
   * 		             <p>
   *                   <code>tag</code>:<key> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value.
   *     For example, to find all resources that have a tag with the key <code>Owner</code> and the value <code>TeamA</code>, specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p>
   * 		          </li>
   *             <li>
   * 			            <p>
   *                   <code>tag-key</code> - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.</p>
   * 		          </li>
   *             <li>
   *                <p>
   *                   <code>vpc-id</code> - The ID of the VPC in which the NAT gateway resides.</p>
   *             </li>
   *          </ul>
   */
  Filter?: Filter[];

  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * <p>One or more NAT gateway IDs.</p>
   */
  NatGatewayIds?: string[];

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

export interface DescribeNatGatewaysResult {
  /**
   * <p>Information about the NAT gateways.</p>
   */
  NatGateways?: NatGateway[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export interface DescribeNetworkAclsRequest {
  /**
   * <p>One or more filters.</p>
   * 		       <ul>
   *             <li>
   * 		             <p>
   *                   <code>association.association-id</code> - The ID of an association ID for the ACL.</p>
   * 		          </li>
   *             <li>
   * 		             <p>
   *                   <code>association.network-acl-id</code> - The ID of the network ACL involved in the association.</p>
   * 		          </li>
   *             <li>
   * 		             <p>
   *                   <code>association.subnet-id</code> - The ID of the subnet involved in the association.</p>
   * 		          </li>
   *             <li>
   * 		             <p>
   *                   <code>default</code> - Indicates whether the ACL is the default network ACL for the VPC.</p>
   * 		          </li>
   *             <li>
   * 		             <p>
   *                   <code>entry.cidr</code> - The IPv4 CIDR range specified in the entry.</p>
   * 		          </li>
   *             <li>
   * 		             <p>
   *                   <code>entry.icmp.code</code> - The ICMP code specified in the entry, if any.</p>
   * 		          </li>
   *             <li>
   * 		             <p>
   *                   <code>entry.icmp.type</code> - The ICMP type specified in the entry, if any.</p>
   * 		          </li>
   *             <li>
   *                   <p>
   *                   <code>entry.ipv6-cidr</code> - The IPv6 CIDR range specified in the entry.</p>
   *                </li>
   *             <li>
   * 		             <p>
   *                   <code>entry.port-range.from</code> - The start of the port range specified in the entry. </p>
   * 		          </li>
   *             <li>
   * 		             <p>
   *                   <code>entry.port-range.to</code> - The end of the port range specified in the entry. </p>
   * 		          </li>
   *             <li>
   * 		             <p>
   *                   <code>entry.protocol</code> - The protocol specified in the entry (<code>tcp</code> | <code>udp</code> | <code>icmp</code> or a protocol number).</p>
   * 		          </li>
   *             <li>
   * 		             <p>
   *                   <code>entry.rule-action</code> - Allows or denies the matching traffic (<code>allow</code> | <code>deny</code>).</p>
   * 		          </li>
   *             <li>
   * 		            <p>
   *                   <code>entry.egress</code> - A Boolean that indicates the type of rule. Specify <code>true</code>
   * 		                for egress rules, or <code>false</code> for ingress rules.</p>
   * 		          </li>
   *             <li>
   * 		             <p>
   *                   <code>entry.rule-number</code> - The number of an entry (in other words, rule) in
   *                     the set of ACL entries.</p>
   * 		          </li>
   *             <li>
   * 		             <p>
   *                   <code>network-acl-id</code> - The ID of the network ACL.</p>
   * 		          </li>
   *             <li>
   * 		             <p>
   *                   <code>owner-id</code> - The ID of the Amazon Web Services account that owns the network ACL.</p>
   * 		          </li>
   *             <li>
   * 		             <p>
   *                   <code>tag</code>:<key> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value.
   *     For example, to find all resources that have a tag with the key <code>Owner</code> and the value <code>TeamA</code>, specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p>
   * 		          </li>
   *             <li>
   * 		             <p>
   *                   <code>tag-key</code> - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.</p>
   * 		          </li>
   *             <li>
   * 		             <p>
   *                   <code>vpc-id</code> - The ID of the VPC for the network ACL.</p>
   * 		          </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>One or more network ACL IDs.</p>
   * 		       <p>Default: Describes all your network ACLs.</p>
   */
  NetworkAclIds?: string[];

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  MaxResults?: number;
}

export interface DescribeNetworkAclsResult {
  /**
   * <p>Information about one or more network ACLs.</p>
   */
  NetworkAcls?: NetworkAcl[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export interface DescribeNetworkInsightsAccessScopeAnalysesRequest {
  /**
   * <p>The IDs of the Network Access Scope analyses.</p>
   */
  NetworkInsightsAccessScopeAnalysisIds?: string[];

  /**
   * <p>The ID of the Network Access Scope.</p>
   */
  NetworkInsightsAccessScopeId?: string;

  /**
   * <p>Filters the results based on the start time. The analysis must have started on or after this time.</p>
   */
  AnalysisStartTimeBegin?: Date;

  /**
   * <p>Filters the results based on the start time. The analysis must have started on or before this time.</p>
   */
  AnalysisStartTimeEnd?: Date;

  /**
   * <p>There are no supported filters.</p>
   */
  Filters?: Filter[];

  /**
   * <p>The maximum number of results to return with a single call.
   *    To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

export enum FindingsFound {
  false = "false",
  true = "true",
  unknown = "unknown",
}

export enum AnalysisStatus {
  failed = "failed",
  running = "running",
  succeeded = "succeeded",
}

/**
 * <p>Describes a Network Access Scope analysis.</p>
 */
export interface NetworkInsightsAccessScopeAnalysis {
  /**
   * <p>The ID of the Network Access Scope analysis.</p>
   */
  NetworkInsightsAccessScopeAnalysisId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the Network Access Scope analysis.</p>
   */
  NetworkInsightsAccessScopeAnalysisArn?: string;

  /**
   * <p>The ID of the Network Access Scope.</p>
   */
  NetworkInsightsAccessScopeId?: string;

  /**
   * <p>The status.</p>
   */
  Status?: AnalysisStatus | string;

  /**
   * <p>The status message.</p>
   */
  StatusMessage?: string;

  /**
   * <p>The warning message.</p>
   */
  WarningMessage?: string;

  /**
   * <p>The analysis start date.</p>
   */
  StartDate?: Date;

  /**
   * <p>The analysis end date.</p>
   */
  EndDate?: Date;

  /**
   * <p>Indicates whether there are findings.</p>
   */
  FindingsFound?: FindingsFound | string;

  /**
   * <p>The number of network interfaces analyzed.</p>
   */
  AnalyzedEniCount?: number;

  /**
   * <p>The tags.</p>
   */
  Tags?: Tag[];
}

export interface DescribeNetworkInsightsAccessScopeAnalysesResult {
  /**
   * <p>The Network Access Scope analyses.</p>
   */
  NetworkInsightsAccessScopeAnalyses?: NetworkInsightsAccessScopeAnalysis[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export interface DescribeNetworkInsightsAccessScopesRequest {
  /**
   * <p>The IDs of the Network Access Scopes.</p>
   */
  NetworkInsightsAccessScopeIds?: string[];

  /**
   * <p>There are no supported filters.</p>
   */
  Filters?: Filter[];

  /**
   * <p>The maximum number of results to return with a single call.
   *    To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

export interface DescribeNetworkInsightsAccessScopesResult {
  /**
   * <p>The Network Access Scopes.</p>
   */
  NetworkInsightsAccessScopes?: NetworkInsightsAccessScope[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export interface DescribeNetworkInsightsAnalysesRequest {
  /**
   * <p>The ID of the network insights analyses. You must specify either analysis IDs or a path ID.</p>
   */
  NetworkInsightsAnalysisIds?: string[];

  /**
   * <p>The ID of the path. You must specify either a path ID or analysis IDs.</p>
   */
  NetworkInsightsPathId?: string;

  /**
   * <p>The time when the network insights analyses started.</p>
   */
  AnalysisStartTime?: Date;

  /**
   * <p>The time when the network insights analyses ended.</p>
   */
  AnalysisEndTime?: Date;

  /**
   * <p>The filters. The following are the possible values:</p>
   *          <ul>
   *             <li>
   *                <p>PathFound - A Boolean value that indicates whether a feasible path is found.</p>
   *             </li>
   *             <li>
   *                <p>Status - The status of the analysis (running | succeeded | failed).</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>The maximum number of results to return with a single call.
   *    To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * <p>Describes a load balancer listener.</p>
 */
export interface AnalysisLoadBalancerListener {
  /**
   * <p>The port on which the load balancer is listening.</p>
   */
  LoadBalancerPort?: number;

  /**
   * <p>[Classic Load Balancers] The back-end port for the listener.</p>
   */
  InstancePort?: number;
}

/**
 * <p>Describes a load balancer target.</p>
 */
export interface AnalysisLoadBalancerTarget {
  /**
   * <p>The IP address.</p>
   */
  Address?: string;

  /**
   * <p>The Availability Zone.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>Information about the instance.</p>
   */
  Instance?: AnalysisComponent;

  /**
   * <p>The port on which the target is listening.</p>
   */
  Port?: number;
}

/**
 * <p>Describes an explanation code for an unreachable path. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/reachability/explanation-codes.html">Reachability Analyzer explanation codes</a>.</p>
 */
export interface Explanation {
  /**
   * <p>The network ACL.</p>
   */
  Acl?: AnalysisComponent;

  /**
   * <p>The network ACL rule.</p>
   */
  AclRule?: AnalysisAclRule;

  /**
   * <p>The IPv4 address, in CIDR notation.</p>
   */
  Address?: string;

  /**
   * <p>The IPv4 addresses, in CIDR notation.</p>
   */
  Addresses?: string[];

  /**
   * <p>The resource to which the component is attached.</p>
   */
  AttachedTo?: AnalysisComponent;

  /**
   * <p>The Availability Zones.</p>
   */
  AvailabilityZones?: string[];

  /**
   * <p>The CIDR ranges.</p>
   */
  Cidrs?: string[];

  /**
   * <p>The component.</p>
   */
  Component?: AnalysisComponent;

  /**
   * <p>The customer gateway.</p>
   */
  CustomerGateway?: AnalysisComponent;

  /**
   * <p>The destination.</p>
   */
  Destination?: AnalysisComponent;

  /**
   * <p>The destination VPC.</p>
   */
  DestinationVpc?: AnalysisComponent;

  /**
   * <p>The direction. The following are the possible values:</p>
   *          <ul>
   *             <li>
   *                <p>egress</p>
   *             </li>
   *             <li>
   *                <p>ingress</p>
   *             </li>
   *          </ul>
   */
  Direction?: string;

  /**
   * <p>The explanation code.</p>
   */
  ExplanationCode?: string;

  /**
   * <p>The route table.</p>
   */
  IngressRouteTable?: AnalysisComponent;

  /**
   * <p>The internet gateway.</p>
   */
  InternetGateway?: AnalysisComponent;

  /**
   * <p>The Amazon Resource Name (ARN) of the load balancer.</p>
   */
  LoadBalancerArn?: string;

  /**
   * <p>The listener for a Classic Load Balancer.</p>
   */
  ClassicLoadBalancerListener?: AnalysisLoadBalancerListener;

  /**
   * <p>The listener port of the load balancer.</p>
   */
  LoadBalancerListenerPort?: number;

  /**
   * <p>The target.</p>
   */
  LoadBalancerTarget?: AnalysisLoadBalancerTarget;

  /**
   * <p>The target group.</p>
   */
  LoadBalancerTargetGroup?: AnalysisComponent;

  /**
   * <p>The target groups.</p>
   */
  LoadBalancerTargetGroups?: AnalysisComponent[];

  /**
   * <p>The target port.</p>
   */
  LoadBalancerTargetPort?: number;

  /**
   * <p>The load balancer listener.</p>
   */
  ElasticLoadBalancerListener?: AnalysisComponent;

  /**
   * <p>The missing component.</p>
   */
  MissingComponent?: string;

  /**
   * <p>The NAT gateway.</p>
   */
  NatGateway?: AnalysisComponent;

  /**
   * <p>The network interface.</p>
   */
  NetworkInterface?: AnalysisComponent;

  /**
   * <p>The packet field.</p>
   */
  PacketField?: string;

  /**
   * <p>The VPC peering connection.</p>
   */
  VpcPeeringConnection?: AnalysisComponent;

  /**
   * <p>The port.</p>
   */
  Port?: number;

  /**
   * <p>The port ranges.</p>
   */
  PortRanges?: PortRange[];

  /**
   * <p>The prefix list.</p>
   */
  PrefixList?: AnalysisComponent;

  /**
   * <p>The protocols.</p>
   */
  Protocols?: string[];

  /**
   * <p>The route table route.</p>
   */
  RouteTableRoute?: AnalysisRouteTableRoute;

  /**
   * <p>The route table.</p>
   */
  RouteTable?: AnalysisComponent;

  /**
   * <p>The security group.</p>
   */
  SecurityGroup?: AnalysisComponent;

  /**
   * <p>The security group rule.</p>
   */
  SecurityGroupRule?: AnalysisSecurityGroupRule;

  /**
   * <p>The security groups.</p>
   */
  SecurityGroups?: AnalysisComponent[];

  /**
   * <p>The source VPC.</p>
   */
  SourceVpc?: AnalysisComponent;

  /**
   * <p>The state.</p>
   */
  State?: string;

  /**
   * <p>The subnet.</p>
   */
  Subnet?: AnalysisComponent;

  /**
   * <p>The route table for the subnet.</p>
   */
  SubnetRouteTable?: AnalysisComponent;

  /**
   * <p>The component VPC.</p>
   */
  Vpc?: AnalysisComponent;

  /**
   * <p>The VPC endpoint.</p>
   */
  VpcEndpoint?: AnalysisComponent;

  /**
   * <p>The VPN connection.</p>
   */
  VpnConnection?: AnalysisComponent;

  /**
   * <p>The VPN gateway.</p>
   */
  VpnGateway?: AnalysisComponent;

  /**
   * <p>The transit gateway.</p>
   */
  TransitGateway?: AnalysisComponent;

  /**
   * <p>The transit gateway route table.</p>
   */
  TransitGatewayRouteTable?: AnalysisComponent;

  /**
   * <p>The transit gateway route table route.</p>
   */
  TransitGatewayRouteTableRoute?: TransitGatewayRouteTableRoute;

  /**
   * <p>The transit gateway attachment.</p>
   */
  TransitGatewayAttachment?: AnalysisComponent;
}

/**
 * <p>Describes a network insights analysis.</p>
 */
export interface NetworkInsightsAnalysis {
  /**
   * <p>The ID of the network insights analysis.</p>
   */
  NetworkInsightsAnalysisId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the network insights analysis.</p>
   */
  NetworkInsightsAnalysisArn?: string;

  /**
   * <p>The ID of the path.</p>
   */
  NetworkInsightsPathId?: string;

  /**
   * <p>The Amazon Resource Names (ARN) of the Amazon Web Services resources that the path must traverse.</p>
   */
  FilterInArns?: string[];

  /**
   * <p>The time the analysis started.</p>
   */
  StartDate?: Date;

  /**
   * <p>The status of the network insights analysis.</p>
   */
  Status?: AnalysisStatus | string;

  /**
   * <p>The status message, if the status is <code>failed</code>.</p>
   */
  StatusMessage?: string;

  /**
   * <p>The warning message.</p>
   */
  WarningMessage?: string;

  /**
   * <p>Indicates whether the destination is reachable from the source.</p>
   */
  NetworkPathFound?: boolean;

  /**
   * <p>The components in the path from source to destination.</p>
   */
  ForwardPathComponents?: PathComponent[];

  /**
   * <p>The components in the path from destination to source.</p>
   */
  ReturnPathComponents?: PathComponent[];

  /**
   * <p>The explanations. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/reachability/explanation-codes.html">Reachability Analyzer explanation codes</a>.</p>
   */
  Explanations?: Explanation[];

  /**
   * <p>Potential intermediate components.</p>
   */
  AlternatePathHints?: AlternatePathHint[];

  /**
   * <p>The tags.</p>
   */
  Tags?: Tag[];
}

export interface DescribeNetworkInsightsAnalysesResult {
  /**
   * <p>Information about the network insights analyses.</p>
   */
  NetworkInsightsAnalyses?: NetworkInsightsAnalysis[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export interface DescribeNetworkInsightsPathsRequest {
  /**
   * <p>The IDs of the paths.</p>
   */
  NetworkInsightsPathIds?: string[];

  /**
   * <p>The filters. The following are the possible values:</p>
   *          <ul>
   *             <li>
   *                <p>Destination - The ID of the resource.</p>
   *             </li>
   *             <li>
   *                <p>DestinationPort - The destination port.</p>
   *             </li>
   *             <li>
   *                <p>Name - The path name.</p>
   *             </li>
   *             <li>
   *                <p>Protocol - The protocol.</p>
   *             </li>
   *             <li>
   *                <p>Source - The ID of the resource.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>The maximum number of results to return with a single call.
   *    To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

export interface DescribeNetworkInsightsPathsResult {
  /**
   * <p>Information about the paths.</p>
   */
  NetworkInsightsPaths?: NetworkInsightsPath[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export enum NetworkInterfaceAttribute {
  attachment = "attachment",
  description = "description",
  groupSet = "groupSet",
  sourceDestCheck = "sourceDestCheck",
}

/**
 * <p>Contains the parameters for DescribeNetworkInterfaceAttribute.</p>
 */
export interface DescribeNetworkInterfaceAttributeRequest {
  /**
   * <p>The attribute of the network interface. This parameter is required.</p>
   */
  Attribute?: NetworkInterfaceAttribute | string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *        and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *        Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the network interface.</p>
   */
  NetworkInterfaceId: string | undefined;
}

/**
 * <p>Contains the output of DescribeNetworkInterfaceAttribute.</p>
 */
export interface DescribeNetworkInterfaceAttributeResult {
  /**
   * <p>The attachment (if any) of the network interface.</p>
   */
  Attachment?: NetworkInterfaceAttachment;

  /**
   * <p>The description of the network interface.</p>
   */
  Description?: AttributeValue;

  /**
   * <p>The security groups associated with the network interface.</p>
   */
  Groups?: GroupIdentifier[];

  /**
   * <p>The ID of the network interface.</p>
   */
  NetworkInterfaceId?: string;

  /**
   * <p>Indicates whether source/destination checking is enabled.</p>
   */
  SourceDestCheck?: AttributeBooleanValue;
}

/**
 * <p>Contains the parameters for DescribeNetworkInterfacePermissions.</p>
 */
export interface DescribeNetworkInterfacePermissionsRequest {
  /**
   * <p>One or more network interface permission IDs.</p>
   */
  NetworkInterfacePermissionIds?: string[];

  /**
   * <p>One or more filters.</p>
   * 		       <ul>
   *             <li>
   *                <p>
   *                   <code>network-interface-permission.network-interface-permission-id</code> - The ID of the
   * 				permission.</p>
   *             </li>
   *             <li>
   * 				           <p>
   *                   <code>network-interface-permission.network-interface-id</code> - The ID of
   * 					the network interface.</p>
   * 			         </li>
   *             <li>
   * 			            <p>
   *                   <code>network-interface-permission.aws-account-id</code> - The Amazon Web Services account ID.</p>
   * 			         </li>
   *             <li>
   * 			            <p>
   *                   <code>network-interface-permission.aws-service</code> - The Amazon Web Service.</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>network-interface-permission.permission</code> - The type of
   * 					permission (<code>INSTANCE-ATTACH</code> |
   * 					<code>EIP-ASSOCIATE</code>).</p>
   * 			         </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>The token to request the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return in a single call. To retrieve the remaining results,
   * 			make another call with the returned <code>NextToken</code> value. If this parameter is not specified, up to 50 results are returned by default.</p>
   */
  MaxResults?: number;
}

/**
 * <p>Contains the output for DescribeNetworkInterfacePermissions.</p>
 */
export interface DescribeNetworkInterfacePermissionsResult {
  /**
   * <p>The network interface permissions.</p>
   */
  NetworkInterfacePermissions?: NetworkInterfacePermission[];

  /**
   * <p>The token to use to retrieve the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * <p>Contains the parameters for DescribeNetworkInterfaces.</p>
 */
export interface DescribeNetworkInterfacesRequest {
  /**
   * <p>One or more filters.</p>
   * 		       <ul>
   *             <li>
   * 		             <p>
   *                   <code>addresses.private-ip-address</code> - The private IPv4 addresses
   *                     associated with the network interface.</p>
   * 		          </li>
   *             <li>
   * 		             <p>
   *                   <code>addresses.primary</code> - Whether the private IPv4 address is the primary
   *                     IP address associated with the network interface. </p>
   * 		          </li>
   *             <li>
   * 		             <p>
   *                   <code>addresses.association.public-ip</code> - The association ID returned when
   *                     the network interface was associated with the Elastic IP address
   *                     (IPv4).</p>
   * 		          </li>
   *             <li>
   * 		             <p>
   *                   <code>addresses.association.owner-id</code> - The owner ID of the addresses associated with the network interface.</p>
   * 		          </li>
   *             <li>
   * 		             <p>
   *                   <code>association.association-id</code> - The association ID returned when the
   *                     network interface was associated with an IPv4 address.</p>
   * 		          </li>
   *             <li>
   * 		             <p>
   *                   <code>association.allocation-id</code> - The allocation ID returned when you
   *                     allocated the Elastic IP address (IPv4) for your network interface.</p>
   * 		          </li>
   *             <li>
   * 		             <p>
   *                   <code>association.ip-owner-id</code> - The owner of the Elastic IP address
   *                     (IPv4) associated with the network interface.</p>
   * 		          </li>
   *             <li>
   * 		             <p>
   *                   <code>association.public-ip</code> - The address of the Elastic IP address
   *                     (IPv4) bound to the network interface.</p>
   * 		          </li>
   *             <li>
   * 		 		          <p>
   *                   <code>association.public-dns-name</code> - The public DNS name for the network
   *                     interface (IPv4).</p>
   * 		 	        </li>
   *             <li>
   * 		             <p>
   *                   <code>attachment.attachment-id</code> - The ID of the interface attachment.</p>
   * 		          </li>
   *             <li>
   * 		             <p>
   *                   <code>attachment.attach-time</code> - The time that the network interface was attached to an instance.</p>
   * 		          </li>
   *             <li>
   * 		             <p>
   *                   <code>attachment.delete-on-termination</code> - Indicates whether the attachment is deleted when an instance is terminated.</p>
   * 		          </li>
   *             <li>
   * 		             <p>
   *                   <code>attachment.device-index</code> - The device index to which the network interface is attached.</p>
   * 		          </li>
   *             <li>
   * 		             <p>
   *                   <code>attachment.instance-id</code> - The ID of the instance to which the network interface is attached.</p>
   * 		          </li>
   *             <li>
   * 		             <p>
   *                   <code>attachment.instance-owner-id</code> - The owner ID of the instance to which the network interface is attached.</p>
   * 		          </li>
   *             <li>
   * 		             <p>
   *                   <code>attachment.status</code> - The status of the attachment (<code>attaching</code> | <code>attached</code> | <code>detaching</code> | <code>detached</code>).</p>
   * 		          </li>
   *             <li>
   * 		             <p>
   *                   <code>availability-zone</code> - The Availability Zone of the network interface.</p>
   * 		          </li>
   *             <li>
   * 		             <p>
   *                   <code>description</code> - The description of the network interface.</p>
   * 		          </li>
   *             <li>
   * 		             <p>
   *                   <code>group-id</code> - The ID of a security group associated with the network interface.</p>
   * 		          </li>
   *             <li>
   * 		             <p>
   *                   <code>group-name</code> - The name of a security group associated with the network interface.</p>
   * 		          </li>
   *             <li>
   *                   <p>
   *                   <code>ipv6-addresses.ipv6-address</code> - An IPv6 address associated with
   *                     the network interface.</p>
   *                </li>
   *             <li>
   * 		             <p>
   *                   <code>interface-type</code> - The type of network interface (<code>api_gateway_managed</code> |
   * 		               <code>aws_codestar_connections_managed</code> | <code>branch</code> | <code>efa</code> |
   * 		               <code>gateway_load_balancer</code> | <code>gateway_load_balancer_endpoint</code> | <code>global_accelerator_managed</code> |
   * 		               <code>interface</code> | <code>iot_rules_managed</code> | <code>lambda</code> | <code>load_balancer</code> |
   * 		               <code>nat_gateway</code> | <code>network_load_balancer</code> | <code>quicksight</code> |
   * 		               <code>transit_gateway</code> | <code>trunk</code> | <code>vpc_endpoint</code>).</p>
   * 		          </li>
   *             <li>
   * 		             <p>
   *                   <code>mac-address</code> - The MAC address of the network interface.</p>
   * 		          </li>
   *             <li>
   * 		             <p>
   *                   <code>network-interface-id</code> - The ID of the network interface.</p>
   * 		          </li>
   *             <li>
   * 		             <p>
   *                   <code>owner-id</code> - The Amazon Web Services account ID of the network interface owner.</p>
   * 		          </li>
   *             <li>
   * 		             <p>
   *                   <code>private-ip-address</code> - The private IPv4 address or addresses of the
   *                     network interface.</p>
   * 		          </li>
   *             <li>
   * 		             <p>
   *                   <code>private-dns-name</code> - The private DNS name of the network interface (IPv4).</p>
   * 		          </li>
   *             <li>
   * 		             <p>
   *                   <code>requester-id</code> - The alias or Amazon Web Services account ID of the principal or service that created the network interface.</p>
   * 		          </li>
   *             <li>
   * 		             <p>
   *                   <code>requester-managed</code> - Indicates whether the network interface is being managed by an Amazon Web Service
   * 		               (for example, Amazon Web Services Management Console, Auto Scaling, and so on).</p>
   * 		          </li>
   *             <li>
   * 		             <p>
   *                   <code>source-dest-check</code> - Indicates whether the network interface performs source/destination checking.
   * 		            A value of <code>true</code> means checking is enabled, and <code>false</code> means checking is disabled.
   * 		            The value must be <code>false</code> for the network interface to perform network address translation (NAT) in your VPC. </p>
   * 		          </li>
   *             <li>
   * 		             <p>
   *                   <code>status</code> - The status of the network interface. If the network interface is not attached to an instance, the status is <code>available</code>;
   * 		            if a network interface is attached to an instance the status is <code>in-use</code>.</p>
   * 		          </li>
   *             <li>
   * 		             <p>
   *                   <code>subnet-id</code> - The ID of the subnet for the network interface.</p>
   * 		          </li>
   *             <li>
   * 		             <p>
   *                   <code>tag</code>:<key> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value.
   *     For example, to find all resources that have a tag with the key <code>Owner</code> and the value <code>TeamA</code>, specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p>
   * 		          </li>
   *             <li>
   * 		             <p>
   *                   <code>tag-key</code> - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.</p>
   * 		          </li>
   *             <li>
   * 		             <p>
   *                   <code>vpc-id</code> - The ID of the VPC for the network interface.</p>
   * 		          </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *        and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *        Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>One or more network interface IDs.</p>
   * 		       <p>Default: Describes all your network interfaces.</p>
   */
  NetworkInterfaceIds?: string[];

  /**
   * <p>The token to retrieve the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of items to return for this request. The request returns a token that you
   *             can specify in a subsequent call to get the next set of results. You cannot specify this
   *             parameter and the network interface IDs parameter in the same request.</p>
   */
  MaxResults?: number;
}

/**
 * <p>Contains the output of DescribeNetworkInterfaces.</p>
 */
export interface DescribeNetworkInterfacesResult {
  /**
   * <p>Information about one or more network interfaces.</p>
   */
  NetworkInterfaces?: NetworkInterface[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export interface DescribePlacementGroupsRequest {
  /**
   * <p>The filters.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                     <code>group-name</code> - The name of the placement group.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>group-arn</code> - The Amazon Resource Name (ARN) of the placement
   *                     group.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>spread-level</code> - The spread level for the placement group (<code>host</code> | <code>rack</code>).
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>state</code> - The state of the placement group (<code>pending</code> |
   *                         <code>available</code> | <code>deleting</code> |
   *                     <code>deleted</code>).</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>strategy</code> - The strategy of the placement group
   *                         (<code>cluster</code> | <code>spread</code> |
   *                     <code>partition</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>tag:<key></code> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value.
   *     For example, to find all resources that have a tag with the key <code>Owner</code> and the value <code>TeamA</code>, specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>tag-key</code> - The key of a tag assigned to the resource. Use this filter to find all resources that have a tag with a specific key, regardless of the tag value.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The names of the placement groups.</p>
   *         <p>Default: Describes all your placement groups, or only those otherwise
   *             specified.</p>
   */
  GroupNames?: string[];

  /**
   * <p>The IDs of the placement groups.</p>
   */
  GroupIds?: string[];
}

export interface DescribePlacementGroupsResult {
  /**
   * <p>Information about the placement groups.</p>
   */
  PlacementGroups?: PlacementGroup[];
}

export interface DescribePrefixListsRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>One or more filters.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                     <code>prefix-list-id</code>: The ID of a prefix list.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>prefix-list-name</code>: The name of a prefix list.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>One or more prefix list IDs.</p>
   */
  PrefixListIds?: string[];
}

/**
 * <p>Describes prefixes for Amazon Web Services services.</p>
 */
export interface PrefixList {
  /**
   * <p>The IP address range of the Amazon Web Service.</p>
   */
  Cidrs?: string[];

  /**
   * <p>The ID of the prefix.</p>
   */
  PrefixListId?: string;

  /**
   * <p>The name of the prefix.</p>
   */
  PrefixListName?: string;
}

export interface DescribePrefixListsResult {
  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;

  /**
   * <p>All available prefix lists.</p>
   */
  PrefixLists?: PrefixList[];
}

export interface DescribePrincipalIdFormatRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The type of resource: <code>bundle</code> |
   *             <code>conversion-task</code> | <code>customer-gateway</code> | <code>dhcp-options</code> |
   *             <code>elastic-ip-allocation</code> | <code>elastic-ip-association</code> |
   *             <code>export-task</code> | <code>flow-log</code> | <code>image</code> |
   *             <code>import-task</code> | <code>instance</code> | <code>internet-gateway</code> |
   *             <code>network-acl</code> | <code>network-acl-association</code> |
   *             <code>network-interface</code> | <code>network-interface-attachment</code> |
   *             <code>prefix-list</code> | <code>reservation</code> | <code>route-table</code> |
   *             <code>route-table-association</code> | <code>security-group</code> |
   *             <code>snapshot</code> | <code>subnet</code> |
   *             <code>subnet-cidr-block-association</code> | <code>volume</code> | <code>vpc</code>
   *             | <code>vpc-cidr-block-association</code> | <code>vpc-endpoint</code> |
   *             <code>vpc-peering-connection</code> | <code>vpn-connection</code> | <code>vpn-gateway</code>
   *          </p>
   */
  Resources?: string[];

  /**
   * <p>The maximum number of results to return in a single call. To retrieve the remaining
   *             results, make another call with the returned NextToken value. </p>
   */
  MaxResults?: number;

  /**
   * <p>The token to request the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * <p>PrincipalIdFormat description</p>
 */
export interface PrincipalIdFormat {
  /**
   * <p>PrincipalIdFormatARN description</p>
   */
  Arn?: string;

  /**
   * <p>PrincipalIdFormatStatuses description</p>
   */
  Statuses?: IdFormat[];
}

export interface DescribePrincipalIdFormatResult {
  /**
   * <p>Information about the ID format settings for the ARN.</p>
   */
  Principals?: PrincipalIdFormat[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is null when there are no more results to return.</p>
   */
  NextToken?: string;
}

export interface DescribePublicIpv4PoolsRequest {
  /**
   * <p>The IDs of the address pools.</p>
   */
  PoolIds?: string[];

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * <p>One or more filters.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>tag</code>:<key> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value.
   *     For example, to find all resources that have a tag with the key <code>Owner</code> and the value <code>TeamA</code>, specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>tag-key</code> - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];
}

/**
 * <p>Describes an address range of an IPv4 address pool.</p>
 */
export interface PublicIpv4PoolRange {
  /**
   * <p>The first IP address in the range.</p>
   */
  FirstAddress?: string;

  /**
   * <p>The last IP address in the range.</p>
   */
  LastAddress?: string;

  /**
   * <p>The number of addresses in the range.</p>
   */
  AddressCount?: number;

  /**
   * <p>The number of available addresses in the range.</p>
   */
  AvailableAddressCount?: number;
}

/**
 * <p>Describes an IPv4 address pool.</p>
 */
export interface PublicIpv4Pool {
  /**
   * <p>The ID of the address pool.</p>
   */
  PoolId?: string;

  /**
   * <p>A description of the address pool.</p>
   */
  Description?: string;

  /**
   * <p>The address ranges.</p>
   */
  PoolAddressRanges?: PublicIpv4PoolRange[];

  /**
   * <p>The total number of addresses.</p>
   */
  TotalAddressCount?: number;

  /**
   * <p>The total number of available addresses.</p>
   */
  TotalAvailableAddressCount?: number;

  /**
   * <p>The name of the location from which the address pool is advertised.
   *             A network border group is a unique set of Availability Zones or Local Zones
   *             from where Amazon Web Services advertises public IP addresses.</p>
   */
  NetworkBorderGroup?: string;

  /**
   * <p>Any tags for the address pool.</p>
   */
  Tags?: Tag[];
}

export interface DescribePublicIpv4PoolsResult {
  /**
   * <p>Information about the address pools.</p>
   */
  PublicIpv4Pools?: PublicIpv4Pool[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export interface DescribeRegionsRequest {
  /**
   * <p>The filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>endpoint</code> - The endpoint of the Region (for example, <code>ec2.us-east-1.amazonaws.com</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>opt-in-status</code> - The opt-in status of the Region (<code>opt-in-not-required</code> | <code>opted-in</code> |
   *                  <code>not-opted-in</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>region-name</code> - The name of the Region (for example, <code>us-east-1</code>).</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>The names of the Regions. You can specify any Regions, whether they are enabled and disabled for your account.</p>
   */
  RegionNames?: string[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>Indicates whether to display all Regions, including Regions that are disabled for your account.</p>
   */
  AllRegions?: boolean;
}

/**
 * <p>Describes a Region.</p>
 */
export interface Region {
  /**
   * <p>The Region service endpoint.</p>
   */
  Endpoint?: string;

  /**
   * <p>The name of the Region.</p>
   */
  RegionName?: string;

  /**
   * <p>The Region opt-in status. The possible values are <code>opt-in-not-required</code>, <code>opted-in</code>, and
   *         <code>not-opted-in</code>.</p>
   */
  OptInStatus?: string;
}

export interface DescribeRegionsResult {
  /**
   * <p>Information about the Regions.</p>
   */
  Regions?: Region[];
}

export interface DescribeReplaceRootVolumeTasksRequest {
  /**
   * <p>The ID of the root volume replacement task to view.</p>
   */
  ReplaceRootVolumeTaskIds?: string[];

  /**
   * <p>Filter to use:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>instance-id</code> - The ID of the instance for which the root volume replacement task was created.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export interface DescribeReplaceRootVolumeTasksResult {
  /**
   * <p>Information about the root volume replacement task.</p>
   */
  ReplaceRootVolumeTasks?: ReplaceRootVolumeTask[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export enum OfferingClassType {
  CONVERTIBLE = "convertible",
  STANDARD = "standard",
}

export enum OfferingTypeValues {
  All_Upfront = "All Upfront",
  Heavy_Utilization = "Heavy Utilization",
  Light_Utilization = "Light Utilization",
  Medium_Utilization = "Medium Utilization",
  No_Upfront = "No Upfront",
  Partial_Upfront = "Partial Upfront",
}

/**
 * <p>Contains the parameters for DescribeReservedInstances.</p>
 */
export interface DescribeReservedInstancesRequest {
  /**
   * <p>One or more filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>availability-zone</code> - The Availability Zone where the Reserved Instance can be used.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>duration</code> - The duration of the Reserved Instance (one year or three years), in seconds (<code>31536000</code> | <code>94608000</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>end</code> - The time when the Reserved Instance expires (for example, 2015-08-07T11:54:42.000Z).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>fixed-price</code> - The purchase price of the Reserved Instance (for example, 9800.0).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>instance-type</code> - The instance type that is covered by the reservation.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>scope</code> - The scope of the Reserved Instance (<code>Region</code> or <code>Availability Zone</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>product-description</code> - The Reserved Instance product platform
   *           description. Instances that include <code>(Amazon VPC)</code> in the product platform
   *           description will only be displayed to EC2-Classic account holders and are for use with
   *           Amazon VPC (<code>Linux/UNIX</code> | <code>Linux/UNIX (Amazon VPC)</code> | <code>SUSE
   *             Linux</code> | <code>SUSE Linux (Amazon VPC)</code> | <code>Red Hat Enterprise
   *             Linux</code> | <code>Red Hat Enterprise Linux (Amazon VPC)</code> | <code>Red Hat
   *             Enterprise Linux with HA (Amazon VPC)</code> | <code>Windows</code> | <code>Windows
   *             (Amazon VPC)</code> | <code>Windows with SQL Server Standard</code> | <code>Windows with
   *             SQL Server Standard (Amazon VPC)</code> | <code>Windows with SQL Server Web</code> |
   *             <code>Windows with SQL Server Web (Amazon VPC)</code> | <code>Windows with SQL Server
   *             Enterprise</code> | <code>Windows with SQL Server Enterprise (Amazon
   *           VPC)</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>reserved-instances-id</code> - The ID of the Reserved Instance.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>start</code> - The time at which the Reserved Instance purchase request was placed (for example, 2014-08-07T11:54:42.000Z).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>state</code> - The state of the Reserved Instance (<code>payment-pending</code> | <code>active</code> | <code>payment-failed</code> | <code>retired</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>tag:<key></code> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value.
   *     For example, to find all resources that have a tag with the key <code>Owner</code> and the value <code>TeamA</code>, specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>tag-key</code> - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>usage-price</code> - The usage price of the Reserved Instance, per hour (for example, 0.84).</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>Describes whether the Reserved Instance is Standard or Convertible.</p>
   */
  OfferingClass?: OfferingClassType | string;

  /**
   * <p>One or more Reserved Instance IDs.</p>
   *          <p>Default: Describes all your Reserved Instances, or only those otherwise specified.</p>
   */
  ReservedInstancesIds?: string[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *        and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *        Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The Reserved Instance offering type. If you are using tools that predate the 2011-11-01 API
   * 			version, you only have access to the <code>Medium Utilization</code> Reserved Instance
   * 			offering type.</p>
   */
  OfferingType?: OfferingTypeValues | string;
}

export type RIProductDescription = "Linux/UNIX" | "Linux/UNIX (Amazon VPC)" | "Windows" | "Windows (Amazon VPC)";

export enum RecurringChargeFrequency {
  Hourly = "Hourly",
}

/**
 * <p>Describes a recurring charge.</p>
 */
export interface RecurringCharge {
  /**
   * <p>The amount of the recurring charge.</p>
   */
  Amount?: number;

  /**
   * <p>The frequency of the recurring charge.</p>
   */
  Frequency?: RecurringChargeFrequency | string;
}

export enum Scope {
  AVAILABILITY_ZONE = "Availability Zone",
  REGIONAL = "Region",
}

export enum ReservedInstanceState {
  active = "active",
  payment_failed = "payment-failed",
  payment_pending = "payment-pending",
  queued = "queued",
  queued_deleted = "queued-deleted",
  retired = "retired",
}

/**
 * <p>Describes a Reserved Instance.</p>
 */
export interface ReservedInstances {
  /**
   * <p>The Availability Zone in which the Reserved Instance can be used.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>The duration of the Reserved Instance, in seconds.</p>
   */
  Duration?: number;

  /**
   * <p>The time when the Reserved Instance expires.</p>
   */
  End?: Date;

  /**
   * <p>The purchase price of the Reserved Instance.</p>
   */
  FixedPrice?: number;

  /**
   * <p>The number of reservations purchased.</p>
   */
  InstanceCount?: number;

  /**
   * <p>The instance type on which the Reserved Instance can be used.</p>
   */
  InstanceType?: _InstanceType | string;

  /**
   * <p>The Reserved Instance product platform description.</p>
   */
  ProductDescription?: RIProductDescription | string;

  /**
   * <p>The ID of the Reserved Instance.</p>
   */
  ReservedInstancesId?: string;

  /**
   * <p>The date and time the Reserved Instance started.</p>
   */
  Start?: Date;

  /**
   * <p>The state of the Reserved Instance purchase.</p>
   */
  State?: ReservedInstanceState | string;

  /**
   * <p>The usage price of the Reserved Instance, per hour.</p>
   */
  UsagePrice?: number;

  /**
   * <p>The currency of the Reserved Instance. It's specified using ISO 4217 standard currency codes.
   * 				At this time, the only supported currency is <code>USD</code>.</p>
   */
  CurrencyCode?: CurrencyCodeValues | string;

  /**
   * <p>The tenancy of the instance.</p>
   */
  InstanceTenancy?: Tenancy | string;

  /**
   * <p>The offering class of the Reserved Instance.</p>
   */
  OfferingClass?: OfferingClassType | string;

  /**
   * <p>The Reserved Instance offering type.</p>
   */
  OfferingType?: OfferingTypeValues | string;

  /**
   * <p>The recurring charge tag assigned to the resource.</p>
   */
  RecurringCharges?: RecurringCharge[];

  /**
   * <p>The scope of the Reserved Instance.</p>
   */
  Scope?: Scope | string;

  /**
   * <p>Any tags assigned to the resource.</p>
   */
  Tags?: Tag[];
}

/**
 * <p>Contains the output for DescribeReservedInstances.</p>
 */
export interface DescribeReservedInstancesResult {
  /**
   * <p>A list of Reserved Instances.</p>
   */
  ReservedInstances?: ReservedInstances[];
}

/**
 * <p>Contains the parameters for DescribeReservedInstancesListings.</p>
 */
export interface DescribeReservedInstancesListingsRequest {
  /**
   * <p>One or more filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>reserved-instances-id</code> - The ID of the Reserved Instances.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>reserved-instances-listing-id</code> - The ID of the Reserved Instances listing.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>status</code> - The status of the Reserved Instance listing (<code>pending</code> | <code>active</code> |
   *            <code>cancelled</code> | <code>closed</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>status-message</code> - The reason for the status.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>One or more Reserved Instance IDs.</p>
   */
  ReservedInstancesId?: string;

  /**
   * <p>One or more Reserved Instance listing IDs.</p>
   */
  ReservedInstancesListingId?: string;
}

/**
 * <p>Contains the output of DescribeReservedInstancesListings.</p>
 */
export interface DescribeReservedInstancesListingsResult {
  /**
   * <p>Information about the Reserved Instance listing.</p>
   */
  ReservedInstancesListings?: ReservedInstancesListing[];
}

/**
 * <p>Contains the parameters for DescribeReservedInstancesModifications.</p>
 */
export interface DescribeReservedInstancesModificationsRequest {
  /**
   * <p>One or more filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>client-token</code> - The idempotency token for the modification request.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>create-date</code> - The time when the modification request was created.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>effective-date</code> - The time when the modification becomes effective.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>modification-result.reserved-instances-id</code> - The ID for the Reserved Instances created as part of the modification request. This ID is only available when the status of the modification is <code>fulfilled</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>modification-result.target-configuration.availability-zone</code> - The Availability Zone for the new Reserved Instances.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>modification-result.target-configuration.instance-count </code> - The number of new Reserved Instances.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>modification-result.target-configuration.instance-type</code> - The instance type of the new Reserved Instances.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>modification-result.target-configuration.platform</code> - The network platform of the new Reserved Instances (<code>EC2-Classic</code> | <code>EC2-VPC</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>reserved-instances-id</code> - The ID of the Reserved Instances modified.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>reserved-instances-modification-id</code> - The ID of the modification request.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>status</code> - The status of the Reserved Instances modification request
   *            (<code>processing</code> | <code>fulfilled</code> | <code>failed</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>status-message</code> - The reason for the status.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>update-date</code> - The time when the modification request was last updated.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>IDs for the submitted modification request.</p>
   */
  ReservedInstancesModificationIds?: string[];

  /**
   * <p>The token to retrieve the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * <p>Describes the configuration settings for the modified Reserved Instances.</p>
 */
export interface ReservedInstancesConfiguration {
  /**
   * <p>The Availability Zone for the modified Reserved Instances.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>The number of modified Reserved Instances.</p>
   *          <note>
   *             <p>This is a required field for a request.</p>
   *          </note>
   */
  InstanceCount?: number;

  /**
   * <p>The instance type for the modified Reserved Instances.</p>
   */
  InstanceType?: _InstanceType | string;

  /**
   * <p>The network platform of the modified Reserved Instances, which is either EC2-Classic or EC2-VPC.</p>
   */
  Platform?: string;

  /**
   * <p>Whether the Reserved Instance is applied to instances in a Region or instances in a specific Availability Zone.</p>
   */
  Scope?: Scope | string;
}

/**
 * <p>Describes the modification request/s.</p>
 */
export interface ReservedInstancesModificationResult {
  /**
   * <p>The ID for the Reserved Instances that were created as part of the modification request. This field is only available when the modification is fulfilled.</p>
   */
  ReservedInstancesId?: string;

  /**
   * <p>The target Reserved Instances configurations supplied as part of the modification request.</p>
   */
  TargetConfiguration?: ReservedInstancesConfiguration;
}

/**
 * <p>Describes the ID of a Reserved Instance.</p>
 */
export interface ReservedInstancesId {
  /**
   * <p>The ID of the Reserved Instance.</p>
   */
  ReservedInstancesId?: string;
}

/**
 * <p>Describes a Reserved Instance modification.</p>
 */
export interface ReservedInstancesModification {
  /**
   * <p>A unique, case-sensitive key supplied by the client to ensure that the request is idempotent.
   * 			For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring
   * 				Idempotency</a>.</p>
   */
  ClientToken?: string;

  /**
   * <p>The time when the modification request was created.</p>
   */
  CreateDate?: Date;

  /**
   * <p>The time for the modification to become effective.</p>
   */
  EffectiveDate?: Date;

  /**
   * <p>Contains target configurations along with their corresponding new Reserved Instance IDs.</p>
   */
  ModificationResults?: ReservedInstancesModificationResult[];

  /**
   * <p>The IDs of one or more Reserved Instances.</p>
   */
  ReservedInstancesIds?: ReservedInstancesId[];

  /**
   * <p>A unique ID for the Reserved Instance modification.</p>
   */
  ReservedInstancesModificationId?: string;

  /**
   * <p>The status of the Reserved Instances modification request.</p>
   */
  Status?: string;

  /**
   * <p>The reason for the status.</p>
   */
  StatusMessage?: string;

  /**
   * <p>The time when the modification request was last updated.</p>
   */
  UpdateDate?: Date;
}

/**
 * <p>Contains the output of DescribeReservedInstancesModifications.</p>
 */
export interface DescribeReservedInstancesModificationsResult {
  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when
   * 			there are no more results to return.</p>
   */
  NextToken?: string;

  /**
   * <p>The Reserved Instance modification information.</p>
   */
  ReservedInstancesModifications?: ReservedInstancesModification[];
}

/**
 * <p>Contains the parameters for DescribeReservedInstancesOfferings.</p>
 */
export interface DescribeReservedInstancesOfferingsRequest {
  /**
   * <p>The Availability Zone in which the Reserved Instance can be used.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>One or more filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>availability-zone</code> - The Availability Zone where the Reserved Instance can be
   *           used.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>duration</code> - The duration of the Reserved Instance (for example, one year or
   *           three years), in seconds (<code>31536000</code> | <code>94608000</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>fixed-price</code> - The purchase price of the Reserved Instance (for example,
   *           9800.0).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>instance-type</code> - The instance type that is covered by the
   *           reservation.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>marketplace</code> - Set to <code>true</code> to show only Reserved Instance
   *           Marketplace offerings. When this filter is not used, which is the default behavior, all
   *           offerings from both Amazon Web Services and the Reserved Instance Marketplace are listed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>product-description</code> - The Reserved Instance product platform description.
   *           Instances that include <code>(Amazon VPC)</code> in the product platform description will
   *           only be displayed to EC2-Classic account holders and are for use with Amazon VPC.
   *             (<code>Linux/UNIX</code> | <code>Linux/UNIX (Amazon VPC)</code> | <code>SUSE
   *             Linux</code> | <code>SUSE Linux (Amazon VPC)</code> | <code>Red Hat Enterprise
   *             Linux</code> | <code>Red Hat Enterprise Linux (Amazon VPC)</code> | <code>Red Hat
   *             Enterprise Linux with HA (Amazon VPC)</code> | <code>Windows</code> | <code>Windows
   *             (Amazon VPC)</code> | <code>Windows with SQL Server Standard</code> | <code>Windows with
   *             SQL Server Standard (Amazon VPC)</code> | <code>Windows with SQL Server Web</code> |
   *             <code> Windows with SQL Server Web (Amazon VPC)</code> | <code>Windows with SQL Server
   *             Enterprise</code> | <code>Windows with SQL Server Enterprise (Amazon VPC)</code>) </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>reserved-instances-offering-id</code> - The Reserved Instances offering
   *           ID.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>scope</code> - The scope of the Reserved Instance (<code>Availability Zone</code> or
   *             <code>Region</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>usage-price</code> - The usage price of the Reserved Instance, per hour (for
   *           example, 0.84).</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>Include Reserved Instance Marketplace offerings in the response.</p>
   */
  IncludeMarketplace?: boolean;

  /**
   * <p>The instance type that the reservation will cover (for example, <code>m1.small</code>). For more information, see
   *        <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html">Instance types</a> in the
   *       <i>Amazon EC2 User Guide</i>.</p>
   */
  InstanceType?: _InstanceType | string;

  /**
   * <p>The maximum duration (in seconds) to filter when searching for offerings.</p>
   * 		       <p>Default: 94608000 (3 years)</p>
   */
  MaxDuration?: number;

  /**
   * <p>The maximum number of instances to filter when searching for offerings.</p>
   * 		       <p>Default: 20</p>
   */
  MaxInstanceCount?: number;

  /**
   * <p>The minimum duration (in seconds) to filter when searching for offerings.</p>
   * 		       <p>Default: 2592000 (1 month)</p>
   */
  MinDuration?: number;

  /**
   * <p>The offering class of the Reserved Instance. Can be <code>standard</code> or <code>convertible</code>.</p>
   */
  OfferingClass?: OfferingClassType | string;

  /**
   * <p>The Reserved Instance product platform description. Instances that include <code>(Amazon
   *         VPC)</code> in the description are for use with Amazon VPC.</p>
   */
  ProductDescription?: RIProductDescription | string;

  /**
   * <p>One or more Reserved Instances offering IDs.</p>
   */
  ReservedInstancesOfferingIds?: string[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *        and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *        Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The tenancy of the instances covered by the reservation. A Reserved Instance with a tenancy
   *       of <code>dedicated</code> is applied to instances that run in a VPC on single-tenant hardware
   *       (i.e., Dedicated Instances).</p>
   *          <p>
   *             <b>Important:</b> The <code>host</code> value cannot be used with this parameter. Use the <code>default</code> or <code>dedicated</code> values only.</p>
   *          <p>Default: <code>default</code>
   *          </p>
   */
  InstanceTenancy?: Tenancy | string;

  /**
   * <p>The maximum number of results to return for the request in a single page. The remaining
   * 			results of the initial request can be seen by sending another request with the returned
   * 				<code>NextToken</code> value. The maximum is 100.</p>
   * 		       <p>Default: 100</p>
   */
  MaxResults?: number;

  /**
   * <p>The token to retrieve the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The Reserved Instance offering type. If you are using tools that predate the 2011-11-01 API
   * 			version, you only have access to the <code>Medium Utilization</code> Reserved Instance
   * 			offering type. </p>
   */
  OfferingType?: OfferingTypeValues | string;
}

/**
 * <p>Describes a Reserved Instance offering.</p>
 */
export interface PricingDetail {
  /**
   * <p>The number of reservations available for the price.</p>
   */
  Count?: number;

  /**
   * <p>The price per instance.</p>
   */
  Price?: number;
}

/**
 * <p>Describes a Reserved Instance offering.</p>
 */
export interface ReservedInstancesOffering {
  /**
   * <p>The Availability Zone in which the Reserved Instance can be used.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>The duration of the Reserved Instance, in seconds.</p>
   */
  Duration?: number;

  /**
   * <p>The purchase price of the Reserved Instance.</p>
   */
  FixedPrice?: number;

  /**
   * <p>The instance type on which the Reserved Instance can be used.</p>
   */
  InstanceType?: _InstanceType | string;

  /**
   * <p>The Reserved Instance product platform description.</p>
   */
  ProductDescription?: RIProductDescription | string;

  /**
   * <p>The ID of the Reserved Instance offering. This is the offering ID used in <a>GetReservedInstancesExchangeQuote</a>
   *      to confirm that an exchange can be made.</p>
   */
  ReservedInstancesOfferingId?: string;

  /**
   * <p>The usage price of the Reserved Instance, per hour.</p>
   */
  UsagePrice?: number;

  /**
   * <p>The currency of the Reserved Instance offering you are purchasing. It's
   * 				specified using ISO 4217 standard currency codes. At this time,
   * 				the only supported currency is <code>USD</code>.</p>
   */
  CurrencyCode?: CurrencyCodeValues | string;

  /**
   * <p>The tenancy of the instance.</p>
   */
  InstanceTenancy?: Tenancy | string;

  /**
   * <p>Indicates whether the offering is available through the Reserved Instance Marketplace (resale) or Amazon Web Services.
   *         If it's a Reserved Instance Marketplace offering, this is <code>true</code>.</p>
   */
  Marketplace?: boolean;

  /**
   * <p>If <code>convertible</code> it can be exchanged for Reserved Instances of
   *       the same or higher monetary value, with different configurations. If <code>standard</code>, it is not
   *       possible to perform an exchange.</p>
   */
  OfferingClass?: OfferingClassType | string;

  /**
   * <p>The Reserved Instance offering type.</p>
   */
  OfferingType?: OfferingTypeValues | string;

  /**
   * <p>The pricing details of the Reserved Instance offering.</p>
   */
  PricingDetails?: PricingDetail[];

  /**
   * <p>The recurring charge tag assigned to the resource.</p>
   */
  RecurringCharges?: RecurringCharge[];

  /**
   * <p>Whether the Reserved Instance is applied to instances in a Region or an Availability Zone.</p>
   */
  Scope?: Scope | string;
}

/**
 * <p>Contains the output of DescribeReservedInstancesOfferings.</p>
 */
export interface DescribeReservedInstancesOfferingsResult {
  /**
   * <p>A list of Reserved Instances offerings.</p>
   */
  ReservedInstancesOfferings?: ReservedInstancesOffering[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when
   * 			there are no more results to return.</p>
   */
  NextToken?: string;
}

export interface DescribeRouteTablesRequest {
  /**
   * <p>One or more filters.</p>
   * 		       <ul>
   *             <li>
   * 		             <p>
   *                   <code>association.route-table-association-id</code> - The ID of an association
   *                     ID for the route table.</p>
   * 		          </li>
   *             <li>
   * 		             <p>
   *                   <code>association.route-table-id</code> - The ID of the route table involved in
   *                     the association.</p>
   * 		          </li>
   *             <li>
   * 		             <p>
   *                   <code>association.subnet-id</code> - The ID of the subnet involved in the
   *                     association.</p>
   * 		          </li>
   *             <li>
   * 		             <p>
   *                   <code>association.main</code> - Indicates whether the route table is the main
   *                     route table for the VPC (<code>true</code> | <code>false</code>). Route tables
   *                     that do not have an association ID are not returned in the response.</p>
   * 		          </li>
   *             <li>
   * 		             <p>
   *                   <code>owner-id</code> - The ID of the Amazon Web Services account that owns the route table.</p>
   * 		          </li>
   *             <li>
   * 		             <p>
   *                   <code>route-table-id</code> - The ID of the route table.</p>
   * 		          </li>
   *             <li>
   * 				           <p>
   *                   <code>route.destination-cidr-block</code> - The IPv4 CIDR range specified in a
   *                     route in the table.</p>
   * 			         </li>
   *             <li>
   *                   <p>
   *                   <code>route.destination-ipv6-cidr-block</code> - The IPv6 CIDR range specified in a route in the route table.</p>
   *                </li>
   *             <li>
   * 				           <p>
   *                   <code>route.destination-prefix-list-id</code> - The ID (prefix) of the Amazon Web Service
   *                     specified in a route in the table.</p>
   * 			         </li>
   *             <li>
   *                   <p>
   *                   <code>route.egress-only-internet-gateway-id</code> - The ID of an
   *                     egress-only Internet gateway specified in a route in the route table.</p>
   *                </li>
   *             <li>
   * 		             <p>
   *                   <code>route.gateway-id</code> - The ID of a gateway specified in a route in the table.</p>
   * 		          </li>
   *             <li>
   *                   <p>
   *                   <code>route.instance-id</code> - The ID of an instance specified in a route in the table.</p>
   *                </li>
   *             <li>
   *                   <p>
   *                   <code>route.nat-gateway-id</code> - The ID of a NAT gateway.</p>
   *                </li>
   *             <li>
   * 		             <p>
   *                   <code>route.transit-gateway-id</code> - The ID of a transit gateway.</p>
   * 		          </li>
   *             <li>
   * 		             <p>
   *                   <code>route.origin</code> - Describes how the route was created.
   *                         <code>CreateRouteTable</code> indicates that the route was automatically
   *                     created when the route table was created; <code>CreateRoute</code> indicates
   *                     that the route was manually added to the route table;
   *                         <code>EnableVgwRoutePropagation</code> indicates that the route was
   *                     propagated by route propagation.</p>
   * 		          </li>
   *             <li>
   *                   <p>
   *                   <code>route.state</code> - The state of a route in the route table
   *                         (<code>active</code> | <code>blackhole</code>). The blackhole state
   *                     indicates that the route's target isn't available (for example, the specified
   *                     gateway isn't attached to the VPC, the specified NAT instance has been
   *                     terminated, and so on).</p>
   *                </li>
   *             <li>
   * 		            <p>
   *                   <code>route.vpc-peering-connection-id</code> - The ID of a VPC peering
   * 		                connection specified in a route in the table.</p>
   * 		          </li>
   *             <li>
   * 		            <p>
   *                   <code>tag</code>:<key> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value.
   *     For example, to find all resources that have a tag with the key <code>Owner</code> and the value <code>TeamA</code>, specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p>
   * 		          </li>
   *             <li>
   * 		            <p>
   *                   <code>tag-key</code> - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.</p>
   * 		          </li>
   *             <li>
   * 		            <p>
   *                   <code>vpc-id</code> - The ID of the VPC for the route table.</p>
   * 		          </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>One or more route table IDs.</p>
   * 		       <p>Default: Describes all your route tables.</p>
   */
  RouteTableIds?: string[];

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  MaxResults?: number;
}

/**
 * <p>Contains the output of DescribeRouteTables.</p>
 */
export interface DescribeRouteTablesResult {
  /**
   * <p>Information about one or more route tables.</p>
   */
  RouteTables?: RouteTable[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

/**
 * <p>Describes the time period for a Scheduled Instance to start its first schedule. The time period must span less than one day.</p>
 */
export interface SlotDateTimeRangeRequest {
  /**
   * <p>The earliest date and time, in UTC, for the Scheduled Instance to start.</p>
   */
  EarliestTime: Date | undefined;

  /**
   * <p>The latest date and time, in UTC, for the Scheduled Instance to start. This value must be later than or equal to the earliest date and at most three months in the future.</p>
   */
  LatestTime: Date | undefined;
}

/**
 * <p>Describes the recurring schedule for a Scheduled Instance.</p>
 */
export interface ScheduledInstanceRecurrenceRequest {
  /**
   * <p>The frequency (<code>Daily</code>, <code>Weekly</code>, or <code>Monthly</code>).</p>
   */
  Frequency?: string;

  /**
   * <p>The interval quantity. The interval unit depends on the value of <code>Frequency</code>. For example, every 2
   *          weeks or every 2 months.</p>
   */
  Interval?: number;

  /**
   * <p>The days. For a monthly schedule, this is one or more days of the month (1-31). For a weekly schedule, this is one or more days of the week (1-7, where 1 is Sunday). You can't specify this value with a daily schedule. If the occurrence is relative to the end of the month, you can specify only a single day.</p>
   */
  OccurrenceDays?: number[];

  /**
   * <p>Indicates whether the occurrence is relative to the end of the specified week or month. You can't specify this value with a daily schedule.</p>
   */
  OccurrenceRelativeToEnd?: boolean;

  /**
   * <p>The unit for <code>OccurrenceDays</code> (<code>DayOfWeek</code> or <code>DayOfMonth</code>).
   *         This value is required for a monthly schedule.
   *         You can't specify <code>DayOfWeek</code> with a weekly schedule.
   *         You can't specify this value with a daily schedule.</p>
   */
  OccurrenceUnit?: string;
}

/**
 * <p>Contains the parameters for DescribeScheduledInstanceAvailability.</p>
 */
export interface DescribeScheduledInstanceAvailabilityRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>availability-zone</code> - The Availability Zone (for example, <code>us-west-2a</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>instance-type</code> - The instance type (for example, <code>c4.large</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-platform</code> - The network platform (<code>EC2-Classic</code> or <code>EC2-VPC</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>platform</code> - The platform (<code>Linux/UNIX</code> or <code>Windows</code>).</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>The time period for the first schedule to start.</p>
   */
  FirstSlotStartTimeRange: SlotDateTimeRangeRequest | undefined;

  /**
   * <p>The maximum number of results to return in a single call.
   *          This value can be between 5 and 300. The default value is 300.
   *          To retrieve the remaining results, make another call with the returned
   *          <code>NextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * <p>The maximum available duration, in hours. This value must be greater than <code>MinSlotDurationInHours</code>
   *          and less than 1,720.</p>
   */
  MaxSlotDurationInHours?: number;

  /**
   * <p>The minimum available duration, in hours. The minimum required duration is 1,200 hours per year. For example, the minimum daily schedule is 4 hours, the minimum weekly schedule is 24 hours, and the minimum monthly schedule is 100 hours.</p>
   */
  MinSlotDurationInHours?: number;

  /**
   * <p>The token for the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The schedule recurrence.</p>
   */
  Recurrence: ScheduledInstanceRecurrenceRequest | undefined;
}

/**
 * <p>Describes the recurring schedule for a Scheduled Instance.</p>
 */
export interface ScheduledInstanceRecurrence {
  /**
   * <p>The frequency (<code>Daily</code>, <code>Weekly</code>, or <code>Monthly</code>).</p>
   */
  Frequency?: string;

  /**
   * <p>The interval quantity. The interval unit depends on the value of <code>frequency</code>. For example, every 2
   *          weeks or every 2 months.</p>
   */
  Interval?: number;

  /**
   * <p>The days. For a monthly schedule, this is one or more days of the month (1-31). For a weekly schedule, this is one or more days of the week (1-7, where 1 is Sunday).</p>
   */
  OccurrenceDaySet?: number[];

  /**
   * <p>Indicates whether the occurrence is relative to the end of the specified week or month.</p>
   */
  OccurrenceRelativeToEnd?: boolean;

  /**
   * <p>The unit for <code>occurrenceDaySet</code> (<code>DayOfWeek</code> or <code>DayOfMonth</code>).</p>
   */
  OccurrenceUnit?: string;
}

/**
 * <p>Describes a schedule that is available for your Scheduled Instances.</p>
 */
export interface ScheduledInstanceAvailability {
  /**
   * <p>The Availability Zone.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>The number of available instances.</p>
   */
  AvailableInstanceCount?: number;

  /**
   * <p>The time period for the first schedule to start.</p>
   */
  FirstSlotStartTime?: Date;

  /**
   * <p>The hourly price for a single instance.</p>
   */
  HourlyPrice?: string;

  /**
   * <p>The instance type. You can specify one of the C3, C4, M4, or R3 instance types.</p>
   */
  InstanceType?: string;

  /**
   * <p>The maximum term. The only possible value is 365 days.</p>
   */
  MaxTermDurationInDays?: number;

  /**
   * <p>The minimum term. The only possible value is 365 days.</p>
   */
  MinTermDurationInDays?: number;

  /**
   * <p>The network platform (<code>EC2-Classic</code> or <code>EC2-VPC</code>).</p>
   */
  NetworkPlatform?: string;

  /**
   * <p>The platform (<code>Linux/UNIX</code> or <code>Windows</code>).</p>
   */
  Platform?: string;

  /**
   * <p>The purchase token. This token expires in two hours.</p>
   */
  PurchaseToken?: string;

  /**
   * <p>The schedule recurrence.</p>
   */
  Recurrence?: ScheduledInstanceRecurrence;

  /**
   * <p>The number of hours in the schedule.</p>
   */
  SlotDurationInHours?: number;

  /**
   * <p>The total number of hours for a single instance for the entire term.</p>
   */
  TotalScheduledInstanceHours?: number;
}

/**
 * <p>Contains the output of DescribeScheduledInstanceAvailability.</p>
 */
export interface DescribeScheduledInstanceAvailabilityResult {
  /**
   * <p>The token required to retrieve the next set of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;

  /**
   * <p>Information about the available Scheduled Instances.</p>
   */
  ScheduledInstanceAvailabilitySet?: ScheduledInstanceAvailability[];
}

/**
 * <p>Describes the time period for a Scheduled Instance to start its first schedule.</p>
 */
export interface SlotStartTimeRangeRequest {
  /**
   * <p>The earliest date and time, in UTC, for the Scheduled Instance to start.</p>
   */
  EarliestTime?: Date;

  /**
   * <p>The latest date and time, in UTC, for the Scheduled Instance to start.</p>
   */
  LatestTime?: Date;
}

/**
 * <p>Contains the parameters for DescribeScheduledInstances.</p>
 */
export interface DescribeScheduledInstancesRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>availability-zone</code> - The Availability Zone (for example, <code>us-west-2a</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>instance-type</code> - The instance type (for example, <code>c4.large</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-platform</code> - The network platform (<code>EC2-Classic</code> or <code>EC2-VPC</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>platform</code> - The platform (<code>Linux/UNIX</code> or <code>Windows</code>).</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>The maximum number of results to return in a single call.
   *          This value can be between 5 and 300. The default value is 100.
   *          To retrieve the remaining results, make another call with the returned
   *          <code>NextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The Scheduled Instance IDs.</p>
   */
  ScheduledInstanceIds?: string[];

  /**
   * <p>The time period for the first schedule to start.</p>
   */
  SlotStartTimeRange?: SlotStartTimeRangeRequest;
}

/**
 * <p>Describes a Scheduled Instance.</p>
 */
export interface ScheduledInstance {
  /**
   * <p>The Availability Zone.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>The date when the Scheduled Instance was purchased.</p>
   */
  CreateDate?: Date;

  /**
   * <p>The hourly price for a single instance.</p>
   */
  HourlyPrice?: string;

  /**
   * <p>The number of instances.</p>
   */
  InstanceCount?: number;

  /**
   * <p>The instance type.</p>
   */
  InstanceType?: string;

  /**
   * <p>The network platform (<code>EC2-Classic</code> or <code>EC2-VPC</code>).</p>
   */
  NetworkPlatform?: string;

  /**
   * <p>The time for the next schedule to start.</p>
   */
  NextSlotStartTime?: Date;

  /**
   * <p>The platform (<code>Linux/UNIX</code> or <code>Windows</code>).</p>
   */
  Platform?: string;

  /**
   * <p>The time that the previous schedule ended or will end.</p>
   */
  PreviousSlotEndTime?: Date;

  /**
   * <p>The schedule recurrence.</p>
   */
  Recurrence?: ScheduledInstanceRecurrence;

  /**
   * <p>The Scheduled Instance ID.</p>
   */
  ScheduledInstanceId?: string;

  /**
   * <p>The number of hours in the schedule.</p>
   */
  SlotDurationInHours?: number;

  /**
   * <p>The end date for the Scheduled Instance.</p>
   */
  TermEndDate?: Date;

  /**
   * <p>The start date for the Scheduled Instance.</p>
   */
  TermStartDate?: Date;

  /**
   * <p>The total number of hours for a single instance for the entire term.</p>
   */
  TotalScheduledInstanceHours?: number;
}

/**
 * <p>Contains the output of DescribeScheduledInstances.</p>
 */
export interface DescribeScheduledInstancesResult {
  /**
   * <p>The token required to retrieve the next set of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;

  /**
   * <p>Information about the Scheduled Instances.</p>
   */
  ScheduledInstanceSet?: ScheduledInstance[];
}

export interface DescribeSecurityGroupReferencesRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The IDs of the security groups in your account.</p>
   */
  GroupId: string[] | undefined;
}

/**
 * <p>Describes a VPC with a security group that references your security group.</p>
 */
export interface SecurityGroupReference {
  /**
   * <p>The ID of your security group.</p>
   */
  GroupId?: string;

  /**
   * <p>The ID of the VPC with the referencing security group.</p>
   */
  ReferencingVpcId?: string;

  /**
   * <p>The ID of the VPC peering connection.</p>
   */
  VpcPeeringConnectionId?: string;
}

export interface DescribeSecurityGroupReferencesResult {
  /**
   * <p>Information about the VPCs with the referencing security groups.</p>
   */
  SecurityGroupReferenceSet?: SecurityGroupReference[];
}

export interface DescribeSecurityGroupRulesRequest {
  /**
   * <p>One or more filters.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>group-id</code> - The ID of the security group.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>security-group-rule-id</code> - The ID of the security group rule.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>tag</code>:<key> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value.
   *     For example, to find all resources that have a tag with the key <code>Owner</code> and the value <code>TeamA</code>, specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>The IDs of the security group rules.</p>
   */
  SecurityGroupRuleIds?: string[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return in a single call. To retrieve the remaining
   *             results, make another request with the returned <code>NextToken</code> value. This value
   *             can be between 5 and 1000. If this parameter is not specified, then all results are
   *             returned.</p>
   */
  MaxResults?: number;
}

export interface DescribeSecurityGroupRulesResult {
  /**
   * <p>Information about security group rules.</p>
   */
  SecurityGroupRules?: SecurityGroupRule[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return. </p>
   */
  NextToken?: string;
}

export interface DescribeSecurityGroupsRequest {
  /**
   * <p>The filters. If using multiple filters for rules, the results include security groups for which any combination of rules - not necessarily a single rule - match all filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>description</code> - The description of the security group.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>egress.ip-permission.cidr</code> - An IPv4 CIDR block for an outbound
   *                     security group rule.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>egress.ip-permission.from-port</code> - For an outbound rule, the
   *                     start of port range for the TCP and UDP protocols, or an ICMP type
   *                     number.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>egress.ip-permission.group-id</code> - The ID of a security group
   *                     that has been referenced in an outbound security group rule.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>egress.ip-permission.group-name</code> - The name of a security group
   *                     that is referenced in an outbound security group rule.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>egress.ip-permission.ipv6-cidr</code> - An IPv6 CIDR block for an
   *                     outbound security group rule.</p>
   *             </li>
   *             <li>
   *      		        <p>
   *                   <code>egress.ip-permission.prefix-list-id</code> - The ID of a prefix list to which a security group rule allows outbound access.</p>
   *      	      </li>
   *             <li>
   *                 <p>
   *                   <code>egress.ip-permission.protocol</code> - The IP protocol for an
   *                     outbound security group rule (<code>tcp</code> | <code>udp</code> |
   *                         <code>icmp</code>, a protocol number, or -1 for all protocols).</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>egress.ip-permission.to-port</code> - For an outbound rule, the end
   *                     of port range for the TCP and UDP protocols, or an ICMP code.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>egress.ip-permission.user-id</code> - The ID of an Amazon Web Services account that
   *                     has been referenced in an outbound security group rule.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>group-id</code> - The ID of the security group. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>group-name</code> - The name of the security group.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ip-permission.cidr</code> - An IPv4 CIDR block for an inbound security
   *                     group rule.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ip-permission.from-port</code> - For an inbound rule, the start of port
   *                     range for the TCP and UDP protocols, or an ICMP type number.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ip-permission.group-id</code> - The ID of a security group that has been
   *                     referenced in an inbound security group rule.</p>
   *             </li>
   *             <li>
   * 			            <p>
   *                   <code>ip-permission.group-name</code> - The name of a security group that is
   *                     referenced in an inbound security group rule.</p>
   * 	           </li>
   *             <li>
   *                <p>
   *                   <code>ip-permission.ipv6-cidr</code> - An IPv6 CIDR block for an inbound security
   *                     group rule.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>ip-permission.prefix-list-id</code> - The ID of a prefix list from which a security group rule allows inbound access.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ip-permission.protocol</code> - The IP protocol for an inbound security
   *                 group rule (<code>tcp</code> | <code>udp</code> | <code>icmp</code>, a
   *                 protocol number, or -1 for all protocols).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ip-permission.to-port</code> - For an inbound rule, the end of port range
   *                     for the TCP and UDP protocols, or an ICMP code.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ip-permission.user-id</code> - The ID of an Amazon Web Services account that has been
   *                     referenced in an inbound security group rule.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>owner-id</code> - The Amazon Web Services account ID of the owner of the security group.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>tag</code>:<key> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value.
   *     For example, to find all resources that have a tag with the key <code>Owner</code> and the value <code>TeamA</code>, specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>tag-key</code> - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>vpc-id</code> - The ID of the VPC specified when the security group was created.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>The IDs of the security groups. Required for security groups in a nondefault VPC.</p>
   *          <p>Default: Describes all of your security groups.</p>
   */
  GroupIds?: string[];

  /**
   * <p>[EC2-Classic and default VPC only] The names of the security groups. You can specify either
   * 			the security group name or the security group ID. For security groups in a nondefault VPC, use
   * 			the <code>group-name</code> filter to describe security groups by name.</p>
   *          <p>Default: Describes all of your security groups.</p>
   */
  GroupNames?: string[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The token to request the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return in a single call. To retrieve the remaining
   *             results, make another request with the returned <code>NextToken</code> value. This value
   *             can be between 5 and 1000. If this parameter is not specified, then all results are
   *             returned.</p>
   */
  MaxResults?: number;
}

/**
 * <p>Describes a security group.</p>
 */
export interface SecurityGroup {
  /**
   * <p>A description of the security group.</p>
   */
  Description?: string;

  /**
   * <p>The name of the security group.</p>
   */
  GroupName?: string;

  /**
   * <p>The inbound rules associated with the security group.</p>
   */
  IpPermissions?: IpPermission[];

  /**
   * <p>The Amazon Web Services account ID of the owner of the security group.</p>
   */
  OwnerId?: string;

  /**
   * <p>The ID of the security group.</p>
   */
  GroupId?: string;

  /**
   * <p>[VPC only] The outbound rules associated with the security group.</p>
   */
  IpPermissionsEgress?: IpPermission[];

  /**
   * <p>Any tags assigned to the security group.</p>
   */
  Tags?: Tag[];

  /**
   * <p>[VPC only] The ID of the VPC for the security group.</p>
   */
  VpcId?: string;
}

export interface DescribeSecurityGroupsResult {
  /**
   * <p>Information about the security groups.</p>
   */
  SecurityGroups?: SecurityGroup[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export enum SnapshotAttributeName {
  createVolumePermission = "createVolumePermission",
  productCodes = "productCodes",
}

export interface DescribeSnapshotAttributeRequest {
  /**
   * <p>The snapshot attribute you would like to view.</p>
   */
  Attribute: SnapshotAttributeName | string | undefined;

  /**
   * <p>The ID of the EBS snapshot.</p>
   */
  SnapshotId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * <p>Describes the user or group to be added or removed from the list of create volume
 *       permissions for a volume.</p>
 */
export interface CreateVolumePermission {
  /**
   * <p>The group to be added or removed. The possible value is <code>all</code>.</p>
   */
  Group?: PermissionGroup | string;

  /**
   * <p>The ID of the Amazon Web Services account to be added or removed.</p>
   */
  UserId?: string;
}

export interface DescribeSnapshotAttributeResult {
  /**
   * <p>The users and groups that have the permissions for creating volumes from the
   *       snapshot.</p>
   */
  CreateVolumePermissions?: CreateVolumePermission[];

  /**
   * <p>The product codes.</p>
   */
  ProductCodes?: ProductCode[];

  /**
   * <p>The ID of the EBS snapshot.</p>
   */
  SnapshotId?: string;
}

export interface DescribeSnapshotsRequest {
  /**
   * <p>The filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>description</code> - A description of the snapshot.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>encrypted</code> - Indicates whether the snapshot is encrypted
   *             (<code>true</code> | <code>false</code>)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>owner-alias</code> - The owner alias, from an Amazon-maintained list
   *           (<code>amazon</code>).
   *           This is not the user-configured Amazon Web Services account alias set using the IAM console.
   *           We recommend that you use the related parameter instead of this filter.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>owner-id</code> - The Amazon Web Services account ID of the owner. We recommend that
   *           you use the related parameter instead of this filter.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>progress</code> - The progress of the snapshot, as a percentage (for example,
   *           80%).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>snapshot-id</code> - The snapshot ID.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>start-time</code> - The time stamp when the snapshot was initiated.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>status</code> - The status of the snapshot (<code>pending</code> |
   *             <code>completed</code> | <code>error</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>storage-tier</code> - The storage tier of the snapshot (<code>archive</code> |
   *           <code>standard</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>tag</code>:<key> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value.
   *     For example, to find all resources that have a tag with the key <code>Owner</code> and the value <code>TeamA</code>, specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>tag-key</code> - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>volume-id</code> - The ID of the volume the snapshot is for.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>volume-size</code> - The size of the volume, in GiB.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>The maximum number of snapshot results returned by <code>DescribeSnapshots</code> in
   *       paginated output. When this parameter is used, <code>DescribeSnapshots</code> only returns
   *         <code>MaxResults</code> results in a single page along with a <code>NextToken</code>
   *       response element. The remaining results of the initial request can be seen by sending another
   *         <code>DescribeSnapshots</code> request with the returned <code>NextToken</code> value. This
   *       value can be between 5 and 1,000; if <code>MaxResults</code> is given a value larger than 1,000,
   *       only 1,000 results are returned. If this parameter is not used, then
   *         <code>DescribeSnapshots</code> returns all results. You cannot specify this parameter and
   *       the snapshot IDs parameter in the same request.</p>
   */
  MaxResults?: number;

  /**
   * <p>The <code>NextToken</code> value returned from a previous paginated
   *         <code>DescribeSnapshots</code> request where <code>MaxResults</code> was used and the
   *       results exceeded the value of that parameter. Pagination continues from the end of the
   *       previous results that returned the <code>NextToken</code> value. This value is
   *         <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;

  /**
   * <p>Scopes the results to snapshots with the specified owners. You can specify a combination of
   *       Amazon Web Services account IDs, <code>self</code>, and <code>amazon</code>.</p>
   */
  OwnerIds?: string[];

  /**
   * <p>The IDs of the Amazon Web Services accounts that can create volumes from the snapshot.</p>
   */
  RestorableByUserIds?: string[];

  /**
   * <p>The snapshot IDs.</p>
   *          <p>Default: Describes the snapshots for which you have create volume permissions.</p>
   */
  SnapshotIds?: string[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export interface DescribeSnapshotsResult {
  /**
   * <p>Information about the snapshots.</p>
   */
  Snapshots?: Snapshot[];

  /**
   * <p>The <code>NextToken</code> value to include in a future <code>DescribeSnapshots</code>
   *       request. When the results of a <code>DescribeSnapshots</code> request exceed
   *         <code>MaxResults</code>, this value can be used to retrieve the next page of results. This
   *       value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export interface DescribeSnapshotTierStatusRequest {
  /**
   * <p>The filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>snapshot-id</code> - The snapshot ID.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>volume-id</code> - The ID of the volume the snapshot is for.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>last-tiering-operation</code> - The state of the last archive or restore action. (<code>archival-in-progress</code> | <code>archival-completed</code> |
   *           <code>archival-failed</code> | <code>permanent-restore-in-progress</code> | <code>permanent-restore-completed</code> | <code>permanent-restore-failed</code> |
   * 		<code>temporary-restore-in-progress</code> | <code>temporary-restore-completed</code> | <code>temporary-restore-failed</code>)</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  MaxResults?: number;
}

export enum TieringOperationStatus {
  archival_completed = "archival-completed",
  archival_failed = "archival-failed",
  archival_in_progress = "archival-in-progress",
  permanent_restore_completed = "permanent-restore-completed",
  permanent_restore_failed = "permanent-restore-failed",
  permanent_restore_in_progress = "permanent-restore-in-progress",
  temporary_restore_completed = "temporary-restore-completed",
  temporary_restore_failed = "temporary-restore-failed",
  temporary_restore_in_progress = "temporary-restore-in-progress",
}

/**
 * <p>Provides information about a snapshot's storage tier.</p>
 */
export interface SnapshotTierStatus {
  /**
   * <p>The ID of the snapshot.</p>
   */
  SnapshotId?: string;

  /**
   * <p>The ID of the volume from which the snapshot was created.</p>
   */
  VolumeId?: string;

  /**
   * <p>The state of the snapshot.</p>
   */
  Status?: SnapshotState | string;

  /**
   * <p>The ID of the Amazon Web Services account that owns the snapshot.</p>
   */
  OwnerId?: string;

  /**
   * <p>The tags that are assigned to the snapshot.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The storage tier in which the snapshot is stored. <code>standard</code> indicates
   *       that the snapshot is stored in the standard snapshot storage tier and that it is ready
   *       for use. <code>archive</code> indicates that the snapshot is currently archived and that
   *       it must be restored before it can be used.</p>
   */
  StorageTier?: StorageTier | string;

  /**
   * <p>The date and time when the last archive or restore process was started.</p>
   */
  LastTieringStartTime?: Date;

  /**
   * <p>The progress of the last archive or restore process, as a percentage.</p>
   */
  LastTieringProgress?: number;

  /**
   * <p>The status of the last archive or restore process.</p>
   */
  LastTieringOperationStatus?: TieringOperationStatus | string;

  /**
   * <p>A message describing the status of the last archive or restore process.</p>
   */
  LastTieringOperationStatusDetail?: string;

  /**
   * <p>The date and time when the last archive process was completed.</p>
   */
  ArchivalCompleteTime?: Date;

  /**
   * <p>Only for archived snapshots that are temporarily restored. Indicates the date and
   *       time when a temporarily restored snapshot will be automatically re-archived.</p>
   */
  RestoreExpiryTime?: Date;
}

export interface DescribeSnapshotTierStatusResult {
  /**
   * <p>Information about the snapshot's storage tier.</p>
   */
  SnapshotTierStatuses?: SnapshotTierStatus[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

/**
 * <p>Contains the parameters for DescribeSpotDatafeedSubscription.</p>
 */
export interface DescribeSpotDatafeedSubscriptionRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually
   *             making the request, and provides an error response. If you have the required
   *             permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is
   *                 <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * <p>Contains the output of DescribeSpotDatafeedSubscription.</p>
 */
export interface DescribeSpotDatafeedSubscriptionResult {
  /**
   * <p>The Spot Instance data feed subscription.</p>
   */
  SpotDatafeedSubscription?: SpotDatafeedSubscription;
}

/**
 * <p>Contains the parameters for DescribeSpotFleetInstances.</p>
 */
export interface DescribeSpotFleetInstancesRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually
   *             making the request, and provides an error response. If you have the required
   *             permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is
   *                 <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The maximum number of results to return in a single call. Specify a value between 1
   *             and 1000. The default value is 1000. To retrieve the remaining results, make another
   *             call with the returned <code>NextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The ID of the Spot Fleet request.</p>
   */
  SpotFleetRequestId: string | undefined;
}

/**
 * <p>Contains the output of DescribeSpotFleetInstances.</p>
 */
export interface DescribeSpotFleetInstancesResponse {
  /**
   * <p>The running instances. This list is refreshed periodically and might be out of
   *             date.</p>
   */
  ActiveInstances?: ActiveInstance[];

  /**
   * <p>The token required to retrieve the next set of results. This value is
   *                 <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;

  /**
   * <p>The ID of the Spot Fleet request.</p>
   */
  SpotFleetRequestId?: string;
}

export enum EventType {
  BATCH_CHANGE = "fleetRequestChange",
  ERROR = "error",
  INFORMATION = "information",
  INSTANCE_CHANGE = "instanceChange",
}

/**
 * <p>Contains the parameters for DescribeSpotFleetRequestHistory.</p>
 */
export interface DescribeSpotFleetRequestHistoryRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually
   *             making the request, and provides an error response. If you have the required
   *             permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is
   *                 <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The type of events to describe. By default, all events are described.</p>
   */
  EventType?: EventType | string;

  /**
   * <p>The maximum number of results to return in a single call. Specify a value between 1
   *             and 1000. The default value is 1000. To retrieve the remaining results, make another
   *             call with the returned <code>NextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The ID of the Spot Fleet request.</p>
   */
  SpotFleetRequestId: string | undefined;

  /**
   * <p>The starting date and time for the events, in UTC format (for example,
   *                 <i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z).</p>
   */
  StartTime: Date | undefined;
}

/**
 * <p>Describes an event in the history of the Spot Fleet request.</p>
 */
export interface HistoryRecord {
  /**
   * <p>Information about the event.</p>
   */
  EventInformation?: EventInformation;

  /**
   * <p>The event type.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>error</code> - An error with the Spot Fleet request.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>fleetRequestChange</code> - A change in the status or configuration of
   *                     the Spot Fleet request.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>instanceChange</code> - An instance was launched or terminated.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Information</code> - An informational event.</p>
   *             </li>
   *          </ul>
   */
  EventType?: EventType | string;

  /**
   * <p>The date and time of the event, in UTC format (for example,
   *                 <i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z).</p>
   */
  Timestamp?: Date;
}

/**
 * <p>Contains the output of DescribeSpotFleetRequestHistory.</p>
 */
export interface DescribeSpotFleetRequestHistoryResponse {
  /**
   * <p>Information about the events in the history of the Spot Fleet request.</p>
   */
  HistoryRecords?: HistoryRecord[];

  /**
   * <p>The last date and time for the events, in UTC format (for example,
   *                 <i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z).
   *             All records up to this time were retrieved.</p>
   *         <p>If <code>nextToken</code> indicates that there are more results, this value is not
   *             present.</p>
   */
  LastEvaluatedTime?: Date;

  /**
   * <p>The token required to retrieve the next set of results. This value is
   *                 <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;

  /**
   * <p>The ID of the Spot Fleet request.</p>
   */
  SpotFleetRequestId?: string;

  /**
   * <p>The starting date and time for the events, in UTC format (for example,
   *                 <i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z).</p>
   */
  StartTime?: Date;
}

/**
 * <p>Contains the parameters for DescribeSpotFleetRequests.</p>
 */
export interface DescribeSpotFleetRequestsRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually
   *             making the request, and provides an error response. If you have the required
   *             permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is
   *                 <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The maximum number of results to return in a single call. Specify a value between 1
   *             and 1000. The default value is 1000. To retrieve the remaining results, make another
   *             call with the returned <code>NextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The IDs of the Spot Fleet requests.</p>
   */
  SpotFleetRequestIds?: string[];
}

export enum ExcessCapacityTerminationPolicy {
  DEFAULT = "default",
  NO_TERMINATION = "noTermination",
}

/**
 * <p>Describes whether monitoring is enabled.</p>
 */
export interface SpotFleetMonitoring {
  /**
   * <p>Enables monitoring for the instance.</p>
   *          <p>Default: <code>false</code>
   *          </p>
   */
  Enabled?: boolean;
}

/**
 * <p>Describes a network interface.</p>
 */
export interface InstanceNetworkInterfaceSpecification {
  /**
   * <p>Indicates whether to assign a public IPv4 address to an instance you launch in a VPC. The
   *             public IP address can only be assigned to a network interface for eth0, and can only be
   *             assigned to a new network interface, not an existing one. You cannot specify more than one
   *             network interface in the request. If launching into a default subnet, the default value is
   *             <code>true</code>.</p>
   */
  AssociatePublicIpAddress?: boolean;

  /**
   * <p>If set to <code>true</code>, the interface is deleted when the instance is terminated. You can
   *             specify <code>true</code> only if creating a new network interface when launching an
   *             instance.</p>
   */
  DeleteOnTermination?: boolean;

  /**
   * <p>The description of the network interface. Applies only if creating a network interface when launching an instance.</p>
   */
  Description?: string;

  /**
   * <p>The position of the network interface in the attachment order.
   *           A primary network interface has a device index of 0.</p>
   *         <p>If you specify a network interface when launching an instance,
   *           you must specify the device index.</p>
   */
  DeviceIndex?: number;

  /**
   * <p>The IDs of the security groups for the network interface. Applies only if creating a network interface when launching an instance.</p>
   */
  Groups?: string[];

  /**
   * <p>A number of IPv6 addresses to assign to the network interface. Amazon EC2 chooses
   *             the IPv6 addresses from the range of the subnet. You cannot specify this option and the
   *             option to assign specific IPv6 addresses in the same request. You can specify this
   *             option if you've specified a minimum number of instances to launch.</p>
   */
  Ipv6AddressCount?: number;

  /**
   * <p>One or more IPv6 addresses to assign to the network interface. You cannot specify
   *             this option and the option to assign a number of IPv6 addresses in the same request. You
   *             cannot specify this option if you've specified a minimum number of instances to
   *             launch.</p>
   */
  Ipv6Addresses?: InstanceIpv6Address[];

  /**
   * <p>The ID of the network interface.</p>
   *         <p>If you are creating a Spot Fleet, omit this parameter because you can’t specify a network interface ID in a launch specification.</p>
   */
  NetworkInterfaceId?: string;

  /**
   * <p>The private IPv4 address of the network interface. Applies only if creating a network interface when launching an instance. You cannot specify this option if you're launching
   *         	more than one instance in a <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RunInstances.html">RunInstances</a> request.</p>
   */
  PrivateIpAddress?: string;

  /**
   * <p>One or more private IPv4 addresses to assign to the network interface. Only one private IPv4 address can be designated as primary. You cannot specify this option if you're
   *         	launching more than one instance in a <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RunInstances.html">RunInstances</a> request.</p>
   */
  PrivateIpAddresses?: PrivateIpAddressSpecification[];

  /**
   * <p>The number of secondary private IPv4 addresses. You can't specify this option and specify more than one private IP address using the private IP addresses option. You cannot specify this option if you're
   *         	launching more than one instance in a <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RunInstances.html">RunInstances</a> request.</p>
   */
  SecondaryPrivateIpAddressCount?: number;

  /**
   * <p>The ID of the subnet associated with the network interface. Applies only if creating a network interface when launching an instance.</p>
   */
  SubnetId?: string;

  /**
   * <p>Indicates whether to assign a carrier IP address to the network interface.</p>
   *         <p>You can only assign a carrier IP address to a network interface that is in a subnet in
   *             a Wavelength Zone. For more information about carrier IP addresses, see <a href="https://docs.aws.amazon.com/wavelength/latest/developerguide/how-wavelengths-work.html#provider-owned-ip">Carrier IP address</a> in the <i>Amazon Web Services Wavelength Developer
   *                 Guide</i>.</p>
   */
  AssociateCarrierIpAddress?: boolean;

  /**
   * <p>The type of network interface.</p>
   * 	        <p>Valid values: <code>interface</code> | <code>efa</code>
   *          </p>
   */
  InterfaceType?: string;

  /**
   * <p>The index of the network card. Some instance types support multiple network cards.
   *             The primary network interface must be assigned to network card index 0.
   *             The default is network card index 0.</p>
   *         <p>If you are using <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RequestSpotInstances.html">RequestSpotInstances</a> to create Spot Instances, omit this parameter because
   *             you can’t specify the network card index when using this API. To specify the network
   *             card index, use <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RunInstances.html">RunInstances</a>.</p>
   */
  NetworkCardIndex?: number;

  /**
   * <p>One or more IPv4 delegated prefixes to be assigned to the network interface. You cannot
   *             use this option if you use the <code>Ipv4PrefixCount</code> option.</p>
   */
  Ipv4Prefixes?: Ipv4PrefixSpecificationRequest[];

  /**
   * <p>The number of IPv4 delegated prefixes to be automatically assigned to the network interface.
   *             You cannot use this option if you use the <code>Ipv4Prefix</code> option.</p>
   */
  Ipv4PrefixCount?: number;

  /**
   * <p>One or more IPv6 delegated prefixes to be assigned to the network interface. You cannot
   *             use this option if you use the <code>Ipv6PrefixCount</code> option.</p>
   */
  Ipv6Prefixes?: Ipv6PrefixSpecificationRequest[];

  /**
   * <p>The number of IPv6 delegated prefixes to be automatically assigned to the network interface.
   *             You cannot use this option if you use the <code>Ipv6Prefix</code> option.</p>
   */
  Ipv6PrefixCount?: number;
}

/**
 * <p>Describes Spot Instance placement.</p>
 */
export interface SpotPlacement {
  /**
   * <p>The Availability Zone.</p>
   *         <p>[Spot Fleet only] To specify multiple Availability Zones, separate them using commas;
   *             for example, "us-west-2a, us-west-2b".</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>The name of the placement group.</p>
   */
  GroupName?: string;

  /**
   * <p>The tenancy of the instance (if the instance is running in a VPC). An instance with a
   *             tenancy of <code>dedicated</code> runs on single-tenant hardware. The <code>host</code>
   *             tenancy is not supported for Spot Instances.</p>
   */
  Tenancy?: Tenancy | string;
}

/**
 * <p>The tags for a Spot Fleet resource.</p>
 */
export interface SpotFleetTagSpecification {
  /**
   * <p>The type of resource. Currently, the only resource type that is supported is
   *                 <code>instance</code>. To tag the Spot Fleet request on creation, use the
   *                 <code>TagSpecifications</code> parameter in <code>
   *                <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_SpotFleetRequestConfigData.html">SpotFleetRequestConfigData</a>
   *             </code>.</p>
   */
  ResourceType?: ResourceType | string;

  /**
   * <p>The tags.</p>
   */
  Tags?: Tag[];
}

/**
 * <p>Describes the launch specification for one or more Spot Instances. If you include
 *           On-Demand capacity in your fleet request or want to specify an EFA network device, you
 *           can't use <code>SpotFleetLaunchSpecification</code>; you must use <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_LaunchTemplateConfig.html">LaunchTemplateConfig</a>.</p>
 */
export interface SpotFleetLaunchSpecification {
  /**
   * <p>One or more security groups. When requesting instances in a VPC, you must specify the IDs of the security groups. When requesting instances in EC2-Classic, you can specify the names or the IDs of the security groups.</p>
   */
  SecurityGroups?: GroupIdentifier[];

  /**
   * <p>Deprecated.</p>
   */
  AddressingType?: string;

  /**
   * <p>One or more block devices that are mapped to the Spot Instances. You can't specify both
   *             a snapshot ID and an encryption value. This is because only blank volumes can be
   *             encrypted on creation. If a snapshot is the basis for a volume, it is not blank and its
   *             encryption status is used for the volume encryption status.</p>
   */
  BlockDeviceMappings?: BlockDeviceMapping[];

  /**
   * <p>Indicates whether the instances are optimized for EBS I/O. This optimization provides dedicated throughput to Amazon EBS and an optimized configuration stack to provide optimal EBS I/O performance. This optimization isn't available with all instance types. Additional usage charges apply when using an EBS Optimized instance.</p>
   *          <p>Default: <code>false</code>
   *          </p>
   */
  EbsOptimized?: boolean;

  /**
   * <p>The IAM instance profile.</p>
   */
  IamInstanceProfile?: IamInstanceProfileSpecification;

  /**
   * <p>The ID of the AMI.</p>
   */
  ImageId?: string;

  /**
   * <p>The instance type.</p>
   */
  InstanceType?: _InstanceType | string;

  /**
   * <p>The ID of the kernel.</p>
   */
  KernelId?: string;

  /**
   * <p>The name of the key pair.</p>
   */
  KeyName?: string;

  /**
   * <p>Enable or disable monitoring for the instances.</p>
   */
  Monitoring?: SpotFleetMonitoring;

  /**
   * <p>One or more network interfaces. If you specify a network interface, you must specify
   *           subnet IDs and security group IDs using the network interface.</p>
   *          <note>
   *             <p>
   *                <code>SpotFleetLaunchSpecification</code> currently does not support Elastic Fabric Adapter (EFA). To specify an EFA, you must use <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_LaunchTemplateConfig.html">LaunchTemplateConfig</a>.</p>
   *          </note>
   */
  NetworkInterfaces?: InstanceNetworkInterfaceSpecification[];

  /**
   * <p>The placement information.</p>
   */
  Placement?: SpotPlacement;

  /**
   * <p>The ID of the RAM disk. Some kernels require additional drivers at launch. Check the kernel
   *           requirements for information about whether you need to specify a RAM disk. To find kernel
   *           requirements, refer to the Amazon Web Services Resource Center and search for the kernel ID.</p>
   */
  RamdiskId?: string;

  /**
   * <p>The maximum price per unit hour that you are willing to pay for a Spot Instance. We do not recommend using this parameter because it can lead to
   *           increased interruptions. If you do not specify this parameter, you will pay the current Spot price.</p>
   *          <important>
   *             <p>If you specify a maximum price, your instances will be interrupted more frequently than if you do not specify this parameter.</p>
   *          </important>
   */
  SpotPrice?: string;

  /**
   * <p>The IDs of the subnets in which to launch the instances. To specify multiple subnets, separate
   *           them using commas; for example, "subnet-1234abcdeexample1, subnet-0987cdef6example2".</p>
   */
  SubnetId?: string;

  /**
   * <p>The Base64-encoded user data that instances use when starting up.</p>
   */
  UserData?: string;

  /**
   * <p>The number of units provided by the specified instance type. These are the same units that you chose to set the target capacity in terms of instances, or a performance characteristic such as vCPUs, memory, or I/O.</p>
   *          <p>If the target capacity divided by this value is not a whole number, Amazon EC2 rounds the number of instances to the next whole number. If this value is not specified, the default is 1.</p>
   */
  WeightedCapacity?: number;

  /**
   * <p>The tags to apply during creation.</p>
   */
  TagSpecifications?: SpotFleetTagSpecification[];

  /**
   * <p>The attributes for the instance types. When you specify instance attributes, Amazon EC2 will
   *          identify instance types with those attributes.</p>
   *          <note>
   *             <p>If you specify <code>InstanceRequirements</code>, you can't specify
   *                <code>InstanceType</code>.</p>
   *          </note>
   */
  InstanceRequirements?: InstanceRequirements;
}

/**
 * <p>Describes overrides for a launch template.</p>
 */
export interface LaunchTemplateOverrides {
  /**
   * <p>The instance type.</p>
   */
  InstanceType?: _InstanceType | string;

  /**
   * <p>The maximum price per unit hour that you are willing to pay for a Spot Instance. We do not recommend using this parameter because it can lead to
   *             increased interruptions. If you do not specify this parameter, you will pay the current Spot price.</p>
   *         <important>
   *             <p>If you specify a maximum price, your instances will be interrupted more frequently than if you do not specify this parameter.</p>
   *         </important>
   */
  SpotPrice?: string;

  /**
   * <p>The ID of the subnet in which to launch the instances.</p>
   */
  SubnetId?: string;

  /**
   * <p>The Availability Zone in which to launch the instances.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>The number of units provided by the specified instance type.</p>
   */
  WeightedCapacity?: number;

  /**
   * <p>The priority for the launch template override. The highest priority is launched
   *             first.</p>
   *         <p>If <code>OnDemandAllocationStrategy</code> is set to <code>prioritized</code>, Spot Fleet
   *             uses priority to determine which launch template override to use first in fulfilling
   *             On-Demand capacity.</p>
   *         <p>If the Spot <code>AllocationStrategy</code> is set to
   *                 <code>capacityOptimizedPrioritized</code>, Spot Fleet uses priority on a best-effort basis
   *             to determine which launch template override to use in fulfilling Spot capacity, but
   *             optimizes for capacity first.</p>
   *         <p>Valid values are whole numbers starting at <code>0</code>. The lower the number, the
   *             higher the priority. If no number is set, the launch template override has the lowest
   *             priority. You can set the same priority for different launch template overrides.</p>
   */
  Priority?: number;

  /**
   * <p>The instance requirements. When you specify instance requirements, Amazon EC2 will identify
   *          instance types with the provided requirements, and then use your On-Demand and Spot
   *          allocation strategies to launch instances from these instance types, in the same way as
   *          when you specify a list of instance types.</p>
   *          <note>
   *             <p>If you specify <code>InstanceRequirements</code>, you can't specify
   *                <code>InstanceType</code>.</p>
   *          </note>
   */
  InstanceRequirements?: InstanceRequirements;
}

/**
 * <p>Describes a launch template and overrides.</p>
 */
export interface LaunchTemplateConfig {
  /**
   * <p>The launch template.</p>
   */
  LaunchTemplateSpecification?: FleetLaunchTemplateSpecification;

  /**
   * <p>Any parameters that you specify override the same parameters in the launch
   *             template.</p>
   */
  Overrides?: LaunchTemplateOverrides[];
}

/**
 * <p>Describes a Classic Load Balancer.</p>
 */
export interface ClassicLoadBalancer {
  /**
   * <p>The name of the load balancer.</p>
   */
  Name?: string;
}

/**
 * <p>Describes the Classic Load Balancers to attach to a Spot Fleet. Spot Fleet registers
 *             the running Spot Instances with these Classic Load Balancers.</p>
 */
export interface ClassicLoadBalancersConfig {
  /**
   * <p>One or more Classic Load Balancers.</p>
   */
  ClassicLoadBalancers?: ClassicLoadBalancer[];
}

/**
 * <p>Describes a load balancer target group.</p>
 */
export interface TargetGroup {
  /**
   * <p>The Amazon Resource Name (ARN) of the target group.</p>
   */
  Arn?: string;
}

/**
 * <p>Describes the target groups to attach to a Spot Fleet. Spot Fleet registers the
 *             running Spot Instances with these target groups.</p>
 */
export interface TargetGroupsConfig {
  /**
   * <p>One or more target groups.</p>
   */
  TargetGroups?: TargetGroup[];
}

/**
 * <p>Describes the Classic Load Balancers and target groups to attach to a Spot Fleet
 *             request.</p>
 */
export interface LoadBalancersConfig {
  /**
   * <p>The Classic Load Balancers.</p>
   */
  ClassicLoadBalancersConfig?: ClassicLoadBalancersConfig;

  /**
   * <p>The target groups.</p>
   */
  TargetGroupsConfig?: TargetGroupsConfig;
}

export enum OnDemandAllocationStrategy {
  LOWEST_PRICE = "lowestPrice",
  PRIORITIZED = "prioritized",
}

export enum ReplacementStrategy {
  LAUNCH = "launch",
  LAUNCH_BEFORE_TERMINATE = "launch-before-terminate",
}

/**
 * <p>The Spot Instance replacement strategy to use when Amazon EC2 emits a signal that your
 *             Spot Instance is at an elevated risk of being interrupted. For more information, see
 *                 <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-fleet-capacity-rebalance.html">Capacity rebalancing</a> in the <i>Amazon EC2 User Guide for Linux Instances</i>.</p>
 */
export interface SpotCapacityRebalance {
  /**
   * <p>The replacement strategy to use. Only available for fleets of type
   *             <code>maintain</code>.</p>
   *         <p>
   *             <code>launch</code> - Spot Fleet launches a new replacement Spot Instance when a
   *             rebalance notification is emitted for an existing Spot Instance in the fleet. Spot Fleet
   *             does not terminate the instances that receive a rebalance notification. You can
   *             terminate the old instances, or you can leave them running. You are charged for all
   *             instances while they are running. </p>
   *         <p>
   *             <code>launch-before-terminate</code> - Spot Fleet launches a new replacement Spot
   *             Instance when a rebalance notification is emitted for an existing Spot Instance in the
   *             fleet, and then, after a delay that you specify (in <code>TerminationDelay</code>),
   *             terminates the instances that received a rebalance notification.</p>
   */
  ReplacementStrategy?: ReplacementStrategy | string;

  /**
   * <p>The amount of time (in seconds) that Amazon EC2 waits before terminating the old Spot
   *             Instance after launching a new replacement Spot Instance.</p>
   *         <p>Required when <code>ReplacementStrategy</code> is set to <code>launch-before-terminate</code>.</p>
   *         <p>Not valid when <code>ReplacementStrategy</code> is set to <code>launch</code>.</p>
   *         <p>Valid values: Minimum value of <code>120</code> seconds. Maximum value of <code>7200</code> seconds.</p>
   */
  TerminationDelay?: number;
}

/**
 * <p>The strategies for managing your Spot Instances that are at an elevated risk of being
 *             interrupted.</p>
 */
export interface SpotMaintenanceStrategies {
  /**
   * <p>The Spot Instance replacement strategy to use when Amazon EC2 emits a signal that your
   *             Spot Instance is at an elevated risk of being interrupted. For more information, see
   *             <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-fleet-capacity-rebalance.html">Capacity rebalancing</a> in the <i>Amazon EC2 User Guide for Linux Instances</i>.</p>
   */
  CapacityRebalance?: SpotCapacityRebalance;
}

/**
 * <p>Describes the configuration of a Spot Fleet request.</p>
 */
export interface SpotFleetRequestConfigData {
  /**
   * <p>The strategy that determines how to allocate the target Spot Instance capacity across the Spot Instance
   *             pools specified by the Spot Fleet launch configuration. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-fleet-allocation-strategy.html">Allocation
   *                 strategies for Spot Instances</a> in the <i>Amazon EC2 User Guide for Linux Instances</i>.</p>
   *         <p>
   *             <code>lowestPrice</code> - Spot Fleet launches instances from the lowest-price Spot Instance pool
   *             that has available capacity. If the cheapest pool doesn't have available capacity, the
   *             Spot Instances come from the next cheapest pool that has available capacity. If a pool runs out
   *             of capacity before fulfilling your desired capacity, Spot Fleet will continue to fulfill your
   *             request by drawing from the next cheapest pool. To ensure that your desired capacity is
   *             met, you might receive Spot Instances from several pools.</p>
   *         <p>
   *             <code>diversified</code> - Spot Fleet launches instances from all of the Spot Instance pools that you
   *             specify.</p>
   *         <p>
   *             <code>capacityOptimized</code> (recommended) - Spot Fleet launches instances from Spot Instance pools
   *             with optimal capacity for the number of instances that are launching. To give certain
   *             instance types a higher chance of launching first, use
   *             <code>capacityOptimizedPrioritized</code>. Set a priority for each instance type by
   *             using the <code>Priority</code> parameter for <code>LaunchTemplateOverrides</code>. You can
   *             assign the same priority to different <code>LaunchTemplateOverrides</code>. EC2 implements
   *             the priorities on a best-effort basis, but optimizes for capacity first.
   *             <code>capacityOptimizedPrioritized</code> is supported only if your Spot Fleet uses a
   *             launch template. Note that if the <code>OnDemandAllocationStrategy</code> is set to
   *             <code>prioritized</code>, the same priority is applied when fulfilling On-Demand
   *             capacity.</p>
   *         <p>Default: <code>lowestPrice</code>
   *          </p>
   */
  AllocationStrategy?: AllocationStrategy | string;

  /**
   * <p>The order of the launch template overrides to use in fulfilling On-Demand capacity. If
   *             you specify <code>lowestPrice</code>, Spot Fleet uses price to determine the order, launching
   *             the lowest price first. If you specify <code>prioritized</code>, Spot Fleet uses the priority
   *             that you assign to each Spot Fleet launch template override, launching the highest priority
   *             first. If you do not specify a value, Spot Fleet defaults to <code>lowestPrice</code>.</p>
   */
  OnDemandAllocationStrategy?: OnDemandAllocationStrategy | string;

  /**
   * <p>The strategies for managing your Spot Instances that are at an elevated risk of being
   *             interrupted.</p>
   */
  SpotMaintenanceStrategies?: SpotMaintenanceStrategies;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of your
   *             listings. This helps to avoid duplicate listings. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring Idempotency</a>.</p>
   */
  ClientToken?: string;

  /**
   * <p>Indicates whether running Spot Instances should be terminated if you decrease the
   *             target capacity of the Spot Fleet request below the current size of the Spot
   *             Fleet.</p>
   */
  ExcessCapacityTerminationPolicy?: ExcessCapacityTerminationPolicy | string;

  /**
   * <p>The number of units fulfilled by this request compared to the set target capacity. You
   *             cannot set this value.</p>
   */
  FulfilledCapacity?: number;

  /**
   * <p>The number of On-Demand units fulfilled by this request compared to the set target
   *             On-Demand capacity.</p>
   */
  OnDemandFulfilledCapacity?: number;

  /**
   * <p>The Amazon Resource Name (ARN) of an Identity and Access Management (IAM) role that
   *             grants the Spot Fleet the permission to request, launch, terminate, and tag instances on
   *             your behalf. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-fleet-requests.html#spot-fleet-prerequisites">Spot
   *                 Fleet prerequisites</a> in the <i>Amazon EC2 User Guide for Linux Instances</i>. Spot Fleet
   *             can terminate Spot Instances on your behalf when you cancel its Spot Fleet request using
   *                 <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CancelSpotFleetRequests">CancelSpotFleetRequests</a> or when the Spot Fleet request expires, if you set
   *                 <code>TerminateInstancesWithExpiration</code>.</p>
   */
  IamFleetRole: string | undefined;

  /**
   * <p>The launch specifications for the Spot Fleet request. If you specify
   *                 <code>LaunchSpecifications</code>, you can't specify
   *                 <code>LaunchTemplateConfigs</code>. If you include On-Demand capacity in your
   *             request, you must use <code>LaunchTemplateConfigs</code>.</p>
   */
  LaunchSpecifications?: SpotFleetLaunchSpecification[];

  /**
   * <p>The launch template and overrides. If you specify <code>LaunchTemplateConfigs</code>,
   *             you can't specify <code>LaunchSpecifications</code>. If you include On-Demand capacity
   *             in your request, you must use <code>LaunchTemplateConfigs</code>.</p>
   */
  LaunchTemplateConfigs?: LaunchTemplateConfig[];

  /**
   * <p>The maximum price per unit hour that you are willing to pay for a Spot Instance. We do not recommend
   *             using this parameter because it can lead to increased interruptions. If you do not specify this parameter, you will pay the current Spot price.</p>
   *         <important>
   *             <p>If you specify a maximum price, your instances will be interrupted more frequently than if you do not specify this parameter.</p>
   *         </important>
   */
  SpotPrice?: string;

  /**
   * <p>The number of units to request for the Spot Fleet. You can choose to set the target
   *             capacity in terms of instances or a performance characteristic that is important to your
   *             application workload, such as vCPUs, memory, or I/O. If the request type is
   *                 <code>maintain</code>, you can specify a target capacity of 0 and add capacity
   *             later.</p>
   */
  TargetCapacity: number | undefined;

  /**
   * <p>The number of On-Demand units to request. You can choose to set the target capacity in
   *             terms of instances or a performance characteristic that is important to your application
   *             workload, such as vCPUs, memory, or I/O. If the request type is <code>maintain</code>,
   *             you can specify a target capacity of 0 and add capacity later.</p>
   */
  OnDemandTargetCapacity?: number;

  /**
   * <p>The maximum amount per hour for On-Demand Instances that you're willing to pay. You
   *             can use the <code>onDemandMaxTotalPrice</code> parameter, the
   *                 <code>spotMaxTotalPrice</code> parameter, or both parameters to ensure that your
   *             fleet cost does not exceed your budget. If you set a maximum price per hour for the
   *             On-Demand Instances and Spot Instances in your request, Spot Fleet will launch instances until it reaches the
   *             maximum amount you're willing to pay. When the maximum amount you're willing to pay is
   *             reached, the fleet stops launching instances even if it hasn’t met the target
   *             capacity.</p>
   */
  OnDemandMaxTotalPrice?: string;

  /**
   * <p>The maximum amount per hour for Spot Instances that you're willing to pay. You can use
   *             the <code>spotdMaxTotalPrice</code> parameter, the <code>onDemandMaxTotalPrice</code>
   *             parameter, or both parameters to ensure that your fleet cost does not exceed your
   *             budget. If you set a maximum price per hour for the On-Demand Instances and Spot Instances in your request,
   *             Spot Fleet will launch instances until it reaches the maximum amount you're willing to pay.
   *             When the maximum amount you're willing to pay is reached, the fleet stops launching
   *             instances even if it hasn’t met the target capacity.</p>
   */
  SpotMaxTotalPrice?: string;

  /**
   * <p>Indicates whether running Spot Instances are terminated when the Spot Fleet request
   *             expires.</p>
   */
  TerminateInstancesWithExpiration?: boolean;

  /**
   * <p>The type of request. Indicates whether the Spot Fleet only requests the target
   *             capacity or also attempts to maintain it. When this value is <code>request</code>, the
   *             Spot Fleet only places the required requests. It does not attempt to replenish Spot
   *             Instances if capacity is diminished, nor does it submit requests in alternative Spot
   *             pools if capacity is not available. When this value is <code>maintain</code>, the Spot
   *             Fleet maintains the target capacity. The Spot Fleet places the required requests to meet
   *             capacity and automatically replenishes any interrupted instances. Default:
   *                 <code>maintain</code>. <code>instant</code> is listed but is not used by Spot
   *             Fleet.</p>
   */
  Type?: FleetType | string;

  /**
   * <p>The start date and time of the request, in UTC format
   *                 (<i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z).
   *             By default, Amazon EC2 starts fulfilling the request immediately.</p>
   */
  ValidFrom?: Date;

  /**
   * <p>The end date and time of the request, in UTC format
   *                 (<i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z).
   *             After the end date and time, no new Spot Instance requests are placed or able to fulfill
   *             the request. If no value is specified, the Spot Fleet request remains until you cancel
   *             it.</p>
   */
  ValidUntil?: Date;

  /**
   * <p>Indicates whether Spot Fleet should replace unhealthy instances.</p>
   */
  ReplaceUnhealthyInstances?: boolean;

  /**
   * <p>The behavior when a Spot Instance is interrupted. The default is
   *                 <code>terminate</code>.</p>
   */
  InstanceInterruptionBehavior?: InstanceInterruptionBehavior | string;

  /**
   * <p>One or more Classic Load Balancers and target groups to attach to the Spot Fleet
   *             request. Spot Fleet registers the running Spot Instances with the specified Classic Load
   *             Balancers and target groups.</p>
   *         <p>With Network Load Balancers, Spot Fleet cannot register instances that have the
   *             following instance types: C1, CC1, CC2, CG1, CG2, CR1, CS1, G1, G2, HI1, HS1, M1, M2,
   *             M3, and T1.</p>
   */
  LoadBalancersConfig?: LoadBalancersConfig;

  /**
   * <p>The number of Spot pools across which to allocate your target Spot capacity. Valid
   *             only when Spot <b>AllocationStrategy</b> is set to
   *                 <code>lowest-price</code>. Spot Fleet selects the cheapest Spot pools and evenly
   *             allocates your target Spot capacity across the number of Spot pools that you
   *             specify.</p>
   *         <p>Note that Spot Fleet attempts to draw Spot Instances from the number of pools that you specify on a
   *             best effort basis. If a pool runs out of Spot capacity before fulfilling your target
   *             capacity, Spot Fleet will continue to fulfill your request by drawing from the next cheapest
   *             pool. To ensure that your target capacity is met, you might receive Spot Instances from more than
   *             the number of pools that you specified. Similarly, if most of the pools have no Spot
   *             capacity, you might receive your full target capacity from fewer than the number of
   *             pools that you specified.</p>
   */
  InstancePoolsToUseCount?: number;

  /**
   * <p>Reserved.</p>
   */
  Context?: string;

  /**
   * <p>The unit for the target capacity.</p>
   *          <p>Default: <code>units</code> (translates to number of instances)</p>
   */
  TargetCapacityUnitType?: TargetCapacityUnitType | string;

  /**
   * <p>The key-value pair for tagging the Spot Fleet request on creation. The value for
   *                 <code>ResourceType</code> must be <code>spot-fleet-request</code>, otherwise the
   *             Spot Fleet request fails. To tag instances at launch, specify the tags in the <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-launch-templates.html#create-launch-template">launch
   *                 template</a> (valid only if you use <code>LaunchTemplateConfigs</code>) or in
   *             the <code>
   *                <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_SpotFleetTagSpecification.html">SpotFleetTagSpecification</a>
   *             </code> (valid only if you use
   *                 <code>LaunchSpecifications</code>). For information about tagging after launch, see
   *                 <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_Tags.html#tag-resources">Tagging Your Resources</a>.</p>
   */
  TagSpecifications?: TagSpecification[];
}

/**
 * <p>Describes a Spot Fleet request.</p>
 */
export interface SpotFleetRequestConfig {
  /**
   * <p>The progress of the Spot Fleet request.
   *           If there is an error, the status is <code>error</code>.
   *           After all requests are placed, the status is <code>pending_fulfillment</code>.
   *           If the size of the fleet is equal to or greater than its target capacity, the status is <code>fulfilled</code>.
   *           If the size of the fleet is decreased, the status is <code>pending_termination</code>
   *           while Spot Instances are terminating.</p>
   */
  ActivityStatus?: ActivityStatus | string;

  /**
   * <p>The creation date and time of the request.</p>
   */
  CreateTime?: Date;

  /**
   * <p>The configuration of the Spot Fleet request.</p>
   */
  SpotFleetRequestConfig?: SpotFleetRequestConfigData;

  /**
   * <p>The ID of the Spot Fleet request.</p>
   */
  SpotFleetRequestId?: string;

  /**
   * <p>The state of the Spot Fleet request.</p>
   */
  SpotFleetRequestState?: BatchState | string;

  /**
   * <p>The tags for a Spot Fleet resource.</p>
   */
  Tags?: Tag[];
}

/**
 * <p>Contains the output of DescribeSpotFleetRequests.</p>
 */
export interface DescribeSpotFleetRequestsResponse {
  /**
   * <p>The token required to retrieve the next set of results. This value is
   *                 <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;

  /**
   * <p>Information about the configuration of your Spot Fleet.</p>
   */
  SpotFleetRequestConfigs?: SpotFleetRequestConfig[];
}

/**
 * <p>Contains the parameters for DescribeSpotInstanceRequests.</p>
 */
export interface DescribeSpotInstanceRequestsRequest {
  /**
   * <p>One or more filters.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>availability-zone-group</code> - The Availability Zone group.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>create-time</code> - The time stamp when the Spot Instance request was
   *                     created.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>fault-code</code> - The fault code related to the request.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>fault-message</code> - The fault message related to the request.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>instance-id</code> - The ID of the instance that fulfilled the
   *                     request.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>launch-group</code> - The Spot Instance launch group.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>launch.block-device-mapping.delete-on-termination</code> - Indicates
   *                     whether the EBS volume is deleted on instance termination.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>launch.block-device-mapping.device-name</code> - The device name for the
   *                     volume in the block device mapping (for example, <code>/dev/sdh</code> or
   *                         <code>xvdh</code>).</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>launch.block-device-mapping.snapshot-id</code> - The ID of the snapshot
   *                     for the EBS volume.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>launch.block-device-mapping.volume-size</code> - The size of the EBS
   *                     volume, in GiB.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>launch.block-device-mapping.volume-type</code> - The type of EBS volume:
   *                         <code>gp2</code> for General Purpose SSD, <code>io1</code> or
   *                         <code>io2</code> for Provisioned IOPS SSD, <code>st1</code> for Throughput
   *                     Optimized HDD, <code>sc1</code>for Cold HDD, or <code>standard</code> for
   *                     Magnetic.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>launch.group-id</code> - The ID of the security group for the
   *                     instance.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>launch.group-name</code> - The name of the security group for the
   *                     instance.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>launch.image-id</code> - The ID of the AMI.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>launch.instance-type</code> - The type of instance (for example,
   *                         <code>m3.medium</code>).</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>launch.kernel-id</code> - The kernel ID.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>launch.key-name</code> - The name of the key pair the instance launched
   *                     with.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>launch.monitoring-enabled</code> - Whether detailed monitoring is
   *                     enabled for the Spot Instance.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>launch.ramdisk-id</code> - The RAM disk ID.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>launched-availability-zone</code> - The Availability Zone in which the
   *                     request is launched.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>network-interface.addresses.primary</code> - Indicates whether the IP
   *                     address is the primary private IP address.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>network-interface.delete-on-termination</code> - Indicates whether the
   *                     network interface is deleted when the instance is terminated.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>network-interface.description</code> - A description of the network
   *                     interface.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>network-interface.device-index</code> - The index of the device for the
   *                     network interface attachment on the instance.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>network-interface.group-id</code> - The ID of the security group
   *                     associated with the network interface.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>network-interface.network-interface-id</code> - The ID of the network
   *                     interface.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>network-interface.private-ip-address</code> - The primary private IP
   *                     address of the network interface.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>network-interface.subnet-id</code> - The ID of the subnet for the
   *                     instance.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>product-description</code> - The product description associated with the
   *                     instance (<code>Linux/UNIX</code> | <code>Windows</code>).</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>spot-instance-request-id</code> - The Spot Instance request ID.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>spot-price</code> - The maximum hourly price for any Spot Instance
   *                     launched to fulfill the request.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>state</code> - The state of the Spot Instance request (<code>open</code>
   *                     | <code>active</code> | <code>closed</code> | <code>cancelled</code> |
   *                         <code>failed</code>). Spot request status information can help you track
   *                     your Amazon EC2 Spot Instance requests. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-request-status.html">Spot
   *                         request status</a> in the <i>Amazon EC2 User Guide for Linux Instances</i>.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>status-code</code> - The short code describing the most recent
   *                     evaluation of your Spot Instance request.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>status-message</code> - The message explaining the status of the Spot
   *                     Instance request.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>tag:<key></code> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value.
   *     For example, to find all resources that have a tag with the key <code>Owner</code> and the value <code>TeamA</code>, specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>tag-key</code> - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>type</code> - The type of Spot Instance request (<code>one-time</code> |
   *                         <code>persistent</code>).</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>valid-from</code> - The start date of the request.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>valid-until</code> - The end date of the request.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually
   *             making the request, and provides an error response. If you have the required
   *             permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is
   *                 <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>One or more Spot Instance request IDs.</p>
   */
  SpotInstanceRequestIds?: string[];

  /**
   * <p>The token to request the next set of results. This value is <code>null</code> when
   *             there are no more results to return.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return in a single call. Specify a value between 5
   *             and 1000. To retrieve the remaining results, make another call with the returned
   *                 <code>NextToken</code> value.</p>
   */
  MaxResults?: number;
}

/**
 * <p>Describes the monitoring of an instance.</p>
 */
export interface RunInstancesMonitoringEnabled {
  /**
   * <p>Indicates whether detailed monitoring is enabled. Otherwise, basic monitoring is
   *             enabled.</p>
   */
  Enabled: boolean | undefined;
}

/**
 * <p>Describes the launch specification for an instance.</p>
 */
export interface LaunchSpecification {
  /**
   * <p>The Base64-encoded user data for the instance.</p>
   */
  UserData?: string;

  /**
   * <p>One or more security groups. When requesting instances in a VPC, you must specify the IDs of the security groups. When requesting instances in EC2-Classic, you can specify the names or the IDs of the security groups.</p>
   */
  SecurityGroups?: GroupIdentifier[];

  /**
   * <p>Deprecated.</p>
   */
  AddressingType?: string;

  /**
   * <p>One or more block device mapping entries.</p>
   */
  BlockDeviceMappings?: BlockDeviceMapping[];

  /**
   * <p>Indicates whether the instance is optimized for EBS I/O. This optimization provides dedicated throughput to Amazon EBS and an optimized configuration stack to provide optimal EBS I/O performance. This optimization isn't available with all instance types. Additional usage charges apply when using an EBS Optimized instance.</p>
   *          <p>Default: <code>false</code>
   *          </p>
   */
  EbsOptimized?: boolean;

  /**
   * <p>The IAM instance profile.</p>
   */
  IamInstanceProfile?: IamInstanceProfileSpecification;

  /**
   * <p>The ID of the AMI.</p>
   */
  ImageId?: string;

  /**
   * <p>The instance type. Only one instance type can be specified.</p>
   */
  InstanceType?: _InstanceType | string;

  /**
   * <p>The ID of the kernel.</p>
   */
  KernelId?: string;

  /**
   * <p>The name of the key pair.</p>
   */
  KeyName?: string;

  /**
   * <p>One or more network interfaces. If you specify a network interface, you must specify
   *            subnet IDs and security group IDs using the network interface.</p>
   */
  NetworkInterfaces?: InstanceNetworkInterfaceSpecification[];

  /**
   * <p>The placement information for the instance.</p>
   */
  Placement?: SpotPlacement;

  /**
   * <p>The ID of the RAM disk.</p>
   */
  RamdiskId?: string;

  /**
   * <p>The ID of the subnet in which to launch the instance.</p>
   */
  SubnetId?: string;

  /**
   * <p>Describes the monitoring of an instance.</p>
   */
  Monitoring?: RunInstancesMonitoringEnabled;
}

export enum SpotInstanceState {
  active = "active",
  cancelled = "cancelled",
  closed = "closed",
  failed = "failed",
  open = "open",
}

/**
 * <p>Describes the status of a Spot Instance request.</p>
 */
export interface SpotInstanceStatus {
  /**
   * <p>The status code. For a list of status codes, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-request-status.html#spot-instance-request-status-understand">Spot request status codes</a> in the <i>Amazon EC2 User Guide for Linux Instances</i>.</p>
   */
  Code?: string;

  /**
   * <p>The description for the status code.</p>
   */
  Message?: string;

  /**
   * <p>The date and time of the most recent status update, in UTC format (for example,
   *                 <i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z).</p>
   */
  UpdateTime?: Date;
}

/**
 * <p>Describes a Spot Instance request.</p>
 */
export interface SpotInstanceRequest {
  /**
   * <p>Deprecated.</p>
   */
  ActualBlockHourlyPrice?: string;

  /**
   * <p>The Availability Zone group. If you specify the same Availability Zone group for all Spot Instance requests, all Spot Instances are launched in the same Availability Zone.</p>
   */
  AvailabilityZoneGroup?: string;

  /**
   * <p>Deprecated.</p>
   */
  BlockDurationMinutes?: number;

  /**
   * <p>The date and time when the Spot Instance request was created, in UTC format (for example, <i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z).</p>
   */
  CreateTime?: Date;

  /**
   * <p>The fault codes for the Spot Instance request, if any.</p>
   */
  Fault?: SpotInstanceStateFault;

  /**
   * <p>The instance ID, if an instance has been launched to fulfill the Spot Instance request.</p>
   */
  InstanceId?: string;

  /**
   * <p>The instance launch group. Launch groups are Spot Instances that launch together and terminate together.</p>
   */
  LaunchGroup?: string;

  /**
   * <p>Additional information for launching instances.</p>
   */
  LaunchSpecification?: LaunchSpecification;

  /**
   * <p>The Availability Zone in which the request is launched.</p>
   */
  LaunchedAvailabilityZone?: string;

  /**
   * <p>The product description associated with the Spot Instance.</p>
   */
  ProductDescription?: RIProductDescription | string;

  /**
   * <p>The ID of the Spot Instance request.</p>
   */
  SpotInstanceRequestId?: string;

  /**
   * <p>The maximum price per unit hour that you are willing to pay for a Spot Instance. We do not recommend
   *             using this parameter because it can lead to increased interruptions. If you do not specify this parameter, you will pay the current Spot price.</p>
   *         <important>
   *             <p>If you specify a maximum price, your instances will be interrupted more frequently than if you do not specify this parameter.</p>
   *         </important>
   */
  SpotPrice?: string;

  /**
   * <p>The state of the Spot Instance request. Spot request status information helps track your Spot
   *             Instance requests. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-request-status.html">Spot request status</a> in the
   *                 <i>Amazon EC2 User Guide for Linux Instances</i>.</p>
   */
  State?: SpotInstanceState | string;

  /**
   * <p>The status code and status message describing the Spot Instance request.</p>
   */
  Status?: SpotInstanceStatus;

  /**
   * <p>Any tags assigned to the resource.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The Spot Instance request type.</p>
   */
  Type?: SpotInstanceType | string;

  /**
   * <p>The start date of the request, in UTC format (for example,
   *                 <i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z).
   *             The request becomes active at this date and time.</p>
   */
  ValidFrom?: Date;

  /**
   * <p>The end date of the request, in UTC format
   *                 (<i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z).</p>
   *          <ul>
   *             <li>
   *                 <p>For a persistent request, the request remains active until the <code>validUntil</code> date
   *                     and time is reached. Otherwise, the request remains active until you cancel it.
   *                 </p>
   *             </li>
   *             <li>
   *                <p>For a one-time request, the request remains active until all instances launch,
   *                     the request is canceled, or the <code>validUntil</code> date and time is reached. By default, the
   *                     request is valid for 7 days from the date the request was created.</p>
   *            </li>
   *          </ul>
   */
  ValidUntil?: Date;

  /**
   * <p>The behavior when a Spot Instance is interrupted.</p>
   */
  InstanceInterruptionBehavior?: InstanceInterruptionBehavior | string;
}

/**
 * <p>Contains the output of DescribeSpotInstanceRequests.</p>
 */
export interface DescribeSpotInstanceRequestsResult {
  /**
   * <p>One or more Spot Instance requests.</p>
   */
  SpotInstanceRequests?: SpotInstanceRequest[];

  /**
   * <p>The token to use to retrieve the next set of results. This value is <code>null</code>
   *             when there are no more results to return.</p>
   */
  NextToken?: string;
}

/**
 * <p>Contains the parameters for DescribeSpotPriceHistory.</p>
 */
export interface DescribeSpotPriceHistoryRequest {
  /**
   * <p>One or more filters.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                     <code>availability-zone</code> - The Availability Zone for which prices should
   *                     be returned.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>instance-type</code> - The type of instance (for example,
   *                         <code>m3.medium</code>).</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>product-description</code> - The product description for the Spot price
   *                         (<code>Linux/UNIX</code> | <code>Red Hat Enterprise Linux</code> |
   *                         <code>SUSE Linux</code> | <code>Windows</code> | <code>Linux/UNIX (Amazon
   *                         VPC)</code> | <code>Red Hat Enterprise Linux (Amazon VPC)</code> |
   *                         <code>SUSE Linux (Amazon VPC)</code> | <code>Windows (Amazon
   *                     VPC)</code>).</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>spot-price</code> - The Spot price. The value must match exactly (or use
   *                     wildcards; greater than or less than comparison is not supported).</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>timestamp</code> - The time stamp of the Spot price history, in UTC format
   *                     (for example,
   *                         <i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z).
   *                     You can use wildcards (* and ?). Greater than or less than comparison is not
   *                     supported.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>Filters the results by the specified Availability Zone.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually
   *             making the request, and provides an error response. If you have the required
   *             permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is
   *                 <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The date and time, up to the current date, from which to stop retrieving the price
   *             history data, in UTC format (for example,
   *                 <i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z).</p>
   */
  EndTime?: Date;

  /**
   * <p>Filters the results by the specified instance types.</p>
   */
  InstanceTypes?: (_InstanceType | string)[];

  /**
   * <p>The maximum number of results to return in a single call. Specify a value between 1
   *             and 1000. The default value is 1000. To retrieve the remaining results, make another
   *             call with the returned <code>NextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>Filters the results by the specified basic product descriptions.</p>
   */
  ProductDescriptions?: string[];

  /**
   * <p>The date and time, up to the past 90 days, from which to start retrieving the price
   *             history data, in UTC format (for example,
   *                 <i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z).</p>
   */
  StartTime?: Date;
}

/**
 * <p>The maximum price per unit hour that you are willing to pay for a Spot Instance. We do not recommend
 *             using this parameter because it can lead to increased interruptions. If you do not specify this parameter, you will pay the current Spot price.</p>
 *         <important>
 *             <p>If you specify a maximum price, your instances will be interrupted more frequently than if you do not specify this parameter.</p>
 *         </important>
 */
export interface SpotPrice {
  /**
   * <p>The Availability Zone.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>The instance type.</p>
   */
  InstanceType?: _InstanceType | string;

  /**
   * <p>A general description of the AMI.</p>
   */
  ProductDescription?: RIProductDescription | string;

  /**
   * <p>The maximum price per unit hour that you are willing to pay for a Spot Instance. We do not recommend
   *             using this parameter because it can lead to increased interruptions. If you do not specify this parameter, you will pay the current Spot price.</p>
   *         <important>
   *             <p>If you specify a maximum price, your instances will be interrupted more frequently than if you do not specify this parameter.</p>
   *         </important>
   */
  SpotPrice?: string;

  /**
   * <p>The date and time the request was created, in UTC format (for example,
   *                 <i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z).</p>
   */
  Timestamp?: Date;
}

/**
 * <p>Contains the output of DescribeSpotPriceHistory.</p>
 */
export interface DescribeSpotPriceHistoryResult {
  /**
   * <p>The token required to retrieve the next set of results. This value is null or an empty
   *             string when there are no more results to return.</p>
   */
  NextToken?: string;

  /**
   * <p>The historical Spot prices.</p>
   */
  SpotPriceHistory?: SpotPrice[];
}

export interface DescribeStaleSecurityGroupsRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The maximum number of items to return for this request. The request returns a token that you can specify in a subsequent call to get the next set of results.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next set of items to return. (You received this token from a prior call.)</p>
   */
  NextToken?: string;

  /**
   * <p>The ID of the VPC.</p>
   */
  VpcId: string | undefined;
}

/**
 * <p>Describes a stale rule in a security group.</p>
 */
export interface StaleIpPermission {
  /**
   * <p>The start of the port range for the TCP and UDP protocols, or an ICMP type number. A value of
   *         <code>-1</code> indicates all ICMP types. </p>
   */
  FromPort?: number;

  /**
   * <p>The IP protocol name (for <code>tcp</code>, <code>udp</code>, and <code>icmp</code>) or number  (see <a href="http://www.iana.org/assignments/protocol-numbers/protocol-numbers.xhtml">Protocol Numbers)</a>.</p>
   */
  IpProtocol?: string;

  /**
   * <p>The IP ranges. Not applicable for stale security group rules.</p>
   */
  IpRanges?: string[];

  /**
   * <p>The prefix list IDs. Not applicable for stale security group rules.</p>
   */
  PrefixListIds?: string[];

  /**
   * <p>The end of the port range for the TCP and UDP protocols, or an ICMP type number. A value of
   *         <code>-1</code> indicates all ICMP types. </p>
   */
  ToPort?: number;

  /**
   * <p>The security group pairs. Returns the ID of the referenced security group and VPC, and the ID and status of the VPC peering connection.</p>
   */
  UserIdGroupPairs?: UserIdGroupPair[];
}

/**
 * <p>Describes a stale security group (a security group that contains stale rules).</p>
 */
export interface StaleSecurityGroup {
  /**
   * <p>The description of the security group.</p>
   */
  Description?: string;

  /**
   * <p>The ID of the security group.</p>
   */
  GroupId?: string;

  /**
   * <p>The name of the security group.</p>
   */
  GroupName?: string;

  /**
   * <p>Information about the stale inbound rules in the security group.</p>
   */
  StaleIpPermissions?: StaleIpPermission[];

  /**
   * <p>Information about the stale outbound rules in the security group.</p>
   */
  StaleIpPermissionsEgress?: StaleIpPermission[];

  /**
   * <p>The ID of the VPC for the security group.</p>
   */
  VpcId?: string;
}

export interface DescribeStaleSecurityGroupsResult {
  /**
   * <p>The token to use when requesting the next set of items. If there are no additional items to return, the string is empty.</p>
   */
  NextToken?: string;

  /**
   * <p>Information about the stale security groups.</p>
   */
  StaleSecurityGroupSet?: StaleSecurityGroup[];
}

export interface DescribeStoreImageTasksRequest {
  /**
   * <p>The AMI IDs for which to show progress. Up to 20 AMI IDs can be included in a request.</p>
   */
  ImageIds?: string[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   * 			and provides an error response. If you have the required permissions, the error response is
   * 			<code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>task-state</code> - Returns tasks in a certain state (<code>InProgress</code> |
   *             <code>Completed</code> | <code>Failed</code>)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>bucket</code> - Returns task information for tasks that targeted a specific
   *           bucket. For the filter value, specify the bucket name.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return in a single call. To retrieve the remaining
   *       results, make another call with the returned <code>NextToken</code> value. This value can be
   *       between 1 and 200. You cannot specify this parameter and the <code>ImageIDs</code> parameter
   *       in the same call.</p>
   */
  MaxResults?: number;
}

/**
 * <p>The information about the AMI store task, including the progress of the task.</p>
 */
export interface StoreImageTaskResult {
  /**
   * <p>The ID of the AMI that is being stored.</p>
   */
  AmiId?: string;

  /**
   * <p>The time the task started.</p>
   */
  TaskStartTime?: Date;

  /**
   * <p>The name of the Amazon S3 bucket that contains the stored AMI object.</p>
   */
  Bucket?: string;

  /**
   * <p>The name of the stored AMI object in the bucket.</p>
   */
  S3objectKey?: string;

  /**
   * <p>The progress of the task as a percentage.</p>
   */
  ProgressPercentage?: number;

  /**
   * <p>The state of the store task (<code>InProgress</code>, <code>Completed</code>, or
   *         <code>Failed</code>).</p>
   */
  StoreTaskState?: string;

  /**
   * <p>If the tasks fails, the reason for the failure is returned. If the task succeeds,
   *         <code>null</code> is returned.</p>
   */
  StoreTaskFailureReason?: string;
}

export interface DescribeStoreImageTasksResult {
  /**
   * <p>The information about the AMI store tasks.</p>
   */
  StoreImageTaskResults?: StoreImageTaskResult[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code>
   *       when there are no more results to return.</p>
   */
  NextToken?: string;
}

export interface DescribeSubnetsRequest {
  /**
   * <p>One or more filters.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>availability-zone</code> - The Availability Zone for the subnet. You can also use
   *                     <code>availabilityZone</code> as the filter name.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>availability-zone-id</code> - The ID of the Availability Zone for the subnet.
   *                     You can also use <code>availabilityZoneId</code> as the filter name.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>available-ip-address-count</code> - The number of IPv4 addresses in the
   *                     subnet that are available.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>cidr-block</code> - The IPv4 CIDR block of the subnet. The CIDR block you
   *                     specify must exactly match the subnet's CIDR block for information to be
   *                     returned for the subnet. You can also use <code>cidr</code> or
   *                     <code>cidrBlock</code> as the filter names.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>default-for-az</code> - Indicates whether this is the default subnet for the
   *                     Availability Zone (<code>true</code> | <code>false</code>). You can also use
   *                     <code>defaultForAz</code> as the filter name.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>ipv6-cidr-block-association.ipv6-cidr-block</code> - An IPv6 CIDR
   *                     block associated with the subnet.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>ipv6-cidr-block-association.association-id</code> - An association ID
   *                     for an IPv6 CIDR block associated with the subnet.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>ipv6-cidr-block-association.state</code> - The state of an IPv6 CIDR
   *                     block associated with the subnet.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>ipv6-native</code> - Indicates whether this is an IPv6 only subnet (<code>true</code> | <code>false</code>).</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>outpost-arn</code> - The Amazon Resource Name (ARN) of the Outpost.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>owner-id</code> - The ID of the Amazon Web Services account that owns the subnet.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>state</code> - The state of the subnet (<code>pending</code> | <code>available</code>).</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>subnet-arn</code> - The Amazon Resource Name (ARN) of the subnet.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>subnet-id</code> - The ID of the subnet.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>tag</code>:<key> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value.
   *     For example, to find all resources that have a tag with the key <code>Owner</code> and the value <code>TeamA</code>, specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>tag-key</code> - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>vpc-id</code> - The ID of the VPC for the subnet.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>One or more subnet IDs.</p>
   * 		       <p>Default: Describes all your subnets.</p>
   */
  SubnetIds?: string[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  MaxResults?: number;
}

export interface DescribeSubnetsResult {
  /**
   * <p>Information about one or more subnets.</p>
   */
  Subnets?: Subnet[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export interface DescribeTagsRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>key</code> - The tag key.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>resource-id</code> - The ID of the resource.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>resource-type</code> - The resource type (<code>customer-gateway</code> | <code>dedicated-host</code> | <code>dhcp-options</code> | <code>elastic-ip</code> | <code>fleet</code> | <code>fpga-image</code> | <code>host-reservation</code> | <code>image</code> | <code>instance</code> | <code>internet-gateway</code> | <code>key-pair</code> | <code>launch-template</code> | <code>natgateway</code> | <code>network-acl</code> | <code>network-interface</code> | <code>placement-group</code> | <code>reserved-instances</code> | <code>route-table</code> | <code>security-group</code> | <code>snapshot</code> | <code>spot-instances-request</code> | <code>subnet</code> | <code>volume</code> | <code>vpc</code> | <code>vpc-endpoint</code> | <code>vpc-endpoint-service</code> | <code>vpc-peering-connection</code> | <code>vpn-connection</code> | <code>vpn-gateway</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>tag</code>:<key> - The key/value combination of the tag. For example,
   *                 specify "tag:Owner" for the filter name and "TeamA" for the filter value to find
   *                 resources with the tag "Owner=TeamA".</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>value</code> - The tag value.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>The maximum number of results to return in a single call.
   *       This value can be between 5 and 1000.
   * 			To retrieve the remaining results, make another call with the returned <code>NextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token to retrieve the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * <p>Describes a tag.</p>
 */
export interface TagDescription {
  /**
   * <p>The tag key.</p>
   */
  Key?: string;

  /**
   * <p>The ID of the resource.</p>
   */
  ResourceId?: string;

  /**
   * <p>The resource type.</p>
   */
  ResourceType?: ResourceType | string;

  /**
   * <p>The tag value.</p>
   */
  Value?: string;
}

export interface DescribeTagsResult {
  /**
   * <p>The token to use to retrieve the next page of results. This value is
   *          <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;

  /**
   * <p>The tags.</p>
   */
  Tags?: TagDescription[];
}

export interface DescribeTrafficMirrorFiltersRequest {
  /**
   * <p>The ID of the Traffic Mirror filter.</p>
   */
  TrafficMirrorFilterIds?: string[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>One or more filters. The possible values are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>description</code>: The Traffic Mirror filter description.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>traffic-mirror-filter-id</code>: The ID of the Traffic Mirror filter.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

export interface DescribeTrafficMirrorFiltersResult {
  /**
   * <p>Information about one or more Traffic Mirror filters.</p>
   */
  TrafficMirrorFilters?: TrafficMirrorFilter[];

  /**
   * <p>The token to use to retrieve the next page of results. The value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export interface DescribeTrafficMirrorSessionsRequest {
  /**
   * <p>The ID of the Traffic Mirror session.</p>
   */
  TrafficMirrorSessionIds?: string[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>One or more filters. The possible values are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>description</code>: The Traffic Mirror session description.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface-id</code>: The ID of the Traffic Mirror session network interface.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>owner-id</code>: The ID of the account that owns the Traffic Mirror session.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>packet-length</code>: The assigned number of packets to mirror. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>session-number</code>: The assigned session number. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>traffic-mirror-filter-id</code>: The ID of the Traffic Mirror filter.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>traffic-mirror-session-id</code>: The ID of the Traffic Mirror session.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>traffic-mirror-target-id</code>: The ID of the Traffic Mirror target.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>virtual-network-id</code>: The virtual network ID of the Traffic Mirror session.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

export interface DescribeTrafficMirrorSessionsResult {
  /**
   * <p>Describes one or more Traffic Mirror sessions. By default, all Traffic Mirror sessions are described. Alternatively, you can filter the results.</p>
   */
  TrafficMirrorSessions?: TrafficMirrorSession[];

  /**
   * <p>The token to use to retrieve the next page of results. The value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export interface DescribeTrafficMirrorTargetsRequest {
  /**
   * <p>The ID of the Traffic Mirror targets.</p>
   */
  TrafficMirrorTargetIds?: string[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>One or more filters. The possible values are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>description</code>: The Traffic Mirror target description.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface-id</code>: The ID of the Traffic Mirror session network interface.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-load-balancer-arn</code>: The Amazon Resource Name (ARN) of the Network Load Balancer that is associated with the session.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>owner-id</code>: The ID of the account that owns the Traffic Mirror session.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>traffic-mirror-target-id</code>: The ID of the Traffic Mirror target.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

export interface DescribeTrafficMirrorTargetsResult {
  /**
   * <p>Information about one or more Traffic Mirror targets.</p>
   */
  TrafficMirrorTargets?: TrafficMirrorTarget[];

  /**
   * <p>The token to use to retrieve the next page of results. The value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export interface DescribeTransitGatewayAttachmentsRequest {
  /**
   * <p>The IDs of the attachments.</p>
   */
  TransitGatewayAttachmentIds?: string[];

  /**
   * <p>One or more filters. The possible values are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>association.state</code> - The state of the association (<code>associating</code> | <code>associated</code> |
   *                <code>disassociating</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>association.transit-gateway-route-table-id</code> - The ID of the route table for the transit gateway.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>resource-id</code> - The ID of the resource.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>resource-owner-id</code> - The ID of the Amazon Web Services account that owns the resource.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>resource-type</code> - The resource type. Valid values are <code>vpc</code>
   *                     | <code>vpn</code> | <code>direct-connect-gateway</code> | <code>peering</code>
   *                     | <code>connect</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>state</code> - The state of the attachment. Valid values are <code>available</code> | <code>deleted</code> | <code>deleting</code> | <code>failed</code> |  <code>failing</code> | <code>initiatingRequest</code> | <code>modifying</code> | <code>pendingAcceptance</code> | <code>pending</code> | <code>rollingBack</code> | <code>rejected</code> | <code>rejecting</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>transit-gateway-attachment-id</code> - The ID of the attachment.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>transit-gateway-id</code> - The ID of the transit gateway.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>transit-gateway-owner-id</code> - The ID of the Amazon Web Services account that owns the transit gateway.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * <p>Describes an association.</p>
 */
export interface TransitGatewayAttachmentAssociation {
  /**
   * <p>The ID of the route table for the transit gateway.</p>
   */
  TransitGatewayRouteTableId?: string;

  /**
   * <p>The state of the association.</p>
   */
  State?: TransitGatewayAssociationState | string;
}

/**
 * <p>Describes an attachment between a resource and a transit gateway.</p>
 */
export interface TransitGatewayAttachment {
  /**
   * <p>The ID of the attachment.</p>
   */
  TransitGatewayAttachmentId?: string;

  /**
   * <p>The ID of the transit gateway.</p>
   */
  TransitGatewayId?: string;

  /**
   * <p>The ID of the Amazon Web Services account that owns the transit gateway.</p>
   */
  TransitGatewayOwnerId?: string;

  /**
   * <p>The ID of the Amazon Web Services account that owns the resource.</p>
   */
  ResourceOwnerId?: string;

  /**
   * <p>The resource type. Note that the <code>tgw-peering</code> resource type has been deprecated.</p>
   */
  ResourceType?: TransitGatewayAttachmentResourceType | string;

  /**
   * <p>The ID of the resource.</p>
   */
  ResourceId?: string;

  /**
   * <p>The attachment state. Note that the <code>initiating</code> state has been deprecated.</p>
   */
  State?: TransitGatewayAttachmentState | string;

  /**
   * <p>The association.</p>
   */
  Association?: TransitGatewayAttachmentAssociation;

  /**
   * <p>The creation time.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The tags for the attachment.</p>
   */
  Tags?: Tag[];
}

export interface DescribeTransitGatewayAttachmentsResult {
  /**
   * <p>Information about the attachments.</p>
   */
  TransitGatewayAttachments?: TransitGatewayAttachment[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export interface DescribeTransitGatewayConnectPeersRequest {
  /**
   * <p>The IDs of the Connect peers.</p>
   */
  TransitGatewayConnectPeerIds?: string[];

  /**
   * <p>One or more filters. The possible values are:</p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <code>state</code> - The state of the Connect peer (<code>pending</code> |
   *                         <code>available</code> | <code>deleting</code> |
   *                     <code>deleted</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>transit-gateway-attachment-id</code> - The ID of the attachment.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>transit-gateway-connect-peer-id</code> - The ID of the Connect peer.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export interface DescribeTransitGatewayConnectPeersResult {
  /**
   * <p>Information about the Connect peers.</p>
   */
  TransitGatewayConnectPeers?: TransitGatewayConnectPeer[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export interface DescribeTransitGatewayConnectsRequest {
  /**
   * <p>The IDs of the attachments.</p>
   */
  TransitGatewayAttachmentIds?: string[];

  /**
   * <p>One or more filters. The possible values are:</p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <code>options.protocol</code> - The tunnel protocol (<code>gre</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>state</code> - The state of the attachment (<code>initiating</code> |
   *                         <code>initiatingRequest</code> | <code>pendingAcceptance</code> |
   *                         <code>rollingBack</code> | <code>pending</code> | <code>available</code> |
   *                         <code>modifying</code> | <code>deleting</code> | <code>deleted</code> |
   *                         <code>failed</code> | <code>rejected</code> | <code>rejecting</code> |
   *                         <code>failing</code>).</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>transit-gateway-attachment-id</code> - The ID of the
   *                     Connect attachment.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>transit-gateway-id</code> - The ID of the transit gateway.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>transport-transit-gateway-attachment-id</code> - The ID of the transit gateway attachment from which the Connect attachment was created.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export interface DescribeTransitGatewayConnectsResult {
  /**
   * <p>Information about the Connect attachments.</p>
   */
  TransitGatewayConnects?: TransitGatewayConnect[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export interface DescribeTransitGatewayMulticastDomainsRequest {
  /**
   * <p>The ID of the transit gateway multicast domain.</p>
   */
  TransitGatewayMulticastDomainIds?: string[];

  /**
   * <p>One or more filters. The possible values are:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>state</code> - The state of the transit gateway multicast domain. Valid values are <code>pending</code> | <code>available</code> | <code>deleting</code> | <code>deleted</code>.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>transit-gateway-id</code> - The ID of the transit gateway.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>transit-gateway-multicast-domain-id</code> - The ID of the transit gateway multicast domain.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export interface DescribeTransitGatewayMulticastDomainsResult {
  /**
   * <p>Information about the transit gateway multicast domains.</p>
   */
  TransitGatewayMulticastDomains?: TransitGatewayMulticastDomain[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export interface DescribeTransitGatewayPeeringAttachmentsRequest {
  /**
   * <p>One or more IDs of the transit gateway peering attachments.</p>
   */
  TransitGatewayAttachmentIds?: string[];

  /**
   * <p>One or more filters. The possible values are:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>transit-gateway-attachment-id</code> - The ID of the transit gateway attachment.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>local-owner-id</code> - The ID of your Amazon Web Services account.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>remote-owner-id</code> - The ID of the Amazon Web Services account in the remote Region that owns the transit gateway.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>state</code> - The state of the peering attachment. Valid values are <code>available</code> | <code>deleted</code> | <code>deleting</code> | <code>failed</code> |  <code>failing</code> | <code>initiatingRequest</code> | <code>modifying</code> | <code>pendingAcceptance</code> | <code>pending</code> | <code>rollingBack</code> | <code>rejected</code> | <code>rejecting</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>tag</code>:<key> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value.
   *     For example, to find all resources that have a tag with the key <code>Owner</code> and the value <code>TeamA</code>, specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>tag-key</code> - The key of a tag assigned to the resource. Use this filter to find all resources that have a tag with a specific key, regardless of the tag value.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>transit-gateway-id</code> - The ID of the transit gateway.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export interface DescribeTransitGatewayPeeringAttachmentsResult {
  /**
   * <p>The transit gateway peering attachments.</p>
   */
  TransitGatewayPeeringAttachments?: TransitGatewayPeeringAttachment[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export interface DescribeTransitGatewayPolicyTablesRequest {
  /**
   * <p>The IDs of the transit gateway policy tables.</p>
   */
  TransitGatewayPolicyTableIds?: string[];

  /**
   * <p>The filters associated with the transit gateway policy table.</p>
   */
  Filters?: Filter[];

  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export interface DescribeTransitGatewayPolicyTablesResult {
  /**
   * <p>Describes the transit gateway policy tables.</p>
   */
  TransitGatewayPolicyTables?: TransitGatewayPolicyTable[];

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

export interface DescribeTransitGatewayRouteTableAnnouncementsRequest {
  /**
   * <p>The IDs of the transit gateway route tables that are being advertised.</p>
   */
  TransitGatewayRouteTableAnnouncementIds?: string[];

  /**
   * <p>The filters associated with the transit gateway policy table.</p>
   */
  Filters?: Filter[];

  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export interface DescribeTransitGatewayRouteTableAnnouncementsResult {
  /**
   * <p>Describes the transit gateway route table announcement.</p>
   */
  TransitGatewayRouteTableAnnouncements?: TransitGatewayRouteTableAnnouncement[];

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

export interface DescribeTransitGatewayRouteTablesRequest {
  /**
   * <p>The IDs of the transit gateway route tables.</p>
   */
  TransitGatewayRouteTableIds?: string[];

  /**
   * <p>One or more filters. The possible values are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>default-association-route-table</code> - Indicates whether this is the default
   *                 association route table for the transit gateway (<code>true</code> | <code>false</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>default-propagation-route-table</code> - Indicates whether this is the default
   *                propagation route table for the transit gateway (<code>true</code> | <code>false</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>state</code> - The state of the route table (<code>available</code> | <code>deleting</code> | <code>deleted</code> | <code>pending</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>transit-gateway-id</code> - The ID of the transit gateway.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>transit-gateway-route-table-id</code> - The ID of the transit gateway route table.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export interface DescribeTransitGatewayRouteTablesResult {
  /**
   * <p>Information about the transit gateway route tables.</p>
   */
  TransitGatewayRouteTables?: TransitGatewayRouteTable[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export interface DescribeTransitGatewaysRequest {
  /**
   * <p>The IDs of the transit gateways.</p>
   */
  TransitGatewayIds?: string[];

  /**
   * <p>One or more filters. The possible values are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>options.propagation-default-route-table-id</code> - The ID of the default propagation route table.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>options.amazon-side-asn</code> - The private ASN for the Amazon side of a BGP session.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>options.association-default-route-table-id</code> - The ID of the default association route table.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>options.auto-accept-shared-attachments</code> - Indicates whether there is automatic acceptance of attachment requests (<code>enable</code> | <code>disable</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>options.default-route-table-association</code> - Indicates whether resource attachments are automatically
   *                associated with the default association route table (<code>enable</code> | <code>disable</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>options.default-route-table-propagation</code> - Indicates whether resource attachments automatically propagate
   *                routes to the default propagation route table (<code>enable</code> | <code>disable</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>options.dns-support</code> - Indicates whether DNS support is enabled (<code>enable</code> | <code>disable</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>options.vpn-ecmp-support</code> - Indicates whether Equal Cost Multipath Protocol support is enabled  (<code>enable</code> | <code>disable</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>owner-id</code> - The ID of the Amazon Web Services account that owns the transit gateway.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>state</code> - The state of the transit gateway (<code>available</code> | <code>deleted</code> | <code>deleting</code> | <code>modifying</code> | <code>pending</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>transit-gateway-id</code> - The ID of the transit gateway.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export interface DescribeTransitGatewaysResult {
  /**
   * <p>Information about the transit gateways.</p>
   */
  TransitGateways?: TransitGateway[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export interface DescribeTransitGatewayVpcAttachmentsRequest {
  /**
   * <p>The IDs of the attachments.</p>
   */
  TransitGatewayAttachmentIds?: string[];

  /**
   * <p>One or more filters. The possible values are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>state</code> - The state of the attachment. Valid values are <code>available</code> | <code>deleted</code> | <code>deleting</code> | <code>failed</code> |  <code>failing</code> | <code>initiatingRequest</code> | <code>modifying</code> | <code>pendingAcceptance</code> | <code>pending</code> | <code>rollingBack</code> | <code>rejected</code> | <code>rejecting</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>transit-gateway-attachment-id</code> - The ID of the attachment.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>transit-gateway-id</code> - The ID of the transit gateway.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>vpc-id</code> - The ID of the VPC.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export interface DescribeTransitGatewayVpcAttachmentsResult {
  /**
   * <p>Information about the VPC attachments.</p>
   */
  TransitGatewayVpcAttachments?: TransitGatewayVpcAttachment[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export interface DescribeTrunkInterfaceAssociationsRequest {
  /**
   * <p>The IDs of the associations.</p>
   */
  AssociationIds?: string[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>One or more filters.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>gre-key</code> - The ID of a trunk interface association.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>interface-protocol</code> - The interface protocol. Valid values are <code>VLAN</code> and <code>GRE</code>.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return with a single call.
   *             To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  MaxResults?: number;
}

export interface DescribeTrunkInterfaceAssociationsResult {
  /**
   * <p>Information about the trunk associations.</p>
   */
  InterfaceAssociations?: TrunkInterfaceAssociation[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export enum VolumeAttributeName {
  autoEnableIO = "autoEnableIO",
  productCodes = "productCodes",
}

export interface DescribeVolumeAttributeRequest {
  /**
   * <p>The attribute of the volume. This parameter is required.</p>
   */
  Attribute: VolumeAttributeName | string | undefined;

  /**
   * <p>The ID of the volume.</p>
   */
  VolumeId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export interface DescribeVolumeAttributeResult {
  /**
   * <p>The state of <code>autoEnableIO</code> attribute.</p>
   */
  AutoEnableIO?: AttributeBooleanValue;

  /**
   * <p>A list of product codes.</p>
   */
  ProductCodes?: ProductCode[];

  /**
   * <p>The ID of the volume.</p>
   */
  VolumeId?: string;
}

export interface DescribeVolumesRequest {
  /**
   * <p>The filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>attachment.attach-time</code> - The time stamp when the attachment
   *           initiated.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>attachment.delete-on-termination</code> - Whether the volume is deleted on
   *           instance termination.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>attachment.device</code> - The device name specified in the block device mapping
   *           (for example, <code>/dev/sda1</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>attachment.instance-id</code> - The ID of the instance the volume is attached
   *           to.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>attachment.status</code> - The attachment state (<code>attaching</code> |
   *             <code>attached</code> | <code>detaching</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>availability-zone</code> - The Availability Zone in which the volume was
   *           created.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>create-time</code> - The time stamp when the volume was created.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>encrypted</code> - Indicates whether the volume is encrypted (<code>true</code>
   *           | <code>false</code>)</p>
   *             </li>
   *             <li>
   *     		         <p>
   *                   <code>multi-attach-enabled</code> - Indicates whether the volume is enabled for Multi-Attach (<code>true</code>
   *     			| <code>false</code>)</p>
   *     	       </li>
   *             <li>
   *                <p>
   *                   <code>fast-restored</code> - Indicates whether the volume was created from a
   *           snapshot that is enabled for fast snapshot restore (<code>true</code> |
   *           <code>false</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>size</code> - The size of the volume, in GiB.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>snapshot-id</code> - The snapshot from which the volume was created.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>status</code> - The state of the volume (<code>creating</code> |
   *             <code>available</code> | <code>in-use</code> | <code>deleting</code> |
   *             <code>deleted</code> | <code>error</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>tag</code>:<key> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value.
   *     For example, to find all resources that have a tag with the key <code>Owner</code> and the value <code>TeamA</code>, specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>tag-key</code> - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>volume-id</code> - The volume ID.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>volume-type</code> - The Amazon EBS volume type (<code>gp2</code> | <code>gp3</code> | <code>io1</code> | <code>io2</code> |
   *           <code>st1</code> | <code>sc1</code>| <code>standard</code>)</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>The volume IDs.</p>
   */
  VolumeIds?: string[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The maximum number of volume results returned by <code>DescribeVolumes</code> in paginated
   *       output. When this parameter is used, <code>DescribeVolumes</code> only returns
   *         <code>MaxResults</code> results in a single page along with a <code>NextToken</code>
   *       response element. The remaining results of the initial request can be seen by sending another
   *         <code>DescribeVolumes</code> request with the returned <code>NextToken</code> value. This
   *       value can be between 5 and 500; if <code>MaxResults</code> is given a value larger than 500,
   *       only 500 results are returned. If this parameter is not used, then
   *         <code>DescribeVolumes</code> returns all results. You cannot specify this parameter and the
   *       volume IDs parameter in the same request.</p>
   */
  MaxResults?: number;

  /**
   * <p>The <code>NextToken</code> value returned from a previous paginated
   *         <code>DescribeVolumes</code> request where <code>MaxResults</code> was used and the results
   *       exceeded the value of that parameter. Pagination continues from the end of the previous
   *       results that returned the <code>NextToken</code> value. This value is <code>null</code> when
   *       there are no more results to return.</p>
   */
  NextToken?: string;
}

export interface DescribeVolumesResult {
  /**
   * <p>Information about the volumes.</p>
   */
  Volumes?: Volume[];

  /**
   * <p>The <code>NextToken</code> value to include in a future <code>DescribeVolumes</code>
   *       request. When the results of a <code>DescribeVolumes</code> request exceed
   *         <code>MaxResults</code>, this value can be used to retrieve the next page of results. This
   *       value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export interface DescribeVolumesModificationsRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The IDs of the volumes.</p>
   */
  VolumeIds?: string[];

  /**
   * <p>The filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>modification-state</code> - The current modification state (modifying |
   *           optimizing | completed | failed).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>original-iops</code> - The original IOPS rate of the volume.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>original-size</code> - The original size of the volume, in GiB.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>original-volume-type</code> - The original volume type of the volume (standard |
   *           io1 | io2 | gp2 | sc1 | st1).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>originalMultiAttachEnabled</code> - Indicates whether Multi-Attach support was enabled (true | false).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>start-time</code> - The modification start time.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>target-iops</code> - The target IOPS rate of the volume.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>target-size</code> - The target size of the volume, in GiB.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>target-volume-type</code> - The target volume type of the volume (standard |
   *           io1 | io2 | gp2 | sc1 | st1).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>targetMultiAttachEnabled</code> - Indicates whether Multi-Attach support is to be enabled (true | false).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>volume-id</code> - The ID of the volume.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>The <code>nextToken</code> value returned by a previous paginated request.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results (up to a limit of 500) to be returned in a paginated
   *       request.</p>
   */
  MaxResults?: number;
}

export enum VolumeModificationState {
  completed = "completed",
  failed = "failed",
  modifying = "modifying",
  optimizing = "optimizing",
}

/**
 * <p>Describes the modification status of an EBS volume.</p>
 *          <p>If the volume has never been modified, some element values will be null.</p>
 */
export interface VolumeModification {
  /**
   * <p>The ID of the volume.</p>
   */
  VolumeId?: string;

  /**
   * <p>The current modification state. The modification state is null for unmodified
   *       volumes.</p>
   */
  ModificationState?: VolumeModificationState | string;

  /**
   * <p>A status message about the modification progress or failure.</p>
   */
  StatusMessage?: string;

  /**
   * <p>The target size of the volume, in GiB.</p>
   */
  TargetSize?: number;

  /**
   * <p>The target IOPS rate of the volume.</p>
   */
  TargetIops?: number;

  /**
   * <p>The target EBS volume type of the volume.</p>
   */
  TargetVolumeType?: VolumeType | string;

  /**
   * <p>The target throughput of the volume, in MiB/s.</p>
   */
  TargetThroughput?: number;

  /**
   * <p>The target setting for Amazon EBS Multi-Attach.</p>
   */
  TargetMultiAttachEnabled?: boolean;

  /**
   * <p>The original size of the volume, in GiB.</p>
   */
  OriginalSize?: number;

  /**
   * <p>The original IOPS rate of the volume.</p>
   */
  OriginalIops?: number;

  /**
   * <p>The original EBS volume type of the volume.</p>
   */
  OriginalVolumeType?: VolumeType | string;

  /**
   * <p>The original throughput of the volume, in MiB/s.</p>
   */
  OriginalThroughput?: number;

  /**
   * <p>The original setting for Amazon EBS Multi-Attach.</p>
   */
  OriginalMultiAttachEnabled?: boolean;

  /**
   * <p>The modification progress, from 0 to 100 percent complete.</p>
   */
  Progress?: number;

  /**
   * <p>The modification start time.</p>
   */
  StartTime?: Date;

  /**
   * <p>The modification completion or failure time.</p>
   */
  EndTime?: Date;
}

export interface DescribeVolumesModificationsResult {
  /**
   * <p>Information about the volume modifications.</p>
   */
  VolumesModifications?: VolumeModification[];

  /**
   * <p>Token for pagination, null if there are no more results </p>
   */
  NextToken?: string;
}

export interface DescribeVolumeStatusRequest {
  /**
   * <p>The filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>action.code</code> - The action code for the event (for example,
   *             <code>enable-volume-io</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>action.description</code> - A description of the action.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>action.event-id</code> - The event ID associated with the action.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>availability-zone</code> - The Availability Zone of the instance.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>event.description</code> - A description of the event.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>event.event-id</code> - The event ID.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>event.event-type</code> - The event type (for <code>io-enabled</code>:
   *             <code>passed</code> | <code>failed</code>; for <code>io-performance</code>:
   *             <code>io-performance:degraded</code> | <code>io-performance:severely-degraded</code> |
   *             <code>io-performance:stalled</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>event.not-after</code> - The latest end time for the event.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>event.not-before</code> - The earliest start time for the event.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>volume-status.details-name</code> - The cause for
   *             <code>volume-status.status</code> (<code>io-enabled</code> |
   *           <code>io-performance</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>volume-status.details-status</code> - The status of
   *             <code>volume-status.details-name</code> (for <code>io-enabled</code>:
   *             <code>passed</code> | <code>failed</code>; for <code>io-performance</code>:
   *             <code>normal</code> | <code>degraded</code> | <code>severely-degraded</code> |
   *             <code>stalled</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>volume-status.status</code> - The status of the volume (<code>ok</code> |
   *             <code>impaired</code> | <code>warning</code> | <code>insufficient-data</code>).</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>The maximum number of volume results returned by <code>DescribeVolumeStatus</code> in
   *       paginated output. When this parameter is used, the request only returns
   *         <code>MaxResults</code> results in a single page along with a <code>NextToken</code>
   *       response element. The remaining results of the initial request can be seen by sending another
   *       request with the returned <code>NextToken</code> value. This value can be between 5 and 1,000;
   *       if <code>MaxResults</code> is given a value larger than 1,000, only 1,000 results are returned.
   *       If this parameter is not used, then <code>DescribeVolumeStatus</code> returns all results. You
   *       cannot specify this parameter and the volume IDs parameter in the same request.</p>
   */
  MaxResults?: number;

  /**
   * <p>The <code>NextToken</code> value to include in a future <code>DescribeVolumeStatus</code>
   *       request. When the results of the request exceed <code>MaxResults</code>, this value can be
   *       used to retrieve the next page of results. This value is <code>null</code> when there are no
   *       more results to return.</p>
   */
  NextToken?: string;

  /**
   * <p>The IDs of the volumes.</p>
   *          <p>Default: Describes all your volumes.</p>
   */
  VolumeIds?: string[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * <p>Describes a volume status operation code.</p>
 */
export interface VolumeStatusAction {
  /**
   * <p>The code identifying the operation, for example, <code>enable-volume-io</code>.</p>
   */
  Code?: string;

  /**
   * <p>A description of the operation.</p>
   */
  Description?: string;

  /**
   * <p>The ID of the event associated with this operation.</p>
   */
  EventId?: string;

  /**
   * <p>The event type associated with this operation.</p>
   */
  EventType?: string;
}

/**
 * <p>Information about the instances to which the volume is attached.</p>
 */
export interface VolumeStatusAttachmentStatus {
  /**
   * <p>The maximum IOPS supported by the attached instance.</p>
   */
  IoPerformance?: string;

  /**
   * <p>The ID of the attached instance.</p>
   */
  InstanceId?: string;
}

/**
 * <p>Describes a volume status event.</p>
 */
export interface VolumeStatusEvent {
  /**
   * <p>A description of the event.</p>
   */
  Description?: string;

  /**
   * <p>The ID of this event.</p>
   */
  EventId?: string;

  /**
   * <p>The type of this event.</p>
   */
  EventType?: string;

  /**
   * <p>The latest end time of the event.</p>
   */
  NotAfter?: Date;

  /**
   * <p>The earliest start time of the event.</p>
   */
  NotBefore?: Date;

  /**
   * <p>The ID of the instance associated with the event.</p>
   */
  InstanceId?: string;
}

export enum VolumeStatusName {
  io_enabled = "io-enabled",
  io_performance = "io-performance",
}

/**
 * <p>Describes a volume status.</p>
 */
export interface VolumeStatusDetails {
  /**
   * <p>The name of the volume status.</p>
   */
  Name?: VolumeStatusName | string;

  /**
   * <p>The intended status of the volume status.</p>
   */
  Status?: string;
}

export enum VolumeStatusInfoStatus {
  impaired = "impaired",
  insufficient_data = "insufficient-data",
  ok = "ok",
}

/**
 * <p>Describes the status of a volume.</p>
 */
export interface VolumeStatusInfo {
  /**
   * <p>The details of the volume status.</p>
   */
  Details?: VolumeStatusDetails[];

  /**
   * <p>The status of the volume.</p>
   */
  Status?: VolumeStatusInfoStatus | string;
}

/**
 * <p>Describes the volume status.</p>
 */
export interface VolumeStatusItem {
  /**
   * <p>The details of the operation.</p>
   */
  Actions?: VolumeStatusAction[];

  /**
   * <p>The Availability Zone of the volume.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the Outpost.</p>
   */
  OutpostArn?: string;

  /**
   * <p>A list of events associated with the volume.</p>
   */
  Events?: VolumeStatusEvent[];

  /**
   * <p>The volume ID.</p>
   */
  VolumeId?: string;

  /**
   * <p>The volume status.</p>
   */
  VolumeStatus?: VolumeStatusInfo;

  /**
   * <p>Information about the instances to which the volume is attached.</p>
   */
  AttachmentStatuses?: VolumeStatusAttachmentStatus[];
}

export interface DescribeVolumeStatusResult {
  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code>
   *       when there are no more results to return.</p>
   */
  NextToken?: string;

  /**
   * <p>Information about the status of the volumes.</p>
   */
  VolumeStatuses?: VolumeStatusItem[];
}

export enum VpcAttributeName {
  enableDnsHostnames = "enableDnsHostnames",
  enableDnsSupport = "enableDnsSupport",
}

export interface DescribeVpcAttributeRequest {
  /**
   * <p>The VPC attribute.</p>
   */
  Attribute: VpcAttributeName | string | undefined;

  /**
   * <p>The ID of the VPC.</p>
   */
  VpcId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export interface DescribeVpcAttributeResult {
  /**
   * <p>The ID of the VPC.</p>
   */
  VpcId?: string;

  /**
   * <p>Indicates whether the instances launched in the VPC get DNS hostnames.
   * 				If this attribute is <code>true</code>, instances in the VPC get DNS hostnames;
   * 				otherwise, they do not.</p>
   */
  EnableDnsHostnames?: AttributeBooleanValue;

  /**
   * <p>Indicates whether DNS resolution is enabled for
   * 				the VPC. If this attribute is <code>true</code>, the Amazon DNS server
   * 				resolves DNS hostnames for your instances to their corresponding
   * 				IP addresses; otherwise, it does not.</p>
   */
  EnableDnsSupport?: AttributeBooleanValue;
}

export interface DescribeVpcClassicLinkRequest {
  /**
   * <p>One or more filters.</p>
   * 		       <ul>
   *             <li>
   * 				           <p>
   *                   <code>is-classic-link-enabled</code> - Whether the VPC is enabled for ClassicLink
   * 					   (<code>true</code> | <code>false</code>).</p>
   * 			         </li>
   *             <li>
   * 			            <p>
   *                   <code>tag</code>:<key> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value.
   *     For example, to find all resources that have a tag with the key <code>Owner</code> and the value <code>TeamA</code>, specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p>
   * 			         </li>
   *             <li>
   *     			        <p>
   *                   <code>tag-key</code> - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.</p>
   * 			         </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>One or more VPCs for which you want to describe the ClassicLink status.</p>
   */
  VpcIds?: string[];
}

/**
 * <note>
 * 	           <p>We are retiring EC2-Classic. We recommend that you migrate from EC2-Classic to a VPC. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-migrate.html">Migrate from EC2-Classic to a VPC</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 * 	        </note>
 * 		       <p>Describes whether a VPC is enabled for ClassicLink.</p>
 */
export interface VpcClassicLink {
  /**
   * <p>Indicates whether the VPC is enabled for ClassicLink.</p>
   */
  ClassicLinkEnabled?: boolean;

  /**
   * <p>Any tags assigned to the VPC.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The ID of the VPC.</p>
   */
  VpcId?: string;
}

export interface DescribeVpcClassicLinkResult {
  /**
   * <p>The ClassicLink status of one or more VPCs.</p>
   */
  Vpcs?: VpcClassicLink[];
}

export interface DescribeVpcClassicLinkDnsSupportRequest {
  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>One or more VPC IDs.</p>
   */
  VpcIds?: string[];
}

/**
 * <p>Describes the ClassicLink DNS support status of a VPC.</p>
 */
export interface ClassicLinkDnsSupport {
  /**
   * <p>Indicates whether ClassicLink DNS support is enabled for the VPC.</p>
   */
  ClassicLinkDnsSupported?: boolean;

  /**
   * <p>The ID of the VPC.</p>
   */
  VpcId?: string;
}

export interface DescribeVpcClassicLinkDnsSupportResult {
  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;

  /**
   * <p>Information about the ClassicLink DNS support status of the VPCs.</p>
   */
  Vpcs?: ClassicLinkDnsSupport[];
}

export interface DescribeVpcEndpointConnectionNotificationsRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the notification.</p>
   */
  ConnectionNotificationId?: string;

  /**
   * <p>One or more filters.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>connection-notification-arn</code> - The ARN of the SNS topic for the
   *                     notification.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>connection-notification-id</code> - The ID of the
   *                     notification.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>connection-notification-state</code> - The state of the notification
   *                         (<code>Enabled</code> | <code>Disabled</code>).</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>connection-notification-type</code> - The type of notification
   *                         (<code>Topic</code>).</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>service-id</code> - The ID of the endpoint service.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>vpc-endpoint-id</code> - The ID of the VPC endpoint.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>The maximum number of results to return in a single call. To retrieve the remaining
   *             results, make another request with the returned <code>NextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token to request the next page of results.</p>
   */
  NextToken?: string;
}

export interface DescribeVpcEndpointConnectionNotificationsResult {
  /**
   * <p>One or more notifications.</p>
   */
  ConnectionNotificationSet?: ConnectionNotification[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is
   *             <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export interface DescribeVpcEndpointConnectionsRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>One or more filters.</p>
   * 		       <ul>
   *             <li>
   * 		             <p>
   *                   <code>ip-address-type</code> - The IP address type (<code>ipv4</code> | <code>ipv6</code>).</p>
   * 		          </li>
   *             <li>
   *                 <p>
   *                   <code>service-id</code> - The ID of the service.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>vpc-endpoint-owner</code> - The ID of the Amazon Web Services account ID
   * 		        that owns the endpoint.</p>
   *             </li>
   *             <li>
   * 			            <p>
   *                   <code>vpc-endpoint-state</code> - The state of the endpoint
   * 			        (<code>pendingAcceptance</code> | <code>pending</code> |
   * 			        <code>available</code> | <code>deleting</code> | <code>deleted</code> |
   * 			        <code>rejected</code> | <code>failed</code>).</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>vpc-endpoint-id</code> - The ID of the endpoint.</p>
   * 			         </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>The maximum number of results to return for the request in a single page. The remaining
   *             results of the initial request can be seen by sending another request with the returned
   *                 <code>NextToken</code> value. This value can be between 5 and 1,000; if
   *                 <code>MaxResults</code> is given a value larger than 1,000, only 1,000 results are
   *             returned.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token to retrieve the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * <p>Describes a VPC endpoint connection to a service.</p>
 */
export interface VpcEndpointConnection {
  /**
   * <p>The ID of the service to which the endpoint is connected.</p>
   */
  ServiceId?: string;

  /**
   * <p>The ID of the VPC endpoint.</p>
   */
  VpcEndpointId?: string;

  /**
   * <p>The ID of the Amazon Web Services account that owns the VPC endpoint.</p>
   */
  VpcEndpointOwner?: string;

  /**
   * <p>The state of the VPC endpoint.</p>
   */
  VpcEndpointState?: State | string;

  /**
   * <p>The date and time that the VPC endpoint was created.</p>
   */
  CreationTimestamp?: Date;

  /**
   * <p>The DNS entries for the VPC endpoint.</p>
   */
  DnsEntries?: DnsEntry[];

  /**
   * <p>The Amazon Resource Names (ARNs) of the network load balancers for the service.</p>
   */
  NetworkLoadBalancerArns?: string[];

  /**
   * <p>The Amazon Resource Names (ARNs) of the Gateway Load Balancers for the service.</p>
   */
  GatewayLoadBalancerArns?: string[];

  /**
   * <p>The IP address type for the endpoint.</p>
   */
  IpAddressType?: IpAddressType | string;

  /**
   * <p>The ID of the VPC endpoint connection.</p>
   */
  VpcEndpointConnectionId?: string;

  /**
   * <p>The tags.</p>
   */
  Tags?: Tag[];
}

export interface DescribeVpcEndpointConnectionsResult {
  /**
   * <p>Information about one or more VPC endpoint connections.</p>
   */
  VpcEndpointConnections?: VpcEndpointConnection[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

/**
 * <p>Contains the parameters for DescribeVpcEndpoints.</p>
 */
export interface DescribeVpcEndpointsRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>One or more endpoint IDs.</p>
   */
  VpcEndpointIds?: string[];

  /**
   * <p>One or more filters.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>ip-address-type</code> - The IP address type (<code>ipv4</code> | <code>ipv6</code>).</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>service-name</code> - The name of the service.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>vpc-id</code> - The ID of the VPC in which the endpoint resides.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>vpc-endpoint-id</code> - The ID of the endpoint.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>vpc-endpoint-state</code> - The state of the endpoint
   *                         (<code>pendingAcceptance</code> | <code>pending</code> |
   *                         <code>available</code> | <code>deleting</code> | <code>deleted</code> |
   *                         <code>rejected</code> | <code>failed</code>).</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>vpc-endpoint-type</code> - The type of VPC endpoint (<code>Interface</code> | <code>Gateway</code> | <code>GatewayLoadBalancer</code>).</p>
   *             </li>
   *             <li>
   *         		     <p>
   *                   <code>tag</code>:<key> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value. For example, to find all resources that have a tag with the key <code>Owner</code> and the value <code>TeamA</code>, specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p>
   *         	   </li>
   *             <li>
   *         		     <p>
   *                   <code>tag-key</code> - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.</p>
   *         	   </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>The maximum number of items to return for this request. The request returns a token that you can specify in a subsequent call to get the next set of results.</p>
   *         <p>Constraint: If the value is greater than 1,000, we return only 1,000 items.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next set of items to return. (You received this token from a prior call.)</p>
   */
  NextToken?: string;
}

/**
 * <p>Contains the output of DescribeVpcEndpoints.</p>
 */
export interface DescribeVpcEndpointsResult {
  /**
   * <p>Information about the endpoints.</p>
   */
  VpcEndpoints?: VpcEndpoint[];

  /**
   * <p>The token to use when requesting the next set of items. If there are no additional items to return, the string is empty.</p>
   */
  NextToken?: string;
}

export interface DescribeVpcEndpointServiceConfigurationsRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The IDs of one or more services.</p>
   */
  ServiceIds?: string[];

  /**
   * <p>One or more filters.</p>
   * 		       <ul>
   *             <li>
   * 				           <p>
   *                   <code>service-name</code> - The name of the service.</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>service-id</code> - The ID of the service.</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>service-state</code> - The state of the service (<code>Pending</code> |
   *                         <code>Available</code> | <code>Deleting</code> | <code>Deleted</code> |
   *                         <code>Failed</code>). </p>
   * 			         </li>
   *             <li>
   * 		             <p>
   *                   <code>supported-ip-address-types</code> - The IP address type (<code>ipv4</code> | <code>ipv6</code>).</p>
   * 		          </li>
   *             <li>
   * 				           <p>
   *                   <code>tag</code>:<key> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value. For example, to find all resources that have a tag with the key <code>Owner</code> and the value <code>TeamA</code>, specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>tag-key</code> - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.</p>
   * 			         </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>The maximum number of results to return for the request in a single page. The remaining
   *             results of the initial request can be seen by sending another request with the returned
   *                 <code>NextToken</code> value. This value can be between 5 and 1,000; if
   *                 <code>MaxResults</code> is given a value larger than 1,000, only 1,000 results are
   *             returned.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token to retrieve the next page of results.</p>
   */
  NextToken?: string;
}

export interface DescribeVpcEndpointServiceConfigurationsResult {
  /**
   * <p>Information about one or more services.</p>
   */
  ServiceConfigurations?: ServiceConfiguration[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export interface DescribeVpcEndpointServicePermissionsRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the service.</p>
   */
  ServiceId: string | undefined;

  /**
   * <p>One or more filters.</p>
   * 		       <ul>
   *             <li>
   * 				           <p>
   *                   <code>principal</code> - The ARN of the principal.</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>principal-type</code> - The principal type (<code>All</code> |
   * 						<code>Service</code> | <code>OrganizationUnit</code> | <code>Account</code>
   * 					| <code>User</code> | <code>Role</code>).</p>
   * 			         </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>The maximum number of results to return for the request in a single page. The remaining
   *             results of the initial request can be seen by sending another request with the returned
   *                 <code>NextToken</code> value. This value can be between 5 and 1,000; if
   *                 <code>MaxResults</code> is given a value larger than 1,000, only 1,000 results are
   *             returned.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token to retrieve the next page of results.</p>
   */
  NextToken?: string;
}

export interface DescribeVpcEndpointServicePermissionsResult {
  /**
   * <p>Information about one or more allowed principals.</p>
   */
  AllowedPrincipals?: AllowedPrincipal[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

/**
 * <p>Contains the parameters for DescribeVpcEndpointServices.</p>
 */
export interface DescribeVpcEndpointServicesRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>One or more service names.</p>
   */
  ServiceNames?: string[];

  /**
   * <p>One or more filters.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>service-name</code> - The name of the service.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>service-type</code> - The type of service (<code>Interface</code> |
   *                         <code>Gateway</code>).</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>supported-ip-address-types</code> - The IP address type (<code>ipv4</code> | <code>ipv6</code>).</p>
   *             </li>
   *             <li>
   *         		     <p>
   *                   <code>tag</code>:<key> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value. For example, to find all resources that have a tag with the key <code>Owner</code> and the value <code>TeamA</code>, specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p>
   *         	   </li>
   *             <li>
   *         		     <p>
   *                   <code>tag-key</code> - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.</p>
   *         	   </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>The maximum number of items to return for this request. The request returns a token that you can specify in a subsequent call to get the next set of results.</p>
   *         <p>Constraint: If the value is greater than 1,000, we return only 1,000 items.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next set of items to return. (You received this token from a prior call.)</p>
   */
  NextToken?: string;
}

/**
 * <p>Information about the Private DNS name for interface endpoints.</p>
 */
export interface PrivateDnsDetails {
  /**
   * <p>The private DNS name assigned to the VPC endpoint service.</p>
   */
  PrivateDnsName?: string;
}

/**
 * <p>Describes a VPC endpoint service.</p>
 */
export interface ServiceDetail {
  /**
   * <p>The name of the service.</p>
   */
  ServiceName?: string;

  /**
   * <p>The ID of the endpoint service.</p>
   */
  ServiceId?: string;

  /**
   * <p>The type of service.</p>
   */
  ServiceType?: ServiceTypeDetail[];

  /**
   * <p>The Availability Zones in which the service is available.</p>
   */
  AvailabilityZones?: string[];

  /**
   * <p>The Amazon Web Services account ID of the service owner.</p>
   */
  Owner?: string;

  /**
   * <p>The DNS names for the service.</p>
   */
  BaseEndpointDnsNames?: string[];

  /**
   * <p>The private DNS name for the service.</p>
   */
  PrivateDnsName?: string;

  /**
   * <p>The private DNS names assigned to the VPC endpoint service.</p>
   */
  PrivateDnsNames?: PrivateDnsDetails[];

  /**
   * <p>Indicates whether the service supports endpoint policies.</p>
   */
  VpcEndpointPolicySupported?: boolean;

  /**
   * <p>Indicates whether VPC endpoint connection requests to the service must be accepted by the service owner.</p>
   */
  AcceptanceRequired?: boolean;

  /**
   * <p>Indicates whether the service manages its VPC endpoints. Management of the service VPC
   *             endpoints using the VPC endpoint API is restricted.</p>
   */
  ManagesVpcEndpoints?: boolean;

  /**
   * <p>The payer responsibility.</p>
   */
  PayerResponsibility?: PayerResponsibility | string;

  /**
   * <p>Any tags assigned to the service.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The verification state of the VPC endpoint service.</p>
   *         <p>Consumers of the endpoint service cannot use the private name when the state is not <code>verified</code>.</p>
   */
  PrivateDnsNameVerificationState?: DnsNameState | string;

  /**
   * <p>The supported IP address types.</p>
   */
  SupportedIpAddressTypes?: (ServiceConnectivityType | string)[];
}

/**
 * <p>Contains the output of DescribeVpcEndpointServices.</p>
 */
export interface DescribeVpcEndpointServicesResult {
  /**
   * <p>A list of supported services.</p>
   */
  ServiceNames?: string[];

  /**
   * <p>Information about the service.</p>
   */
  ServiceDetails?: ServiceDetail[];

  /**
   * <p>The token to use when requesting the next set of items. If there are no additional items to return, the string is empty.</p>
   */
  NextToken?: string;
}

export interface DescribeVpcPeeringConnectionsRequest {
  /**
   * <p>One or more filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                     <code>accepter-vpc-info.cidr-block</code> - The IPv4 CIDR block of the accepter
   *                     VPC.</p>
   *             </li>
   *             <li>
   *                <p>
   *                     <code>accepter-vpc-info.owner-id</code> - The ID of the Amazon Web Services account that owns the
   *                     accepter VPC.</p>
   *             </li>
   *             <li>
   *                <p>
   *                     <code>accepter-vpc-info.vpc-id</code> - The ID of the accepter VPC.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>expiration-time</code> - The expiration date and time for the VPC peering
   *           connection.</p>
   *             </li>
   *             <li>
   *                <p>
   *                     <code>requester-vpc-info.cidr-block</code> - The IPv4 CIDR block of the
   *                     requester's VPC.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>requester-vpc-info.owner-id</code> - The ID of the Amazon Web Services account that owns the
   *                   requester VPC.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>requester-vpc-info.vpc-id</code> - The ID of the requester VPC.</p>
   *             </li>
   *             <li>
   *                <p>
   *                     <code>status-code</code> - The status of the VPC peering connection
   *                         (<code>pending-acceptance</code> | <code>failed</code> |
   *                         <code>expired</code> | <code>provisioning</code> | <code>active</code> |
   *                         <code>deleting</code> | <code>deleted</code> |
   *                     <code>rejected</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>status-message</code> - A message that provides more information about the status
   *           of the VPC peering connection, if applicable.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>tag</code>:<key> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value.
   *     For example, to find all resources that have a tag with the key <code>Owner</code> and the value <code>TeamA</code>, specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>tag-key</code> - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>vpc-peering-connection-id</code> - The ID of the VPC peering connection.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>One or more VPC peering connection IDs.</p>
   *          <p>Default: Describes all your VPC peering connections.</p>
   */
  VpcPeeringConnectionIds?: string[];

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  MaxResults?: number;
}

export interface DescribeVpcPeeringConnectionsResult {
  /**
   * <p>Information about the VPC peering connections.</p>
   */
  VpcPeeringConnections?: VpcPeeringConnection[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export interface DescribeVpcsRequest {
  /**
   * <p>One or more filters.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>cidr</code> - The primary IPv4 CIDR block of the VPC. The CIDR block you
   *                     specify must exactly match the VPC's CIDR block for information to be returned
   *                     for the VPC. Must contain the slash followed by one or two digits (for example,
   *                     <code>/28</code>).</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>cidr-block-association.cidr-block</code> - An IPv4 CIDR block associated with the
   *                     VPC.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>cidr-block-association.association-id</code> - The association ID for
   *                     an IPv4 CIDR block associated with the VPC.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>cidr-block-association.state</code> - The state of an IPv4 CIDR block
   *                     associated with the VPC.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>dhcp-options-id</code> - The ID of a set of DHCP options.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>ipv6-cidr-block-association.ipv6-cidr-block</code> - An IPv6 CIDR
   *                     block associated with the VPC.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>ipv6-cidr-block-association.ipv6-pool</code> - The ID of the IPv6 address pool from which the IPv6 CIDR block is allocated.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>ipv6-cidr-block-association.association-id</code> - The association
   *                     ID for an IPv6 CIDR block associated with the VPC.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>ipv6-cidr-block-association.state</code> - The state of an IPv6 CIDR
   *                     block associated with the VPC.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>is-default</code> - Indicates whether the VPC is the default VPC.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>owner-id</code> - The ID of the Amazon Web Services account that owns the VPC.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>state</code> - The state of the VPC (<code>pending</code> | <code>available</code>).</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>tag</code>:<key> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value.
   *     For example, to find all resources that have a tag with the key <code>Owner</code> and the value <code>TeamA</code>, specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>tag-key</code> - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>vpc-id</code> - The ID of the VPC.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>One or more VPC IDs.</p>
   * 		       <p>Default: Describes all your VPCs.</p>
   */
  VpcIds?: string[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  MaxResults?: number;
}

export interface DescribeVpcsResult {
  /**
   * <p>Information about one or more VPCs.</p>
   */
  Vpcs?: Vpc[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

/**
 * <p>Contains the parameters for DescribeVpnConnections.</p>
 */
export interface DescribeVpnConnectionsRequest {
  /**
   * <p>One or more filters.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>customer-gateway-configuration</code> - The configuration information
   *                     for the customer gateway.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>customer-gateway-id</code> - The ID of a customer gateway associated
   *                     with the VPN connection.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>state</code> - The state of the VPN connection (<code>pending</code> |
   *                         <code>available</code> | <code>deleting</code> |
   *                     <code>deleted</code>).</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>option.static-routes-only</code> - Indicates whether the connection has
   *                     static routes only. Used for devices that do not support Border Gateway Protocol
   *                     (BGP).</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>route.destination-cidr-block</code> - The destination CIDR block. This
   *                     corresponds to the subnet used in a customer data center.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>bgp-asn</code> - The BGP Autonomous System Number (ASN) associated with
   *                     a BGP device.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>tag</code>:<key> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value.
   *     For example, to find all resources that have a tag with the key <code>Owner</code> and the value <code>TeamA</code>, specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>tag-key</code> - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>type</code> - The type of VPN connection. Currently the only supported
   *                     type is <code>ipsec.1</code>.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>vpn-connection-id</code> - The ID of the VPN connection.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>vpn-gateway-id</code> - The ID of a virtual private gateway associated
   *                     with the VPN connection.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>transit-gateway-id</code> - The ID of a transit gateway associated with
   *                     the VPN connection.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>One or more VPN connection IDs.</p>
   *         <p>Default: Describes your VPN connections.</p>
   */
  VpnConnectionIds?: string[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually
   *             making the request, and provides an error response. If you have the required
   *             permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is
   *                 <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * <p>Contains the output of DescribeVpnConnections.</p>
 */
export interface DescribeVpnConnectionsResult {
  /**
   * <p>Information about one or more VPN connections.</p>
   */
  VpnConnections?: VpnConnection[];
}

/**
 * <p>Contains the parameters for DescribeVpnGateways.</p>
 */
export interface DescribeVpnGatewaysRequest {
  /**
   * <p>One or more filters.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>amazon-side-asn</code> - The Autonomous System Number (ASN) for the
   *                     Amazon side of the gateway.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>attachment.state</code> - The current state of the attachment between
   *                     the gateway and the VPC (<code>attaching</code> | <code>attached</code> |
   *                         <code>detaching</code> | <code>detached</code>).</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>attachment.vpc-id</code> - The ID of an attached VPC.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>availability-zone</code> - The Availability Zone for the virtual private
   *                     gateway (if applicable).</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>state</code> - The state of the virtual private gateway
   *                         (<code>pending</code> | <code>available</code> | <code>deleting</code> |
   *                         <code>deleted</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>tag</code>:<key> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value.
   *     For example, to find all resources that have a tag with the key <code>Owner</code> and the value <code>TeamA</code>, specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>tag-key</code> - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>type</code> - The type of virtual private gateway. Currently the only
   *                     supported type is <code>ipsec.1</code>.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>vpn-gateway-id</code> - The ID of the virtual private gateway.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>One or more virtual private gateway IDs.</p>
   *         <p>Default: Describes all your virtual private gateways.</p>
   */
  VpnGatewayIds?: string[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually
   *             making the request, and provides an error response. If you have the required
   *             permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is
   *                 <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * <p>Contains the output of DescribeVpnGateways.</p>
 */
export interface DescribeVpnGatewaysResult {
  /**
   * <p>Information about one or more virtual private gateways.</p>
   */
  VpnGateways?: VpnGateway[];
}

export interface DetachClassicLinkVpcRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the instance to unlink from the VPC.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The ID of the VPC to which the instance is linked.</p>
   */
  VpcId: string | undefined;
}

export interface DetachClassicLinkVpcResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
   */
  Return?: boolean;
}

export interface DetachInternetGatewayRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the internet gateway.</p>
   */
  InternetGatewayId: string | undefined;

  /**
   * <p>The ID of the VPC.</p>
   */
  VpcId: string | undefined;
}

/**
 * <p>Contains the parameters for DetachNetworkInterface.</p>
 */
export interface DetachNetworkInterfaceRequest {
  /**
   * <p>The ID of the attachment.</p>
   */
  AttachmentId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *             and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *             Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>Specifies whether to force a detachment.</p>
   *         <note>
   *             <ul>
   *                <li>
   *                     <p>Use the <code>Force</code> parameter only as a last resort to detach a network interface from a failed instance. </p>
   *                 </li>
   *                <li>
   *                     <p>If you use the <code>Force</code> parameter to detach a network interface, you might not be able to attach a different network interface to the same index on the instance without first stopping and starting the instance.</p>
   *                 </li>
   *                <li>
   *                     <p>If you force the detachment of a network interface, the <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-metadata.html">instance metadata</a>
   *                         might not get updated. This means that the attributes associated
   *                         with the detached network interface might still be visible. The
   *                         instance metadata will get updated when you stop and start the
   *                         instance.</p>
   *                 </li>
   *             </ul>
   *         </note>
   */
  Force?: boolean;
}

export interface DetachVolumeRequest {
  /**
   * <p>The device name.</p>
   */
  Device?: string;

  /**
   * <p>Forces detachment if the previous detachment attempt did not occur cleanly (for example,
   *       logging into an instance, unmounting the volume, and detaching normally). This option can lead
   *       to data loss or a corrupted file system. Use this option only as a last resort to detach a
   *       volume from a failed instance. The instance won't have an opportunity to flush file system
   *       caches or file system metadata. If you use this option, you must perform file system check and
   *       repair procedures.</p>
   */
  Force?: boolean;

  /**
   * <p>The ID of the instance. If you are detaching a Multi-Attach enabled volume, you must specify an instance ID.</p>
   */
  InstanceId?: string;

  /**
   * <p>The ID of the volume.</p>
   */
  VolumeId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * <p>Contains the parameters for DetachVpnGateway.</p>
 */
export interface DetachVpnGatewayRequest {
  /**
   * <p>The ID of the VPC.</p>
   */
  VpcId: string | undefined;

  /**
   * <p>The ID of the virtual private gateway.</p>
   */
  VpnGatewayId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually
   *             making the request, and provides an error response. If you have the required
   *             permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is
   *                 <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export interface DisableEbsEncryptionByDefaultRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export interface DisableEbsEncryptionByDefaultResult {
  /**
   * <p>The updated status of encryption by default.</p>
   */
  EbsEncryptionByDefault?: boolean;
}

export interface DisableFastLaunchRequest {
  /**
   * <p>The ID of the image for which you’re turning off faster launching, and removing pre-provisioned snapshots.</p>
   */
  ImageId: string | undefined;

  /**
   * <p>Forces the image settings to turn off faster launching for your Windows AMI. This parameter overrides
   * 			any errors that are encountered while cleaning up resources in your account.</p>
   */
  Force?: boolean;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   * 			and provides an error response. If you have the required permissions, the error response is
   * 			<code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export interface DisableFastLaunchResult {
  /**
   * <p>The ID of the image for which faster-launching has been turned off.</p>
   */
  ImageId?: string;

  /**
   * <p>The pre-provisioning resource type that must be cleaned after turning off faster launching
   * 			for the Windows AMI. Supported values include: <code>snapshot</code>.</p>
   */
  ResourceType?: FastLaunchResourceType | string;

  /**
   * <p>Parameters that were used for faster launching for the Windows AMI before
   * 			faster launching was turned off. This informs the clean-up process.</p>
   */
  SnapshotConfiguration?: FastLaunchSnapshotConfigurationResponse;

  /**
   * <p>The launch template that was used to launch Windows instances from pre-provisioned snapshots.</p>
   */
  LaunchTemplate?: FastLaunchLaunchTemplateSpecificationResponse;

  /**
   * <p>The maximum number of parallel instances to launch for creating resources.</p>
   */
  MaxParallelLaunches?: number;

  /**
   * <p>The owner of the Windows AMI for which faster launching was turned off.</p>
   */
  OwnerId?: string;

  /**
   * <p>The current state of faster launching for the specified Windows AMI.</p>
   */
  State?: FastLaunchStateCode | string;

  /**
   * <p>The reason that the state changed for faster launching for the Windows AMI.</p>
   */
  StateTransitionReason?: string;

  /**
   * <p>The time that the state changed for faster launching for the Windows AMI.</p>
   */
  StateTransitionTime?: Date;
}

export interface DisableFastSnapshotRestoresRequest {
  /**
   * <p>One or more Availability Zones. For example, <code>us-east-2a</code>.</p>
   */
  AvailabilityZones: string[] | undefined;

  /**
   * <p>The IDs of one or more snapshots. For example, <code>snap-1234567890abcdef0</code>.</p>
   */
  SourceSnapshotIds: string[] | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * <p>Describes fast snapshot restores that were successfully disabled.</p>
 */
export interface DisableFastSnapshotRestoreSuccessItem {
  /**
   * <p>The ID of the snapshot.</p>
   */
  SnapshotId?: string;

  /**
   * <p>The Availability Zone.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>The state of fast snapshot restores for the snapshot.</p>
   */
  State?: FastSnapshotRestoreStateCode | string;

  /**
   * <p>The reason for the state transition. The possible values are as follows:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Client.UserInitiated</code> - The state successfully transitioned to <code>enabling</code> or
   *           <code>disabling</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Client.UserInitiated - Lifecycle state transition</code> - The state successfully transitioned
   *           to <code>optimizing</code>, <code>enabled</code>, or <code>disabled</code>.</p>
   *             </li>
   *          </ul>
   */
  StateTransitionReason?: string;

  /**
   * <p>The ID of the Amazon Web Services account that enabled fast snapshot restores on the snapshot.</p>
   */
  OwnerId?: string;

  /**
   * <p>The Amazon Web Services owner alias that enabled fast snapshot restores on the snapshot. This is intended for future use.</p>
   */
  OwnerAlias?: string;

  /**
   * <p>The time at which fast snapshot restores entered the <code>enabling</code> state.</p>
   */
  EnablingTime?: Date;

  /**
   * <p>The time at which fast snapshot restores entered the <code>optimizing</code> state.</p>
   */
  OptimizingTime?: Date;

  /**
   * <p>The time at which fast snapshot restores entered the <code>enabled</code> state.</p>
   */
  EnabledTime?: Date;

  /**
   * <p>The time at which fast snapshot restores entered the <code>disabling</code> state.</p>
   */
  DisablingTime?: Date;

  /**
   * <p>The time at which fast snapshot restores entered the <code>disabled</code> state.</p>
   */
  DisabledTime?: Date;
}

/**
 * <p>Describes an error that occurred when disabling fast snapshot restores.</p>
 */
export interface DisableFastSnapshotRestoreStateError {
  /**
   * <p>The error code.</p>
   */
  Code?: string;

  /**
   * <p>The error message.</p>
   */
  Message?: string;
}

/**
 * <p>Contains information about an error that occurred when disabling fast snapshot restores.</p>
 */
export interface DisableFastSnapshotRestoreStateErrorItem {
  /**
   * <p>The Availability Zone.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>The error.</p>
   */
  Error?: DisableFastSnapshotRestoreStateError;
}

/**
 * <p>Contains information about the errors that occurred when disabling fast snapshot restores.</p>
 */
export interface DisableFastSnapshotRestoreErrorItem {
  /**
   * <p>The ID of the snapshot.</p>
   */
  SnapshotId?: string;

  /**
   * <p>The errors.</p>
   */
  FastSnapshotRestoreStateErrors?: DisableFastSnapshotRestoreStateErrorItem[];
}

export interface DisableFastSnapshotRestoresResult {
  /**
   * <p>Information about the snapshots for which fast snapshot restores were successfully disabled.</p>
   */
  Successful?: DisableFastSnapshotRestoreSuccessItem[];

  /**
   * <p>Information about the snapshots for which fast snapshot restores could not be disabled.</p>
   */
  Unsuccessful?: DisableFastSnapshotRestoreErrorItem[];
}

export interface DisableImageDeprecationRequest {
  /**
   * <p>The ID of the AMI.</p>
   */
  ImageId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   * 			and provides an error response. If you have the required permissions, the error response is
   * 			<code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export interface DisableImageDeprecationResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
   */
  Return?: boolean;
}

export interface DisableIpamOrganizationAdminAccountRequest {
  /**
   * <p>A check for whether you have the required permissions for the action without actually making the request
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The Organizations member account ID that you want to disable as IPAM account.</p>
   */
  DelegatedAdminAccountId: string | undefined;
}

export interface DisableIpamOrganizationAdminAccountResult {
  /**
   * <p>The result of disabling the IPAM account.</p>
   */
  Success?: boolean;
}

export interface DisableSerialConsoleAccessRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export interface DisableSerialConsoleAccessResult {
  /**
   * <p>If <code>true</code>, access to the EC2 serial console of all instances is enabled for
   * 			your account. If <code>false</code>, access to the EC2 serial console of all instances
   * 			is disabled for your account.</p>
   */
  SerialConsoleAccessEnabled?: boolean;
}

export interface DisableTransitGatewayRouteTablePropagationRequest {
  /**
   * <p>The ID of the propagation route table.</p>
   */
  TransitGatewayRouteTableId: string | undefined;

  /**
   * <p>The ID of the attachment.</p>
   */
  TransitGatewayAttachmentId?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the route table announcement.</p>
   */
  TransitGatewayRouteTableAnnouncementId?: string;
}

export enum TransitGatewayPropagationState {
  disabled = "disabled",
  disabling = "disabling",
  enabled = "enabled",
  enabling = "enabling",
}

/**
 * <p>Describes route propagation.</p>
 */
export interface TransitGatewayPropagation {
  /**
   * <p>The ID of the attachment.</p>
   */
  TransitGatewayAttachmentId?: string;

  /**
   * <p>The ID of the resource.</p>
   */
  ResourceId?: string;

  /**
   * <p>The resource type. Note that the <code>tgw-peering</code> resource type has been deprecated.</p>
   */
  ResourceType?: TransitGatewayAttachmentResourceType | string;

  /**
   * <p>The ID of the transit gateway route table.</p>
   */
  TransitGatewayRouteTableId?: string;

  /**
   * <p>The state.</p>
   */
  State?: TransitGatewayPropagationState | string;

  /**
   * <p>The ID of the transit gateway route table announcement.</p>
   */
  TransitGatewayRouteTableAnnouncementId?: string;
}

export interface DisableTransitGatewayRouteTablePropagationResult {
  /**
   * <p>Information about route propagation.</p>
   */
  Propagation?: TransitGatewayPropagation;
}

/**
 * <p>Contains the parameters for DisableVgwRoutePropagation.</p>
 */
export interface DisableVgwRoutePropagationRequest {
  /**
   * <p>The ID of the virtual private gateway.</p>
   */
  GatewayId: string | undefined;

  /**
   * <p>The ID of the route table.</p>
   */
  RouteTableId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually
   *             making the request, and provides an error response. If you have the required
   *             permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is
   *                 <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export interface DisableVpcClassicLinkRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the VPC.</p>
   */
  VpcId: string | undefined;
}

export interface DisableVpcClassicLinkResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
   */
  Return?: boolean;
}

export interface DisableVpcClassicLinkDnsSupportRequest {
  /**
   * <p>The ID of the VPC.</p>
   */
  VpcId?: string;
}

export interface DisableVpcClassicLinkDnsSupportResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
   */
  Return?: boolean;
}

export interface DisassociateAddressRequest {
  /**
   * <p>[EC2-VPC] The association ID. Required for EC2-VPC.</p>
   */
  AssociationId?: string;

  /**
   * <p>[EC2-Classic] The Elastic IP address. Required for EC2-Classic.</p>
   */
  PublicIp?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export interface DisassociateClientVpnTargetNetworkRequest {
  /**
   * <p>The ID of the Client VPN endpoint from which to disassociate the target network.</p>
   */
  ClientVpnEndpointId: string | undefined;

  /**
   * <p>The ID of the target network association.</p>
   */
  AssociationId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export interface DisassociateClientVpnTargetNetworkResult {
  /**
   * <p>The ID of the target network association.</p>
   */
  AssociationId?: string;

  /**
   * <p>The current state of the target network association.</p>
   */
  Status?: AssociationStatus;
}

export interface DisassociateEnclaveCertificateIamRoleRequest {
  /**
   * <p>The ARN of the ACM certificate from which to disassociate the IAM role.</p>
   */
  CertificateArn?: string;

  /**
   * <p>The ARN of the IAM role to disassociate.</p>
   */
  RoleArn?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export interface DisassociateEnclaveCertificateIamRoleResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
   */
  Return?: boolean;
}

export interface DisassociateIamInstanceProfileRequest {
  /**
   * <p>The ID of the IAM instance profile association.</p>
   */
  AssociationId: string | undefined;
}

export interface DisassociateIamInstanceProfileResult {
  /**
   * <p>Information about the IAM instance profile association.</p>
   */
  IamInstanceProfileAssociation?: IamInstanceProfileAssociation;
}

/**
 * <p>The targets to disassociate from the specified event window.</p>
 */
export interface InstanceEventWindowDisassociationRequest {
  /**
   * <p>The IDs of the instances to disassociate from the event window.</p>
   */
  InstanceIds?: string[];

  /**
   * <p>The instance tags to disassociate from the event window. Any instances associated with
   *          the tags will be disassociated from the event window.</p>
   */
  InstanceTags?: Tag[];

  /**
   * <p>The IDs of the Dedicated Hosts to disassociate from the event window.</p>
   */
  DedicatedHostIds?: string[];
}

export interface DisassociateInstanceEventWindowRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the event window.</p>
   */
  InstanceEventWindowId: string | undefined;

  /**
   * <p>One or more targets to disassociate from the specified event window.</p>
   */
  AssociationTarget: InstanceEventWindowDisassociationRequest | undefined;
}

export interface DisassociateInstanceEventWindowResult {
  /**
   * <p>Information about the event window.</p>
   */
  InstanceEventWindow?: InstanceEventWindow;
}

export interface DisassociateRouteTableRequest {
  /**
   * <p>The association ID representing the current association between the route table and subnet or gateway.</p>
   */
  AssociationId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export interface DisassociateSubnetCidrBlockRequest {
  /**
   * <p>The association ID for the CIDR block.</p>
   */
  AssociationId: string | undefined;
}

export interface DisassociateSubnetCidrBlockResult {
  /**
   * <p>Information about the IPv6 CIDR block association.</p>
   */
  Ipv6CidrBlockAssociation?: SubnetIpv6CidrBlockAssociation;

  /**
   * <p>The ID of the subnet.</p>
   */
  SubnetId?: string;
}

export interface DisassociateTransitGatewayMulticastDomainRequest {
  /**
   * <p>The ID of the transit gateway multicast domain.</p>
   */
  TransitGatewayMulticastDomainId?: string;

  /**
   * <p>The ID of the attachment.</p>
   */
  TransitGatewayAttachmentId?: string;

  /**
   * <p>The IDs of the subnets;</p>
   */
  SubnetIds?: string[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export interface DisassociateTransitGatewayMulticastDomainResult {
  /**
   * <p>Information about the association.</p>
   */
  Associations?: TransitGatewayMulticastDomainAssociations;
}

export interface DisassociateTransitGatewayPolicyTableRequest {
  /**
   * <p>The ID of the disassociated policy table.</p>
   */
  TransitGatewayPolicyTableId: string | undefined;

  /**
   * <p>The ID of the transit gateway attachment to disassociate from the policy table.</p>
   */
  TransitGatewayAttachmentId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export interface DisassociateTransitGatewayPolicyTableResult {
  /**
   * <p>Returns details about the transit gateway policy table disassociation.</p>
   */
  Association?: TransitGatewayPolicyTableAssociation;
}

export interface DisassociateTransitGatewayRouteTableRequest {
  /**
   * <p>The ID of the transit gateway route table.</p>
   */
  TransitGatewayRouteTableId: string | undefined;

  /**
   * <p>The ID of the attachment.</p>
   */
  TransitGatewayAttachmentId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export interface DisassociateTransitGatewayRouteTableResult {
  /**
   * <p>Information about the association.</p>
   */
  Association?: TransitGatewayAssociation;
}

export interface DisassociateTrunkInterfaceRequest {
  /**
   * <p>The ID of the association</p>
   */
  AssociationId: string | undefined;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Run_Instance_Idempotency.html">How to Ensure
   *                 Idempotency</a>.</p>
   */
  ClientToken?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export interface DisassociateTrunkInterfaceResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
   */
  Return?: boolean;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Run_Instance_Idempotency.html">How to Ensure
   *                 Idempotency</a>.</p>
   */
  ClientToken?: string;
}

export interface DisassociateVpcCidrBlockRequest {
  /**
   * <p>The association ID for the CIDR block.</p>
   */
  AssociationId: string | undefined;
}

export interface DisassociateVpcCidrBlockResult {
  /**
   * <p>Information about the IPv6 CIDR block association.</p>
   */
  Ipv6CidrBlockAssociation?: VpcIpv6CidrBlockAssociation;

  /**
   * <p>Information about the IPv4 CIDR block association.</p>
   */
  CidrBlockAssociation?: VpcCidrBlockAssociation;

  /**
   * <p>The ID of the VPC.</p>
   */
  VpcId?: string;
}

export interface EnableEbsEncryptionByDefaultRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export interface EnableEbsEncryptionByDefaultResult {
  /**
   * <p>The updated status of encryption by default.</p>
   */
  EbsEncryptionByDefault?: boolean;
}

/**
 * <p>Request to create a launch template for a fast-launch enabled Windows AMI.</p>
 * 		       <note>
 * 			         <p>Note - You can specify either the <code>LaunchTemplateName</code> or the
 * 				<code>LaunchTemplateId</code>, but not both.</p>
 * 		       </note>
 */
export interface FastLaunchLaunchTemplateSpecificationRequest {
  /**
   * <p>The ID of the launch template to use for faster launching for a Windows AMI.</p>
   */
  LaunchTemplateId?: string;

  /**
   * <p>The name of the launch template to use for faster launching for a Windows AMI.</p>
   */
  LaunchTemplateName?: string;

  /**
   * <p>The version of the launch template to use for faster launching for a Windows AMI.</p>
   */
  Version: string | undefined;
}

/**
 * <p>Configuration settings for creating and managing pre-provisioned snapshots for a fast-launch enabled Windows AMI.</p>
 */
export interface FastLaunchSnapshotConfigurationRequest {
  /**
   * <p>The number of pre-provisioned snapshots to keep on hand for a fast-launch enabled Windows AMI.</p>
   */
  TargetResourceCount?: number;
}

export interface EnableFastLaunchRequest {
  /**
   * <p>The ID of the image for which you’re enabling faster launching.</p>
   */
  ImageId: string | undefined;

  /**
   * <p>The type of resource to use for pre-provisioning the Windows AMI for faster launching.
   * 			Supported values include: <code>snapshot</code>, which is the default value.</p>
   */
  ResourceType?: string;

  /**
   * <p>Configuration settings for creating and managing the snapshots that are used for
   * 			pre-provisioning the Windows AMI for faster launching. The associated <code>ResourceType</code>
   * 			must be <code>snapshot</code>.</p>
   */
  SnapshotConfiguration?: FastLaunchSnapshotConfigurationRequest;

  /**
   * <p>The launch template to use when launching Windows instances from pre-provisioned
   * 			snapshots. Launch template parameters can include either the name or ID of the launch
   * 			template, but not both.</p>
   */
  LaunchTemplate?: FastLaunchLaunchTemplateSpecificationRequest;

  /**
   * <p>The maximum number of parallel instances to launch for creating resources. Value must be <code>6</code> or greater. </p>
   */
  MaxParallelLaunches?: number;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   * 			and provides an error response. If you have the required permissions, the error response is
   * 			<code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export interface EnableFastLaunchResult {
  /**
   * <p>The image ID that identifies the Windows AMI for which faster launching was enabled.</p>
   */
  ImageId?: string;

  /**
   * <p>The type of resource that was defined for pre-provisioning the Windows AMI for faster launching.</p>
   */
  ResourceType?: FastLaunchResourceType | string;

  /**
   * <p>The configuration settings that were defined for creating and managing the pre-provisioned snapshots
   * 			for faster launching of the Windows AMI. This property is returned when the associated
   * 			<code>resourceType</code> is <code>snapshot</code>.</p>
   */
  SnapshotConfiguration?: FastLaunchSnapshotConfigurationResponse;

  /**
   * <p>The launch template that is used when launching Windows instances from pre-provisioned snapshots.</p>
   */
  LaunchTemplate?: FastLaunchLaunchTemplateSpecificationResponse;

  /**
   * <p>The maximum number of parallel instances to launch for creating resources.</p>
   */
  MaxParallelLaunches?: number;

  /**
   * <p>The owner ID for the Windows AMI for which faster launching was enabled.</p>
   */
  OwnerId?: string;

  /**
   * <p>The current state of faster launching for the specified Windows AMI.</p>
   */
  State?: FastLaunchStateCode | string;

  /**
   * <p>The reason that the state changed for faster launching for the Windows AMI.</p>
   */
  StateTransitionReason?: string;

  /**
   * <p>The time that the state changed for faster launching for the Windows AMI.</p>
   */
  StateTransitionTime?: Date;
}

export interface EnableFastSnapshotRestoresRequest {
  /**
   * <p>One or more Availability Zones. For example, <code>us-east-2a</code>.</p>
   */
  AvailabilityZones: string[] | undefined;

  /**
   * <p>The IDs of one or more snapshots. For example, <code>snap-1234567890abcdef0</code>. You can specify
   *       a snapshot that was shared with you from another Amazon Web Services account.</p>
   */
  SourceSnapshotIds: string[] | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * <p>Describes fast snapshot restores that were successfully enabled.</p>
 */
export interface EnableFastSnapshotRestoreSuccessItem {
  /**
   * <p>The ID of the snapshot.</p>
   */
  SnapshotId?: string;

  /**
   * <p>The Availability Zone.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>The state of fast snapshot restores.</p>
   */
  State?: FastSnapshotRestoreStateCode | string;

  /**
   * <p>The reason for the state transition. The possible values are as follows:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Client.UserInitiated</code> - The state successfully transitioned to <code>enabling</code> or
   *           <code>disabling</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Client.UserInitiated - Lifecycle state transition</code> - The state successfully transitioned
   *           to <code>optimizing</code>, <code>enabled</code>, or <code>disabled</code>.</p>
   *             </li>
   *          </ul>
   */
  StateTransitionReason?: string;

  /**
   * <p>The ID of the Amazon Web Services account that enabled fast snapshot restores on the snapshot.</p>
   */
  OwnerId?: string;

  /**
   * <p>The Amazon Web Services owner alias that enabled fast snapshot restores on the snapshot. This is intended for future use.</p>
   */
  OwnerAlias?: string;

  /**
   * <p>The time at which fast snapshot restores entered the <code>enabling</code> state.</p>
   */
  EnablingTime?: Date;

  /**
   * <p>The time at which fast snapshot restores entered the <code>optimizing</code> state.</p>
   */
  OptimizingTime?: Date;

  /**
   * <p>The time at which fast snapshot restores entered the <code>enabled</code> state.</p>
   */
  EnabledTime?: Date;

  /**
   * <p>The time at which fast snapshot restores entered the <code>disabling</code> state.</p>
   */
  DisablingTime?: Date;

  /**
   * <p>The time at which fast snapshot restores entered the <code>disabled</code> state.</p>
   */
  DisabledTime?: Date;
}

/**
 * @internal
 */
export const LocalGatewayVirtualInterfaceGroupFilterSensitiveLog = (obj: LocalGatewayVirtualInterfaceGroup): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeLocalGatewayVirtualInterfaceGroupsResultFilterSensitiveLog = (
  obj: DescribeLocalGatewayVirtualInterfaceGroupsResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeLocalGatewayVirtualInterfacesRequestFilterSensitiveLog = (
  obj: DescribeLocalGatewayVirtualInterfacesRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LocalGatewayVirtualInterfaceFilterSensitiveLog = (obj: LocalGatewayVirtualInterface): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeLocalGatewayVirtualInterfacesResultFilterSensitiveLog = (
  obj: DescribeLocalGatewayVirtualInterfacesResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeManagedPrefixListsRequestFilterSensitiveLog = (obj: DescribeManagedPrefixListsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeManagedPrefixListsResultFilterSensitiveLog = (obj: DescribeManagedPrefixListsResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeMovingAddressesRequestFilterSensitiveLog = (obj: DescribeMovingAddressesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MovingAddressStatusFilterSensitiveLog = (obj: MovingAddressStatus): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeMovingAddressesResultFilterSensitiveLog = (obj: DescribeMovingAddressesResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeNatGatewaysRequestFilterSensitiveLog = (obj: DescribeNatGatewaysRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeNatGatewaysResultFilterSensitiveLog = (obj: DescribeNatGatewaysResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeNetworkAclsRequestFilterSensitiveLog = (obj: DescribeNetworkAclsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeNetworkAclsResultFilterSensitiveLog = (obj: DescribeNetworkAclsResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeNetworkInsightsAccessScopeAnalysesRequestFilterSensitiveLog = (
  obj: DescribeNetworkInsightsAccessScopeAnalysesRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NetworkInsightsAccessScopeAnalysisFilterSensitiveLog = (obj: NetworkInsightsAccessScopeAnalysis): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeNetworkInsightsAccessScopeAnalysesResultFilterSensitiveLog = (
  obj: DescribeNetworkInsightsAccessScopeAnalysesResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeNetworkInsightsAccessScopesRequestFilterSensitiveLog = (
  obj: DescribeNetworkInsightsAccessScopesRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeNetworkInsightsAccessScopesResultFilterSensitiveLog = (
  obj: DescribeNetworkInsightsAccessScopesResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeNetworkInsightsAnalysesRequestFilterSensitiveLog = (
  obj: DescribeNetworkInsightsAnalysesRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AnalysisLoadBalancerListenerFilterSensitiveLog = (obj: AnalysisLoadBalancerListener): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AnalysisLoadBalancerTargetFilterSensitiveLog = (obj: AnalysisLoadBalancerTarget): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ExplanationFilterSensitiveLog = (obj: Explanation): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NetworkInsightsAnalysisFilterSensitiveLog = (obj: NetworkInsightsAnalysis): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeNetworkInsightsAnalysesResultFilterSensitiveLog = (
  obj: DescribeNetworkInsightsAnalysesResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeNetworkInsightsPathsRequestFilterSensitiveLog = (
  obj: DescribeNetworkInsightsPathsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeNetworkInsightsPathsResultFilterSensitiveLog = (obj: DescribeNetworkInsightsPathsResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeNetworkInterfaceAttributeRequestFilterSensitiveLog = (
  obj: DescribeNetworkInterfaceAttributeRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeNetworkInterfaceAttributeResultFilterSensitiveLog = (
  obj: DescribeNetworkInterfaceAttributeResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeNetworkInterfacePermissionsRequestFilterSensitiveLog = (
  obj: DescribeNetworkInterfacePermissionsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeNetworkInterfacePermissionsResultFilterSensitiveLog = (
  obj: DescribeNetworkInterfacePermissionsResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeNetworkInterfacesRequestFilterSensitiveLog = (obj: DescribeNetworkInterfacesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeNetworkInterfacesResultFilterSensitiveLog = (obj: DescribeNetworkInterfacesResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribePlacementGroupsRequestFilterSensitiveLog = (obj: DescribePlacementGroupsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribePlacementGroupsResultFilterSensitiveLog = (obj: DescribePlacementGroupsResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribePrefixListsRequestFilterSensitiveLog = (obj: DescribePrefixListsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PrefixListFilterSensitiveLog = (obj: PrefixList): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribePrefixListsResultFilterSensitiveLog = (obj: DescribePrefixListsResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribePrincipalIdFormatRequestFilterSensitiveLog = (obj: DescribePrincipalIdFormatRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PrincipalIdFormatFilterSensitiveLog = (obj: PrincipalIdFormat): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribePrincipalIdFormatResultFilterSensitiveLog = (obj: DescribePrincipalIdFormatResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribePublicIpv4PoolsRequestFilterSensitiveLog = (obj: DescribePublicIpv4PoolsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PublicIpv4PoolRangeFilterSensitiveLog = (obj: PublicIpv4PoolRange): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PublicIpv4PoolFilterSensitiveLog = (obj: PublicIpv4Pool): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribePublicIpv4PoolsResultFilterSensitiveLog = (obj: DescribePublicIpv4PoolsResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeRegionsRequestFilterSensitiveLog = (obj: DescribeRegionsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RegionFilterSensitiveLog = (obj: Region): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeRegionsResultFilterSensitiveLog = (obj: DescribeRegionsResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeReplaceRootVolumeTasksRequestFilterSensitiveLog = (
  obj: DescribeReplaceRootVolumeTasksRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeReplaceRootVolumeTasksResultFilterSensitiveLog = (
  obj: DescribeReplaceRootVolumeTasksResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeReservedInstancesRequestFilterSensitiveLog = (obj: DescribeReservedInstancesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RecurringChargeFilterSensitiveLog = (obj: RecurringCharge): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ReservedInstancesFilterSensitiveLog = (obj: ReservedInstances): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeReservedInstancesResultFilterSensitiveLog = (obj: DescribeReservedInstancesResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeReservedInstancesListingsRequestFilterSensitiveLog = (
  obj: DescribeReservedInstancesListingsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeReservedInstancesListingsResultFilterSensitiveLog = (
  obj: DescribeReservedInstancesListingsResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeReservedInstancesModificationsRequestFilterSensitiveLog = (
  obj: DescribeReservedInstancesModificationsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ReservedInstancesConfigurationFilterSensitiveLog = (obj: ReservedInstancesConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ReservedInstancesModificationResultFilterSensitiveLog = (
  obj: ReservedInstancesModificationResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ReservedInstancesIdFilterSensitiveLog = (obj: ReservedInstancesId): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ReservedInstancesModificationFilterSensitiveLog = (obj: ReservedInstancesModification): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeReservedInstancesModificationsResultFilterSensitiveLog = (
  obj: DescribeReservedInstancesModificationsResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeReservedInstancesOfferingsRequestFilterSensitiveLog = (
  obj: DescribeReservedInstancesOfferingsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PricingDetailFilterSensitiveLog = (obj: PricingDetail): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ReservedInstancesOfferingFilterSensitiveLog = (obj: ReservedInstancesOffering): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeReservedInstancesOfferingsResultFilterSensitiveLog = (
  obj: DescribeReservedInstancesOfferingsResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeRouteTablesRequestFilterSensitiveLog = (obj: DescribeRouteTablesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeRouteTablesResultFilterSensitiveLog = (obj: DescribeRouteTablesResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SlotDateTimeRangeRequestFilterSensitiveLog = (obj: SlotDateTimeRangeRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ScheduledInstanceRecurrenceRequestFilterSensitiveLog = (obj: ScheduledInstanceRecurrenceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeScheduledInstanceAvailabilityRequestFilterSensitiveLog = (
  obj: DescribeScheduledInstanceAvailabilityRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ScheduledInstanceRecurrenceFilterSensitiveLog = (obj: ScheduledInstanceRecurrence): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ScheduledInstanceAvailabilityFilterSensitiveLog = (obj: ScheduledInstanceAvailability): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeScheduledInstanceAvailabilityResultFilterSensitiveLog = (
  obj: DescribeScheduledInstanceAvailabilityResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SlotStartTimeRangeRequestFilterSensitiveLog = (obj: SlotStartTimeRangeRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeScheduledInstancesRequestFilterSensitiveLog = (obj: DescribeScheduledInstancesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ScheduledInstanceFilterSensitiveLog = (obj: ScheduledInstance): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeScheduledInstancesResultFilterSensitiveLog = (obj: DescribeScheduledInstancesResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeSecurityGroupReferencesRequestFilterSensitiveLog = (
  obj: DescribeSecurityGroupReferencesRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SecurityGroupReferenceFilterSensitiveLog = (obj: SecurityGroupReference): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeSecurityGroupReferencesResultFilterSensitiveLog = (
  obj: DescribeSecurityGroupReferencesResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeSecurityGroupRulesRequestFilterSensitiveLog = (obj: DescribeSecurityGroupRulesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeSecurityGroupRulesResultFilterSensitiveLog = (obj: DescribeSecurityGroupRulesResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeSecurityGroupsRequestFilterSensitiveLog = (obj: DescribeSecurityGroupsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SecurityGroupFilterSensitiveLog = (obj: SecurityGroup): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeSecurityGroupsResultFilterSensitiveLog = (obj: DescribeSecurityGroupsResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeSnapshotAttributeRequestFilterSensitiveLog = (obj: DescribeSnapshotAttributeRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateVolumePermissionFilterSensitiveLog = (obj: CreateVolumePermission): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeSnapshotAttributeResultFilterSensitiveLog = (obj: DescribeSnapshotAttributeResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeSnapshotsRequestFilterSensitiveLog = (obj: DescribeSnapshotsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeSnapshotsResultFilterSensitiveLog = (obj: DescribeSnapshotsResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeSnapshotTierStatusRequestFilterSensitiveLog = (obj: DescribeSnapshotTierStatusRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SnapshotTierStatusFilterSensitiveLog = (obj: SnapshotTierStatus): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeSnapshotTierStatusResultFilterSensitiveLog = (obj: DescribeSnapshotTierStatusResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeSpotDatafeedSubscriptionRequestFilterSensitiveLog = (
  obj: DescribeSpotDatafeedSubscriptionRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeSpotDatafeedSubscriptionResultFilterSensitiveLog = (
  obj: DescribeSpotDatafeedSubscriptionResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeSpotFleetInstancesRequestFilterSensitiveLog = (obj: DescribeSpotFleetInstancesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeSpotFleetInstancesResponseFilterSensitiveLog = (obj: DescribeSpotFleetInstancesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeSpotFleetRequestHistoryRequestFilterSensitiveLog = (
  obj: DescribeSpotFleetRequestHistoryRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const HistoryRecordFilterSensitiveLog = (obj: HistoryRecord): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeSpotFleetRequestHistoryResponseFilterSensitiveLog = (
  obj: DescribeSpotFleetRequestHistoryResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeSpotFleetRequestsRequestFilterSensitiveLog = (obj: DescribeSpotFleetRequestsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SpotFleetMonitoringFilterSensitiveLog = (obj: SpotFleetMonitoring): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InstanceNetworkInterfaceSpecificationFilterSensitiveLog = (
  obj: InstanceNetworkInterfaceSpecification
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SpotPlacementFilterSensitiveLog = (obj: SpotPlacement): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SpotFleetTagSpecificationFilterSensitiveLog = (obj: SpotFleetTagSpecification): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SpotFleetLaunchSpecificationFilterSensitiveLog = (obj: SpotFleetLaunchSpecification): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LaunchTemplateOverridesFilterSensitiveLog = (obj: LaunchTemplateOverrides): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LaunchTemplateConfigFilterSensitiveLog = (obj: LaunchTemplateConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ClassicLoadBalancerFilterSensitiveLog = (obj: ClassicLoadBalancer): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ClassicLoadBalancersConfigFilterSensitiveLog = (obj: ClassicLoadBalancersConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TargetGroupFilterSensitiveLog = (obj: TargetGroup): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TargetGroupsConfigFilterSensitiveLog = (obj: TargetGroupsConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LoadBalancersConfigFilterSensitiveLog = (obj: LoadBalancersConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SpotCapacityRebalanceFilterSensitiveLog = (obj: SpotCapacityRebalance): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SpotMaintenanceStrategiesFilterSensitiveLog = (obj: SpotMaintenanceStrategies): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SpotFleetRequestConfigDataFilterSensitiveLog = (obj: SpotFleetRequestConfigData): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SpotFleetRequestConfigFilterSensitiveLog = (obj: SpotFleetRequestConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeSpotFleetRequestsResponseFilterSensitiveLog = (obj: DescribeSpotFleetRequestsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeSpotInstanceRequestsRequestFilterSensitiveLog = (
  obj: DescribeSpotInstanceRequestsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RunInstancesMonitoringEnabledFilterSensitiveLog = (obj: RunInstancesMonitoringEnabled): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LaunchSpecificationFilterSensitiveLog = (obj: LaunchSpecification): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SpotInstanceStatusFilterSensitiveLog = (obj: SpotInstanceStatus): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SpotInstanceRequestFilterSensitiveLog = (obj: SpotInstanceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeSpotInstanceRequestsResultFilterSensitiveLog = (obj: DescribeSpotInstanceRequestsResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeSpotPriceHistoryRequestFilterSensitiveLog = (obj: DescribeSpotPriceHistoryRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SpotPriceFilterSensitiveLog = (obj: SpotPrice): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeSpotPriceHistoryResultFilterSensitiveLog = (obj: DescribeSpotPriceHistoryResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeStaleSecurityGroupsRequestFilterSensitiveLog = (obj: DescribeStaleSecurityGroupsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StaleIpPermissionFilterSensitiveLog = (obj: StaleIpPermission): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StaleSecurityGroupFilterSensitiveLog = (obj: StaleSecurityGroup): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeStaleSecurityGroupsResultFilterSensitiveLog = (obj: DescribeStaleSecurityGroupsResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeStoreImageTasksRequestFilterSensitiveLog = (obj: DescribeStoreImageTasksRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StoreImageTaskResultFilterSensitiveLog = (obj: StoreImageTaskResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeStoreImageTasksResultFilterSensitiveLog = (obj: DescribeStoreImageTasksResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeSubnetsRequestFilterSensitiveLog = (obj: DescribeSubnetsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeSubnetsResultFilterSensitiveLog = (obj: DescribeSubnetsResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeTagsRequestFilterSensitiveLog = (obj: DescribeTagsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagDescriptionFilterSensitiveLog = (obj: TagDescription): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeTagsResultFilterSensitiveLog = (obj: DescribeTagsResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeTrafficMirrorFiltersRequestFilterSensitiveLog = (
  obj: DescribeTrafficMirrorFiltersRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeTrafficMirrorFiltersResultFilterSensitiveLog = (obj: DescribeTrafficMirrorFiltersResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeTrafficMirrorSessionsRequestFilterSensitiveLog = (
  obj: DescribeTrafficMirrorSessionsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeTrafficMirrorSessionsResultFilterSensitiveLog = (
  obj: DescribeTrafficMirrorSessionsResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeTrafficMirrorTargetsRequestFilterSensitiveLog = (
  obj: DescribeTrafficMirrorTargetsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeTrafficMirrorTargetsResultFilterSensitiveLog = (obj: DescribeTrafficMirrorTargetsResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeTransitGatewayAttachmentsRequestFilterSensitiveLog = (
  obj: DescribeTransitGatewayAttachmentsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TransitGatewayAttachmentAssociationFilterSensitiveLog = (
  obj: TransitGatewayAttachmentAssociation
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TransitGatewayAttachmentFilterSensitiveLog = (obj: TransitGatewayAttachment): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeTransitGatewayAttachmentsResultFilterSensitiveLog = (
  obj: DescribeTransitGatewayAttachmentsResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeTransitGatewayConnectPeersRequestFilterSensitiveLog = (
  obj: DescribeTransitGatewayConnectPeersRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeTransitGatewayConnectPeersResultFilterSensitiveLog = (
  obj: DescribeTransitGatewayConnectPeersResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeTransitGatewayConnectsRequestFilterSensitiveLog = (
  obj: DescribeTransitGatewayConnectsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeTransitGatewayConnectsResultFilterSensitiveLog = (
  obj: DescribeTransitGatewayConnectsResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeTransitGatewayMulticastDomainsRequestFilterSensitiveLog = (
  obj: DescribeTransitGatewayMulticastDomainsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeTransitGatewayMulticastDomainsResultFilterSensitiveLog = (
  obj: DescribeTransitGatewayMulticastDomainsResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeTransitGatewayPeeringAttachmentsRequestFilterSensitiveLog = (
  obj: DescribeTransitGatewayPeeringAttachmentsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeTransitGatewayPeeringAttachmentsResultFilterSensitiveLog = (
  obj: DescribeTransitGatewayPeeringAttachmentsResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeTransitGatewayPolicyTablesRequestFilterSensitiveLog = (
  obj: DescribeTransitGatewayPolicyTablesRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeTransitGatewayPolicyTablesResultFilterSensitiveLog = (
  obj: DescribeTransitGatewayPolicyTablesResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeTransitGatewayRouteTableAnnouncementsRequestFilterSensitiveLog = (
  obj: DescribeTransitGatewayRouteTableAnnouncementsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeTransitGatewayRouteTableAnnouncementsResultFilterSensitiveLog = (
  obj: DescribeTransitGatewayRouteTableAnnouncementsResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeTransitGatewayRouteTablesRequestFilterSensitiveLog = (
  obj: DescribeTransitGatewayRouteTablesRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeTransitGatewayRouteTablesResultFilterSensitiveLog = (
  obj: DescribeTransitGatewayRouteTablesResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeTransitGatewaysRequestFilterSensitiveLog = (obj: DescribeTransitGatewaysRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeTransitGatewaysResultFilterSensitiveLog = (obj: DescribeTransitGatewaysResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeTransitGatewayVpcAttachmentsRequestFilterSensitiveLog = (
  obj: DescribeTransitGatewayVpcAttachmentsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeTransitGatewayVpcAttachmentsResultFilterSensitiveLog = (
  obj: DescribeTransitGatewayVpcAttachmentsResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeTrunkInterfaceAssociationsRequestFilterSensitiveLog = (
  obj: DescribeTrunkInterfaceAssociationsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeTrunkInterfaceAssociationsResultFilterSensitiveLog = (
  obj: DescribeTrunkInterfaceAssociationsResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeVolumeAttributeRequestFilterSensitiveLog = (obj: DescribeVolumeAttributeRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeVolumeAttributeResultFilterSensitiveLog = (obj: DescribeVolumeAttributeResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeVolumesRequestFilterSensitiveLog = (obj: DescribeVolumesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeVolumesResultFilterSensitiveLog = (obj: DescribeVolumesResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeVolumesModificationsRequestFilterSensitiveLog = (
  obj: DescribeVolumesModificationsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const VolumeModificationFilterSensitiveLog = (obj: VolumeModification): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeVolumesModificationsResultFilterSensitiveLog = (obj: DescribeVolumesModificationsResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeVolumeStatusRequestFilterSensitiveLog = (obj: DescribeVolumeStatusRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const VolumeStatusActionFilterSensitiveLog = (obj: VolumeStatusAction): any => ({
  ...obj,
});

/**
 * @internal
 */
export const VolumeStatusAttachmentStatusFilterSensitiveLog = (obj: VolumeStatusAttachmentStatus): any => ({
  ...obj,
});

/**
 * @internal
 */
export const VolumeStatusEventFilterSensitiveLog = (obj: VolumeStatusEvent): any => ({
  ...obj,
});

/**
 * @internal
 */
export const VolumeStatusDetailsFilterSensitiveLog = (obj: VolumeStatusDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const VolumeStatusInfoFilterSensitiveLog = (obj: VolumeStatusInfo): any => ({
  ...obj,
});

/**
 * @internal
 */
export const VolumeStatusItemFilterSensitiveLog = (obj: VolumeStatusItem): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeVolumeStatusResultFilterSensitiveLog = (obj: DescribeVolumeStatusResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeVpcAttributeRequestFilterSensitiveLog = (obj: DescribeVpcAttributeRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeVpcAttributeResultFilterSensitiveLog = (obj: DescribeVpcAttributeResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeVpcClassicLinkRequestFilterSensitiveLog = (obj: DescribeVpcClassicLinkRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const VpcClassicLinkFilterSensitiveLog = (obj: VpcClassicLink): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeVpcClassicLinkResultFilterSensitiveLog = (obj: DescribeVpcClassicLinkResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeVpcClassicLinkDnsSupportRequestFilterSensitiveLog = (
  obj: DescribeVpcClassicLinkDnsSupportRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ClassicLinkDnsSupportFilterSensitiveLog = (obj: ClassicLinkDnsSupport): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeVpcClassicLinkDnsSupportResultFilterSensitiveLog = (
  obj: DescribeVpcClassicLinkDnsSupportResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeVpcEndpointConnectionNotificationsRequestFilterSensitiveLog = (
  obj: DescribeVpcEndpointConnectionNotificationsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeVpcEndpointConnectionNotificationsResultFilterSensitiveLog = (
  obj: DescribeVpcEndpointConnectionNotificationsResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeVpcEndpointConnectionsRequestFilterSensitiveLog = (
  obj: DescribeVpcEndpointConnectionsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const VpcEndpointConnectionFilterSensitiveLog = (obj: VpcEndpointConnection): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeVpcEndpointConnectionsResultFilterSensitiveLog = (
  obj: DescribeVpcEndpointConnectionsResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeVpcEndpointsRequestFilterSensitiveLog = (obj: DescribeVpcEndpointsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeVpcEndpointsResultFilterSensitiveLog = (obj: DescribeVpcEndpointsResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeVpcEndpointServiceConfigurationsRequestFilterSensitiveLog = (
  obj: DescribeVpcEndpointServiceConfigurationsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeVpcEndpointServiceConfigurationsResultFilterSensitiveLog = (
  obj: DescribeVpcEndpointServiceConfigurationsResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeVpcEndpointServicePermissionsRequestFilterSensitiveLog = (
  obj: DescribeVpcEndpointServicePermissionsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeVpcEndpointServicePermissionsResultFilterSensitiveLog = (
  obj: DescribeVpcEndpointServicePermissionsResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeVpcEndpointServicesRequestFilterSensitiveLog = (obj: DescribeVpcEndpointServicesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PrivateDnsDetailsFilterSensitiveLog = (obj: PrivateDnsDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ServiceDetailFilterSensitiveLog = (obj: ServiceDetail): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeVpcEndpointServicesResultFilterSensitiveLog = (obj: DescribeVpcEndpointServicesResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeVpcPeeringConnectionsRequestFilterSensitiveLog = (
  obj: DescribeVpcPeeringConnectionsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeVpcPeeringConnectionsResultFilterSensitiveLog = (
  obj: DescribeVpcPeeringConnectionsResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeVpcsRequestFilterSensitiveLog = (obj: DescribeVpcsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeVpcsResultFilterSensitiveLog = (obj: DescribeVpcsResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeVpnConnectionsRequestFilterSensitiveLog = (obj: DescribeVpnConnectionsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeVpnConnectionsResultFilterSensitiveLog = (obj: DescribeVpnConnectionsResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeVpnGatewaysRequestFilterSensitiveLog = (obj: DescribeVpnGatewaysRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeVpnGatewaysResultFilterSensitiveLog = (obj: DescribeVpnGatewaysResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DetachClassicLinkVpcRequestFilterSensitiveLog = (obj: DetachClassicLinkVpcRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DetachClassicLinkVpcResultFilterSensitiveLog = (obj: DetachClassicLinkVpcResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DetachInternetGatewayRequestFilterSensitiveLog = (obj: DetachInternetGatewayRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DetachNetworkInterfaceRequestFilterSensitiveLog = (obj: DetachNetworkInterfaceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DetachVolumeRequestFilterSensitiveLog = (obj: DetachVolumeRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DetachVpnGatewayRequestFilterSensitiveLog = (obj: DetachVpnGatewayRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisableEbsEncryptionByDefaultRequestFilterSensitiveLog = (
  obj: DisableEbsEncryptionByDefaultRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisableEbsEncryptionByDefaultResultFilterSensitiveLog = (
  obj: DisableEbsEncryptionByDefaultResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisableFastLaunchRequestFilterSensitiveLog = (obj: DisableFastLaunchRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisableFastLaunchResultFilterSensitiveLog = (obj: DisableFastLaunchResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisableFastSnapshotRestoresRequestFilterSensitiveLog = (obj: DisableFastSnapshotRestoresRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisableFastSnapshotRestoreSuccessItemFilterSensitiveLog = (
  obj: DisableFastSnapshotRestoreSuccessItem
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisableFastSnapshotRestoreStateErrorFilterSensitiveLog = (
  obj: DisableFastSnapshotRestoreStateError
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisableFastSnapshotRestoreStateErrorItemFilterSensitiveLog = (
  obj: DisableFastSnapshotRestoreStateErrorItem
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisableFastSnapshotRestoreErrorItemFilterSensitiveLog = (
  obj: DisableFastSnapshotRestoreErrorItem
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisableFastSnapshotRestoresResultFilterSensitiveLog = (obj: DisableFastSnapshotRestoresResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisableImageDeprecationRequestFilterSensitiveLog = (obj: DisableImageDeprecationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisableImageDeprecationResultFilterSensitiveLog = (obj: DisableImageDeprecationResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisableIpamOrganizationAdminAccountRequestFilterSensitiveLog = (
  obj: DisableIpamOrganizationAdminAccountRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisableIpamOrganizationAdminAccountResultFilterSensitiveLog = (
  obj: DisableIpamOrganizationAdminAccountResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisableSerialConsoleAccessRequestFilterSensitiveLog = (obj: DisableSerialConsoleAccessRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisableSerialConsoleAccessResultFilterSensitiveLog = (obj: DisableSerialConsoleAccessResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisableTransitGatewayRouteTablePropagationRequestFilterSensitiveLog = (
  obj: DisableTransitGatewayRouteTablePropagationRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TransitGatewayPropagationFilterSensitiveLog = (obj: TransitGatewayPropagation): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisableTransitGatewayRouteTablePropagationResultFilterSensitiveLog = (
  obj: DisableTransitGatewayRouteTablePropagationResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisableVgwRoutePropagationRequestFilterSensitiveLog = (obj: DisableVgwRoutePropagationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisableVpcClassicLinkRequestFilterSensitiveLog = (obj: DisableVpcClassicLinkRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisableVpcClassicLinkResultFilterSensitiveLog = (obj: DisableVpcClassicLinkResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisableVpcClassicLinkDnsSupportRequestFilterSensitiveLog = (
  obj: DisableVpcClassicLinkDnsSupportRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisableVpcClassicLinkDnsSupportResultFilterSensitiveLog = (
  obj: DisableVpcClassicLinkDnsSupportResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateAddressRequestFilterSensitiveLog = (obj: DisassociateAddressRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateClientVpnTargetNetworkRequestFilterSensitiveLog = (
  obj: DisassociateClientVpnTargetNetworkRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateClientVpnTargetNetworkResultFilterSensitiveLog = (
  obj: DisassociateClientVpnTargetNetworkResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateEnclaveCertificateIamRoleRequestFilterSensitiveLog = (
  obj: DisassociateEnclaveCertificateIamRoleRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateEnclaveCertificateIamRoleResultFilterSensitiveLog = (
  obj: DisassociateEnclaveCertificateIamRoleResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateIamInstanceProfileRequestFilterSensitiveLog = (
  obj: DisassociateIamInstanceProfileRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateIamInstanceProfileResultFilterSensitiveLog = (
  obj: DisassociateIamInstanceProfileResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InstanceEventWindowDisassociationRequestFilterSensitiveLog = (
  obj: InstanceEventWindowDisassociationRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateInstanceEventWindowRequestFilterSensitiveLog = (
  obj: DisassociateInstanceEventWindowRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateInstanceEventWindowResultFilterSensitiveLog = (
  obj: DisassociateInstanceEventWindowResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateRouteTableRequestFilterSensitiveLog = (obj: DisassociateRouteTableRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateSubnetCidrBlockRequestFilterSensitiveLog = (obj: DisassociateSubnetCidrBlockRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateSubnetCidrBlockResultFilterSensitiveLog = (obj: DisassociateSubnetCidrBlockResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateTransitGatewayMulticastDomainRequestFilterSensitiveLog = (
  obj: DisassociateTransitGatewayMulticastDomainRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateTransitGatewayMulticastDomainResultFilterSensitiveLog = (
  obj: DisassociateTransitGatewayMulticastDomainResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateTransitGatewayPolicyTableRequestFilterSensitiveLog = (
  obj: DisassociateTransitGatewayPolicyTableRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateTransitGatewayPolicyTableResultFilterSensitiveLog = (
  obj: DisassociateTransitGatewayPolicyTableResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateTransitGatewayRouteTableRequestFilterSensitiveLog = (
  obj: DisassociateTransitGatewayRouteTableRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateTransitGatewayRouteTableResultFilterSensitiveLog = (
  obj: DisassociateTransitGatewayRouteTableResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateTrunkInterfaceRequestFilterSensitiveLog = (obj: DisassociateTrunkInterfaceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateTrunkInterfaceResultFilterSensitiveLog = (obj: DisassociateTrunkInterfaceResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateVpcCidrBlockRequestFilterSensitiveLog = (obj: DisassociateVpcCidrBlockRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateVpcCidrBlockResultFilterSensitiveLog = (obj: DisassociateVpcCidrBlockResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EnableEbsEncryptionByDefaultRequestFilterSensitiveLog = (
  obj: EnableEbsEncryptionByDefaultRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EnableEbsEncryptionByDefaultResultFilterSensitiveLog = (obj: EnableEbsEncryptionByDefaultResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FastLaunchLaunchTemplateSpecificationRequestFilterSensitiveLog = (
  obj: FastLaunchLaunchTemplateSpecificationRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FastLaunchSnapshotConfigurationRequestFilterSensitiveLog = (
  obj: FastLaunchSnapshotConfigurationRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EnableFastLaunchRequestFilterSensitiveLog = (obj: EnableFastLaunchRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EnableFastLaunchResultFilterSensitiveLog = (obj: EnableFastLaunchResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EnableFastSnapshotRestoresRequestFilterSensitiveLog = (obj: EnableFastSnapshotRestoresRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EnableFastSnapshotRestoreSuccessItemFilterSensitiveLog = (
  obj: EnableFastSnapshotRestoreSuccessItem
): any => ({
  ...obj,
});
