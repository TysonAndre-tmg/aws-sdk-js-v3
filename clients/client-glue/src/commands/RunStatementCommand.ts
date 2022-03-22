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

import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { RunStatementRequest, RunStatementResponse } from "../models/models_1";
import {
  deserializeAws_json1_1RunStatementCommand,
  serializeAws_json1_1RunStatementCommand,
} from "../protocols/Aws_json1_1";

export interface RunStatementCommandInput extends RunStatementRequest {}
export interface RunStatementCommandOutput extends RunStatementResponse, __MetadataBearer {}

/**
 * <p>Executes the statement.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, RunStatementCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, RunStatementCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new RunStatementCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RunStatementCommandInput} for command's `input` shape.
 * @see {@link RunStatementCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 */
export class RunStatementCommand extends $Command<
  RunStatementCommandInput,
  RunStatementCommandOutput,
  GlueClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RunStatementCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GlueClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RunStatementCommandInput, RunStatementCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "RunStatementCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RunStatementRequest.filterSensitiveLog,
      outputFilterSensitiveLog: RunStatementResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RunStatementCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1RunStatementCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RunStatementCommandOutput> {
    return deserializeAws_json1_1RunStatementCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}