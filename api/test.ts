export const config = {
  runtime: "edge",
};

export default async function handler(request: Request) {
  const res = await fetch("https://47.106.137.81:9001/api/test");

  // try {
  //   console.log(await res.text()); // error code: 1003
  // } catch (e) {
  //   console.error("text() error", e);
  // }

  try {
    console.log(await res.json());
  } catch (e) {
    console.error("json() error", e); //json() error SyntaxError: Unexpected token 'e', "error code: 1003" is not valid JSON
  }

  return new Response("hi");
}
