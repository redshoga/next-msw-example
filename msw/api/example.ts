import { MockedRequest, ResponseResolver, restContext } from "msw";

export const example: ResponseResolver<
  MockedRequest,
  typeof restContext
> = async (req, res, ctx) => {
  return res(
    ctx.status(200),
    ctx.json({
      name: "hello from /msw/api/example.ts",
    })
  );
};
