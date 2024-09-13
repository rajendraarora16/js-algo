const { fetchResp } = require("./index");

global.fetch = jest.fn();

describe("fetchResp", () => {
  it("should return success", async () => {

    const mockData = { id: 1, resp: "success" };
    fetch.mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue(mockData),
    });
    const foo = await fetchResp("https://jsonplaceholder.typicode.com/posts/1");
    expect(foo).toBe(mockData);
  });
})

/**
 *  To run test
 * 
 *  "npx jest"
 */