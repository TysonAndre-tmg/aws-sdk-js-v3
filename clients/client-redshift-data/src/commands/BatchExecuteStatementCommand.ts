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
  BatchExecuteStatementInput,
  BatchExecuteStatementInputFilterSensitiveLog,
  BatchExecuteStatementOutput,
  BatchExecuteStatementOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1BatchExecuteStatementCommand,
  serializeAws_json1_1BatchExecuteStatementCommand,
} from "../protocols/Aws_json1_1";
import { RedshiftDataClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftDataClient";

export interface BatchExecuteStatementCommandInput extends BatchExecuteStatementInput {}
export interface BatchExecuteStatementCommandOutput extends BatchExecuteStatementOutput, __MetadataBearer {}

/**
 * <p>Runs one or more SQL statements, which can be data manipulation language (DML) or data definition
 *       language (DDL).
 *       Depending on the authorization
 *       method, use one of the following combinations of request parameters: </p>
 *          <ul>
 *             <li>
 *                <p>Secrets Manager - when connecting to a cluster, specify the Amazon Resource Name (ARN) of the secret, the database name, and the cluster identifier that matches the cluster in the secret.
 * When connecting to a serverless workgroup, specify the Amazon Resource Name (ARN) of the secret and the database name. </p>
 *             </li>
 *             <li>
 *                <p>Temporary credentials - when connecting to a cluster, specify the cluster identifier, the database name, and the database user name.
 * Also, permission to call the <code>redshift:GetClusterCredentials</code> operation is required.
 * When connecting to a serverless workgroup, specify the workgroup name and database name. Also, permission to call the <code>redshift-serverless:GetCredentials</code> operation is required. </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftDataClient, BatchExecuteStatementCommand } from "@aws-sdk/client-redshift-data"; // ES Modules import
 * // const { RedshiftDataClient, BatchExecuteStatementCommand } = require("@aws-sdk/client-redshift-data"); // CommonJS import
 * const client = new RedshiftDataClient(config);
 * const command = new BatchExecuteStatementCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchExecuteStatementCommandInput} for command's `input` shape.
 * @see {@link BatchExecuteStatementCommandOutput} for command's `response` shape.
 * @see {@link RedshiftDataClientResolvedConfig | config} for RedshiftDataClient's `config` shape.
 *
 */
export class BatchExecuteStatementCommand extends $Command<
  BatchExecuteStatementCommandInput,
  BatchExecuteStatementCommandOutput,
  RedshiftDataClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: BatchExecuteStatementCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RedshiftDataClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<BatchExecuteStatementCommandInput, BatchExecuteStatementCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftDataClient";
    const commandName = "BatchExecuteStatementCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: BatchExecuteStatementInputFilterSensitiveLog,
      outputFilterSensitiveLog: BatchExecuteStatementOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: BatchExecuteStatementCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1BatchExecuteStatementCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<BatchExecuteStatementCommandOutput> {
    return deserializeAws_json1_1BatchExecuteStatementCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
