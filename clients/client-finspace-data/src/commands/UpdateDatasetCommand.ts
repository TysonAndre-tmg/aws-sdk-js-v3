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

import { FinspaceDataClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FinspaceDataClient";
import {
  UpdateDatasetRequest,
  UpdateDatasetRequestFilterSensitiveLog,
  UpdateDatasetResponse,
  UpdateDatasetResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1UpdateDatasetCommand,
  serializeAws_restJson1UpdateDatasetCommand,
} from "../protocols/Aws_restJson1";

export interface UpdateDatasetCommandInput extends UpdateDatasetRequest {}
export interface UpdateDatasetCommandOutput extends UpdateDatasetResponse, __MetadataBearer {}

/**
 * <p>Updates a FinSpace Dataset.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FinspaceDataClient, UpdateDatasetCommand } from "@aws-sdk/client-finspace-data"; // ES Modules import
 * // const { FinspaceDataClient, UpdateDatasetCommand } = require("@aws-sdk/client-finspace-data"); // CommonJS import
 * const client = new FinspaceDataClient(config);
 * const command = new UpdateDatasetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateDatasetCommandInput} for command's `input` shape.
 * @see {@link UpdateDatasetCommandOutput} for command's `response` shape.
 * @see {@link FinspaceDataClientResolvedConfig | config} for FinspaceDataClient's `config` shape.
 *
 */
export class UpdateDatasetCommand extends $Command<
  UpdateDatasetCommandInput,
  UpdateDatasetCommandOutput,
  FinspaceDataClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateDatasetCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: FinspaceDataClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateDatasetCommandInput, UpdateDatasetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FinspaceDataClient";
    const commandName = "UpdateDatasetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateDatasetRequestFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateDatasetResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateDatasetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateDatasetCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateDatasetCommandOutput> {
    return deserializeAws_restJson1UpdateDatasetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
