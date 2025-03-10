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

import { CloudWatchLogsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchLogsClient";
import {
  StartQueryRequest,
  StartQueryRequestFilterSensitiveLog,
  StartQueryResponse,
  StartQueryResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1StartQueryCommand,
  serializeAws_json1_1StartQueryCommand,
} from "../protocols/Aws_json1_1";

export interface StartQueryCommandInput extends StartQueryRequest {}
export interface StartQueryCommandOutput extends StartQueryResponse, __MetadataBearer {}

/**
 * <p>Schedules a query of a log group using CloudWatch Logs Insights. You specify the log group
 *       and time range to query and the query string to use.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CWL_QuerySyntax.html">CloudWatch Logs Insights Query Syntax</a>.</p>
 *
 *          <p>Queries time out after 15 minutes of execution. If your queries are timing out, reduce the
 *       time range being searched or partition your query into a number of queries.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, StartQueryCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, StartQueryCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * const client = new CloudWatchLogsClient(config);
 * const command = new StartQueryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartQueryCommandInput} for command's `input` shape.
 * @see {@link StartQueryCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchLogsClientResolvedConfig | config} for CloudWatchLogsClient's `config` shape.
 *
 */
export class StartQueryCommand extends $Command<
  StartQueryCommandInput,
  StartQueryCommandOutput,
  CloudWatchLogsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: StartQueryCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudWatchLogsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartQueryCommandInput, StartQueryCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudWatchLogsClient";
    const commandName = "StartQueryCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartQueryRequestFilterSensitiveLog,
      outputFilterSensitiveLog: StartQueryResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StartQueryCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1StartQueryCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartQueryCommandOutput> {
    return deserializeAws_json1_1StartQueryCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
