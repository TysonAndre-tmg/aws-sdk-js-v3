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

import { MobileClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MobileClient";
import {
  ListBundlesRequest,
  ListBundlesRequestFilterSensitiveLog,
  ListBundlesResult,
  ListBundlesResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ListBundlesCommand,
  serializeAws_restJson1ListBundlesCommand,
} from "../protocols/Aws_restJson1";

export interface ListBundlesCommandInput extends ListBundlesRequest {}
export interface ListBundlesCommandOutput extends ListBundlesResult, __MetadataBearer {}

/**
 * <p>
 *             List all available bundles.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MobileClient, ListBundlesCommand } from "@aws-sdk/client-mobile"; // ES Modules import
 * // const { MobileClient, ListBundlesCommand } = require("@aws-sdk/client-mobile"); // CommonJS import
 * const client = new MobileClient(config);
 * const command = new ListBundlesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListBundlesCommandInput} for command's `input` shape.
 * @see {@link ListBundlesCommandOutput} for command's `response` shape.
 * @see {@link MobileClientResolvedConfig | config} for MobileClient's `config` shape.
 *
 */
export class ListBundlesCommand extends $Command<
  ListBundlesCommandInput,
  ListBundlesCommandOutput,
  MobileClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListBundlesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MobileClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListBundlesCommandInput, ListBundlesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MobileClient";
    const commandName = "ListBundlesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListBundlesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListBundlesResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListBundlesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListBundlesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListBundlesCommandOutput> {
    return deserializeAws_restJson1ListBundlesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
