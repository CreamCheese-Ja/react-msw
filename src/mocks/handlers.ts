import { rest } from "msw";

export const handlers = [
  rest.get("/api/users", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          id: 1,
          name: "John",
        },
        {
          id: 2,
          name: "Alice",
        },
        {
          id: 3,
          name: "Bob",
        },
      ])
    );
  }),
  rest.get("/api/items", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          id: 1,
          name: "みかん",
        },
        {
          id: 2,
          name: "りんご",
        },
        {
          id: 3,
          name: "メロン",
        },
      ])
    );
  }),
];
