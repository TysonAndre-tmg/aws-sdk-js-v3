// smithy-typescript generated code
import {
  AccountAttribute,
  AccountAttributeName,
  Address,
  ApplianceModeSupportValue,
  ByoipCidr,
  CarrierGateway,
  ClientVpnEndpointStatus,
  ClientVpnRouteStatus,
  CoipCidr,
  CoipPool,
  DnsSupportValue,
  DynamicRoutingValue,
  GatewayType,
  InstanceEventWindowState,
  Ipv6SupportValue,
  Tag,
  TagSpecification,
  Tenancy,
  TransitGatewayAttachmentResourceType,
  TransitGatewayAttachmentState,
  TransitGatewayPeeringAttachment,
  TransitGatewayVpcAttachment,
  UnsuccessfulItem,
  VolumeAttachment,
  Vpc,
  VpcAttachment,
  VpcPeeringConnection,
} from "./models_0";
import {
  Ipam,
  IpamPool,
  IpamScope,
  LaunchTemplate,
  LocalGatewayRoute,
  LocalGatewayRouteTable,
  LocalGatewayRouteTableVirtualInterfaceGroupAssociation,
  LocalGatewayRouteTableVpcAssociation,
  ManagedPrefixList,
  SubnetCidrReservation,
  TrafficDirection,
  TrafficMirrorFilterRule,
  TrafficMirrorRuleAction,
  VolumeType,
} from "./models_1";

/**
 * <p>Information about the Traffic Mirror filter rule port range.</p>
 */
export interface TrafficMirrorPortRangeRequest {
  /**
   * <p>The first port in the Traffic Mirror port range. This applies to the TCP and UDP protocols.</p>
   */
  FromPort?: number;

  /**
   * <p>The last port in the Traffic Mirror port range. This applies to the TCP and UDP protocols.</p>
   */
  ToPort?: number;
}

export interface CreateTrafficMirrorFilterRuleRequest {
  /**
   * <p>The ID of the filter that this rule is associated with.</p>
   */
  TrafficMirrorFilterId: string | undefined;

  /**
   * <p>The type of traffic.</p>
   */
  TrafficDirection: TrafficDirection | string | undefined;

  /**
   * <p>The number of the Traffic Mirror rule. This number must be unique for each Traffic Mirror rule in a given
   *          direction. The rules are processed in ascending order by rule number.</p>
   */
  RuleNumber: number | undefined;

  /**
   * <p>The action to take on the filtered traffic.</p>
   */
  RuleAction: TrafficMirrorRuleAction | string | undefined;

  /**
   * <p>The destination port range.</p>
   */
  DestinationPortRange?: TrafficMirrorPortRangeRequest;

  /**
   * <p>The source port range.</p>
   */
  SourcePortRange?: TrafficMirrorPortRangeRequest;

  /**
   * <p>The protocol, for example UDP, to assign to the Traffic Mirror rule.</p>
   *          <p>For information about the protocol value, see <a href="https://www.iana.org/assignments/protocol-numbers/protocol-numbers.xhtml">Protocol Numbers</a> on the  Internet Assigned Numbers Authority (IANA) website.</p>
   */
  Protocol?: number;

  /**
   * <p>The destination CIDR block to assign to the Traffic Mirror rule.</p>
   */
  DestinationCidrBlock: string | undefined;

  /**
   * <p>The source CIDR block to assign to the Traffic Mirror rule.</p>
   */
  SourceCidrBlock: string | undefined;

  /**
   * <p>The description of the Traffic Mirror rule.</p>
   */
  Description?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">How to ensure idempotency</a>.</p>
   */
  ClientToken?: string;
}

export interface CreateTrafficMirrorFilterRuleResult {
  /**
   * <p>The Traffic Mirror rule.</p>
   */
  TrafficMirrorFilterRule?: TrafficMirrorFilterRule;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">How to ensure idempotency</a>.</p>
   */
  ClientToken?: string;
}

export interface CreateTrafficMirrorSessionRequest {
  /**
   * <p>The ID of the source network interface.</p>
   */
  NetworkInterfaceId: string | undefined;

  /**
   * <p>The ID of the Traffic Mirror target.</p>
   */
  TrafficMirrorTargetId: string | undefined;

  /**
   * <p>The ID of the Traffic Mirror filter.</p>
   */
  TrafficMirrorFilterId: string | undefined;

  /**
   * <p>The number of bytes in each packet to mirror. These are bytes after the VXLAN header. Do
   *          not specify this parameter when you want to mirror the entire packet. To mirror a subset of
   *          the packet, set this to the length (in bytes) that you want to mirror. For example, if you
   *          set this value to 100, then the first 100 bytes that meet the filter criteria are copied to
   *          the target.</p>
   *          <p>If you do not want to mirror the entire packet, use the <code>PacketLength</code> parameter to specify the number of bytes in each packet to mirror.</p>
   */
  PacketLength?: number;

  /**
   * <p>The session number determines the order in which sessions are evaluated when an interface is used by multiple sessions. The first session with a matching filter is the one that mirrors the packets.</p>
   *          <p>Valid values are 1-32766.</p>
   */
  SessionNumber: number | undefined;

  /**
   * <p>The VXLAN ID for the Traffic Mirror session. For more information about the VXLAN
   *          protocol, see <a href="https://tools.ietf.org/html/rfc7348">RFC 7348</a>. If you do
   *          not specify a <code>VirtualNetworkId</code>, an account-wide unique id is chosen at
   *          random.</p>
   */
  VirtualNetworkId?: number;

  /**
   * <p>The description of the Traffic Mirror session.</p>
   */
  Description?: string;

  /**
   * <p>The tags to assign to a Traffic Mirror session.</p>
   */
  TagSpecifications?: TagSpecification[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">How to ensure idempotency</a>.</p>
   */
  ClientToken?: string;
}

/**
 * <p>Describes a Traffic Mirror session.</p>
 */
export interface TrafficMirrorSession {
  /**
   * <p>The ID for the Traffic Mirror session.</p>
   */
  TrafficMirrorSessionId?: string;

  /**
   * <p>The ID of the Traffic Mirror target.</p>
   */
  TrafficMirrorTargetId?: string;

  /**
   * <p>The ID of the Traffic Mirror filter.</p>
   */
  TrafficMirrorFilterId?: string;

  /**
   * <p>The ID of the Traffic Mirror session's network interface.</p>
   */
  NetworkInterfaceId?: string;

  /**
   * <p>The ID of the account that owns the Traffic Mirror session.</p>
   */
  OwnerId?: string;

  /**
   * <p>The number of bytes in each packet to mirror. These are the bytes after the VXLAN header. To mirror a subset, set this to the length (in bytes) to mirror. For example, if you set this value to 100, then the first 100 bytes that meet the filter criteria are copied to the target. Do not specify this parameter when you want to mirror the entire packet</p>
   */
  PacketLength?: number;

  /**
   * <p>The session number determines the order in which sessions are evaluated when an interface is used by multiple sessions. The first session with a matching filter is the one that mirrors the packets.</p>
   *          <p>Valid values are 1-32766.</p>
   */
  SessionNumber?: number;

  /**
   * <p>The virtual network ID associated with the Traffic Mirror session.</p>
   */
  VirtualNetworkId?: number;

  /**
   * <p>The description of the Traffic Mirror session.</p>
   */
  Description?: string;

  /**
   * <p>The tags assigned to the Traffic Mirror session.</p>
   */
  Tags?: Tag[];
}

export interface CreateTrafficMirrorSessionResult {
  /**
   * <p>Information about the Traffic Mirror session.</p>
   */
  TrafficMirrorSession?: TrafficMirrorSession;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">How to ensure idempotency</a>.</p>
   */
  ClientToken?: string;
}

export interface CreateTrafficMirrorTargetRequest {
  /**
   * <p>The network interface ID that is associated with the target.</p>
   */
  NetworkInterfaceId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the Network Load Balancer that is associated with the target.</p>
   */
  NetworkLoadBalancerArn?: string;

  /**
   * <p>The description of the Traffic Mirror target.</p>
   */
  Description?: string;

  /**
   * <p>The tags to assign to the Traffic Mirror target.</p>
   */
  TagSpecifications?: TagSpecification[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">How to ensure idempotency</a>.</p>
   */
  ClientToken?: string;

  /**
   * <p>The ID of the Gateway Load Balancer endpoint.</p>
   */
  GatewayLoadBalancerEndpointId?: string;
}

export enum TrafficMirrorTargetType {
  gateway_load_balancer_endpoint = "gateway-load-balancer-endpoint",
  network_interface = "network-interface",
  network_load_balancer = "network-load-balancer",
}

/**
 * <p>Describes a Traffic Mirror target.</p>
 */
export interface TrafficMirrorTarget {
  /**
   * <p>The ID of the Traffic Mirror target.</p>
   */
  TrafficMirrorTargetId?: string;

  /**
   * <p>The network interface ID that is attached to the target.</p>
   */
  NetworkInterfaceId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the Network Load Balancer.</p>
   */
  NetworkLoadBalancerArn?: string;

  /**
   * <p>The type of Traffic Mirror target.</p>
   */
  Type?: TrafficMirrorTargetType | string;

  /**
   * <p>Information about the Traffic Mirror target.</p>
   */
  Description?: string;

  /**
   * <p>The ID of the account that owns the Traffic Mirror target.</p>
   */
  OwnerId?: string;

  /**
   * <p>The tags assigned to the Traffic Mirror target.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The ID of the Gateway Load Balancer endpoint.</p>
   */
  GatewayLoadBalancerEndpointId?: string;
}

export interface CreateTrafficMirrorTargetResult {
  /**
   * <p>Information about the Traffic Mirror target.</p>
   */
  TrafficMirrorTarget?: TrafficMirrorTarget;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">How to ensure idempotency</a>.</p>
   */
  ClientToken?: string;
}

export enum AutoAcceptSharedAttachmentsValue {
  disable = "disable",
  enable = "enable",
}

export enum DefaultRouteTableAssociationValue {
  disable = "disable",
  enable = "enable",
}

export enum DefaultRouteTablePropagationValue {
  disable = "disable",
  enable = "enable",
}

export enum MulticastSupportValue {
  disable = "disable",
  enable = "enable",
}

export enum VpnEcmpSupportValue {
  disable = "disable",
  enable = "enable",
}

/**
 * <p>Describes the options for a transit gateway.</p>
 */
export interface TransitGatewayRequestOptions {
  /**
   * <p>A private Autonomous System Number (ASN) for the Amazon side of a BGP session.
   *          The range is 64512 to 65534 for 16-bit ASNs and 4200000000 to 4294967294 for 32-bit ASNs. The default is <code>64512</code>.</p>
   */
  AmazonSideAsn?: number;

  /**
   * <p>Enable or disable automatic acceptance of attachment requests. Disabled by default.</p>
   */
  AutoAcceptSharedAttachments?: AutoAcceptSharedAttachmentsValue | string;

  /**
   * <p>Enable or disable automatic association with the default association route table. Enabled by default.</p>
   */
  DefaultRouteTableAssociation?: DefaultRouteTableAssociationValue | string;

  /**
   * <p>Enable or disable automatic propagation of routes to the default propagation route table. Enabled by default.</p>
   */
  DefaultRouteTablePropagation?: DefaultRouteTablePropagationValue | string;

  /**
   * <p>Enable or disable Equal Cost Multipath Protocol support. Enabled by default.</p>
   */
  VpnEcmpSupport?: VpnEcmpSupportValue | string;

  /**
   * <p>Enable or disable DNS support. Enabled by default.</p>
   */
  DnsSupport?: DnsSupportValue | string;

  /**
   * <p>Indicates whether multicast is enabled on the transit gateway</p>
   */
  MulticastSupport?: MulticastSupportValue | string;

  /**
   * <p>One or more IPv4 or IPv6 CIDR blocks for the transit gateway. Must be a size /24 CIDR block or larger for IPv4, or a size /64 CIDR block or larger for IPv6.</p>
   */
  TransitGatewayCidrBlocks?: string[];
}

export interface CreateTransitGatewayRequest {
  /**
   * <p>A description of the transit gateway.</p>
   */
  Description?: string;

  /**
   * <p>The transit gateway options.</p>
   */
  Options?: TransitGatewayRequestOptions;

  /**
   * <p>The tags to apply to the transit gateway.</p>
   */
  TagSpecifications?: TagSpecification[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * <p>Describes the options for a transit gateway.</p>
 */
export interface TransitGatewayOptions {
  /**
   * <p>A private Autonomous System Number (ASN) for the Amazon side of a BGP session.
   *          The range is 64512 to 65534 for 16-bit ASNs and 4200000000 to 4294967294 for 32-bit ASNs.</p>
   */
  AmazonSideAsn?: number;

  /**
   * <p>The transit gateway CIDR blocks.</p>
   */
  TransitGatewayCidrBlocks?: string[];

  /**
   * <p>Indicates whether attachment requests are automatically accepted.</p>
   */
  AutoAcceptSharedAttachments?: AutoAcceptSharedAttachmentsValue | string;

  /**
   * <p>Indicates whether resource attachments are automatically associated with the default association route table.</p>
   */
  DefaultRouteTableAssociation?: DefaultRouteTableAssociationValue | string;

  /**
   * <p>The ID of the default association route table.</p>
   */
  AssociationDefaultRouteTableId?: string;

  /**
   * <p>Indicates whether resource attachments automatically propagate routes to the default propagation route table.</p>
   */
  DefaultRouteTablePropagation?: DefaultRouteTablePropagationValue | string;

  /**
   * <p>The ID of the default propagation route table.</p>
   */
  PropagationDefaultRouteTableId?: string;

  /**
   * <p>Indicates whether Equal Cost Multipath Protocol support is enabled.</p>
   */
  VpnEcmpSupport?: VpnEcmpSupportValue | string;

  /**
   * <p>Indicates whether DNS support is enabled.</p>
   */
  DnsSupport?: DnsSupportValue | string;

  /**
   * <p>Indicates whether multicast is enabled on the transit gateway</p>
   */
  MulticastSupport?: MulticastSupportValue | string;
}

export enum TransitGatewayState {
  available = "available",
  deleted = "deleted",
  deleting = "deleting",
  modifying = "modifying",
  pending = "pending",
}

/**
 * <p>Describes a transit gateway.</p>
 */
export interface TransitGateway {
  /**
   * <p>The ID of the transit gateway.</p>
   */
  TransitGatewayId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the transit gateway.</p>
   */
  TransitGatewayArn?: string;

  /**
   * <p>The state of the transit gateway.</p>
   */
  State?: TransitGatewayState | string;

  /**
   * <p>The ID of the Amazon Web Services account that owns the transit gateway.</p>
   */
  OwnerId?: string;

  /**
   * <p>The description of the transit gateway.</p>
   */
  Description?: string;

  /**
   * <p>The creation time.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The transit gateway options.</p>
   */
  Options?: TransitGatewayOptions;

  /**
   * <p>The tags for the transit gateway.</p>
   */
  Tags?: Tag[];
}

export interface CreateTransitGatewayResult {
  /**
   * <p>Information about the transit gateway.</p>
   */
  TransitGateway?: TransitGateway;
}

export enum ProtocolValue {
  gre = "gre",
}

/**
 * <p>The options for a Connect attachment.</p>
 */
export interface CreateTransitGatewayConnectRequestOptions {
  /**
   * <p>The tunnel protocol.</p>
   */
  Protocol: ProtocolValue | string | undefined;
}

export interface CreateTransitGatewayConnectRequest {
  /**
   * <p>The ID of the transit gateway attachment. You can specify a VPC attachment or Amazon Web Services Direct Connect attachment.</p>
   */
  TransportTransitGatewayAttachmentId: string | undefined;

  /**
   * <p>The Connect attachment options.</p>
   */
  Options: CreateTransitGatewayConnectRequestOptions | undefined;

  /**
   * <p>The tags to apply to the Connect attachment.</p>
   */
  TagSpecifications?: TagSpecification[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * <p>Describes the Connect attachment options.</p>
 */
export interface TransitGatewayConnectOptions {
  /**
   * <p>The tunnel protocol.</p>
   */
  Protocol?: ProtocolValue | string;
}

/**
 * <p>Describes a transit gateway Connect attachment.</p>
 */
export interface TransitGatewayConnect {
  /**
   * <p>The ID of the Connect attachment.</p>
   */
  TransitGatewayAttachmentId?: string;

  /**
   * <p>The ID of the attachment from which the Connect attachment was created.</p>
   */
  TransportTransitGatewayAttachmentId?: string;

  /**
   * <p>The ID of the transit gateway.</p>
   */
  TransitGatewayId?: string;

  /**
   * <p>The state of the attachment.</p>
   */
  State?: TransitGatewayAttachmentState | string;

  /**
   * <p>The creation time.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The Connect attachment options.</p>
   */
  Options?: TransitGatewayConnectOptions;

  /**
   * <p>The tags for the attachment.</p>
   */
  Tags?: Tag[];
}

export interface CreateTransitGatewayConnectResult {
  /**
   * <p>Information about the Connect attachment.</p>
   */
  TransitGatewayConnect?: TransitGatewayConnect;
}

/**
 * <p>The BGP options for the Connect attachment.</p>
 */
export interface TransitGatewayConnectRequestBgpOptions {
  /**
   * <p>The peer Autonomous System Number (ASN).</p>
   */
  PeerAsn?: number;
}

export interface CreateTransitGatewayConnectPeerRequest {
  /**
   * <p>The ID of the Connect attachment.</p>
   */
  TransitGatewayAttachmentId: string | undefined;

  /**
   * <p>The peer IP address (GRE outer IP address) on the transit gateway side of the Connect peer, which must be
   *             specified from a transit gateway CIDR block. If not specified, Amazon automatically assigns
   *             the first available IP address from the transit gateway CIDR block.</p>
   */
  TransitGatewayAddress?: string;

  /**
   * <p>The peer IP address (GRE outer IP address) on the appliance side of the Connect peer.</p>
   */
  PeerAddress: string | undefined;

  /**
   * <p>The BGP options for the Connect peer.</p>
   */
  BgpOptions?: TransitGatewayConnectRequestBgpOptions;

  /**
   * <p>The range of inside IP addresses that are used for BGP peering. You must specify a
   *             size /29 IPv4 CIDR block from the <code>169.254.0.0/16</code> range. The first address
   *             from the range must be configured on the appliance as the BGP IP address. You can also
   *             optionally specify a size /125 IPv6 CIDR block from the <code>fd00::/8</code>
   *             range.</p>
   */
  InsideCidrBlocks: string[] | undefined;

  /**
   * <p>The tags to apply to the Connect peer.</p>
   */
  TagSpecifications?: TagSpecification[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export enum BgpStatus {
  down = "down",
  up = "up",
}

/**
 * <p>The BGP configuration information.</p>
 */
export interface TransitGatewayAttachmentBgpConfiguration {
  /**
   * <p>The transit gateway Autonomous System Number (ASN).</p>
   */
  TransitGatewayAsn?: number;

  /**
   * <p>The peer Autonomous System Number (ASN).</p>
   */
  PeerAsn?: number;

  /**
   * <p>The interior BGP peer IP address for the transit gateway.</p>
   */
  TransitGatewayAddress?: string;

  /**
   * <p>The interior BGP peer IP address for the appliance.</p>
   */
  PeerAddress?: string;

  /**
   * <p>The BGP status.</p>
   */
  BgpStatus?: BgpStatus | string;
}

/**
 * <p>Describes the Connect peer details.</p>
 */
export interface TransitGatewayConnectPeerConfiguration {
  /**
   * <p>The Connect peer IP address on the transit gateway side of the tunnel.</p>
   */
  TransitGatewayAddress?: string;

  /**
   * <p>The Connect peer IP address on the appliance side of the tunnel.</p>
   */
  PeerAddress?: string;

  /**
   * <p>The range of interior BGP peer IP addresses.</p>
   */
  InsideCidrBlocks?: string[];

  /**
   * <p>The tunnel protocol.</p>
   */
  Protocol?: ProtocolValue | string;

  /**
   * <p>The BGP configuration details.</p>
   */
  BgpConfigurations?: TransitGatewayAttachmentBgpConfiguration[];
}

export enum TransitGatewayConnectPeerState {
  available = "available",
  deleted = "deleted",
  deleting = "deleting",
  pending = "pending",
}

/**
 * <p>Describes a transit gateway Connect peer.</p>
 */
export interface TransitGatewayConnectPeer {
  /**
   * <p>The ID of the Connect attachment.</p>
   */
  TransitGatewayAttachmentId?: string;

  /**
   * <p>The ID of the Connect peer.</p>
   */
  TransitGatewayConnectPeerId?: string;

  /**
   * <p>The state of the Connect peer.</p>
   */
  State?: TransitGatewayConnectPeerState | string;

  /**
   * <p>The creation time.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The Connect peer details.</p>
   */
  ConnectPeerConfiguration?: TransitGatewayConnectPeerConfiguration;

  /**
   * <p>The tags for the Connect peer.</p>
   */
  Tags?: Tag[];
}

export interface CreateTransitGatewayConnectPeerResult {
  /**
   * <p>Information about the Connect peer.</p>
   */
  TransitGatewayConnectPeer?: TransitGatewayConnectPeer;
}

export enum AutoAcceptSharedAssociationsValue {
  disable = "disable",
  enable = "enable",
}

export enum Igmpv2SupportValue {
  disable = "disable",
  enable = "enable",
}

export enum StaticSourcesSupportValue {
  disable = "disable",
  enable = "enable",
}

/**
 * <p>The options for the transit gateway multicast domain.</p>
 */
export interface CreateTransitGatewayMulticastDomainRequestOptions {
  /**
   * <p>Specify whether to enable Internet Group Management Protocol (IGMP) version 2 for the transit gateway multicast domain.</p>
   */
  Igmpv2Support?: Igmpv2SupportValue | string;

  /**
   * <p>Specify whether to enable support for statically configuring multicast group sources for a domain.</p>
   */
  StaticSourcesSupport?: StaticSourcesSupportValue | string;

  /**
   * <p>Indicates whether to automatically accept cross-account subnet associations that are associated with the transit gateway multicast domain.</p>
   */
  AutoAcceptSharedAssociations?: AutoAcceptSharedAssociationsValue | string;
}

export interface CreateTransitGatewayMulticastDomainRequest {
  /**
   * <p>The ID of the transit gateway.</p>
   */
  TransitGatewayId: string | undefined;

  /**
   * <p>The options for the transit gateway multicast domain.</p>
   */
  Options?: CreateTransitGatewayMulticastDomainRequestOptions;

  /**
   * <p>The tags for the transit gateway multicast domain.</p>
   */
  TagSpecifications?: TagSpecification[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * <p>Describes the options for a transit gateway multicast domain.</p>
 */
export interface TransitGatewayMulticastDomainOptions {
  /**
   * <p>Indicates whether Internet Group Management Protocol (IGMP) version 2 is turned on for the transit gateway multicast domain.</p>
   */
  Igmpv2Support?: Igmpv2SupportValue | string;

  /**
   * <p>Indicates whether support for statically configuring transit gateway multicast group sources is turned on.</p>
   */
  StaticSourcesSupport?: StaticSourcesSupportValue | string;

  /**
   * <p>Indicates whether to automatically cross-account subnet associations that are associated with the transit gateway multicast domain.</p>
   */
  AutoAcceptSharedAssociations?: AutoAcceptSharedAssociationsValue | string;
}

export enum TransitGatewayMulticastDomainState {
  available = "available",
  deleted = "deleted",
  deleting = "deleting",
  pending = "pending",
}

/**
 * <p>Describes the transit gateway multicast domain.</p>
 */
export interface TransitGatewayMulticastDomain {
  /**
   * <p>The ID of the transit gateway multicast domain.</p>
   */
  TransitGatewayMulticastDomainId?: string;

  /**
   * <p>The ID of the transit gateway.</p>
   */
  TransitGatewayId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the transit gateway multicast domain.</p>
   */
  TransitGatewayMulticastDomainArn?: string;

  /**
   * <p> The ID of the Amazon Web Services account that owns the transit gateway multicast domain.</p>
   */
  OwnerId?: string;

  /**
   * <p>The options for the transit gateway multicast domain.</p>
   */
  Options?: TransitGatewayMulticastDomainOptions;

  /**
   * <p>The state of the transit gateway multicast domain.</p>
   */
  State?: TransitGatewayMulticastDomainState | string;

  /**
   * <p>The time the transit gateway multicast domain was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The tags for the transit gateway multicast domain.</p>
   */
  Tags?: Tag[];
}

export interface CreateTransitGatewayMulticastDomainResult {
  /**
   * <p>Information about the transit gateway multicast domain.</p>
   */
  TransitGatewayMulticastDomain?: TransitGatewayMulticastDomain;
}

/**
 * <p>Describes whether dynamic routing is enabled or disabled for the transit gateway peering request.</p>
 */
export interface CreateTransitGatewayPeeringAttachmentRequestOptions {
  /**
   * <p>Indicates whether dynamic routing is enabled or disabled.</p>
   */
  DynamicRouting?: DynamicRoutingValue | string;
}

export interface CreateTransitGatewayPeeringAttachmentRequest {
  /**
   * <p>The ID of the transit gateway.</p>
   */
  TransitGatewayId: string | undefined;

  /**
   * <p>The ID of the peer transit gateway with which to create the peering attachment.</p>
   */
  PeerTransitGatewayId: string | undefined;

  /**
   * <p>The ID of the Amazon Web Services account that owns the peer transit gateway.</p>
   */
  PeerAccountId: string | undefined;

  /**
   * <p>The Region where the peer transit gateway is located.</p>
   */
  PeerRegion: string | undefined;

  /**
   * <p>Requests a transit gateway peering attachment.</p>
   */
  Options?: CreateTransitGatewayPeeringAttachmentRequestOptions;

  /**
   * <p>The tags to apply to the transit gateway peering attachment.</p>
   */
  TagSpecifications?: TagSpecification[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export interface CreateTransitGatewayPeeringAttachmentResult {
  /**
   * <p>The transit gateway peering attachment.</p>
   */
  TransitGatewayPeeringAttachment?: TransitGatewayPeeringAttachment;
}

export interface CreateTransitGatewayPolicyTableRequest {
  /**
   * <p>The ID of the transit gateway used for the policy table.</p>
   */
  TransitGatewayId: string | undefined;

  /**
   * <p>The tags specification for the transit gateway policy table created during the request.</p>
   */
  TagSpecifications?: TagSpecification[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export enum TransitGatewayPolicyTableState {
  available = "available",
  deleted = "deleted",
  deleting = "deleting",
  pending = "pending",
}

/**
 * <p>Describes a transit gateway policy table.</p>
 */
export interface TransitGatewayPolicyTable {
  /**
   * <p>The ID of the transit gateway policy table.</p>
   */
  TransitGatewayPolicyTableId?: string;

  /**
   * <p>The ID of the transit gateway.</p>
   */
  TransitGatewayId?: string;

  /**
   * <p>The state of the transit gateway policy table</p>
   */
  State?: TransitGatewayPolicyTableState | string;

  /**
   * <p>The timestamp when the transit gateway policy table was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>he key-value pairs associated with the transit gateway policy table.</p>
   */
  Tags?: Tag[];
}

export interface CreateTransitGatewayPolicyTableResult {
  /**
   * <p>Describes the created transit gateway policy table.</p>
   */
  TransitGatewayPolicyTable?: TransitGatewayPolicyTable;
}

export interface CreateTransitGatewayPrefixListReferenceRequest {
  /**
   * <p>The ID of the transit gateway route table.</p>
   */
  TransitGatewayRouteTableId: string | undefined;

  /**
   * <p>The ID of the prefix list that is used for destination matches.</p>
   */
  PrefixListId: string | undefined;

  /**
   * <p>The ID of the attachment to which traffic is routed.</p>
   */
  TransitGatewayAttachmentId?: string;

  /**
   * <p>Indicates whether to drop traffic that matches this route.</p>
   */
  Blackhole?: boolean;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export enum TransitGatewayPrefixListReferenceState {
  available = "available",
  deleting = "deleting",
  modifying = "modifying",
  pending = "pending",
}

/**
 * <p>Describes a transit gateway prefix list attachment.</p>
 */
export interface TransitGatewayPrefixListAttachment {
  /**
   * <p>The ID of the attachment.</p>
   */
  TransitGatewayAttachmentId?: string;

  /**
   * <p>The resource type. Note that the <code>tgw-peering</code> resource type has been deprecated.</p>
   */
  ResourceType?: TransitGatewayAttachmentResourceType | string;

  /**
   * <p>The ID of the resource.</p>
   */
  ResourceId?: string;
}

/**
 * <p>Describes a prefix list reference.</p>
 */
export interface TransitGatewayPrefixListReference {
  /**
   * <p>The ID of the transit gateway route table.</p>
   */
  TransitGatewayRouteTableId?: string;

  /**
   * <p>The ID of the prefix list.</p>
   */
  PrefixListId?: string;

  /**
   * <p>The ID of the prefix list owner.</p>
   */
  PrefixListOwnerId?: string;

  /**
   * <p>The state of the prefix list reference.</p>
   */
  State?: TransitGatewayPrefixListReferenceState | string;

  /**
   * <p>Indicates whether traffic that matches this route is dropped.</p>
   */
  Blackhole?: boolean;

  /**
   * <p>Information about the transit gateway attachment.</p>
   */
  TransitGatewayAttachment?: TransitGatewayPrefixListAttachment;
}

export interface CreateTransitGatewayPrefixListReferenceResult {
  /**
   * <p>Information about the prefix list reference.</p>
   */
  TransitGatewayPrefixListReference?: TransitGatewayPrefixListReference;
}

export interface CreateTransitGatewayRouteRequest {
  /**
   * <p>The CIDR range used for destination matches. Routing decisions are based on the
   *          most specific match.</p>
   */
  DestinationCidrBlock: string | undefined;

  /**
   * <p>The ID of the transit gateway route table.</p>
   */
  TransitGatewayRouteTableId: string | undefined;

  /**
   * <p>The ID of the attachment.</p>
   */
  TransitGatewayAttachmentId?: string;

  /**
   * <p>Indicates whether to drop traffic that matches this route.</p>
   */
  Blackhole?: boolean;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export enum TransitGatewayRouteState {
  active = "active",
  blackhole = "blackhole",
  deleted = "deleted",
  deleting = "deleting",
  pending = "pending",
}

/**
 * <p>Describes a route attachment.</p>
 */
export interface TransitGatewayRouteAttachment {
  /**
   * <p>The ID of the resource.</p>
   */
  ResourceId?: string;

  /**
   * <p>The ID of the attachment.</p>
   */
  TransitGatewayAttachmentId?: string;

  /**
   * <p>The resource type. Note that the <code>tgw-peering</code> resource type has been deprecated. </p>
   */
  ResourceType?: TransitGatewayAttachmentResourceType | string;
}

export enum TransitGatewayRouteType {
  propagated = "propagated",
  static = "static",
}

/**
 * <p>Describes a route for a transit gateway route table.</p>
 */
export interface TransitGatewayRoute {
  /**
   * <p>The CIDR block used for destination matches.</p>
   */
  DestinationCidrBlock?: string;

  /**
   * <p>The ID of the prefix list used for destination matches.</p>
   */
  PrefixListId?: string;

  /**
   * <p>The ID of the transit gateway route table announcement. </p>
   */
  TransitGatewayRouteTableAnnouncementId?: string;

  /**
   * <p>The attachments.</p>
   */
  TransitGatewayAttachments?: TransitGatewayRouteAttachment[];

  /**
   * <p>The route type.</p>
   */
  Type?: TransitGatewayRouteType | string;

  /**
   * <p>The state of the route.</p>
   */
  State?: TransitGatewayRouteState | string;
}

export interface CreateTransitGatewayRouteResult {
  /**
   * <p>Information about the route.</p>
   */
  Route?: TransitGatewayRoute;
}

export interface CreateTransitGatewayRouteTableRequest {
  /**
   * <p>The ID of the transit gateway.</p>
   */
  TransitGatewayId: string | undefined;

  /**
   * <p>The tags to apply to the transit gateway route table.</p>
   */
  TagSpecifications?: TagSpecification[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export enum TransitGatewayRouteTableState {
  available = "available",
  deleted = "deleted",
  deleting = "deleting",
  pending = "pending",
}

/**
 * <p>Describes a transit gateway route table.</p>
 */
export interface TransitGatewayRouteTable {
  /**
   * <p>The ID of the transit gateway route table.</p>
   */
  TransitGatewayRouteTableId?: string;

  /**
   * <p>The ID of the transit gateway.</p>
   */
  TransitGatewayId?: string;

  /**
   * <p>The state of the transit gateway route table.</p>
   */
  State?: TransitGatewayRouteTableState | string;

  /**
   * <p>Indicates whether this is the default association route table for the transit gateway.</p>
   */
  DefaultAssociationRouteTable?: boolean;

  /**
   * <p>Indicates whether this is the default propagation route table for the transit gateway.</p>
   */
  DefaultPropagationRouteTable?: boolean;

  /**
   * <p>The creation time.</p>
   */
  CreationTime?: Date;

  /**
   * <p>Any tags assigned to the route table.</p>
   */
  Tags?: Tag[];
}

export interface CreateTransitGatewayRouteTableResult {
  /**
   * <p>Information about the transit gateway route table.</p>
   */
  TransitGatewayRouteTable?: TransitGatewayRouteTable;
}

export interface CreateTransitGatewayRouteTableAnnouncementRequest {
  /**
   * <p>The ID of the transit gateway route table.</p>
   */
  TransitGatewayRouteTableId: string | undefined;

  /**
   * <p>The ID of the peering attachment.</p>
   */
  PeeringAttachmentId: string | undefined;

  /**
   * <p>The tags specifications applied to the transit gateway route table announcement.</p>
   */
  TagSpecifications?: TagSpecification[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export enum TransitGatewayRouteTableAnnouncementDirection {
  incoming = "incoming",
  outgoing = "outgoing",
}

export enum TransitGatewayRouteTableAnnouncementState {
  available = "available",
  deleted = "deleted",
  deleting = "deleting",
  failed = "failed",
  failing = "failing",
  pending = "pending",
}

/**
 * <p>Describes a transit gateway route table announcement.</p>
 */
export interface TransitGatewayRouteTableAnnouncement {
  /**
   * <p>The ID of the transit gateway route table announcement.</p>
   */
  TransitGatewayRouteTableAnnouncementId?: string;

  /**
   * <p>The ID of the transit gateway.</p>
   */
  TransitGatewayId?: string;

  /**
   * <p>The ID of the core network for the transit gateway route table announcement.</p>
   */
  CoreNetworkId?: string;

  /**
   * <p>The ID of the peer transit gateway.</p>
   */
  PeerTransitGatewayId?: string;

  /**
   * <p>The ID of the core network ID for the peer.</p>
   */
  PeerCoreNetworkId?: string;

  /**
   * <p>The ID of the peering attachment.</p>
   */
  PeeringAttachmentId?: string;

  /**
   * <p>The direction for the route table announcement.</p>
   */
  AnnouncementDirection?: TransitGatewayRouteTableAnnouncementDirection | string;

  /**
   * <p>The ID of the transit gateway route table.</p>
   */
  TransitGatewayRouteTableId?: string;

  /**
   * <p>The state of the transit gateway announcement.</p>
   */
  State?: TransitGatewayRouteTableAnnouncementState | string;

  /**
   * <p>The timestamp when the transit gateway route table announcement was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The key-value pairs associated with the route table announcement.</p>
   */
  Tags?: Tag[];
}

export interface CreateTransitGatewayRouteTableAnnouncementResult {
  /**
   * <p>Provides details about the transit gateway route table announcement.</p>
   */
  TransitGatewayRouteTableAnnouncement?: TransitGatewayRouteTableAnnouncement;
}

/**
 * <p>Describes the options for a VPC attachment.</p>
 */
export interface CreateTransitGatewayVpcAttachmentRequestOptions {
  /**
   * <p>Enable or disable DNS support. The default is <code>enable</code>.</p>
   */
  DnsSupport?: DnsSupportValue | string;

  /**
   * <p>Enable or disable IPv6 support.  The default is <code>disable</code>.</p>
   */
  Ipv6Support?: Ipv6SupportValue | string;

  /**
   * <p>Enable or disable support for appliance mode. If enabled, a traffic flow between a source and destination uses the same Availability Zone for the VPC attachment for the lifetime of that flow. The default is <code>disable</code>.</p>
   */
  ApplianceModeSupport?: ApplianceModeSupportValue | string;
}

export interface CreateTransitGatewayVpcAttachmentRequest {
  /**
   * <p>The ID of the transit gateway.</p>
   */
  TransitGatewayId: string | undefined;

  /**
   * <p>The ID of the VPC.</p>
   */
  VpcId: string | undefined;

  /**
   * <p>The IDs of one or more subnets. You can specify only one subnet per Availability Zone.
   *          You must specify at least one subnet, but we recommend that you specify two subnets for better availability.
   *          The transit gateway uses one IP address from each specified subnet.</p>
   */
  SubnetIds: string[] | undefined;

  /**
   * <p>The VPC attachment options.</p>
   */
  Options?: CreateTransitGatewayVpcAttachmentRequestOptions;

  /**
   * <p>The tags to apply to the VPC attachment.</p>
   */
  TagSpecifications?: TagSpecification[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export interface CreateTransitGatewayVpcAttachmentResult {
  /**
   * <p>Information about the VPC attachment.</p>
   */
  TransitGatewayVpcAttachment?: TransitGatewayVpcAttachment;
}

export interface CreateVolumeRequest {
  /**
   * <p>The Availability Zone in which to create the volume.</p>
   */
  AvailabilityZone: string | undefined;

  /**
   * <p>Indicates whether the volume should be encrypted.
   *       The effect of setting the encryption state to <code>true</code> depends on
   * the volume origin (new or from a snapshot), starting encryption state, ownership, and whether encryption by default is enabled.
   *       For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html#encryption-by-default">Encryption by default</a>
   *       in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   *          <p>Encrypted Amazon EBS volumes must be attached to instances that support Amazon EBS encryption.
   *       For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html#EBSEncryption_supported_instances">Supported
   *         instance types</a>.</p>
   */
  Encrypted?: boolean;

  /**
   * <p>The number of I/O operations per second (IOPS). For <code>gp3</code>, <code>io1</code>, and <code>io2</code> volumes, this represents
   *       the number of IOPS that are provisioned for the volume. For <code>gp2</code> volumes, this represents the baseline
   *       performance of the volume and the rate at which the volume accumulates I/O credits for bursting.</p>
   *          <p>The following are the supported values for each volume type:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>gp3</code>: 3,000-16,000 IOPS</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>io1</code>: 100-64,000 IOPS</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>io2</code>: 100-64,000 IOPS</p>
   *             </li>
   *          </ul>
   *          <p>
   *             <code>io1</code> and <code>io2</code> volumes support up to 64,000 IOPS only on
   *       <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html#ec2-nitro-instances">Instances built on the Nitro System</a>. Other instance families support performance
   *       up to 32,000 IOPS.</p>
   *          <p>This parameter is required for <code>io1</code> and <code>io2</code> volumes.
   *       The default for <code>gp3</code> volumes is 3,000 IOPS.
   *       This parameter is not supported for <code>gp2</code>, <code>st1</code>, <code>sc1</code>, or <code>standard</code> volumes.</p>
   */
  Iops?: number;

  /**
   * <p>The identifier of the Key Management Service (KMS) KMS key to use for Amazon EBS encryption.
   *       If this parameter is not specified, your KMS key for Amazon EBS is used. If <code>KmsKeyId</code> is
   *       specified, the encrypted state must be <code>true</code>.</p>
   *          <p>You can specify the KMS key using any of the following:</p>
   *          <ul>
   *             <li>
   *                <p>Key ID. For example, 1234abcd-12ab-34cd-56ef-1234567890ab.</p>
   *             </li>
   *             <li>
   *                <p>Key alias. For example, alias/ExampleAlias.</p>
   *             </li>
   *             <li>
   *                <p>Key ARN. For example, arn:aws:kms:us-east-1:012345678910:key/1234abcd-12ab-34cd-56ef-1234567890ab.</p>
   *             </li>
   *             <li>
   *                <p>Alias ARN. For example, arn:aws:kms:us-east-1:012345678910:alias/ExampleAlias.</p>
   *             </li>
   *          </ul>
   *          <p>Amazon Web Services authenticates the KMS key asynchronously. Therefore, if you specify an ID, alias, or ARN that is not valid,
   *       the action can appear to complete, but eventually fails.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the Outpost.</p>
   */
  OutpostArn?: string;

  /**
   * <p>The size of the volume, in GiBs. You must specify either a snapshot ID or a volume size.
   *       If you specify a snapshot, the default is the snapshot size. You can specify a volume
   *       size that is equal to or larger than the snapshot size.</p>
   *          <p>The following are the supported volumes sizes for each volume type:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>gp2</code> and <code>gp3</code>: 1-16,384</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>io1</code> and <code>io2</code>: 4-16,384</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>st1</code> and <code>sc1</code>: 125-16,384</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>standard</code>: 1-1,024</p>
   *             </li>
   *          </ul>
   */
  Size?: number;

  /**
   * <p>The snapshot from which to create the volume. You must specify either a snapshot ID or a volume size.</p>
   */
  SnapshotId?: string;

  /**
   * <p>The volume type. This parameter can be one of the following values:</p>
   *          <ul>
   *             <li>
   *                <p>General Purpose SSD: <code>gp2</code> | <code>gp3</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Provisioned IOPS SSD: <code>io1</code> | <code>io2</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Throughput Optimized HDD: <code>st1</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Cold HDD: <code>sc1</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Magnetic: <code>standard</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSVolumeTypes.html">Amazon EBS volume types</a> in the
   *       <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   *          <p>Default: <code>gp2</code>
   *          </p>
   */
  VolumeType?: VolumeType | string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The tags to apply to the volume during creation.</p>
   */
  TagSpecifications?: TagSpecification[];

  /**
   * <p>Indicates whether to enable Amazon EBS Multi-Attach. If you enable Multi-Attach, you can attach the
   *     	volume to up to 16 <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html#ec2-nitro-instances">Instances built on the Nitro System</a> in the same Availability Zone. This parameter is
   *     	supported with <code>io1</code> and <code>io2</code> volumes only. For more information,
   *     	see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-volumes-multi.html">
   *     		Amazon EBS Multi-Attach</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   */
  MultiAttachEnabled?: boolean;

  /**
   * <p>The throughput to provision for a volume, with a maximum of 1,000 MiB/s.</p>
   *          <p>This parameter is valid only for <code>gp3</code> volumes.</p>
   *   	      <p>Valid Range: Minimum value of 125. Maximum value of 1000.</p>
   */
  Throughput?: number;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency
   *       of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensure
   *         Idempotency</a>.</p>
   */
  ClientToken?: string;
}

export enum VolumeState {
  available = "available",
  creating = "creating",
  deleted = "deleted",
  deleting = "deleting",
  error = "error",
  in_use = "in-use",
}

/**
 * <p>Describes a volume.</p>
 */
export interface Volume {
  /**
   * <p>Information about the volume attachments.</p>
   */
  Attachments?: VolumeAttachment[];

  /**
   * <p>The Availability Zone for the volume.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>The time stamp when volume creation was initiated.</p>
   */
  CreateTime?: Date;

  /**
   * <p>Indicates whether the volume is encrypted.</p>
   */
  Encrypted?: boolean;

  /**
   * <p>The Amazon Resource Name (ARN) of the Key Management Service (KMS) KMS key that was used to protect the
   *       volume encryption key for the volume.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the Outpost.</p>
   */
  OutpostArn?: string;

  /**
   * <p>The size of the volume, in GiBs.</p>
   */
  Size?: number;

  /**
   * <p>The snapshot from which the volume was created, if applicable.</p>
   */
  SnapshotId?: string;

  /**
   * <p>The volume state.</p>
   */
  State?: VolumeState | string;

  /**
   * <p>The ID of the volume.</p>
   */
  VolumeId?: string;

  /**
   * <p>The number of I/O operations per second (IOPS). For <code>gp3</code>, <code>io1</code>, and <code>io2</code> volumes, this represents
   *       the number of IOPS that are provisioned for the volume. For <code>gp2</code> volumes, this represents the baseline
   *       performance of the volume and the rate at which the volume accumulates I/O credits for bursting.</p>
   */
  Iops?: number;

  /**
   * <p>Any tags assigned to the volume.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The volume type.</p>
   */
  VolumeType?: VolumeType | string;

  /**
   * <p>Indicates whether the volume was created using fast snapshot restore.</p>
   */
  FastRestored?: boolean;

  /**
   * <p>Indicates whether Amazon EBS Multi-Attach is enabled.</p>
   */
  MultiAttachEnabled?: boolean;

  /**
   * <p>The throughput that the volume supports, in MiB/s.</p>
   */
  Throughput?: number;
}

export interface CreateVpcRequest {
  /**
   * <p>The IPv4 network range for the VPC, in CIDR notation. For example,
   * 		        <code>10.0.0.0/16</code>. We modify the specified CIDR block to its canonical form; for example, if you specify <code>100.68.0.18/18</code>, we modify it to <code>100.68.0.0/18</code>.</p>
   */
  CidrBlock?: string;

  /**
   * <p>Requests an Amazon-provided IPv6 CIDR block with a /56 prefix length for the VPC.
   *             You cannot specify the range of IP addresses, or the size of the CIDR block.</p>
   */
  AmazonProvidedIpv6CidrBlock?: boolean;

  /**
   * <p>The ID of an IPv6 address pool from which to allocate the IPv6 CIDR block.</p>
   */
  Ipv6Pool?: string;

  /**
   * <p>The IPv6 CIDR block from the IPv6 address pool. You must also specify <code>Ipv6Pool</code> in the request.</p>
   *         <p>To let Amazon choose the IPv6 CIDR block for you, omit this parameter.</p>
   */
  Ipv6CidrBlock?: string;

  /**
   * <p>The ID of an IPv4 IPAM pool you want to use for allocating this VPC's CIDR. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/what-is-it-ipam.html">What is IPAM?</a> in the <i>Amazon VPC IPAM User Guide</i>.
   *
   *       </p>
   */
  Ipv4IpamPoolId?: string;

  /**
   * <p>The netmask length of the IPv4 CIDR you want to allocate to this VPC from an Amazon VPC IP Address Manager (IPAM) pool. For more information about IPAM, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/what-is-it-ipam.html">What is IPAM?</a> in the <i>Amazon VPC IPAM User Guide</i>.</p>
   */
  Ipv4NetmaskLength?: number;

  /**
   * <p>The ID of an IPv6 IPAM pool which will be used to allocate this VPC an IPv6 CIDR. IPAM is a VPC feature that you can use to automate your IP address management workflows including assigning, tracking, troubleshooting, and auditing IP addresses across Amazon Web Services Regions and accounts throughout your Amazon Web Services Organization. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/what-is-it-ipam.html">What is IPAM?</a> in the <i>Amazon VPC IPAM User Guide</i>.</p>
   */
  Ipv6IpamPoolId?: string;

  /**
   * <p>The netmask length of the IPv6 CIDR you want to allocate to this VPC from an Amazon VPC IP Address Manager (IPAM) pool. For more information about IPAM, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/what-is-it-ipam.html">What is IPAM?</a> in the <i>Amazon VPC IPAM User Guide</i>.</p>
   */
  Ipv6NetmaskLength?: number;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The tenancy options for instances launched into the VPC. For <code>default</code>, instances
   *       are launched with shared tenancy by default. You can launch instances with any tenancy into a
   *       shared tenancy VPC. For <code>dedicated</code>, instances are launched as dedicated tenancy
   *       instances by default. You can only launch instances with a tenancy of <code>dedicated</code>
   *       or <code>host</code> into a dedicated tenancy VPC. </p>
   *          <p>
   *             <b>Important:</b> The <code>host</code> value cannot be used with this parameter. Use the <code>default</code> or <code>dedicated</code> values only.</p>
   *          <p>Default: <code>default</code>
   *          </p>
   */
  InstanceTenancy?: Tenancy | string;

  /**
   * <p>The name of the location from which we advertise the IPV6 CIDR block. Use this parameter to limit the address to this location.</p>
   *          <p> You must set <code>AmazonProvidedIpv6CidrBlock</code> to <code>true</code> to use this parameter.</p>
   */
  Ipv6CidrBlockNetworkBorderGroup?: string;

  /**
   * <p>The tags to assign to the VPC.</p>
   */
  TagSpecifications?: TagSpecification[];
}

export interface CreateVpcResult {
  /**
   * <p>Information about the VPC.</p>
   */
  Vpc?: Vpc;
}

export enum DnsRecordIpType {
  dualstack = "dualstack",
  ipv4 = "ipv4",
  ipv6 = "ipv6",
  service_defined = "service-defined",
}

/**
 * <p>Describes the DNS options for an endpoint.</p>
 */
export interface DnsOptionsSpecification {
  /**
   * <p>The DNS records created for the endpoint.</p>
   */
  DnsRecordIpType?: DnsRecordIpType | string;
}

export enum IpAddressType {
  dualstack = "dualstack",
  ipv4 = "ipv4",
  ipv6 = "ipv6",
}

export enum VpcEndpointType {
  Gateway = "Gateway",
  GatewayLoadBalancer = "GatewayLoadBalancer",
  Interface = "Interface",
}

/**
 * <p>Contains the parameters for CreateVpcEndpoint.</p>
 */
export interface CreateVpcEndpointRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The type of endpoint.</p>
   *         <p>Default: Gateway</p>
   */
  VpcEndpointType?: VpcEndpointType | string;

  /**
   * <p>The ID of the VPC in which the endpoint will be used.</p>
   */
  VpcId: string | undefined;

  /**
   * <p>The service name. To get a list of available services, use the <a>DescribeVpcEndpointServices</a> request, or get the name from the service
   *             provider.</p>
   */
  ServiceName: string | undefined;

  /**
   * <p>(Interface and gateway endpoints) A policy to attach to the endpoint that controls access to the
   *             service. The policy must be in valid JSON format. If this parameter is not specified, we
   *             attach a default policy that allows full access to the service.</p>
   */
  PolicyDocument?: string;

  /**
   * <p>(Gateway endpoint) One or more route table IDs.</p>
   */
  RouteTableIds?: string[];

  /**
   * <p>(Interface and Gateway Load Balancer endpoints) The ID of one or more subnets in which to create an endpoint
   *             network interface. For a Gateway Load Balancer endpoint, you can specify one subnet only.</p>
   */
  SubnetIds?: string[];

  /**
   * <p>(Interface endpoint) The ID of one or more security groups to associate with the
   *             endpoint network interface.</p>
   */
  SecurityGroupIds?: string[];

  /**
   * <p>The IP address type for the endpoint.</p>
   */
  IpAddressType?: IpAddressType | string;

  /**
   * <p>The DNS options for the endpoint.</p>
   */
  DnsOptions?: DnsOptionsSpecification;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">How to ensure
   *                 idempotency</a>.</p>
   */
  ClientToken?: string;

  /**
   * <p>(Interface endpoint) Indicates whether to associate a private hosted zone with the
   *             specified VPC. The private hosted zone contains a record set for the default public DNS
   *             name for the service for the Region (for example,
   *                 <code>kinesis.us-east-1.amazonaws.com</code>), which resolves to the private IP
   *             addresses of the endpoint network interfaces in the VPC. This enables you to make
   *             requests to the default public DNS name for the service instead of the public DNS names
   *             that are automatically generated by the VPC endpoint service.</p>
   *         <p>To use a private hosted zone, you must set the following VPC attributes to
   *             <code>true</code>: <code>enableDnsHostnames</code> and
   *             <code>enableDnsSupport</code>. Use <a>ModifyVpcAttribute</a> to set the VPC
   *             attributes.</p>
   *         <p>Default: <code>true</code>
   *          </p>
   */
  PrivateDnsEnabled?: boolean;

  /**
   * <p>The tags to associate with the endpoint.</p>
   */
  TagSpecifications?: TagSpecification[];
}

/**
 * <p>Describes a DNS entry.</p>
 */
export interface DnsEntry {
  /**
   * <p>The DNS name.</p>
   */
  DnsName?: string;

  /**
   * <p>The ID of the private hosted zone.</p>
   */
  HostedZoneId?: string;
}

/**
 * <p>Describes the DNS options for an endpoint.</p>
 */
export interface DnsOptions {
  /**
   * <p>The DNS records created for the endpoint.</p>
   */
  DnsRecordIpType?: DnsRecordIpType | string;
}

/**
 * <p>Describes a security group.</p>
 */
export interface SecurityGroupIdentifier {
  /**
   * <p>The ID of the security group.</p>
   */
  GroupId?: string;

  /**
   * <p>The name of the security group.</p>
   */
  GroupName?: string;
}

/**
 * <p>The last error that occurred for a VPC endpoint.</p>
 */
export interface LastError {
  /**
   * <p>The error message for the VPC endpoint error.</p>
   */
  Message?: string;

  /**
   * <p>The error code for the VPC endpoint error.</p>
   */
  Code?: string;
}

export enum State {
  Available = "Available",
  Deleted = "Deleted",
  Deleting = "Deleting",
  Expired = "Expired",
  Failed = "Failed",
  Pending = "Pending",
  PendingAcceptance = "PendingAcceptance",
  Rejected = "Rejected",
}

/**
 * <p>Describes a VPC endpoint.</p>
 */
export interface VpcEndpoint {
  /**
   * <p>The ID of the endpoint.</p>
   */
  VpcEndpointId?: string;

  /**
   * <p>The type of endpoint.</p>
   */
  VpcEndpointType?: VpcEndpointType | string;

  /**
   * <p>The ID of the VPC to which the endpoint is associated.</p>
   */
  VpcId?: string;

  /**
   * <p>The name of the service to which the endpoint is associated.</p>
   */
  ServiceName?: string;

  /**
   * <p>The state of the endpoint.</p>
   */
  State?: State | string;

  /**
   * <p>The policy document associated with the endpoint, if applicable.</p>
   */
  PolicyDocument?: string;

  /**
   * <p>(Gateway endpoint) One or more route tables associated with the endpoint.</p>
   */
  RouteTableIds?: string[];

  /**
   * <p>(Interface endpoint) The subnets for the endpoint.</p>
   */
  SubnetIds?: string[];

  /**
   * <p>(Interface endpoint) Information about the security groups that are associated with
   *             the network interface.</p>
   */
  Groups?: SecurityGroupIdentifier[];

  /**
   * <p>The IP address type for the endpoint.</p>
   */
  IpAddressType?: IpAddressType | string;

  /**
   * <p>The DNS options for the endpoint.</p>
   */
  DnsOptions?: DnsOptions;

  /**
   * <p>(Interface endpoint) Indicates whether the VPC is associated with a private hosted zone.</p>
   */
  PrivateDnsEnabled?: boolean;

  /**
   * <p>Indicates whether the endpoint is being managed by its service.</p>
   */
  RequesterManaged?: boolean;

  /**
   * <p>(Interface endpoint) One or more network interfaces for the endpoint.</p>
   */
  NetworkInterfaceIds?: string[];

  /**
   * <p>(Interface endpoint) The DNS entries for the endpoint.</p>
   */
  DnsEntries?: DnsEntry[];

  /**
   * <p>The date and time that the endpoint was created.</p>
   */
  CreationTimestamp?: Date;

  /**
   * <p>Any tags assigned to the endpoint.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The ID of the Amazon Web Services account that owns the endpoint.</p>
   */
  OwnerId?: string;

  /**
   * <p>The last error that occurred for endpoint.</p>
   */
  LastError?: LastError;
}

/**
 * <p>Contains the output of CreateVpcEndpoint.</p>
 */
export interface CreateVpcEndpointResult {
  /**
   * <p>Information about the endpoint.</p>
   */
  VpcEndpoint?: VpcEndpoint;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request.</p>
   */
  ClientToken?: string;
}

export interface CreateVpcEndpointConnectionNotificationRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the endpoint service.</p>
   */
  ServiceId?: string;

  /**
   * <p>The ID of the endpoint.</p>
   */
  VpcEndpointId?: string;

  /**
   * <p>The ARN of the SNS topic for the notifications.</p>
   */
  ConnectionNotificationArn: string | undefined;

  /**
   * <p>One or more endpoint events for which to receive notifications. Valid values are
   *                 <code>Accept</code>, <code>Connect</code>, <code>Delete</code>, and
   *                 <code>Reject</code>.</p>
   */
  ConnectionEvents: string[] | undefined;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">How to ensure
   *                 idempotency</a>.</p>
   */
  ClientToken?: string;
}

export enum ConnectionNotificationState {
  Disabled = "Disabled",
  Enabled = "Enabled",
}

export enum ConnectionNotificationType {
  Topic = "Topic",
}

/**
 * <p>Describes a connection notification for a VPC endpoint or VPC endpoint
 *             service.</p>
 */
export interface ConnectionNotification {
  /**
   * <p>The ID of the notification.</p>
   */
  ConnectionNotificationId?: string;

  /**
   * <p>The ID of the endpoint service.</p>
   */
  ServiceId?: string;

  /**
   * <p>The ID of the VPC endpoint.</p>
   */
  VpcEndpointId?: string;

  /**
   * <p>The type of notification.</p>
   */
  ConnectionNotificationType?: ConnectionNotificationType | string;

  /**
   * <p>The ARN of the SNS topic for the notification.</p>
   */
  ConnectionNotificationArn?: string;

  /**
   * <p>The events for the notification. Valid values are <code>Accept</code>,
   *                 <code>Connect</code>, <code>Delete</code>, and <code>Reject</code>.</p>
   */
  ConnectionEvents?: string[];

  /**
   * <p>The state of the notification.</p>
   */
  ConnectionNotificationState?: ConnectionNotificationState | string;
}

export interface CreateVpcEndpointConnectionNotificationResult {
  /**
   * <p>Information about the notification.</p>
   */
  ConnectionNotification?: ConnectionNotification;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request.</p>
   */
  ClientToken?: string;
}

export interface CreateVpcEndpointServiceConfigurationRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>Indicates whether requests from service consumers to create an endpoint to your service must
   *             be accepted manually.</p>
   */
  AcceptanceRequired?: boolean;

  /**
   * <p>(Interface endpoint configuration) The private DNS name to assign to the VPC endpoint service.</p>
   */
  PrivateDnsName?: string;

  /**
   * <p>The Amazon Resource Names (ARNs) of one or more Network Load Balancers for your
   *             service.</p>
   */
  NetworkLoadBalancerArns?: string[];

  /**
   * <p>The Amazon Resource Names (ARNs) of one or more Gateway Load Balancers.</p>
   */
  GatewayLoadBalancerArns?: string[];

  /**
   * <p>The supported IP address types. The possible values are <code>ipv4</code> and <code>ipv6</code>.</p>
   */
  SupportedIpAddressTypes?: string[];

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
   *             For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Run_Instance_Idempotency.html">How to ensure
   *                 idempotency</a>.</p>
   */
  ClientToken?: string;

  /**
   * <p>The tags to associate with the service.</p>
   */
  TagSpecifications?: TagSpecification[];
}

export enum PayerResponsibility {
  ServiceOwner = "ServiceOwner",
}

export enum DnsNameState {
  Failed = "failed",
  PendingVerification = "pendingVerification",
  Verified = "verified",
}

/**
 * <p>Information about the private DNS name for the service endpoint.</p>
 */
export interface PrivateDnsNameConfiguration {
  /**
   * <p>The verification state of the VPC endpoint service.</p>
   *         <p>>Consumers
   *             of the endpoint service can use the private name only when the state is
   *                 <code>verified</code>.</p>
   */
  State?: DnsNameState | string;

  /**
   * <p>The endpoint service verification type, for example TXT.</p>
   */
  Type?: string;

  /**
   * <p>The value the service provider adds to the private DNS name domain record before verification.</p>
   */
  Value?: string;

  /**
   * <p>The name of the record subdomain the service provider needs to create. The service provider adds the <code>value</code> text to the <code>name</code>.</p>
   */
  Name?: string;
}

export enum ServiceState {
  Available = "Available",
  Deleted = "Deleted",
  Deleting = "Deleting",
  Failed = "Failed",
  Pending = "Pending",
}

export enum ServiceType {
  Gateway = "Gateway",
  GatewayLoadBalancer = "GatewayLoadBalancer",
  Interface = "Interface",
}

/**
 * <p>Describes the type of service for a VPC endpoint.</p>
 */
export interface ServiceTypeDetail {
  /**
   * <p>The type of service.</p>
   */
  ServiceType?: ServiceType | string;
}

export enum ServiceConnectivityType {
  ipv4 = "ipv4",
  ipv6 = "ipv6",
}

/**
 * <p>Describes a service configuration for a VPC endpoint service.</p>
 */
export interface ServiceConfiguration {
  /**
   * <p>The type of service.</p>
   */
  ServiceType?: ServiceTypeDetail[];

  /**
   * <p>The ID of the service.</p>
   */
  ServiceId?: string;

  /**
   * <p>The name of the service.</p>
   */
  ServiceName?: string;

  /**
   * <p>The service state.</p>
   */
  ServiceState?: ServiceState | string;

  /**
   * <p>The Availability Zones in which the service is available.</p>
   */
  AvailabilityZones?: string[];

  /**
   * <p>Indicates whether requests from other Amazon Web Services accounts to create an endpoint to the service must first be accepted.</p>
   */
  AcceptanceRequired?: boolean;

  /**
   * <p>Indicates whether the service manages its VPC endpoints. Management of the service VPC
   *             endpoints using the VPC endpoint API is restricted.</p>
   */
  ManagesVpcEndpoints?: boolean;

  /**
   * <p>The Amazon Resource Names (ARNs) of the Network Load Balancers for the service.</p>
   */
  NetworkLoadBalancerArns?: string[];

  /**
   * <p>The Amazon Resource Names (ARNs) of the Gateway Load Balancers for the service.</p>
   */
  GatewayLoadBalancerArns?: string[];

  /**
   * <p>The supported IP address types.</p>
   */
  SupportedIpAddressTypes?: (ServiceConnectivityType | string)[];

  /**
   * <p>The DNS names for the service.</p>
   */
  BaseEndpointDnsNames?: string[];

  /**
   * <p>The private DNS name for the service.</p>
   */
  PrivateDnsName?: string;

  /**
   * <p>Information about the endpoint service private DNS name configuration.</p>
   */
  PrivateDnsNameConfiguration?: PrivateDnsNameConfiguration;

  /**
   * <p>The payer responsibility.</p>
   */
  PayerResponsibility?: PayerResponsibility | string;

  /**
   * <p>Any tags assigned to the service.</p>
   */
  Tags?: Tag[];
}

export interface CreateVpcEndpointServiceConfigurationResult {
  /**
   * <p>Information about the service configuration.</p>
   */
  ServiceConfiguration?: ServiceConfiguration;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request.</p>
   */
  ClientToken?: string;
}

export interface CreateVpcPeeringConnectionRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The Amazon Web Services account ID of the owner of the accepter VPC.</p>
   *          <p>Default: Your Amazon Web Services account ID</p>
   */
  PeerOwnerId?: string;

  /**
   * <p>The ID of the VPC with which you are creating the VPC peering connection. You must
   * 			specify this parameter in the request.</p>
   */
  PeerVpcId?: string;

  /**
   * <p>The ID of the requester VPC. You must specify this parameter in the
   * 			request.</p>
   */
  VpcId?: string;

  /**
   * <p>The Region code for the accepter VPC, if the accepter VPC is located in a Region
   *             other than the Region in which you make the request.</p>
   * 		       <p>Default: The Region in which you make the request.</p>
   */
  PeerRegion?: string;

  /**
   * <p>The tags to assign to the peering connection.</p>
   */
  TagSpecifications?: TagSpecification[];
}

export interface CreateVpcPeeringConnectionResult {
  /**
   * <p>Information about the VPC peering connection.</p>
   */
  VpcPeeringConnection?: VpcPeeringConnection;
}

export enum TunnelInsideIpVersion {
  ipv4 = "ipv4",
  ipv6 = "ipv6",
}

/**
 * <p>The IKE version that is permitted for the VPN tunnel.</p>
 */
export interface IKEVersionsRequestListValue {
  /**
   * <p>The IKE version.</p>
   */
  Value?: string;
}

/**
 * <p>Options for sending VPN tunnel logs to CloudWatch.</p>
 */
export interface CloudWatchLogOptionsSpecification {
  /**
   * <p>Enable or disable VPN tunnel logging feature. Default value is <code>False</code>.</p>
   *         <p>Valid values: <code>True</code> | <code>False</code>
   *          </p>
   */
  LogEnabled?: boolean;

  /**
   * <p>The Amazon Resource Name (ARN) of the CloudWatch log group to send logs to.</p>
   */
  LogGroupArn?: string;

  /**
   * <p>Set log format. Default format is <code>json</code>.</p>
   * 	        <p>Valid values: <code>json</code> | <code>text</code>
   *          </p>
   */
  LogOutputFormat?: string;
}

/**
 * <p>Options for logging VPN tunnel activity.</p>
 */
export interface VpnTunnelLogOptionsSpecification {
  /**
   * <p>Options for sending VPN tunnel logs to CloudWatch.</p>
   */
  CloudWatchLogOptions?: CloudWatchLogOptionsSpecification;
}

/**
 * <p>Specifies a Diffie-Hellman group number for the VPN tunnel for phase 1 IKE
 *             negotiations.</p>
 */
export interface Phase1DHGroupNumbersRequestListValue {
  /**
   * <p>The Diffie-Hellmann group number.</p>
   */
  Value?: number;
}

/**
 * <p>Specifies the encryption algorithm for the VPN tunnel for phase 1 IKE
 *             negotiations.</p>
 */
export interface Phase1EncryptionAlgorithmsRequestListValue {
  /**
   * <p>The value for the encryption algorithm.</p>
   */
  Value?: string;
}

/**
 * <p>Specifies the integrity algorithm for the VPN tunnel for phase 1 IKE
 *             negotiations.</p>
 */
export interface Phase1IntegrityAlgorithmsRequestListValue {
  /**
   * <p>The value for the integrity algorithm.</p>
   */
  Value?: string;
}

/**
 * <p>Specifies a Diffie-Hellman group number for the VPN tunnel for phase 2 IKE
 *             negotiations.</p>
 */
export interface Phase2DHGroupNumbersRequestListValue {
  /**
   * <p>The Diffie-Hellmann group number.</p>
   */
  Value?: number;
}

/**
 * <p>Specifies the encryption algorithm for the VPN tunnel for phase 2 IKE
 *             negotiations.</p>
 */
export interface Phase2EncryptionAlgorithmsRequestListValue {
  /**
   * <p>The encryption algorithm.</p>
   */
  Value?: string;
}

/**
 * <p>Specifies the integrity algorithm for the VPN tunnel for phase 2 IKE
 *             negotiations.</p>
 */
export interface Phase2IntegrityAlgorithmsRequestListValue {
  /**
   * <p>The integrity algorithm.</p>
   */
  Value?: string;
}

/**
 * <p>The tunnel options for a single VPN tunnel.</p>
 */
export interface VpnTunnelOptionsSpecification {
  /**
   * <p>The range of inside IPv4 addresses for the tunnel. Any specified CIDR blocks must be
   *             unique across all VPN connections that use the same virtual private gateway. </p>
   *         <p>Constraints: A size /30 CIDR block from the <code>169.254.0.0/16</code> range. The
   *             following CIDR blocks are reserved and cannot be used:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>169.254.0.0/30</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>169.254.1.0/30</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>169.254.2.0/30</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>169.254.3.0/30</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>169.254.4.0/30</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>169.254.5.0/30</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>169.254.169.252/30</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  TunnelInsideCidr?: string;

  /**
   * <p>The range of inside IPv6 addresses for the tunnel. Any specified CIDR blocks must be
   *             unique across all VPN connections that use the same transit gateway.</p>
   *         <p>Constraints: A size /126 CIDR block from the local <code>fd00::/8</code> range.</p>
   */
  TunnelInsideIpv6Cidr?: string;

  /**
   * <p>The pre-shared key (PSK) to establish initial authentication between the virtual
   *             private gateway and customer gateway.</p>
   *         <p>Constraints: Allowed characters are alphanumeric characters, periods (.), and
   *             underscores (_). Must be between 8 and 64 characters in length and cannot start with
   *             zero (0).</p>
   */
  PreSharedKey?: string;

  /**
   * <p>The lifetime for phase 1 of the IKE negotiation, in seconds.</p>
   *         <p>Constraints: A value between 900 and 28,800.</p>
   *         <p>Default: <code>28800</code>
   *          </p>
   */
  Phase1LifetimeSeconds?: number;

  /**
   * <p>The lifetime for phase 2 of the IKE negotiation, in seconds.</p>
   *         <p>Constraints: A value between 900 and 3,600. The value must be less than the value for
   *                 <code>Phase1LifetimeSeconds</code>.</p>
   *         <p>Default: <code>3600</code>
   *          </p>
   */
  Phase2LifetimeSeconds?: number;

  /**
   * <p>The margin time, in seconds, before the phase 2 lifetime expires, during which the
   *                 Amazon Web Services side of the VPN connection performs an IKE rekey. The exact time
   *             of the rekey is randomly selected based on the value for
   *                 <code>RekeyFuzzPercentage</code>.</p>
   *         <p>Constraints: A value between 60 and half of <code>Phase2LifetimeSeconds</code>.</p>
   *         <p>Default: <code>540</code>
   *          </p>
   */
  RekeyMarginTimeSeconds?: number;

  /**
   * <p>The percentage of the rekey window (determined by <code>RekeyMarginTimeSeconds</code>)
   *             during which the rekey time is randomly selected.</p>
   *         <p>Constraints: A value between 0 and 100.</p>
   *         <p>Default: <code>100</code>
   *          </p>
   */
  RekeyFuzzPercentage?: number;

  /**
   * <p>The number of packets in an IKE replay window.</p>
   *         <p>Constraints: A value between 64 and 2048.</p>
   *         <p>Default: <code>1024</code>
   *          </p>
   */
  ReplayWindowSize?: number;

  /**
   * <p>The number of seconds after which a DPD timeout occurs.</p>
   *         <p>Constraints: A value greater than or equal to 30.</p>
   *         <p>Default: <code>30</code>
   *          </p>
   */
  DPDTimeoutSeconds?: number;

  /**
   * <p>The action to take after DPD timeout occurs. Specify <code>restart</code> to restart
   *             the IKE initiation. Specify <code>clear</code> to end the IKE session.</p>
   *         <p>Valid Values: <code>clear</code> | <code>none</code> | <code>restart</code>
   *          </p>
   *         <p>Default: <code>clear</code>
   *          </p>
   */
  DPDTimeoutAction?: string;

  /**
   * <p>One or more encryption algorithms that are permitted for the VPN tunnel for phase 1
   *             IKE negotiations.</p>
   *         <p>Valid values: <code>AES128</code> | <code>AES256</code> | <code>AES128-GCM-16</code> |
   *                 <code>AES256-GCM-16</code>
   *          </p>
   */
  Phase1EncryptionAlgorithms?: Phase1EncryptionAlgorithmsRequestListValue[];

  /**
   * <p>One or more encryption algorithms that are permitted for the VPN tunnel for phase 2
   *             IKE negotiations.</p>
   *         <p>Valid values: <code>AES128</code> | <code>AES256</code> | <code>AES128-GCM-16</code> |
   *                 <code>AES256-GCM-16</code>
   *          </p>
   */
  Phase2EncryptionAlgorithms?: Phase2EncryptionAlgorithmsRequestListValue[];

  /**
   * <p>One or more integrity algorithms that are permitted for the VPN tunnel for phase 1 IKE
   *             negotiations.</p>
   *         <p>Valid values: <code>SHA1</code> | <code>SHA2-256</code> | <code>SHA2-384</code> |
   *                 <code>SHA2-512</code>
   *          </p>
   */
  Phase1IntegrityAlgorithms?: Phase1IntegrityAlgorithmsRequestListValue[];

  /**
   * <p>One or more integrity algorithms that are permitted for the VPN tunnel for phase 2 IKE
   *             negotiations.</p>
   *         <p>Valid values: <code>SHA1</code> | <code>SHA2-256</code> | <code>SHA2-384</code> |
   *                 <code>SHA2-512</code>
   *          </p>
   */
  Phase2IntegrityAlgorithms?: Phase2IntegrityAlgorithmsRequestListValue[];

  /**
   * <p>One or more Diffie-Hellman group numbers that are permitted for the VPN tunnel for
   *             phase 1 IKE negotiations.</p>
   *         <p>Valid values: <code>2</code> | <code>14</code> | <code>15</code> | <code>16</code> |
   *                 <code>17</code> | <code>18</code> | <code>19</code> | <code>20</code> |
   *                 <code>21</code> | <code>22</code> | <code>23</code> | <code>24</code>
   *          </p>
   */
  Phase1DHGroupNumbers?: Phase1DHGroupNumbersRequestListValue[];

  /**
   * <p>One or more Diffie-Hellman group numbers that are permitted for the VPN tunnel for
   *             phase 2 IKE negotiations.</p>
   *         <p>Valid values: <code>2</code> | <code>5</code> | <code>14</code> | <code>15</code> |
   *                 <code>16</code> | <code>17</code> | <code>18</code> | <code>19</code> |
   *                 <code>20</code> | <code>21</code> | <code>22</code> | <code>23</code> |
   *                 <code>24</code>
   *          </p>
   */
  Phase2DHGroupNumbers?: Phase2DHGroupNumbersRequestListValue[];

  /**
   * <p>The IKE versions that are permitted for the VPN tunnel.</p>
   *         <p>Valid values: <code>ikev1</code> | <code>ikev2</code>
   *          </p>
   */
  IKEVersions?: IKEVersionsRequestListValue[];

  /**
   * <p>The action to take when the establishing the tunnel for the VPN connection. By
   *             default, your customer gateway device must initiate the IKE negotiation and bring up the
   *             tunnel. Specify <code>start</code> for Amazon Web Services to initiate the IKE
   *             negotiation.</p>
   *         <p>Valid Values: <code>add</code> | <code>start</code>
   *          </p>
   *         <p>Default: <code>add</code>
   *          </p>
   */
  StartupAction?: string;

  /**
   * <p>Options for logging VPN tunnel activity.</p>
   */
  LogOptions?: VpnTunnelLogOptionsSpecification;
}

/**
 * <p>Describes VPN connection options.</p>
 */
export interface VpnConnectionOptionsSpecification {
  /**
   * <p>Indicate whether to enable acceleration for the VPN connection.</p>
   *         <p>Default: <code>false</code>
   *          </p>
   */
  EnableAcceleration?: boolean;

  /**
   * <p>Indicate whether the VPN connection uses static routes only. If you are creating a VPN
   *             connection for a device that does not support BGP, you must specify <code>true</code>.
   *             Use <a>CreateVpnConnectionRoute</a> to create a static route.</p>
   *         <p>Default: <code>false</code>
   *          </p>
   */
  StaticRoutesOnly?: boolean;

  /**
   * <p>Indicate whether the VPN tunnels process IPv4 or IPv6 traffic.</p>
   *         <p>Default: <code>ipv4</code>
   *          </p>
   */
  TunnelInsideIpVersion?: TunnelInsideIpVersion | string;

  /**
   * <p>The tunnel options for the VPN connection.</p>
   */
  TunnelOptions?: VpnTunnelOptionsSpecification[];

  /**
   * <p>The IPv4 CIDR on the customer gateway (on-premises) side of the VPN connection.</p>
   *         <p>Default: <code>0.0.0.0/0</code>
   *          </p>
   */
  LocalIpv4NetworkCidr?: string;

  /**
   * <p>The IPv4 CIDR on the Amazon Web Services side of the VPN connection.</p>
   *         <p>Default: <code>0.0.0.0/0</code>
   *          </p>
   */
  RemoteIpv4NetworkCidr?: string;

  /**
   * <p>The IPv6 CIDR on the customer gateway (on-premises) side of the VPN connection.</p>
   *         <p>Default: <code>::/0</code>
   *          </p>
   */
  LocalIpv6NetworkCidr?: string;

  /**
   * <p>The IPv6 CIDR on the Amazon Web Services side of the VPN connection.</p>
   *         <p>Default: <code>::/0</code>
   *          </p>
   */
  RemoteIpv6NetworkCidr?: string;

  /**
   * <p>The type of IPv4 address assigned to the outside interface of the customer gateway device.</p>
   *         <p>Valid values: <code>PrivateIpv4</code> | <code>PublicIpv4</code>
   *          </p>
   *         <p>Default: <code>PublicIpv4</code>
   *          </p>
   */
  OutsideIpAddressType?: string;

  /**
   * <p>The transit gateway attachment ID to use for the VPN tunnel.</p>
   *         <p>Required if <code>OutsideIpAddressType</code> is set to <code>PrivateIpv4</code>.</p>
   */
  TransportTransitGatewayAttachmentId?: string;
}

/**
 * <p>Contains the parameters for CreateVpnConnection.</p>
 */
export interface CreateVpnConnectionRequest {
  /**
   * <p>The ID of the customer gateway.</p>
   */
  CustomerGatewayId: string | undefined;

  /**
   * <p>The type of VPN connection (<code>ipsec.1</code>).</p>
   */
  Type: string | undefined;

  /**
   * <p>The ID of the virtual private gateway. If you specify a virtual private gateway, you
   *             cannot specify a transit gateway.</p>
   */
  VpnGatewayId?: string;

  /**
   * <p>The ID of the transit gateway. If you specify a transit gateway, you cannot specify a virtual private
   *             gateway.</p>
   */
  TransitGatewayId?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually
   *             making the request, and provides an error response. If you have the required
   *             permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is
   *                 <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The options for the VPN connection.</p>
   */
  Options?: VpnConnectionOptionsSpecification;

  /**
   * <p>The tags to apply to the VPN connection.</p>
   */
  TagSpecifications?: TagSpecification[];
}

export enum GatewayAssociationState {
  associated = "associated",
  associating = "associating",
  disassociating = "disassociating",
  not_associated = "not-associated",
}

/**
 * <p>The internet key exchange (IKE) version permitted for the VPN tunnel.</p>
 */
export interface IKEVersionsListValue {
  /**
   * <p>The IKE version.</p>
   */
  Value?: string;
}

/**
 * <p>Options for sending VPN tunnel logs to CloudWatch.</p>
 */
export interface CloudWatchLogOptions {
  /**
   * <p>Status of VPN tunnel logging feature. Default value is <code>False</code>.</p>
   *         <p>Valid values: <code>True</code> | <code>False</code>
   *          </p>
   */
  LogEnabled?: boolean;

  /**
   * <p>The Amazon Resource Name (ARN) of the CloudWatch log group to send logs to.</p>
   */
  LogGroupArn?: string;

  /**
   * <p>Configured log format. Default format is <code>json</code>.</p>
   *         <p>Valid values: <code>json</code> | <code>text</code>
   *          </p>
   */
  LogOutputFormat?: string;
}

/**
 * <p>Options for logging VPN tunnel activity.</p>
 */
export interface VpnTunnelLogOptions {
  /**
   * <p>Options for sending VPN tunnel logs to CloudWatch.</p>
   */
  CloudWatchLogOptions?: CloudWatchLogOptions;
}

/**
 * <p>The Diffie-Hellmann group number for phase 1 IKE negotiations.</p>
 */
export interface Phase1DHGroupNumbersListValue {
  /**
   * <p>The Diffie-Hellmann group number.</p>
   */
  Value?: number;
}

/**
 * <p>The encryption algorithm for phase 1 IKE negotiations.</p>
 */
export interface Phase1EncryptionAlgorithmsListValue {
  /**
   * <p>The value for the encryption algorithm.</p>
   */
  Value?: string;
}

/**
 * <p>The integrity algorithm for phase 1 IKE negotiations.</p>
 */
export interface Phase1IntegrityAlgorithmsListValue {
  /**
   * <p>The value for the integrity algorithm.</p>
   */
  Value?: string;
}

/**
 * <p>The Diffie-Hellmann group number for phase 2 IKE negotiations.</p>
 */
export interface Phase2DHGroupNumbersListValue {
  /**
   * <p>The Diffie-Hellmann group number.</p>
   */
  Value?: number;
}

/**
 * <p>The encryption algorithm for phase 2 IKE negotiations.</p>
 */
export interface Phase2EncryptionAlgorithmsListValue {
  /**
   * <p>The encryption algorithm.</p>
   */
  Value?: string;
}

/**
 * <p>The integrity algorithm for phase 2 IKE negotiations.</p>
 */
export interface Phase2IntegrityAlgorithmsListValue {
  /**
   * <p>The integrity algorithm.</p>
   */
  Value?: string;
}

/**
 * <p>The VPN tunnel options.</p>
 */
export interface TunnelOption {
  /**
   * <p>The external IP address of the VPN tunnel.</p>
   */
  OutsideIpAddress?: string;

  /**
   * <p>The range of inside IPv4 addresses for the tunnel.</p>
   */
  TunnelInsideCidr?: string;

  /**
   * <p>The range of inside IPv6 addresses for the tunnel.</p>
   */
  TunnelInsideIpv6Cidr?: string;

  /**
   * <p>The pre-shared key (PSK) to establish initial authentication between the virtual
   *             private gateway and the customer gateway.</p>
   */
  PreSharedKey?: string;

  /**
   * <p>The lifetime for phase 1 of the IKE negotiation, in seconds.</p>
   */
  Phase1LifetimeSeconds?: number;

  /**
   * <p>The lifetime for phase 2 of the IKE negotiation, in seconds.</p>
   */
  Phase2LifetimeSeconds?: number;

  /**
   * <p>The margin time, in seconds, before the phase 2 lifetime expires, during which the
   *                 Amazon Web Services side of the VPN connection performs an IKE rekey.</p>
   */
  RekeyMarginTimeSeconds?: number;

  /**
   * <p>The percentage of the rekey window determined by <code>RekeyMarginTimeSeconds</code>
   *             during which the rekey time is randomly selected.</p>
   */
  RekeyFuzzPercentage?: number;

  /**
   * <p>The number of packets in an IKE replay window.</p>
   */
  ReplayWindowSize?: number;

  /**
   * <p>The number of seconds after which a DPD timeout occurs.</p>
   */
  DpdTimeoutSeconds?: number;

  /**
   * <p>The action to take after a DPD timeout occurs.</p>
   */
  DpdTimeoutAction?: string;

  /**
   * <p>The permitted encryption algorithms for the VPN tunnel for phase 1 IKE
   *             negotiations.</p>
   */
  Phase1EncryptionAlgorithms?: Phase1EncryptionAlgorithmsListValue[];

  /**
   * <p>The permitted encryption algorithms for the VPN tunnel for phase 2 IKE
   *             negotiations.</p>
   */
  Phase2EncryptionAlgorithms?: Phase2EncryptionAlgorithmsListValue[];

  /**
   * <p>The permitted integrity algorithms for the VPN tunnel for phase 1 IKE
   *             negotiations.</p>
   */
  Phase1IntegrityAlgorithms?: Phase1IntegrityAlgorithmsListValue[];

  /**
   * <p>The permitted integrity algorithms for the VPN tunnel for phase 2 IKE
   *             negotiations.</p>
   */
  Phase2IntegrityAlgorithms?: Phase2IntegrityAlgorithmsListValue[];

  /**
   * <p>The permitted Diffie-Hellman group numbers for the VPN tunnel for phase 1 IKE
   *             negotiations.</p>
   */
  Phase1DHGroupNumbers?: Phase1DHGroupNumbersListValue[];

  /**
   * <p>The permitted Diffie-Hellman group numbers for the VPN tunnel for phase 2 IKE
   *             negotiations.</p>
   */
  Phase2DHGroupNumbers?: Phase2DHGroupNumbersListValue[];

  /**
   * <p>The IKE versions that are permitted for the VPN tunnel.</p>
   */
  IkeVersions?: IKEVersionsListValue[];

  /**
   * <p>The action to take when the establishing the VPN tunnels for a VPN connection.</p>
   */
  StartupAction?: string;

  /**
   * <p>Options for logging VPN tunnel activity.</p>
   */
  LogOptions?: VpnTunnelLogOptions;
}

/**
 * <p>Describes VPN connection options.</p>
 */
export interface VpnConnectionOptions {
  /**
   * <p>Indicates whether acceleration is enabled for the VPN connection.</p>
   */
  EnableAcceleration?: boolean;

  /**
   * <p>Indicates whether the VPN connection uses static routes only. Static routes must be
   *             used for devices that don't support BGP.</p>
   */
  StaticRoutesOnly?: boolean;

  /**
   * <p>The IPv4 CIDR on the customer gateway (on-premises) side of the VPN connection.</p>
   */
  LocalIpv4NetworkCidr?: string;

  /**
   * <p>The IPv4 CIDR on the Amazon Web Services side of the VPN connection.</p>
   */
  RemoteIpv4NetworkCidr?: string;

  /**
   * <p>The IPv6 CIDR on the customer gateway (on-premises) side of the VPN connection.</p>
   */
  LocalIpv6NetworkCidr?: string;

  /**
   * <p>The IPv6 CIDR on the Amazon Web Services side of the VPN connection.</p>
   */
  RemoteIpv6NetworkCidr?: string;

  /**
   * <p>The type of IPv4 address assigned to the outside interface of the customer gateway.</p>
   *         <p>Valid values: <code>PrivateIpv4</code> | <code>PublicIpv4</code>
   *          </p>
   *         <p>Default: <code>PublicIpv4</code>
   *          </p>
   */
  OutsideIpAddressType?: string;

  /**
   * <p>The transit gateway attachment ID in use for the VPN tunnel.</p>
   */
  TransportTransitGatewayAttachmentId?: string;

  /**
   * <p>Indicates whether the VPN tunnels process IPv4 or IPv6 traffic.</p>
   */
  TunnelInsideIpVersion?: TunnelInsideIpVersion | string;

  /**
   * <p>Indicates the VPN tunnel options.</p>
   */
  TunnelOptions?: TunnelOption[];
}

export enum VpnStaticRouteSource {
  Static = "Static",
}

export enum VpnState {
  available = "available",
  deleted = "deleted",
  deleting = "deleting",
  pending = "pending",
}

/**
 * <p>Describes a static route for a VPN connection.</p>
 */
export interface VpnStaticRoute {
  /**
   * <p>The CIDR block associated with the local subnet of the customer data center.</p>
   */
  DestinationCidrBlock?: string;

  /**
   * <p>Indicates how the routes were provided.</p>
   */
  Source?: VpnStaticRouteSource | string;

  /**
   * <p>The current state of the static route.</p>
   */
  State?: VpnState | string;
}

export enum TelemetryStatus {
  DOWN = "DOWN",
  UP = "UP",
}

/**
 * <p>Describes telemetry for a VPN tunnel.</p>
 */
export interface VgwTelemetry {
  /**
   * <p>The number of accepted routes.</p>
   */
  AcceptedRouteCount?: number;

  /**
   * <p>The date and time of the last change in status.</p>
   */
  LastStatusChange?: Date;

  /**
   * <p>The Internet-routable IP address of the virtual private gateway's outside
   *             interface.</p>
   */
  OutsideIpAddress?: string;

  /**
   * <p>The status of the VPN tunnel.</p>
   */
  Status?: TelemetryStatus | string;

  /**
   * <p>If an error occurs, a description of the error.</p>
   */
  StatusMessage?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the VPN tunnel endpoint certificate.</p>
   */
  CertificateArn?: string;
}

/**
 * <p>Describes a VPN connection.</p>
 */
export interface VpnConnection {
  /**
   * <p>The configuration information for the VPN connection's customer gateway (in the native
   *             XML format). This element is always present in the <a>CreateVpnConnection</a>
   *             response; however, it's present in the <a>DescribeVpnConnections</a> response
   *             only if the VPN connection is in the <code>pending</code> or <code>available</code>
   *             state.</p>
   */
  CustomerGatewayConfiguration?: string;

  /**
   * <p>The ID of the customer gateway at your end of the VPN connection.</p>
   */
  CustomerGatewayId?: string;

  /**
   * <p>The category of the VPN connection. A value of <code>VPN</code> indicates an Amazon Web Services VPN connection. A value of <code>VPN-Classic</code> indicates an Amazon Web Services Classic VPN connection.</p>
   */
  Category?: string;

  /**
   * <p>The current state of the VPN connection.</p>
   */
  State?: VpnState | string;

  /**
   * <p>The type of VPN connection.</p>
   */
  Type?: GatewayType | string;

  /**
   * <p>The ID of the VPN connection.</p>
   */
  VpnConnectionId?: string;

  /**
   * <p>The ID of the virtual private gateway at the Amazon Web Services side of the VPN
   *             connection.</p>
   */
  VpnGatewayId?: string;

  /**
   * <p>The ID of the transit gateway associated with the VPN connection.</p>
   */
  TransitGatewayId?: string;

  /**
   * <p>The ARN of the core network.</p>
   */
  CoreNetworkArn?: string;

  /**
   * <p>The ARN of the core network attachment.</p>
   */
  CoreNetworkAttachmentArn?: string;

  /**
   * <p>The current state of the gateway association.</p>
   */
  GatewayAssociationState?: GatewayAssociationState | string;

  /**
   * <p>The VPN connection options.</p>
   */
  Options?: VpnConnectionOptions;

  /**
   * <p>The static routes associated with the VPN connection.</p>
   */
  Routes?: VpnStaticRoute[];

  /**
   * <p>Any tags assigned to the VPN connection.</p>
   */
  Tags?: Tag[];

  /**
   * <p>Information about the VPN tunnel.</p>
   */
  VgwTelemetry?: VgwTelemetry[];
}

/**
 * <p>Contains the output of CreateVpnConnection.</p>
 */
export interface CreateVpnConnectionResult {
  /**
   * <p>Information about the VPN connection.</p>
   */
  VpnConnection?: VpnConnection;
}

/**
 * <p>Contains the parameters for CreateVpnConnectionRoute.</p>
 */
export interface CreateVpnConnectionRouteRequest {
  /**
   * <p>The CIDR block associated with the local subnet of the customer network.</p>
   */
  DestinationCidrBlock: string | undefined;

  /**
   * <p>The ID of the VPN connection.</p>
   */
  VpnConnectionId: string | undefined;
}

/**
 * <p>Contains the parameters for CreateVpnGateway.</p>
 */
export interface CreateVpnGatewayRequest {
  /**
   * <p>The Availability Zone for the virtual private gateway.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>The type of VPN connection this virtual private gateway supports.</p>
   */
  Type: GatewayType | string | undefined;

  /**
   * <p>The tags to apply to the virtual private gateway.</p>
   */
  TagSpecifications?: TagSpecification[];

  /**
   * <p>A private Autonomous System Number (ASN) for the Amazon side of a BGP session. If
   *             you're using a 16-bit ASN, it must be in the 64512 to 65534 range. If you're using a
   *             32-bit ASN, it must be in the 4200000000 to 4294967294 range.</p>
   *         <p>Default: 64512</p>
   */
  AmazonSideAsn?: number;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually
   *             making the request, and provides an error response. If you have the required
   *             permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is
   *                 <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * <p>Describes a virtual private gateway.</p>
 */
export interface VpnGateway {
  /**
   * <p>The Availability Zone where the virtual private gateway was created, if applicable.
   *             This field may be empty or not returned.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>The current state of the virtual private gateway.</p>
   */
  State?: VpnState | string;

  /**
   * <p>The type of VPN connection the virtual private gateway supports.</p>
   */
  Type?: GatewayType | string;

  /**
   * <p>Any VPCs attached to the virtual private gateway.</p>
   */
  VpcAttachments?: VpcAttachment[];

  /**
   * <p>The ID of the virtual private gateway.</p>
   */
  VpnGatewayId?: string;

  /**
   * <p>The private Autonomous System Number (ASN) for the Amazon side of a BGP
   *             session.</p>
   */
  AmazonSideAsn?: number;

  /**
   * <p>Any tags assigned to the virtual private gateway.</p>
   */
  Tags?: Tag[];
}

/**
 * <p>Contains the output of CreateVpnGateway.</p>
 */
export interface CreateVpnGatewayResult {
  /**
   * <p>Information about the virtual private gateway.</p>
   */
  VpnGateway?: VpnGateway;
}

export interface DeleteCarrierGatewayRequest {
  /**
   * <p>The ID of the carrier gateway.</p>
   */
  CarrierGatewayId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export interface DeleteCarrierGatewayResult {
  /**
   * <p>Information about the carrier gateway.</p>
   */
  CarrierGateway?: CarrierGateway;
}

export interface DeleteClientVpnEndpointRequest {
  /**
   * <p>The ID of the Client VPN to be deleted.</p>
   */
  ClientVpnEndpointId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export interface DeleteClientVpnEndpointResult {
  /**
   * <p>The current state of the Client VPN endpoint.</p>
   */
  Status?: ClientVpnEndpointStatus;
}

export interface DeleteClientVpnRouteRequest {
  /**
   * <p>The ID of the Client VPN endpoint from which the route is to be deleted.</p>
   */
  ClientVpnEndpointId: string | undefined;

  /**
   * <p>The ID of the target subnet used by the route.</p>
   */
  TargetVpcSubnetId?: string;

  /**
   * <p>The IPv4 address range, in CIDR notation, of the route to be deleted.</p>
   */
  DestinationCidrBlock: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export interface DeleteClientVpnRouteResult {
  /**
   * <p>The current state of the route.</p>
   */
  Status?: ClientVpnRouteStatus;
}

export interface DeleteCoipCidrRequest {
  /**
   * <p> A customer-owned IP address range that you want to delete. </p>
   */
  Cidr: string | undefined;

  /**
   * <p>
   *         The ID of the customer-owned address pool.
   *       </p>
   */
  CoipPoolId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export interface DeleteCoipCidrResult {
  /**
   * <p>
   *        Information about a range of customer-owned IP addresses.
   *       </p>
   */
  CoipCidr?: CoipCidr;
}

export interface DeleteCoipPoolRequest {
  /**
   * <p>The ID of the CoIP pool that you want to delete. </p>
   */
  CoipPoolId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export interface DeleteCoipPoolResult {
  /**
   * <p>Describes a customer-owned address pool.</p>
   */
  CoipPool?: CoipPool;
}

/**
 * <p>Contains the parameters for DeleteCustomerGateway.</p>
 */
export interface DeleteCustomerGatewayRequest {
  /**
   * <p>The ID of the customer gateway.</p>
   */
  CustomerGatewayId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually
   *             making the request, and provides an error response. If you have the required
   *             permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is
   *                 <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export interface DeleteDhcpOptionsRequest {
  /**
   * <p>The ID of the DHCP options set.</p>
   */
  DhcpOptionsId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export interface DeleteEgressOnlyInternetGatewayRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the egress-only internet gateway.</p>
   */
  EgressOnlyInternetGatewayId: string | undefined;
}

export interface DeleteEgressOnlyInternetGatewayResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
   */
  ReturnCode?: boolean;
}

export interface DeleteFleetsRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The IDs of the EC2 Fleets.</p>
   */
  FleetIds: string[] | undefined;

  /**
   * <p>Indicates whether to terminate the instances when the EC2 Fleet is deleted. The default is to
   *          terminate the instances.</p>
   *          <p>To let the instances continue to run after the EC2 Fleet is deleted, specify
   *             <code>NoTerminateInstances</code>. Supported only for fleets of type
   *             <code>maintain</code> and <code>request</code>.</p>
   *          <p>For <code>instant</code> fleets, you cannot specify <code>NoTerminateInstances</code>. A
   *          deleted <code>instant</code> fleet with running instances is not supported.</p>
   */
  TerminateInstances: boolean | undefined;
}

export enum FleetStateCode {
  ACTIVE = "active",
  DELETED = "deleted",
  DELETED_RUNNING = "deleted_running",
  DELETED_TERMINATING_INSTANCES = "deleted_terminating",
  FAILED = "failed",
  MODIFYING = "modifying",
  SUBMITTED = "submitted",
}

/**
 * <p>Describes an EC2 Fleet that was successfully deleted.</p>
 */
export interface DeleteFleetSuccessItem {
  /**
   * <p>The current state of the EC2 Fleet.</p>
   */
  CurrentFleetState?: FleetStateCode | string;

  /**
   * <p>The previous state of the EC2 Fleet.</p>
   */
  PreviousFleetState?: FleetStateCode | string;

  /**
   * <p>The ID of the EC2 Fleet.</p>
   */
  FleetId?: string;
}

export enum DeleteFleetErrorCode {
  FLEET_ID_DOES_NOT_EXIST = "fleetIdDoesNotExist",
  FLEET_ID_MALFORMED = "fleetIdMalformed",
  FLEET_NOT_IN_DELETABLE_STATE = "fleetNotInDeletableState",
  UNEXPECTED_ERROR = "unexpectedError",
}

/**
 * <p>Describes an EC2 Fleet error.</p>
 */
export interface DeleteFleetError {
  /**
   * <p>The error code.</p>
   */
  Code?: DeleteFleetErrorCode | string;

  /**
   * <p>The description for the error code.</p>
   */
  Message?: string;
}

/**
 * <p>Describes an EC2 Fleet that was not successfully deleted.</p>
 */
export interface DeleteFleetErrorItem {
  /**
   * <p>The error.</p>
   */
  Error?: DeleteFleetError;

  /**
   * <p>The ID of the EC2 Fleet.</p>
   */
  FleetId?: string;
}

export interface DeleteFleetsResult {
  /**
   * <p>Information about the EC2 Fleets that are successfully deleted.</p>
   */
  SuccessfulFleetDeletions?: DeleteFleetSuccessItem[];

  /**
   * <p>Information about the EC2 Fleets that are not successfully deleted.</p>
   */
  UnsuccessfulFleetDeletions?: DeleteFleetErrorItem[];
}

export interface DeleteFlowLogsRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>One or more flow log IDs.</p>
   *         <p>Constraint: Maximum of 1000 flow log IDs.</p>
   */
  FlowLogIds: string[] | undefined;
}

export interface DeleteFlowLogsResult {
  /**
   * <p>Information about the flow logs that could not be deleted successfully.</p>
   */
  Unsuccessful?: UnsuccessfulItem[];
}

export interface DeleteFpgaImageRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the AFI.</p>
   */
  FpgaImageId: string | undefined;
}

export interface DeleteFpgaImageResult {
  /**
   * <p>Is <code>true</code> if the request succeeds, and an error otherwise.</p>
   */
  Return?: boolean;
}

export interface DeleteInstanceEventWindowRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>Specify <code>true</code> to force delete the event window. Use the force delete parameter
   *          if the event window is currently associated with targets.</p>
   */
  ForceDelete?: boolean;

  /**
   * <p>The ID of the event window.</p>
   */
  InstanceEventWindowId: string | undefined;
}

/**
 * <p>The state of the event window.</p>
 */
export interface InstanceEventWindowStateChange {
  /**
   * <p>The ID of the event window.</p>
   */
  InstanceEventWindowId?: string;

  /**
   * <p>The current state of the event window.</p>
   */
  State?: InstanceEventWindowState | string;
}

export interface DeleteInstanceEventWindowResult {
  /**
   * <p>The state of the event window.</p>
   */
  InstanceEventWindowState?: InstanceEventWindowStateChange;
}

export interface DeleteInternetGatewayRequest {
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
}

export interface DeleteIpamRequest {
  /**
   * <p>A check for whether you have the required permissions for the action without actually making the request
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the IPAM to delete.</p>
   */
  IpamId: string | undefined;

  /**
   * <p>Enables you to quickly delete an IPAM, private scopes, pools in private scopes, and
   *          any allocations in the pools in private scopes. You cannot delete the IPAM with this option if there is a pool in your public scope. If you use this option, IPAM does the following:</p>
   *          <ul>
   *             <li>
   *                <p>Deallocates any CIDRs allocated to VPC resources (such as VPCs) in pools in private scopes.</p>
   *                <note>
   *                   <p>No VPC resources are deleted as a result of enabling this option. The CIDR associated with the resource will no longer be allocated from an IPAM pool, but the CIDR itself will remain unchanged.</p>
   *                </note>
   *             </li>
   *             <li>
   *                <p>Deprovisions all IPv4 CIDRs provisioned to IPAM pools in private scopes.</p>
   *             </li>
   *             <li>
   *                <p>Deletes all IPAM pools in private scopes.</p>
   *             </li>
   *             <li>
   *                <p>Deletes all non-default private scopes in the IPAM.</p>
   *             </li>
   *             <li>
   *                <p>Deletes the default public and private scopes and the IPAM.</p>
   *             </li>
   *          </ul>
   */
  Cascade?: boolean;
}

export interface DeleteIpamResult {
  /**
   * <p>Information about the results of the deletion.</p>
   */
  Ipam?: Ipam;
}

export interface DeleteIpamPoolRequest {
  /**
   * <p>A check for whether you have the required permissions for the action without actually making the request
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the pool to delete.</p>
   */
  IpamPoolId: string | undefined;
}

export interface DeleteIpamPoolResult {
  /**
   * <p>Information about the results of the deletion.</p>
   */
  IpamPool?: IpamPool;
}

export interface DeleteIpamScopeRequest {
  /**
   * <p>A check for whether you have the required permissions for the action without actually making the request
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the scope to delete.</p>
   */
  IpamScopeId: string | undefined;
}

export interface DeleteIpamScopeResult {
  /**
   * <p>Information about the results of the deletion.</p>
   */
  IpamScope?: IpamScope;
}

export interface DeleteKeyPairRequest {
  /**
   * <p>The name of the key pair.</p>
   */
  KeyName?: string;

  /**
   * <p>The ID of the key pair.</p>
   */
  KeyPairId?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export interface DeleteLaunchTemplateRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually
   *             making the request, and provides an error response. If you have the required
   *             permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is
   *                 <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the launch template.</p>
   *         <p>You must specify either the <code>LaunchTemplateId</code> or the <code>LaunchTemplateName</code>, but not both.</p>
   */
  LaunchTemplateId?: string;

  /**
   * <p>The name of the launch template.</p>
   *         <p>You must specify either the <code>LaunchTemplateName</code> or the <code>LaunchTemplateId</code>, but not both.</p>
   */
  LaunchTemplateName?: string;
}

export interface DeleteLaunchTemplateResult {
  /**
   * <p>Information about the launch template.</p>
   */
  LaunchTemplate?: LaunchTemplate;
}

export interface DeleteLaunchTemplateVersionsRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually
   *             making the request, and provides an error response. If you have the required
   *             permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is
   *                 <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the launch template.</p>
   *         <p>You must specify either the <code>LaunchTemplateId</code> or the <code>LaunchTemplateName</code>, but not both.</p>
   */
  LaunchTemplateId?: string;

  /**
   * <p>The name of the launch template.</p>
   *         <p>You must specify either the <code>LaunchTemplateName</code> or the <code>LaunchTemplateId</code>, but not both.</p>
   */
  LaunchTemplateName?: string;

  /**
   * <p>The version numbers of one or more launch template versions to delete.</p>
   */
  Versions: string[] | undefined;
}

/**
 * <p>Describes a launch template version that was successfully deleted.</p>
 */
export interface DeleteLaunchTemplateVersionsResponseSuccessItem {
  /**
   * <p>The ID of the launch template.</p>
   */
  LaunchTemplateId?: string;

  /**
   * <p>The name of the launch template.</p>
   */
  LaunchTemplateName?: string;

  /**
   * <p>The version number of the launch template.</p>
   */
  VersionNumber?: number;
}

export enum LaunchTemplateErrorCode {
  LAUNCH_TEMPLATE_ID_DOES_NOT_EXIST = "launchTemplateIdDoesNotExist",
  LAUNCH_TEMPLATE_ID_MALFORMED = "launchTemplateIdMalformed",
  LAUNCH_TEMPLATE_NAME_DOES_NOT_EXIST = "launchTemplateNameDoesNotExist",
  LAUNCH_TEMPLATE_NAME_MALFORMED = "launchTemplateNameMalformed",
  LAUNCH_TEMPLATE_VERSION_DOES_NOT_EXIST = "launchTemplateVersionDoesNotExist",
  UNEXPECTED_ERROR = "unexpectedError",
}

/**
 * <p>Describes the error that's returned when you cannot delete a launch template
 *             version.</p>
 */
export interface ResponseError {
  /**
   * <p>The error code.</p>
   */
  Code?: LaunchTemplateErrorCode | string;

  /**
   * <p>The error message, if applicable.</p>
   */
  Message?: string;
}

/**
 * <p>Describes a launch template version that could not be deleted.</p>
 */
export interface DeleteLaunchTemplateVersionsResponseErrorItem {
  /**
   * <p>The ID of the launch template.</p>
   */
  LaunchTemplateId?: string;

  /**
   * <p>The name of the launch template.</p>
   */
  LaunchTemplateName?: string;

  /**
   * <p>The version number of the launch template.</p>
   */
  VersionNumber?: number;

  /**
   * <p>Information about the error.</p>
   */
  ResponseError?: ResponseError;
}

export interface DeleteLaunchTemplateVersionsResult {
  /**
   * <p>Information about the launch template versions that were successfully deleted.</p>
   */
  SuccessfullyDeletedLaunchTemplateVersions?: DeleteLaunchTemplateVersionsResponseSuccessItem[];

  /**
   * <p>Information about the launch template versions that could not be deleted.</p>
   */
  UnsuccessfullyDeletedLaunchTemplateVersions?: DeleteLaunchTemplateVersionsResponseErrorItem[];
}

export interface DeleteLocalGatewayRouteRequest {
  /**
   * <p>The CIDR range for the route. This must match the CIDR for the route exactly.</p>
   */
  DestinationCidrBlock: string | undefined;

  /**
   * <p>The ID of the local gateway route table.</p>
   */
  LocalGatewayRouteTableId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export interface DeleteLocalGatewayRouteResult {
  /**
   * <p>Information about the route.</p>
   */
  Route?: LocalGatewayRoute;
}

export interface DeleteLocalGatewayRouteTableRequest {
  /**
   * <p>
   *       The ID of the local gateway route table.
   *       </p>
   */
  LocalGatewayRouteTableId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export interface DeleteLocalGatewayRouteTableResult {
  /**
   * <p>Describes a local gateway route table.</p>
   */
  LocalGatewayRouteTable?: LocalGatewayRouteTable;
}

export interface DeleteLocalGatewayRouteTableVirtualInterfaceGroupAssociationRequest {
  /**
   * <p>
   *          The ID of the local gateway route table virtual interface group association.
   *       </p>
   */
  LocalGatewayRouteTableVirtualInterfaceGroupAssociationId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export interface DeleteLocalGatewayRouteTableVirtualInterfaceGroupAssociationResult {
  /**
   * <p>Describes an association between a local gateway route table and a virtual interface group.</p>
   */
  LocalGatewayRouteTableVirtualInterfaceGroupAssociation?: LocalGatewayRouteTableVirtualInterfaceGroupAssociation;
}

export interface DeleteLocalGatewayRouteTableVpcAssociationRequest {
  /**
   * <p>The ID of the association.</p>
   */
  LocalGatewayRouteTableVpcAssociationId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export interface DeleteLocalGatewayRouteTableVpcAssociationResult {
  /**
   * <p>Information about the association.</p>
   */
  LocalGatewayRouteTableVpcAssociation?: LocalGatewayRouteTableVpcAssociation;
}

export interface DeleteManagedPrefixListRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the prefix list.</p>
   */
  PrefixListId: string | undefined;
}

export interface DeleteManagedPrefixListResult {
  /**
   * <p>Information about the prefix list.</p>
   */
  PrefixList?: ManagedPrefixList;
}

export interface DeleteNatGatewayRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the NAT gateway.</p>
   */
  NatGatewayId: string | undefined;
}

export interface DeleteNatGatewayResult {
  /**
   * <p>The ID of the NAT gateway.</p>
   */
  NatGatewayId?: string;
}

export interface DeleteNetworkAclRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the network ACL.</p>
   */
  NetworkAclId: string | undefined;
}

export interface DeleteNetworkAclEntryRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>Indicates whether the rule is an egress rule.</p>
   */
  Egress: boolean | undefined;

  /**
   * <p>The ID of the network ACL.</p>
   */
  NetworkAclId: string | undefined;

  /**
   * <p>The rule number of the entry to delete.</p>
   */
  RuleNumber: number | undefined;
}

export interface DeleteNetworkInsightsAccessScopeRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the Network Access Scope.</p>
   */
  NetworkInsightsAccessScopeId: string | undefined;
}

export interface DeleteNetworkInsightsAccessScopeResult {
  /**
   * <p>The ID of the Network Access Scope.</p>
   */
  NetworkInsightsAccessScopeId?: string;
}

export interface DeleteNetworkInsightsAccessScopeAnalysisRequest {
  /**
   * <p>The ID of the Network Access Scope analysis.</p>
   */
  NetworkInsightsAccessScopeAnalysisId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export interface DeleteNetworkInsightsAccessScopeAnalysisResult {
  /**
   * <p>The ID of the Network Access Scope analysis.</p>
   */
  NetworkInsightsAccessScopeAnalysisId?: string;
}

export interface DeleteNetworkInsightsAnalysisRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the network insights analysis.</p>
   */
  NetworkInsightsAnalysisId: string | undefined;
}

export interface DeleteNetworkInsightsAnalysisResult {
  /**
   * <p>The ID of the network insights analysis.</p>
   */
  NetworkInsightsAnalysisId?: string;
}

export interface DeleteNetworkInsightsPathRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the path.</p>
   */
  NetworkInsightsPathId: string | undefined;
}

export interface DeleteNetworkInsightsPathResult {
  /**
   * <p>The ID of the path.</p>
   */
  NetworkInsightsPathId?: string;
}

/**
 * <p>Contains the parameters for DeleteNetworkInterface.</p>
 */
export interface DeleteNetworkInterfaceRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *             and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *             Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the network interface.</p>
   */
  NetworkInterfaceId: string | undefined;
}

/**
 * <p>Contains the parameters for DeleteNetworkInterfacePermission.</p>
 */
export interface DeleteNetworkInterfacePermissionRequest {
  /**
   * <p>The ID of the network interface permission.</p>
   */
  NetworkInterfacePermissionId: string | undefined;

  /**
   * <p>Specify <code>true</code> to remove the permission even if the network interface is
   * 			attached to an instance.</p>
   */
  Force?: boolean;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   * 			and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   * 			Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * <p>Contains the output for DeleteNetworkInterfacePermission.</p>
 */
export interface DeleteNetworkInterfacePermissionResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds, otherwise returns an error.</p>
   */
  Return?: boolean;
}

export interface DeletePlacementGroupRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The name of the placement group.</p>
   */
  GroupName: string | undefined;
}

export interface DeletePublicIpv4PoolRequest {
  /**
   * <p>A check for whether you have the required permissions for the action without actually making the request
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the public IPv4 pool you want to delete.</p>
   */
  PoolId: string | undefined;
}

export interface DeletePublicIpv4PoolResult {
  /**
   * <p>Information about the result of deleting the public IPv4 pool.</p>
   */
  ReturnValue?: boolean;
}

export interface DeleteQueuedReservedInstancesRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *       and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *       Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The IDs of the Reserved Instances.</p>
   */
  ReservedInstancesIds: string[] | undefined;
}

export enum DeleteQueuedReservedInstancesErrorCode {
  RESERVED_INSTANCES_ID_INVALID = "reserved-instances-id-invalid",
  RESERVED_INSTANCES_NOT_IN_QUEUED_STATE = "reserved-instances-not-in-queued-state",
  UNEXPECTED_ERROR = "unexpected-error",
}

/**
 * <p>Describes the error for a Reserved Instance whose queued purchase could not be deleted.</p>
 */
export interface DeleteQueuedReservedInstancesError {
  /**
   * <p>The error code.</p>
   */
  Code?: DeleteQueuedReservedInstancesErrorCode | string;

  /**
   * <p>The error message.</p>
   */
  Message?: string;
}

/**
 * <p>Describes a Reserved Instance whose queued purchase was not deleted.</p>
 */
export interface FailedQueuedPurchaseDeletion {
  /**
   * <p>The error.</p>
   */
  Error?: DeleteQueuedReservedInstancesError;

  /**
   * <p>The ID of the Reserved Instance.</p>
   */
  ReservedInstancesId?: string;
}

/**
 * <p>Describes a Reserved Instance whose queued purchase was successfully deleted.</p>
 */
export interface SuccessfulQueuedPurchaseDeletion {
  /**
   * <p>The ID of the Reserved Instance.</p>
   */
  ReservedInstancesId?: string;
}

export interface DeleteQueuedReservedInstancesResult {
  /**
   * <p>Information about the queued purchases that were successfully deleted.</p>
   */
  SuccessfulQueuedPurchaseDeletions?: SuccessfulQueuedPurchaseDeletion[];

  /**
   * <p>Information about the queued purchases that could not be deleted.</p>
   */
  FailedQueuedPurchaseDeletions?: FailedQueuedPurchaseDeletion[];
}

export interface DeleteRouteRequest {
  /**
   * <p>The IPv4 CIDR range for the route. The value you specify must match the CIDR for the route exactly.</p>
   */
  DestinationCidrBlock?: string;

  /**
   * <p>The IPv6 CIDR range for the route. The value you specify must match the CIDR for the route exactly.</p>
   */
  DestinationIpv6CidrBlock?: string;

  /**
   * <p>The ID of the prefix list for the route.</p>
   */
  DestinationPrefixListId?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the route table.</p>
   */
  RouteTableId: string | undefined;
}

export interface DeleteRouteTableRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the route table.</p>
   */
  RouteTableId: string | undefined;
}

export interface DeleteSecurityGroupRequest {
  /**
   * <p>The ID of the security group. Required for a nondefault VPC.</p>
   */
  GroupId?: string;

  /**
   * <p>[EC2-Classic, default VPC] The name of the security group. You can specify either the security group name or the security group ID.</p>
   */
  GroupName?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export interface DeleteSnapshotRequest {
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
 * <p>Contains the parameters for DeleteSpotDatafeedSubscription.</p>
 */
export interface DeleteSpotDatafeedSubscriptionRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually
   *             making the request, and provides an error response. If you have the required
   *             permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is
   *                 <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export interface DeleteSubnetRequest {
  /**
   * <p>The ID of the subnet.</p>
   */
  SubnetId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export interface DeleteSubnetCidrReservationRequest {
  /**
   * <p>The ID of the subnet CIDR reservation.</p>
   */
  SubnetCidrReservationId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export interface DeleteSubnetCidrReservationResult {
  /**
   * <p>Information about the deleted subnet CIDR reservation.</p>
   */
  DeletedSubnetCidrReservation?: SubnetCidrReservation;
}

export interface DeleteTagsRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The IDs of the resources, separated by spaces.</p>
   *    	     <p>Constraints: Up to 1000 resource IDs. We recommend breaking up this request into smaller batches.</p>
   */
  Resources: string[] | undefined;

  /**
   * <p>The tags to delete. Specify a tag key and an optional tag value to delete
   *             specific tags. If you specify a tag key without a tag value, we delete any tag with this
   *             key regardless of its value. If you specify a tag key with an empty string as the tag
   *             value, we delete the tag only if its value is an empty string.</p>
   *         <p>If you omit this parameter, we delete all user-defined tags for the specified
   *             resources. We do not delete Amazon Web Services-generated tags (tags that have the <code>aws:</code>
   *             prefix).</p>
   *          <p>Constraints: Up to 1000 tags.</p>
   */
  Tags?: Tag[];
}

export interface DeleteTrafficMirrorFilterRequest {
  /**
   * <p>The ID of the Traffic Mirror filter.</p>
   */
  TrafficMirrorFilterId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export interface DeleteTrafficMirrorFilterResult {
  /**
   * <p>The ID of the Traffic Mirror filter.</p>
   */
  TrafficMirrorFilterId?: string;
}

export interface DeleteTrafficMirrorFilterRuleRequest {
  /**
   * <p>The ID of the Traffic Mirror rule.</p>
   */
  TrafficMirrorFilterRuleId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export interface DeleteTrafficMirrorFilterRuleResult {
  /**
   * <p>The ID of the deleted Traffic Mirror rule.</p>
   */
  TrafficMirrorFilterRuleId?: string;
}

export interface DeleteTrafficMirrorSessionRequest {
  /**
   * <p>The ID of the Traffic Mirror session.</p>
   */
  TrafficMirrorSessionId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export interface DeleteTrafficMirrorSessionResult {
  /**
   * <p>The ID of the deleted Traffic Mirror session.</p>
   */
  TrafficMirrorSessionId?: string;
}

export interface DeleteTrafficMirrorTargetRequest {
  /**
   * <p>The ID of the Traffic Mirror target.</p>
   */
  TrafficMirrorTargetId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export interface DeleteTrafficMirrorTargetResult {
  /**
   * <p>The ID of the deleted Traffic Mirror target.</p>
   */
  TrafficMirrorTargetId?: string;
}

export interface DeleteTransitGatewayRequest {
  /**
   * <p>The ID of the transit gateway.</p>
   */
  TransitGatewayId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export interface DeleteTransitGatewayResult {
  /**
   * <p>Information about the deleted transit gateway.</p>
   */
  TransitGateway?: TransitGateway;
}

export interface DeleteTransitGatewayConnectRequest {
  /**
   * <p>The ID of the Connect attachment.</p>
   */
  TransitGatewayAttachmentId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export interface DeleteTransitGatewayConnectResult {
  /**
   * <p>Information about the deleted Connect attachment.</p>
   */
  TransitGatewayConnect?: TransitGatewayConnect;
}

export interface DeleteTransitGatewayConnectPeerRequest {
  /**
   * <p>The ID of the Connect peer.</p>
   */
  TransitGatewayConnectPeerId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export interface DeleteTransitGatewayConnectPeerResult {
  /**
   * <p>Information about the deleted Connect peer.</p>
   */
  TransitGatewayConnectPeer?: TransitGatewayConnectPeer;
}

export interface DeleteTransitGatewayMulticastDomainRequest {
  /**
   * <p>The ID of the transit gateway multicast domain.</p>
   */
  TransitGatewayMulticastDomainId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export interface DeleteTransitGatewayMulticastDomainResult {
  /**
   * <p>Information about the deleted transit gateway multicast domain.</p>
   */
  TransitGatewayMulticastDomain?: TransitGatewayMulticastDomain;
}

export interface DeleteTransitGatewayPeeringAttachmentRequest {
  /**
   * <p>The ID of the transit gateway peering attachment.</p>
   */
  TransitGatewayAttachmentId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export interface DeleteTransitGatewayPeeringAttachmentResult {
  /**
   * <p>The transit gateway peering attachment.</p>
   */
  TransitGatewayPeeringAttachment?: TransitGatewayPeeringAttachment;
}

export interface DeleteTransitGatewayPolicyTableRequest {
  /**
   * <p>The transit gateway policy table to delete.</p>
   */
  TransitGatewayPolicyTableId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export interface DeleteTransitGatewayPolicyTableResult {
  /**
   * <p>Provides details about the deleted transit gateway policy table.</p>
   */
  TransitGatewayPolicyTable?: TransitGatewayPolicyTable;
}

export interface DeleteTransitGatewayPrefixListReferenceRequest {
  /**
   * <p>The ID of the route table.</p>
   */
  TransitGatewayRouteTableId: string | undefined;

  /**
   * <p>The ID of the prefix list.</p>
   */
  PrefixListId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export interface DeleteTransitGatewayPrefixListReferenceResult {
  /**
   * <p>Information about the deleted prefix list reference.</p>
   */
  TransitGatewayPrefixListReference?: TransitGatewayPrefixListReference;
}

export interface DeleteTransitGatewayRouteRequest {
  /**
   * <p>The ID of the transit gateway route table.</p>
   */
  TransitGatewayRouteTableId: string | undefined;

  /**
   * <p>The CIDR range for the route. This must match the CIDR for the route exactly.</p>
   */
  DestinationCidrBlock: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export interface DeleteTransitGatewayRouteResult {
  /**
   * <p>Information about the route.</p>
   */
  Route?: TransitGatewayRoute;
}

export interface DeleteTransitGatewayRouteTableRequest {
  /**
   * <p>The ID of the transit gateway route table.</p>
   */
  TransitGatewayRouteTableId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export interface DeleteTransitGatewayRouteTableResult {
  /**
   * <p>Information about the deleted transit gateway route table.</p>
   */
  TransitGatewayRouteTable?: TransitGatewayRouteTable;
}

export interface DeleteTransitGatewayRouteTableAnnouncementRequest {
  /**
   * <p>The transit gateway route table ID that's being deleted. </p>
   */
  TransitGatewayRouteTableAnnouncementId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export interface DeleteTransitGatewayRouteTableAnnouncementResult {
  /**
   * <p>Provides details about a deleted transit gateway route table.</p>
   */
  TransitGatewayRouteTableAnnouncement?: TransitGatewayRouteTableAnnouncement;
}

export interface DeleteTransitGatewayVpcAttachmentRequest {
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

export interface DeleteTransitGatewayVpcAttachmentResult {
  /**
   * <p>Information about the deleted VPC attachment.</p>
   */
  TransitGatewayVpcAttachment?: TransitGatewayVpcAttachment;
}

export interface DeleteVolumeRequest {
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

export interface DeleteVpcRequest {
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

export interface DeleteVpcEndpointConnectionNotificationsRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>One or more notification IDs.</p>
   */
  ConnectionNotificationIds: string[] | undefined;
}

export interface DeleteVpcEndpointConnectionNotificationsResult {
  /**
   * <p>Information about the notifications that could not be deleted
   *             successfully.</p>
   */
  Unsuccessful?: UnsuccessfulItem[];
}

/**
 * <p>Contains the parameters for DeleteVpcEndpoints.</p>
 */
export interface DeleteVpcEndpointsRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>One or more VPC endpoint IDs.</p>
   */
  VpcEndpointIds: string[] | undefined;
}

/**
 * <p>Contains the output of DeleteVpcEndpoints.</p>
 */
export interface DeleteVpcEndpointsResult {
  /**
   * <p>Information about the VPC endpoints that were not successfully deleted.</p>
   */
  Unsuccessful?: UnsuccessfulItem[];
}

export interface DeleteVpcEndpointServiceConfigurationsRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The IDs of one or more services.</p>
   */
  ServiceIds: string[] | undefined;
}

export interface DeleteVpcEndpointServiceConfigurationsResult {
  /**
   * <p>Information about the service configurations that were not deleted, if
   *             applicable.</p>
   */
  Unsuccessful?: UnsuccessfulItem[];
}

export interface DeleteVpcPeeringConnectionRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the VPC peering connection.</p>
   */
  VpcPeeringConnectionId: string | undefined;
}

export interface DeleteVpcPeeringConnectionResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
   */
  Return?: boolean;
}

/**
 * <p>Contains the parameters for DeleteVpnConnection.</p>
 */
export interface DeleteVpnConnectionRequest {
  /**
   * <p>The ID of the VPN connection.</p>
   */
  VpnConnectionId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually
   *             making the request, and provides an error response. If you have the required
   *             permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is
   *                 <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * <p>Contains the parameters for DeleteVpnConnectionRoute.</p>
 */
export interface DeleteVpnConnectionRouteRequest {
  /**
   * <p>The CIDR block associated with the local subnet of the customer network.</p>
   */
  DestinationCidrBlock: string | undefined;

  /**
   * <p>The ID of the VPN connection.</p>
   */
  VpnConnectionId: string | undefined;
}

/**
 * <p>Contains the parameters for DeleteVpnGateway.</p>
 */
export interface DeleteVpnGatewayRequest {
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

export interface DeprovisionByoipCidrRequest {
  /**
   * <p>The address range, in CIDR notation. The prefix must be the same prefix
   *          that you specified when you provisioned the address range.</p>
   */
  Cidr: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export interface DeprovisionByoipCidrResult {
  /**
   * <p>Information about the address range.</p>
   */
  ByoipCidr?: ByoipCidr;
}

export interface DeprovisionIpamPoolCidrRequest {
  /**
   * <p>A check for whether you have the required permissions for the action without actually making the request
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the pool that has the CIDR you want to deprovision.</p>
   */
  IpamPoolId: string | undefined;

  /**
   * <p>The CIDR which you want to deprovision from the pool.</p>
   */
  Cidr?: string;
}

export enum IpamPoolCidrFailureCode {
  cidr_not_available = "cidr-not-available",
}

/**
 * <p>Details related to why an IPAM pool CIDR failed to be provisioned.</p>
 */
export interface IpamPoolCidrFailureReason {
  /**
   * <p>An error code related to why an IPAM pool CIDR failed to be provisioned.</p>
   */
  Code?: IpamPoolCidrFailureCode | string;

  /**
   * <p>A message related to why an IPAM pool CIDR failed to be provisioned.</p>
   */
  Message?: string;
}

export enum IpamPoolCidrState {
  deprovisioned = "deprovisioned",
  failed_deprovision = "failed-deprovision",
  failed_import = "failed-import",
  failed_provision = "failed-provision",
  pending_deprovision = "pending-deprovision",
  pending_import = "pending-import",
  pending_provision = "pending-provision",
  provisioned = "provisioned",
}

/**
 * <p>A CIDR provisioned to an IPAM pool.</p>
 */
export interface IpamPoolCidr {
  /**
   * <p>The CIDR provisioned to the IPAM pool. A CIDR is a representation of an IP address and its associated network mask (or netmask)
   *          and refers to a range of IP addresses. An IPv4 CIDR example is <code>10.24.34.0/23</code>. An IPv6 CIDR example is <code>2001:DB8::/32</code>.</p>
   */
  Cidr?: string;

  /**
   * <p>The state of the CIDR.</p>
   */
  State?: IpamPoolCidrState | string;

  /**
   * <p>Details related to why an IPAM pool CIDR failed to be provisioned.</p>
   */
  FailureReason?: IpamPoolCidrFailureReason;
}

export interface DeprovisionIpamPoolCidrResult {
  /**
   * <p>The deprovisioned pool CIDR.</p>
   */
  IpamPoolCidr?: IpamPoolCidr;
}

export interface DeprovisionPublicIpv4PoolCidrRequest {
  /**
   * <p>A check for whether you have the required permissions for the action without actually making the request
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the pool that you want to deprovision the CIDR from.</p>
   */
  PoolId: string | undefined;

  /**
   * <p>The CIDR you want to deprovision from the pool.</p>
   */
  Cidr: string | undefined;
}

export interface DeprovisionPublicIpv4PoolCidrResult {
  /**
   * <p>The ID of the pool that you deprovisioned the CIDR from.</p>
   */
  PoolId?: string;

  /**
   * <p>The deprovisioned CIDRs.</p>
   */
  DeprovisionedAddresses?: string[];
}

/**
 * <p>Contains the parameters for DeregisterImage.</p>
 */
export interface DeregisterImageRequest {
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

/**
 * <p>Information about the tag keys to deregister for the current Region. You can either specify
 *    		individual tag keys or deregister all tag keys in the current Region. You must specify either
 *    		<code>IncludeAllTagsOfInstance</code> or <code>InstanceTagKeys</code> in the request</p>
 */
export interface DeregisterInstanceTagAttributeRequest {
  /**
   * <p>Indicates whether to deregister all tag keys in the current Region. Specify <code>false</code>
   *    		to deregister all tag keys.</p>
   */
  IncludeAllTagsOfInstance?: boolean;

  /**
   * <p>Information about the tag keys to deregister.</p>
   */
  InstanceTagKeys?: string[];
}

export interface DeregisterInstanceEventNotificationAttributesRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>Information about the tag keys to deregister.</p>
   */
  InstanceTagAttribute?: DeregisterInstanceTagAttributeRequest;
}

/**
 * <p>Describes the registered tag keys for the current Region.</p>
 */
export interface InstanceTagNotificationAttribute {
  /**
   * <p>The registered tag keys.</p>
   */
  InstanceTagKeys?: string[];

  /**
   * <p>Indicates wheter all tag keys in the current Region are registered to appear in scheduled event notifications.
   *       	<code>true</code> indicates that all tag keys in the current Region are registered.</p>
   */
  IncludeAllTagsOfInstance?: boolean;
}

export interface DeregisterInstanceEventNotificationAttributesResult {
  /**
   * <p>The resulting set of tag keys.</p>
   */
  InstanceTagAttribute?: InstanceTagNotificationAttribute;
}

export interface DeregisterTransitGatewayMulticastGroupMembersRequest {
  /**
   * <p>The ID of the transit gateway multicast domain.</p>
   */
  TransitGatewayMulticastDomainId?: string;

  /**
   * <p>The IP address assigned to the  transit gateway multicast group.</p>
   */
  GroupIpAddress?: string;

  /**
   * <p>The IDs of the group members' network interfaces.</p>
   */
  NetworkInterfaceIds?: string[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * <p>Describes the deregistered  transit gateway multicast group members.</p>
 */
export interface TransitGatewayMulticastDeregisteredGroupMembers {
  /**
   * <p>The ID of the transit gateway multicast domain.</p>
   */
  TransitGatewayMulticastDomainId?: string;

  /**
   * <p>The network interface IDs of the deregistered members.</p>
   */
  DeregisteredNetworkInterfaceIds?: string[];

  /**
   * <p>The IP address assigned to the  transit gateway multicast group.</p>
   */
  GroupIpAddress?: string;
}

export interface DeregisterTransitGatewayMulticastGroupMembersResult {
  /**
   * <p>Information about the deregistered members.</p>
   */
  DeregisteredMulticastGroupMembers?: TransitGatewayMulticastDeregisteredGroupMembers;
}

export interface DeregisterTransitGatewayMulticastGroupSourcesRequest {
  /**
   * <p>The ID of the transit gateway multicast domain.</p>
   */
  TransitGatewayMulticastDomainId?: string;

  /**
   * <p>The IP address assigned to the  transit gateway multicast group.</p>
   */
  GroupIpAddress?: string;

  /**
   * <p>The IDs of the group sources' network interfaces.</p>
   */
  NetworkInterfaceIds?: string[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * <p>Describes the deregistered  transit gateway multicast group sources.</p>
 */
export interface TransitGatewayMulticastDeregisteredGroupSources {
  /**
   * <p>The ID of the transit gateway multicast domain.</p>
   */
  TransitGatewayMulticastDomainId?: string;

  /**
   * <p>The network interface IDs of the non-registered members.</p>
   */
  DeregisteredNetworkInterfaceIds?: string[];

  /**
   * <p>The IP address assigned to the  transit gateway multicast group.</p>
   */
  GroupIpAddress?: string;
}

export interface DeregisterTransitGatewayMulticastGroupSourcesResult {
  /**
   * <p>Information about the deregistered group sources.</p>
   */
  DeregisteredMulticastGroupSources?: TransitGatewayMulticastDeregisteredGroupSources;
}

export interface DescribeAccountAttributesRequest {
  /**
   * <p>The account attribute names.</p>
   */
  AttributeNames?: (AccountAttributeName | string)[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *            and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *            Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export interface DescribeAccountAttributesResult {
  /**
   * <p>Information about the account attributes.</p>
   */
  AccountAttributes?: AccountAttribute[];
}

/**
 * <p>A filter name and value pair that is used to return a more specific list of results from a describe operation.
 *          Filters can be used to match a set of resources by specific criteria, such as tags, attributes, or IDs.</p>
 *          <p>If you specify multiple filters, the filters are joined with an <code>AND</code>, and the request returns only
 *            results that match all of the specified filters.</p>
 */
export interface Filter {
  /**
   * <p>The name of the filter. Filter names are case-sensitive.</p>
   */
  Name?: string;

  /**
   * <p>The filter values. Filter values are case-sensitive. If you specify multiple values for a
   *          filter, the values are joined with an <code>OR</code>, and the request returns all results
   *          that match any of the specified values.</p>
   */
  Values?: string[];
}

export interface DescribeAddressesRequest {
  /**
   * <p>One or more filters. Filter names and values are case-sensitive.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>allocation-id</code> - [EC2-VPC] The allocation ID for the address.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>association-id</code> - [EC2-VPC] The association ID for the address.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>domain</code> - Indicates whether the address is for use in EC2-Classic (<code>standard</code>)
   *               or in a VPC (<code>vpc</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>instance-id</code> - The ID of the instance the address is associated with, if any.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-border-group</code> -  A unique set of Availability Zones, Local Zones,
   *            or Wavelength Zones from where Amazon Web Services advertises IP addresses. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface-id</code> - [EC2-VPC] The ID of the network interface that the address is associated with, if any.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface-owner-id</code> - The Amazon Web Services account ID of the owner.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>private-ip-address</code> - [EC2-VPC] The private IP address associated with the Elastic IP address.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>public-ip</code> - The Elastic IP address, or the carrier IP address.</p>
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
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>One or more Elastic IP addresses.</p>
   *          <p>Default: Describes all your Elastic IP addresses.</p>
   */
  PublicIps?: string[];

  /**
   * <p>[EC2-VPC] Information about the allocation IDs.</p>
   */
  AllocationIds?: string[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export interface DescribeAddressesResult {
  /**
   * <p>Information about the Elastic IP addresses.</p>
   */
  Addresses?: Address[];
}

/**
 * @internal
 */
export const TrafficMirrorPortRangeRequestFilterSensitiveLog = (obj: TrafficMirrorPortRangeRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateTrafficMirrorFilterRuleRequestFilterSensitiveLog = (
  obj: CreateTrafficMirrorFilterRuleRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateTrafficMirrorFilterRuleResultFilterSensitiveLog = (
  obj: CreateTrafficMirrorFilterRuleResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateTrafficMirrorSessionRequestFilterSensitiveLog = (obj: CreateTrafficMirrorSessionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TrafficMirrorSessionFilterSensitiveLog = (obj: TrafficMirrorSession): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateTrafficMirrorSessionResultFilterSensitiveLog = (obj: CreateTrafficMirrorSessionResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateTrafficMirrorTargetRequestFilterSensitiveLog = (obj: CreateTrafficMirrorTargetRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TrafficMirrorTargetFilterSensitiveLog = (obj: TrafficMirrorTarget): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateTrafficMirrorTargetResultFilterSensitiveLog = (obj: CreateTrafficMirrorTargetResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TransitGatewayRequestOptionsFilterSensitiveLog = (obj: TransitGatewayRequestOptions): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateTransitGatewayRequestFilterSensitiveLog = (obj: CreateTransitGatewayRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TransitGatewayOptionsFilterSensitiveLog = (obj: TransitGatewayOptions): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TransitGatewayFilterSensitiveLog = (obj: TransitGateway): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateTransitGatewayResultFilterSensitiveLog = (obj: CreateTransitGatewayResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateTransitGatewayConnectRequestOptionsFilterSensitiveLog = (
  obj: CreateTransitGatewayConnectRequestOptions
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateTransitGatewayConnectRequestFilterSensitiveLog = (obj: CreateTransitGatewayConnectRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TransitGatewayConnectOptionsFilterSensitiveLog = (obj: TransitGatewayConnectOptions): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TransitGatewayConnectFilterSensitiveLog = (obj: TransitGatewayConnect): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateTransitGatewayConnectResultFilterSensitiveLog = (obj: CreateTransitGatewayConnectResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TransitGatewayConnectRequestBgpOptionsFilterSensitiveLog = (
  obj: TransitGatewayConnectRequestBgpOptions
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateTransitGatewayConnectPeerRequestFilterSensitiveLog = (
  obj: CreateTransitGatewayConnectPeerRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TransitGatewayAttachmentBgpConfigurationFilterSensitiveLog = (
  obj: TransitGatewayAttachmentBgpConfiguration
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TransitGatewayConnectPeerConfigurationFilterSensitiveLog = (
  obj: TransitGatewayConnectPeerConfiguration
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TransitGatewayConnectPeerFilterSensitiveLog = (obj: TransitGatewayConnectPeer): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateTransitGatewayConnectPeerResultFilterSensitiveLog = (
  obj: CreateTransitGatewayConnectPeerResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateTransitGatewayMulticastDomainRequestOptionsFilterSensitiveLog = (
  obj: CreateTransitGatewayMulticastDomainRequestOptions
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateTransitGatewayMulticastDomainRequestFilterSensitiveLog = (
  obj: CreateTransitGatewayMulticastDomainRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TransitGatewayMulticastDomainOptionsFilterSensitiveLog = (
  obj: TransitGatewayMulticastDomainOptions
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TransitGatewayMulticastDomainFilterSensitiveLog = (obj: TransitGatewayMulticastDomain): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateTransitGatewayMulticastDomainResultFilterSensitiveLog = (
  obj: CreateTransitGatewayMulticastDomainResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateTransitGatewayPeeringAttachmentRequestOptionsFilterSensitiveLog = (
  obj: CreateTransitGatewayPeeringAttachmentRequestOptions
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateTransitGatewayPeeringAttachmentRequestFilterSensitiveLog = (
  obj: CreateTransitGatewayPeeringAttachmentRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateTransitGatewayPeeringAttachmentResultFilterSensitiveLog = (
  obj: CreateTransitGatewayPeeringAttachmentResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateTransitGatewayPolicyTableRequestFilterSensitiveLog = (
  obj: CreateTransitGatewayPolicyTableRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TransitGatewayPolicyTableFilterSensitiveLog = (obj: TransitGatewayPolicyTable): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateTransitGatewayPolicyTableResultFilterSensitiveLog = (
  obj: CreateTransitGatewayPolicyTableResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateTransitGatewayPrefixListReferenceRequestFilterSensitiveLog = (
  obj: CreateTransitGatewayPrefixListReferenceRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TransitGatewayPrefixListAttachmentFilterSensitiveLog = (obj: TransitGatewayPrefixListAttachment): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TransitGatewayPrefixListReferenceFilterSensitiveLog = (obj: TransitGatewayPrefixListReference): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateTransitGatewayPrefixListReferenceResultFilterSensitiveLog = (
  obj: CreateTransitGatewayPrefixListReferenceResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateTransitGatewayRouteRequestFilterSensitiveLog = (obj: CreateTransitGatewayRouteRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TransitGatewayRouteAttachmentFilterSensitiveLog = (obj: TransitGatewayRouteAttachment): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TransitGatewayRouteFilterSensitiveLog = (obj: TransitGatewayRoute): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateTransitGatewayRouteResultFilterSensitiveLog = (obj: CreateTransitGatewayRouteResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateTransitGatewayRouteTableRequestFilterSensitiveLog = (
  obj: CreateTransitGatewayRouteTableRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TransitGatewayRouteTableFilterSensitiveLog = (obj: TransitGatewayRouteTable): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateTransitGatewayRouteTableResultFilterSensitiveLog = (
  obj: CreateTransitGatewayRouteTableResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateTransitGatewayRouteTableAnnouncementRequestFilterSensitiveLog = (
  obj: CreateTransitGatewayRouteTableAnnouncementRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TransitGatewayRouteTableAnnouncementFilterSensitiveLog = (
  obj: TransitGatewayRouteTableAnnouncement
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateTransitGatewayRouteTableAnnouncementResultFilterSensitiveLog = (
  obj: CreateTransitGatewayRouteTableAnnouncementResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateTransitGatewayVpcAttachmentRequestOptionsFilterSensitiveLog = (
  obj: CreateTransitGatewayVpcAttachmentRequestOptions
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateTransitGatewayVpcAttachmentRequestFilterSensitiveLog = (
  obj: CreateTransitGatewayVpcAttachmentRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateTransitGatewayVpcAttachmentResultFilterSensitiveLog = (
  obj: CreateTransitGatewayVpcAttachmentResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateVolumeRequestFilterSensitiveLog = (obj: CreateVolumeRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const VolumeFilterSensitiveLog = (obj: Volume): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateVpcRequestFilterSensitiveLog = (obj: CreateVpcRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateVpcResultFilterSensitiveLog = (obj: CreateVpcResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DnsOptionsSpecificationFilterSensitiveLog = (obj: DnsOptionsSpecification): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateVpcEndpointRequestFilterSensitiveLog = (obj: CreateVpcEndpointRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DnsEntryFilterSensitiveLog = (obj: DnsEntry): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DnsOptionsFilterSensitiveLog = (obj: DnsOptions): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SecurityGroupIdentifierFilterSensitiveLog = (obj: SecurityGroupIdentifier): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LastErrorFilterSensitiveLog = (obj: LastError): any => ({
  ...obj,
});

/**
 * @internal
 */
export const VpcEndpointFilterSensitiveLog = (obj: VpcEndpoint): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateVpcEndpointResultFilterSensitiveLog = (obj: CreateVpcEndpointResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateVpcEndpointConnectionNotificationRequestFilterSensitiveLog = (
  obj: CreateVpcEndpointConnectionNotificationRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ConnectionNotificationFilterSensitiveLog = (obj: ConnectionNotification): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateVpcEndpointConnectionNotificationResultFilterSensitiveLog = (
  obj: CreateVpcEndpointConnectionNotificationResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateVpcEndpointServiceConfigurationRequestFilterSensitiveLog = (
  obj: CreateVpcEndpointServiceConfigurationRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PrivateDnsNameConfigurationFilterSensitiveLog = (obj: PrivateDnsNameConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ServiceTypeDetailFilterSensitiveLog = (obj: ServiceTypeDetail): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ServiceConfigurationFilterSensitiveLog = (obj: ServiceConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateVpcEndpointServiceConfigurationResultFilterSensitiveLog = (
  obj: CreateVpcEndpointServiceConfigurationResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateVpcPeeringConnectionRequestFilterSensitiveLog = (obj: CreateVpcPeeringConnectionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateVpcPeeringConnectionResultFilterSensitiveLog = (obj: CreateVpcPeeringConnectionResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const IKEVersionsRequestListValueFilterSensitiveLog = (obj: IKEVersionsRequestListValue): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CloudWatchLogOptionsSpecificationFilterSensitiveLog = (obj: CloudWatchLogOptionsSpecification): any => ({
  ...obj,
});

/**
 * @internal
 */
export const VpnTunnelLogOptionsSpecificationFilterSensitiveLog = (obj: VpnTunnelLogOptionsSpecification): any => ({
  ...obj,
});

/**
 * @internal
 */
export const Phase1DHGroupNumbersRequestListValueFilterSensitiveLog = (
  obj: Phase1DHGroupNumbersRequestListValue
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const Phase1EncryptionAlgorithmsRequestListValueFilterSensitiveLog = (
  obj: Phase1EncryptionAlgorithmsRequestListValue
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const Phase1IntegrityAlgorithmsRequestListValueFilterSensitiveLog = (
  obj: Phase1IntegrityAlgorithmsRequestListValue
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const Phase2DHGroupNumbersRequestListValueFilterSensitiveLog = (
  obj: Phase2DHGroupNumbersRequestListValue
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const Phase2EncryptionAlgorithmsRequestListValueFilterSensitiveLog = (
  obj: Phase2EncryptionAlgorithmsRequestListValue
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const Phase2IntegrityAlgorithmsRequestListValueFilterSensitiveLog = (
  obj: Phase2IntegrityAlgorithmsRequestListValue
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const VpnTunnelOptionsSpecificationFilterSensitiveLog = (obj: VpnTunnelOptionsSpecification): any => ({
  ...obj,
});

/**
 * @internal
 */
export const VpnConnectionOptionsSpecificationFilterSensitiveLog = (obj: VpnConnectionOptionsSpecification): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateVpnConnectionRequestFilterSensitiveLog = (obj: CreateVpnConnectionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const IKEVersionsListValueFilterSensitiveLog = (obj: IKEVersionsListValue): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CloudWatchLogOptionsFilterSensitiveLog = (obj: CloudWatchLogOptions): any => ({
  ...obj,
});

/**
 * @internal
 */
export const VpnTunnelLogOptionsFilterSensitiveLog = (obj: VpnTunnelLogOptions): any => ({
  ...obj,
});

/**
 * @internal
 */
export const Phase1DHGroupNumbersListValueFilterSensitiveLog = (obj: Phase1DHGroupNumbersListValue): any => ({
  ...obj,
});

/**
 * @internal
 */
export const Phase1EncryptionAlgorithmsListValueFilterSensitiveLog = (
  obj: Phase1EncryptionAlgorithmsListValue
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const Phase1IntegrityAlgorithmsListValueFilterSensitiveLog = (obj: Phase1IntegrityAlgorithmsListValue): any => ({
  ...obj,
});

/**
 * @internal
 */
export const Phase2DHGroupNumbersListValueFilterSensitiveLog = (obj: Phase2DHGroupNumbersListValue): any => ({
  ...obj,
});

/**
 * @internal
 */
export const Phase2EncryptionAlgorithmsListValueFilterSensitiveLog = (
  obj: Phase2EncryptionAlgorithmsListValue
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const Phase2IntegrityAlgorithmsListValueFilterSensitiveLog = (obj: Phase2IntegrityAlgorithmsListValue): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TunnelOptionFilterSensitiveLog = (obj: TunnelOption): any => ({
  ...obj,
});

/**
 * @internal
 */
export const VpnConnectionOptionsFilterSensitiveLog = (obj: VpnConnectionOptions): any => ({
  ...obj,
});

/**
 * @internal
 */
export const VpnStaticRouteFilterSensitiveLog = (obj: VpnStaticRoute): any => ({
  ...obj,
});

/**
 * @internal
 */
export const VgwTelemetryFilterSensitiveLog = (obj: VgwTelemetry): any => ({
  ...obj,
});

/**
 * @internal
 */
export const VpnConnectionFilterSensitiveLog = (obj: VpnConnection): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateVpnConnectionResultFilterSensitiveLog = (obj: CreateVpnConnectionResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateVpnConnectionRouteRequestFilterSensitiveLog = (obj: CreateVpnConnectionRouteRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateVpnGatewayRequestFilterSensitiveLog = (obj: CreateVpnGatewayRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const VpnGatewayFilterSensitiveLog = (obj: VpnGateway): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateVpnGatewayResultFilterSensitiveLog = (obj: CreateVpnGatewayResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteCarrierGatewayRequestFilterSensitiveLog = (obj: DeleteCarrierGatewayRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteCarrierGatewayResultFilterSensitiveLog = (obj: DeleteCarrierGatewayResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteClientVpnEndpointRequestFilterSensitiveLog = (obj: DeleteClientVpnEndpointRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteClientVpnEndpointResultFilterSensitiveLog = (obj: DeleteClientVpnEndpointResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteClientVpnRouteRequestFilterSensitiveLog = (obj: DeleteClientVpnRouteRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteClientVpnRouteResultFilterSensitiveLog = (obj: DeleteClientVpnRouteResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteCoipCidrRequestFilterSensitiveLog = (obj: DeleteCoipCidrRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteCoipCidrResultFilterSensitiveLog = (obj: DeleteCoipCidrResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteCoipPoolRequestFilterSensitiveLog = (obj: DeleteCoipPoolRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteCoipPoolResultFilterSensitiveLog = (obj: DeleteCoipPoolResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteCustomerGatewayRequestFilterSensitiveLog = (obj: DeleteCustomerGatewayRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteDhcpOptionsRequestFilterSensitiveLog = (obj: DeleteDhcpOptionsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteEgressOnlyInternetGatewayRequestFilterSensitiveLog = (
  obj: DeleteEgressOnlyInternetGatewayRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteEgressOnlyInternetGatewayResultFilterSensitiveLog = (
  obj: DeleteEgressOnlyInternetGatewayResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteFleetsRequestFilterSensitiveLog = (obj: DeleteFleetsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteFleetSuccessItemFilterSensitiveLog = (obj: DeleteFleetSuccessItem): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteFleetErrorFilterSensitiveLog = (obj: DeleteFleetError): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteFleetErrorItemFilterSensitiveLog = (obj: DeleteFleetErrorItem): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteFleetsResultFilterSensitiveLog = (obj: DeleteFleetsResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteFlowLogsRequestFilterSensitiveLog = (obj: DeleteFlowLogsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteFlowLogsResultFilterSensitiveLog = (obj: DeleteFlowLogsResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteFpgaImageRequestFilterSensitiveLog = (obj: DeleteFpgaImageRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteFpgaImageResultFilterSensitiveLog = (obj: DeleteFpgaImageResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteInstanceEventWindowRequestFilterSensitiveLog = (obj: DeleteInstanceEventWindowRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InstanceEventWindowStateChangeFilterSensitiveLog = (obj: InstanceEventWindowStateChange): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteInstanceEventWindowResultFilterSensitiveLog = (obj: DeleteInstanceEventWindowResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteInternetGatewayRequestFilterSensitiveLog = (obj: DeleteInternetGatewayRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteIpamRequestFilterSensitiveLog = (obj: DeleteIpamRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteIpamResultFilterSensitiveLog = (obj: DeleteIpamResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteIpamPoolRequestFilterSensitiveLog = (obj: DeleteIpamPoolRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteIpamPoolResultFilterSensitiveLog = (obj: DeleteIpamPoolResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteIpamScopeRequestFilterSensitiveLog = (obj: DeleteIpamScopeRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteIpamScopeResultFilterSensitiveLog = (obj: DeleteIpamScopeResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteKeyPairRequestFilterSensitiveLog = (obj: DeleteKeyPairRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteLaunchTemplateRequestFilterSensitiveLog = (obj: DeleteLaunchTemplateRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteLaunchTemplateResultFilterSensitiveLog = (obj: DeleteLaunchTemplateResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteLaunchTemplateVersionsRequestFilterSensitiveLog = (
  obj: DeleteLaunchTemplateVersionsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteLaunchTemplateVersionsResponseSuccessItemFilterSensitiveLog = (
  obj: DeleteLaunchTemplateVersionsResponseSuccessItem
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ResponseErrorFilterSensitiveLog = (obj: ResponseError): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteLaunchTemplateVersionsResponseErrorItemFilterSensitiveLog = (
  obj: DeleteLaunchTemplateVersionsResponseErrorItem
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteLaunchTemplateVersionsResultFilterSensitiveLog = (obj: DeleteLaunchTemplateVersionsResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteLocalGatewayRouteRequestFilterSensitiveLog = (obj: DeleteLocalGatewayRouteRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteLocalGatewayRouteResultFilterSensitiveLog = (obj: DeleteLocalGatewayRouteResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteLocalGatewayRouteTableRequestFilterSensitiveLog = (
  obj: DeleteLocalGatewayRouteTableRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteLocalGatewayRouteTableResultFilterSensitiveLog = (obj: DeleteLocalGatewayRouteTableResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteLocalGatewayRouteTableVirtualInterfaceGroupAssociationRequestFilterSensitiveLog = (
  obj: DeleteLocalGatewayRouteTableVirtualInterfaceGroupAssociationRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteLocalGatewayRouteTableVirtualInterfaceGroupAssociationResultFilterSensitiveLog = (
  obj: DeleteLocalGatewayRouteTableVirtualInterfaceGroupAssociationResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteLocalGatewayRouteTableVpcAssociationRequestFilterSensitiveLog = (
  obj: DeleteLocalGatewayRouteTableVpcAssociationRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteLocalGatewayRouteTableVpcAssociationResultFilterSensitiveLog = (
  obj: DeleteLocalGatewayRouteTableVpcAssociationResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteManagedPrefixListRequestFilterSensitiveLog = (obj: DeleteManagedPrefixListRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteManagedPrefixListResultFilterSensitiveLog = (obj: DeleteManagedPrefixListResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteNatGatewayRequestFilterSensitiveLog = (obj: DeleteNatGatewayRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteNatGatewayResultFilterSensitiveLog = (obj: DeleteNatGatewayResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteNetworkAclRequestFilterSensitiveLog = (obj: DeleteNetworkAclRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteNetworkAclEntryRequestFilterSensitiveLog = (obj: DeleteNetworkAclEntryRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteNetworkInsightsAccessScopeRequestFilterSensitiveLog = (
  obj: DeleteNetworkInsightsAccessScopeRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteNetworkInsightsAccessScopeResultFilterSensitiveLog = (
  obj: DeleteNetworkInsightsAccessScopeResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteNetworkInsightsAccessScopeAnalysisRequestFilterSensitiveLog = (
  obj: DeleteNetworkInsightsAccessScopeAnalysisRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteNetworkInsightsAccessScopeAnalysisResultFilterSensitiveLog = (
  obj: DeleteNetworkInsightsAccessScopeAnalysisResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteNetworkInsightsAnalysisRequestFilterSensitiveLog = (
  obj: DeleteNetworkInsightsAnalysisRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteNetworkInsightsAnalysisResultFilterSensitiveLog = (
  obj: DeleteNetworkInsightsAnalysisResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteNetworkInsightsPathRequestFilterSensitiveLog = (obj: DeleteNetworkInsightsPathRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteNetworkInsightsPathResultFilterSensitiveLog = (obj: DeleteNetworkInsightsPathResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteNetworkInterfaceRequestFilterSensitiveLog = (obj: DeleteNetworkInterfaceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteNetworkInterfacePermissionRequestFilterSensitiveLog = (
  obj: DeleteNetworkInterfacePermissionRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteNetworkInterfacePermissionResultFilterSensitiveLog = (
  obj: DeleteNetworkInterfacePermissionResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeletePlacementGroupRequestFilterSensitiveLog = (obj: DeletePlacementGroupRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeletePublicIpv4PoolRequestFilterSensitiveLog = (obj: DeletePublicIpv4PoolRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeletePublicIpv4PoolResultFilterSensitiveLog = (obj: DeletePublicIpv4PoolResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteQueuedReservedInstancesRequestFilterSensitiveLog = (
  obj: DeleteQueuedReservedInstancesRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteQueuedReservedInstancesErrorFilterSensitiveLog = (obj: DeleteQueuedReservedInstancesError): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FailedQueuedPurchaseDeletionFilterSensitiveLog = (obj: FailedQueuedPurchaseDeletion): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SuccessfulQueuedPurchaseDeletionFilterSensitiveLog = (obj: SuccessfulQueuedPurchaseDeletion): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteQueuedReservedInstancesResultFilterSensitiveLog = (
  obj: DeleteQueuedReservedInstancesResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteRouteRequestFilterSensitiveLog = (obj: DeleteRouteRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteRouteTableRequestFilterSensitiveLog = (obj: DeleteRouteTableRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteSecurityGroupRequestFilterSensitiveLog = (obj: DeleteSecurityGroupRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteSnapshotRequestFilterSensitiveLog = (obj: DeleteSnapshotRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteSpotDatafeedSubscriptionRequestFilterSensitiveLog = (
  obj: DeleteSpotDatafeedSubscriptionRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteSubnetRequestFilterSensitiveLog = (obj: DeleteSubnetRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteSubnetCidrReservationRequestFilterSensitiveLog = (obj: DeleteSubnetCidrReservationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteSubnetCidrReservationResultFilterSensitiveLog = (obj: DeleteSubnetCidrReservationResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteTagsRequestFilterSensitiveLog = (obj: DeleteTagsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteTrafficMirrorFilterRequestFilterSensitiveLog = (obj: DeleteTrafficMirrorFilterRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteTrafficMirrorFilterResultFilterSensitiveLog = (obj: DeleteTrafficMirrorFilterResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteTrafficMirrorFilterRuleRequestFilterSensitiveLog = (
  obj: DeleteTrafficMirrorFilterRuleRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteTrafficMirrorFilterRuleResultFilterSensitiveLog = (
  obj: DeleteTrafficMirrorFilterRuleResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteTrafficMirrorSessionRequestFilterSensitiveLog = (obj: DeleteTrafficMirrorSessionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteTrafficMirrorSessionResultFilterSensitiveLog = (obj: DeleteTrafficMirrorSessionResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteTrafficMirrorTargetRequestFilterSensitiveLog = (obj: DeleteTrafficMirrorTargetRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteTrafficMirrorTargetResultFilterSensitiveLog = (obj: DeleteTrafficMirrorTargetResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteTransitGatewayRequestFilterSensitiveLog = (obj: DeleteTransitGatewayRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteTransitGatewayResultFilterSensitiveLog = (obj: DeleteTransitGatewayResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteTransitGatewayConnectRequestFilterSensitiveLog = (obj: DeleteTransitGatewayConnectRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteTransitGatewayConnectResultFilterSensitiveLog = (obj: DeleteTransitGatewayConnectResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteTransitGatewayConnectPeerRequestFilterSensitiveLog = (
  obj: DeleteTransitGatewayConnectPeerRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteTransitGatewayConnectPeerResultFilterSensitiveLog = (
  obj: DeleteTransitGatewayConnectPeerResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteTransitGatewayMulticastDomainRequestFilterSensitiveLog = (
  obj: DeleteTransitGatewayMulticastDomainRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteTransitGatewayMulticastDomainResultFilterSensitiveLog = (
  obj: DeleteTransitGatewayMulticastDomainResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteTransitGatewayPeeringAttachmentRequestFilterSensitiveLog = (
  obj: DeleteTransitGatewayPeeringAttachmentRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteTransitGatewayPeeringAttachmentResultFilterSensitiveLog = (
  obj: DeleteTransitGatewayPeeringAttachmentResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteTransitGatewayPolicyTableRequestFilterSensitiveLog = (
  obj: DeleteTransitGatewayPolicyTableRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteTransitGatewayPolicyTableResultFilterSensitiveLog = (
  obj: DeleteTransitGatewayPolicyTableResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteTransitGatewayPrefixListReferenceRequestFilterSensitiveLog = (
  obj: DeleteTransitGatewayPrefixListReferenceRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteTransitGatewayPrefixListReferenceResultFilterSensitiveLog = (
  obj: DeleteTransitGatewayPrefixListReferenceResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteTransitGatewayRouteRequestFilterSensitiveLog = (obj: DeleteTransitGatewayRouteRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteTransitGatewayRouteResultFilterSensitiveLog = (obj: DeleteTransitGatewayRouteResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteTransitGatewayRouteTableRequestFilterSensitiveLog = (
  obj: DeleteTransitGatewayRouteTableRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteTransitGatewayRouteTableResultFilterSensitiveLog = (
  obj: DeleteTransitGatewayRouteTableResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteTransitGatewayRouteTableAnnouncementRequestFilterSensitiveLog = (
  obj: DeleteTransitGatewayRouteTableAnnouncementRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteTransitGatewayRouteTableAnnouncementResultFilterSensitiveLog = (
  obj: DeleteTransitGatewayRouteTableAnnouncementResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteTransitGatewayVpcAttachmentRequestFilterSensitiveLog = (
  obj: DeleteTransitGatewayVpcAttachmentRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteTransitGatewayVpcAttachmentResultFilterSensitiveLog = (
  obj: DeleteTransitGatewayVpcAttachmentResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteVolumeRequestFilterSensitiveLog = (obj: DeleteVolumeRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteVpcRequestFilterSensitiveLog = (obj: DeleteVpcRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteVpcEndpointConnectionNotificationsRequestFilterSensitiveLog = (
  obj: DeleteVpcEndpointConnectionNotificationsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteVpcEndpointConnectionNotificationsResultFilterSensitiveLog = (
  obj: DeleteVpcEndpointConnectionNotificationsResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteVpcEndpointsRequestFilterSensitiveLog = (obj: DeleteVpcEndpointsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteVpcEndpointsResultFilterSensitiveLog = (obj: DeleteVpcEndpointsResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteVpcEndpointServiceConfigurationsRequestFilterSensitiveLog = (
  obj: DeleteVpcEndpointServiceConfigurationsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteVpcEndpointServiceConfigurationsResultFilterSensitiveLog = (
  obj: DeleteVpcEndpointServiceConfigurationsResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteVpcPeeringConnectionRequestFilterSensitiveLog = (obj: DeleteVpcPeeringConnectionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteVpcPeeringConnectionResultFilterSensitiveLog = (obj: DeleteVpcPeeringConnectionResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteVpnConnectionRequestFilterSensitiveLog = (obj: DeleteVpnConnectionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteVpnConnectionRouteRequestFilterSensitiveLog = (obj: DeleteVpnConnectionRouteRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteVpnGatewayRequestFilterSensitiveLog = (obj: DeleteVpnGatewayRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeprovisionByoipCidrRequestFilterSensitiveLog = (obj: DeprovisionByoipCidrRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeprovisionByoipCidrResultFilterSensitiveLog = (obj: DeprovisionByoipCidrResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeprovisionIpamPoolCidrRequestFilterSensitiveLog = (obj: DeprovisionIpamPoolCidrRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const IpamPoolCidrFailureReasonFilterSensitiveLog = (obj: IpamPoolCidrFailureReason): any => ({
  ...obj,
});

/**
 * @internal
 */
export const IpamPoolCidrFilterSensitiveLog = (obj: IpamPoolCidr): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeprovisionIpamPoolCidrResultFilterSensitiveLog = (obj: DeprovisionIpamPoolCidrResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeprovisionPublicIpv4PoolCidrRequestFilterSensitiveLog = (
  obj: DeprovisionPublicIpv4PoolCidrRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeprovisionPublicIpv4PoolCidrResultFilterSensitiveLog = (
  obj: DeprovisionPublicIpv4PoolCidrResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeregisterImageRequestFilterSensitiveLog = (obj: DeregisterImageRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeregisterInstanceTagAttributeRequestFilterSensitiveLog = (
  obj: DeregisterInstanceTagAttributeRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeregisterInstanceEventNotificationAttributesRequestFilterSensitiveLog = (
  obj: DeregisterInstanceEventNotificationAttributesRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InstanceTagNotificationAttributeFilterSensitiveLog = (obj: InstanceTagNotificationAttribute): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeregisterInstanceEventNotificationAttributesResultFilterSensitiveLog = (
  obj: DeregisterInstanceEventNotificationAttributesResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeregisterTransitGatewayMulticastGroupMembersRequestFilterSensitiveLog = (
  obj: DeregisterTransitGatewayMulticastGroupMembersRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TransitGatewayMulticastDeregisteredGroupMembersFilterSensitiveLog = (
  obj: TransitGatewayMulticastDeregisteredGroupMembers
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeregisterTransitGatewayMulticastGroupMembersResultFilterSensitiveLog = (
  obj: DeregisterTransitGatewayMulticastGroupMembersResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeregisterTransitGatewayMulticastGroupSourcesRequestFilterSensitiveLog = (
  obj: DeregisterTransitGatewayMulticastGroupSourcesRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TransitGatewayMulticastDeregisteredGroupSourcesFilterSensitiveLog = (
  obj: TransitGatewayMulticastDeregisteredGroupSources
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeregisterTransitGatewayMulticastGroupSourcesResultFilterSensitiveLog = (
  obj: DeregisterTransitGatewayMulticastGroupSourcesResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeAccountAttributesRequestFilterSensitiveLog = (obj: DescribeAccountAttributesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeAccountAttributesResultFilterSensitiveLog = (obj: DescribeAccountAttributesResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FilterFilterSensitiveLog = (obj: Filter): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeAddressesRequestFilterSensitiveLog = (obj: DescribeAddressesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeAddressesResultFilterSensitiveLog = (obj: DescribeAddressesResult): any => ({
  ...obj,
});
