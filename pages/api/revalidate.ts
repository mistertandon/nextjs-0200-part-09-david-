import { NextApiRequest, NextApiResponse } from "next";
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  console.log("req.query",req.query);

  await res.revalidate("/blog");
  return res.json({ revalidated: true });
};

export { handler as default };
