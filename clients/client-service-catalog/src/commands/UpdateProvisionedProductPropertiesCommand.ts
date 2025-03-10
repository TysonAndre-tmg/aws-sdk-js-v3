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
  UpdateProvisionedProductPropertiesInput,
  UpdateProvisionedProductPropertiesInputFilterSensitiveLog,
  UpdateProvisionedProductPropertiesOutput,
  UpdateProvisionedProductPropertiesOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1UpdateProvisionedProductPropertiesCommand,
  serializeAws_json1_1UpdateProvisionedProductPropertiesCommand,
} from "../protocols/Aws_json1_1";
import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";

export interface UpdateProvisionedProductPropertiesCommandInput extends UpdateProvisionedProductPropertiesInput {}
export interface UpdateProvisionedProductPropertiesCommandOutput
  extends UpdateProvisionedProductPropertiesOutput,
    __MetadataBearer {}

/**
 * <p>Requests updates to the properties of the specified provisioned product.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, UpdateProvisionedProductPropertiesCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, UpdateProvisionedProductPropertiesCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const command = new UpdateProvisionedProductPropertiesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateProvisionedProductPropertiesCommandInput} for command's `input` shape.
 * @see {@link UpdateProvisionedProductPropertiesCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for ServiceCatalogClient's `config` shape.
 *
 */
export class UpdateProvisionedProductPropertiesCommand extends $Command<
  UpdateProvisionedProductPropertiesCommandInput,
  UpdateProvisionedProductPropertiesCommandOutput,
  ServiceCatalogClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateProvisionedProductPropertiesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ServiceCatalogClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateProvisionedProductPropertiesCommandInput, UpdateProvisionedProductPropertiesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ServiceCatalogClient";
    const commandName = "UpdateProvisionedProductPropertiesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateProvisionedProductPropertiesInputFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateProvisionedProductPropertiesOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: UpdateProvisionedProductPropertiesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateProvisionedProductPropertiesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateProvisionedProductPropertiesCommandOutput> {
    return deserializeAws_json1_1UpdateProvisionedProductPropertiesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
