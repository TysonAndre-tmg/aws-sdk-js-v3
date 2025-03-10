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

import { AppStreamClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppStreamClient";
import {
  UpdateEntitlementRequest,
  UpdateEntitlementRequestFilterSensitiveLog,
  UpdateEntitlementResult,
  UpdateEntitlementResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1UpdateEntitlementCommand,
  serializeAws_json1_1UpdateEntitlementCommand,
} from "../protocols/Aws_json1_1";

export interface UpdateEntitlementCommandInput extends UpdateEntitlementRequest {}
export interface UpdateEntitlementCommandOutput extends UpdateEntitlementResult, __MetadataBearer {}

/**
 * <p>Updates the specified entitlement.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppStreamClient, UpdateEntitlementCommand } from "@aws-sdk/client-appstream"; // ES Modules import
 * // const { AppStreamClient, UpdateEntitlementCommand } = require("@aws-sdk/client-appstream"); // CommonJS import
 * const client = new AppStreamClient(config);
 * const command = new UpdateEntitlementCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateEntitlementCommandInput} for command's `input` shape.
 * @see {@link UpdateEntitlementCommandOutput} for command's `response` shape.
 * @see {@link AppStreamClientResolvedConfig | config} for AppStreamClient's `config` shape.
 *
 */
export class UpdateEntitlementCommand extends $Command<
  UpdateEntitlementCommandInput,
  UpdateEntitlementCommandOutput,
  AppStreamClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateEntitlementCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppStreamClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateEntitlementCommandInput, UpdateEntitlementCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppStreamClient";
    const commandName = "UpdateEntitlementCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateEntitlementRequestFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateEntitlementResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateEntitlementCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateEntitlementCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateEntitlementCommandOutput> {
    return deserializeAws_json1_1UpdateEntitlementCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
