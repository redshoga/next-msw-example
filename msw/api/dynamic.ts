import { MockedRequest, ResponseResolver, restContext } from "msw";

export const dynamic: ResponseResolver<
  MockedRequest,
  typeof restContext
> = async (req, res, ctx) => {
  // console.log(window);
  // console.log(window.location);

  if (window.location.href.includes("#pattern_404"))
    return res(ctx.status(404));
  if (window.location.href.includes("#pattern_500"))
    return res(ctx.status(500));

  return res(
    ctx.status(200),
    ctx.json({
      name: "hello from /msw/api/dynamic.ts",
    })
  );
};
