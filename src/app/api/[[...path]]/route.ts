import { NextRequest, NextResponse } from "next/server";
import { handler as cateringHandler } from "../../../../serverless/functions/catering";
import { handler as checkoutHandler } from "../../../../serverless/functions/checkout";
import { handler as cloverWebhookHandler } from "../../../../serverless/functions/clover-webhook";
import { handler as contactHandler } from "../../../../serverless/functions/contact";
import { handler as createOrderHandler } from "../../../../serverless/functions/create-order";
import { handler as jobApplicationHandler } from "../../../../serverless/functions/job-application";
import { handler as newsletterHandler } from "../../../../serverless/functions/newsletter";
import { handler as partyRequestHandler } from "../../../../serverless/functions/party-request";

export const runtime = "nodejs";

type RouteContext = {
  params: Promise<{ path?: string[] }>;
};

type LambdaResult = {
  statusCode?: number;
  headers?: Record<string, string | number | boolean | undefined>;
  body?: string;
  isBase64Encoded?: boolean;
};

type LambdaHandler = (event: Record<string, unknown>) => Promise<LambdaResult> | LambdaResult;

const handlers: Record<string, LambdaHandler> = {
  catering: cateringHandler as unknown as LambdaHandler,
  checkout: checkoutHandler as unknown as LambdaHandler,
  "clover-webhook": cloverWebhookHandler as unknown as LambdaHandler,
  contact: contactHandler as unknown as LambdaHandler,
  "job-application": jobApplicationHandler as unknown as LambdaHandler,
  newsletter: newsletterHandler as unknown as LambdaHandler,
  "orders/create": createOrderHandler as unknown as LambdaHandler,
  "party-request": partyRequestHandler as unknown as LambdaHandler
};

async function getPath(context: RouteContext) {
  const params = await context.params;
  return (params.path || []).join("/");
}

function sourceIp(request: NextRequest) {
  return request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || request.headers.get("x-real-ip") || "127.0.0.1";
}

function toLambdaEvent(request: NextRequest, path: string, body: string) {
  const headers = Object.fromEntries(request.headers.entries());
  const apiPath = `/api/${path}`;

  return {
    version: "2.0",
    routeKey: `${request.method} ${apiPath}`,
    rawPath: apiPath,
    rawQueryString: request.nextUrl.searchParams.toString(),
    headers,
    requestContext: {
      http: {
        method: request.method,
        path: apiPath,
        protocol: "HTTP/1.1",
        sourceIp: sourceIp(request),
        userAgent: request.headers.get("user-agent") || ""
      }
    },
    body,
    isBase64Encoded: false
  };
}

function toNextResponse(result: LambdaResult) {
  const status = result.statusCode || 200;
  const headers = new Headers();

  for (const [key, value] of Object.entries(result.headers || {})) {
    if (value !== undefined) {
      headers.set(key, String(value));
    }
  }

  return new NextResponse(result.body || "", {
    status,
    headers
  });
}

async function proxyToHandler(request: NextRequest, context: RouteContext) {
  const path = await getPath(context);
  const handler = handlers[path];

  if (!handler) {
    return NextResponse.json({ ok: false, message: "API route not found." }, { status: 404 });
  }

  const body = request.method === "OPTIONS" ? "" : await request.text();
  const result = await handler(toLambdaEvent(request, path, body));
  return toNextResponse(result);
}

export async function POST(request: NextRequest, context: RouteContext) {
  return proxyToHandler(request, context);
}

export async function OPTIONS(request: NextRequest, context: RouteContext) {
  return proxyToHandler(request, context);
}
