import { getCollection } from "astro:content";

export async function GET() {
  const labs = await getCollection("labs");

  return Response.json(
    labs.map((lab) => ({
      title: lab.data.title,
      slug: lab.data.slug,
      tags: lab.data.tags,
    })),
  );
}
