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

import { IvschatClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IvschatClient";
import {
  CreateChatTokenRequest,
  CreateChatTokenRequestFilterSensitiveLog,
  CreateChatTokenResponse,
  CreateChatTokenResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1CreateChatTokenCommand,
  serializeAws_restJson1CreateChatTokenCommand,
} from "../protocols/Aws_restJson1";

export interface CreateChatTokenCommandInput extends CreateChatTokenRequest {}
export interface CreateChatTokenCommandOutput extends CreateChatTokenResponse, __MetadataBearer {}

/**
 * <p>Creates an encrypted token that is used to establish an individual WebSocket connection
 *          to a room. The token is valid for one minute, and a connection (session) established with
 *          the token is valid for the specified duration.</p>
 *          <p>Encryption keys are owned by Amazon IVS Chat and never used directly by your
 *          application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IvschatClient, CreateChatTokenCommand } from "@aws-sdk/client-ivschat"; // ES Modules import
 * // const { IvschatClient, CreateChatTokenCommand } = require("@aws-sdk/client-ivschat"); // CommonJS import
 * const client = new IvschatClient(config);
 * const command = new CreateChatTokenCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateChatTokenCommandInput} for command's `input` shape.
 * @see {@link CreateChatTokenCommandOutput} for command's `response` shape.
 * @see {@link IvschatClientResolvedConfig | config} for IvschatClient's `config` shape.
 *
 */
export class CreateChatTokenCommand extends $Command<
  CreateChatTokenCommandInput,
  CreateChatTokenCommandOutput,
  IvschatClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateChatTokenCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IvschatClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateChatTokenCommandInput, CreateChatTokenCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IvschatClient";
    const commandName = "CreateChatTokenCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateChatTokenRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateChatTokenResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateChatTokenCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateChatTokenCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateChatTokenCommandOutput> {
    return deserializeAws_restJson1CreateChatTokenCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
