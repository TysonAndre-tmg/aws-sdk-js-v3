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
  ListXssMatchSetsRequest,
  ListXssMatchSetsRequestFilterSensitiveLog,
  ListXssMatchSetsResponse,
  ListXssMatchSetsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1ListXssMatchSetsCommand,
  serializeAws_json1_1ListXssMatchSetsCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WAFRegionalClientResolvedConfig } from "../WAFRegionalClient";

export interface ListXssMatchSetsCommandInput extends ListXssMatchSetsRequest {}
export interface ListXssMatchSetsCommandOutput extends ListXssMatchSetsResponse, __MetadataBearer {}

/**
 * <note>
 *             <p>This is <b>AWS WAF Classic</b> documentation. For
 *       more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS
 *       WAF Classic</a> in the developer guide.</p>
 *             <p>
 *                <b>For the latest version of AWS
 *       WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p>
 *          </note>
 * 		       <p>Returns an array of <a>XssMatchSet</a> objects.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFRegionalClient, ListXssMatchSetsCommand } from "@aws-sdk/client-waf-regional"; // ES Modules import
 * // const { WAFRegionalClient, ListXssMatchSetsCommand } = require("@aws-sdk/client-waf-regional"); // CommonJS import
 * const client = new WAFRegionalClient(config);
 * const command = new ListXssMatchSetsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListXssMatchSetsCommandInput} for command's `input` shape.
 * @see {@link ListXssMatchSetsCommandOutput} for command's `response` shape.
 * @see {@link WAFRegionalClientResolvedConfig | config} for WAFRegionalClient's `config` shape.
 *
 */
export class ListXssMatchSetsCommand extends $Command<
  ListXssMatchSetsCommandInput,
  ListXssMatchSetsCommandOutput,
  WAFRegionalClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListXssMatchSetsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WAFRegionalClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListXssMatchSetsCommandInput, ListXssMatchSetsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WAFRegionalClient";
    const commandName = "ListXssMatchSetsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListXssMatchSetsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListXssMatchSetsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListXssMatchSetsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListXssMatchSetsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListXssMatchSetsCommandOutput> {
    return deserializeAws_json1_1ListXssMatchSetsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
