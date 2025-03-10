// smithy-typescript generated code
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import {
  LexModelBuildingServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../LexModelBuildingServiceClient";
import {
  GetSlotTypeVersionsRequest,
  GetSlotTypeVersionsRequestFilterSensitiveLog,
  GetSlotTypeVersionsResponse,
  GetSlotTypeVersionsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1GetSlotTypeVersionsCommand,
  serializeAws_restJson1GetSlotTypeVersionsCommand,
} from "../protocols/Aws_restJson1";

export interface GetSlotTypeVersionsCommandInput extends GetSlotTypeVersionsRequest {}
export interface GetSlotTypeVersionsCommandOutput extends GetSlotTypeVersionsResponse, __MetadataBearer {}

/**
 * <p>Gets information about all versions of a slot type.</p>
 *          <p>The <code>GetSlotTypeVersions</code> operation returns a
 *         <code>SlotTypeMetadata</code> object for each version of a slot type.
 *       For example, if a slot type has three numbered versions, the
 *         <code>GetSlotTypeVersions</code> operation returns four
 *         <code>SlotTypeMetadata</code> objects in the response, one for each
 *       numbered version and one for the <code>$LATEST</code> version. </p>
 *          <p>The <code>GetSlotTypeVersions</code> operation always returns at
 *       least one version, the <code>$LATEST</code> version.</p>
 *          <p>This operation requires permissions for the
 *         <code>lex:GetSlotTypeVersions</code> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelBuildingServiceClient, GetSlotTypeVersionsCommand } from "@aws-sdk/client-lex-model-building-service"; // ES Modules import
 * // const { LexModelBuildingServiceClient, GetSlotTypeVersionsCommand } = require("@aws-sdk/client-lex-model-building-service"); // CommonJS import
 * const client = new LexModelBuildingServiceClient(config);
 * const command = new GetSlotTypeVersionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetSlotTypeVersionsCommandInput} for command's `input` shape.
 * @see {@link GetSlotTypeVersionsCommandOutput} for command's `response` shape.
 * @see {@link LexModelBuildingServiceClientResolvedConfig | config} for LexModelBuildingServiceClient's `config` shape.
 *
 */
export class GetSlotTypeVersionsCommand extends $Command<
  GetSlotTypeVersionsCommandInput,
  GetSlotTypeVersionsCommandOutput,
  LexModelBuildingServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetSlotTypeVersionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LexModelBuildingServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetSlotTypeVersionsCommandInput, GetSlotTypeVersionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LexModelBuildingServiceClient";
    const commandName = "GetSlotTypeVersionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetSlotTypeVersionsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetSlotTypeVersionsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetSlotTypeVersionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetSlotTypeVersionsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetSlotTypeVersionsCommandOutput> {
    return deserializeAws_restJson1GetSlotTypeVersionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
