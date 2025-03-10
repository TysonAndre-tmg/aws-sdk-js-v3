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

import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import {
  DeleteContainerImageRequest,
  DeleteContainerImageRequestFilterSensitiveLog,
  DeleteContainerImageResult,
  DeleteContainerImageResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DeleteContainerImageCommand,
  serializeAws_json1_1DeleteContainerImageCommand,
} from "../protocols/Aws_json1_1";

export interface DeleteContainerImageCommandInput extends DeleteContainerImageRequest {}
export interface DeleteContainerImageCommandOutput extends DeleteContainerImageResult, __MetadataBearer {}

/**
 * <p>Deletes a container image that is registered to your Amazon Lightsail container
 *       service.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, DeleteContainerImageCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, DeleteContainerImageCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new DeleteContainerImageCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteContainerImageCommandInput} for command's `input` shape.
 * @see {@link DeleteContainerImageCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for LightsailClient's `config` shape.
 *
 */
export class DeleteContainerImageCommand extends $Command<
  DeleteContainerImageCommandInput,
  DeleteContainerImageCommandOutput,
  LightsailClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteContainerImageCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LightsailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteContainerImageCommandInput, DeleteContainerImageCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LightsailClient";
    const commandName = "DeleteContainerImageCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteContainerImageRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DeleteContainerImageResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteContainerImageCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteContainerImageCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteContainerImageCommandOutput> {
    return deserializeAws_json1_1DeleteContainerImageCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
