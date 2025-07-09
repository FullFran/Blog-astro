import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { SITE } from "../config";

const allPosts = await getCollection("blog");
const sortedPosts = Object.values(allPosts).sort(
	(a, b) => new Date(b.data.date).valueOf() - new Date(a.data.date).valueOf(),
);

export const get = () =>
	rss({
		title: `${SITE.name} | Blog`,
		description: SITE.description,
		site: import.meta.env.SITE,
		items: sortedPosts.map((item) => ({
			title: item.data.title,
			description: item.data.description,
			link: `/blog/${item.slug}`,
			pubDate: new Date(item.data.date),
		})),
		customData: `<language>es-es</language>`,
	});
