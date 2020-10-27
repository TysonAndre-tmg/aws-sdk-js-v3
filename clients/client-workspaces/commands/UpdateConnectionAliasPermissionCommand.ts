import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";
import { UpdateConnectionAliasPermissionRequest, UpdateConnectionAliasPermissionResult } from "../models/models_0";
import {
  deserializeAws_json1_1UpdateConnectionAliasPermissionCommand,
  serializeAws_json1_1UpdateConnectionAliasPermissionCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export type UpdateConnectionAliasPermissionCommandInput = UpdateConnectionAliasPermissionRequest;
export type UpdateConnectionAliasPermissionCommandOutput = UpdateConnectionAliasPermissionResult & __MetadataBearer;

export class UpdateConnectionAliasPermissionCommand extends $Command<
  UpdateConnectionAliasPermissionCommandInput,
  UpdateConnectionAliasPermissionCommandOutput,
  WorkSpacesClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateConnectionAliasPermissionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WorkSpacesClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateConnectionAliasPermissionCommandInput, UpdateConnectionAliasPermissionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName: "WorkSpacesClient",
      commandName: "UpdateConnectionAliasPermissionCommand",
      inputFilterSensitiveLog: UpdateConnectionAliasPermissionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateConnectionAliasPermissionResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: UpdateConnectionAliasPermissionCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateConnectionAliasPermissionCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateConnectionAliasPermissionCommandOutput> {
    return deserializeAws_json1_1UpdateConnectionAliasPermissionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}