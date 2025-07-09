import type { NavItems } from "./types";

export const NAV_ITEMS: NavItems = {
	home: {
		path: "/",
		title: "Inicio",
	},
	blog: {
		path: "/blog",
		title: "Blog",
	},
	// tags: {
	// 	path: "/tags",
	// 	title: "Etiquetas",
	// },
	// media: {
	// 	path: "/media",
	// 	title: "Media",
	// },
	about: {
		path: "/about",
		title: "Sobre mí",
	},
};

export const SITE = {
	// Detalles del sitio
	name: "FullFran",
	title: "Blog de FullFran",
	description: "Blog personal de Fran Olmedo sobre IA, desarrollo, productividad y marca personal.",
	url: "https://fullfran.com", // Cambia si usas otro dominio
	githubUrl: "https://github.com/fullfran", // O el repo de tu blog si lo tienes
	listDrafts: true,
	image:
		"https://user-images.githubusercontent.com/62121649/167893184-a2b69260-ca9e-4a77-a5bc-63b8135ae5db.png",
	ytChannelId: "",
	// Configuración de autor
	author: "Fran Olmedo",
	authorTwitter: "fullfran_ai",
	authorImage: "https://user-images.githubusercontent.com/62121649/167893184-a2b69260-ca9e-4a77-a5bc-63b8135ae5db.png",
	authorBio:
		"Físico y experto en inteligencia artificial. Fundador de BlakIA. Aquí comparto aprendizajes sobre IA, desarrollo, productividad y marca personal.",
};

// Configuración del tema Ink
export const PAGE_SIZE = 8;
export const USE_POST_IMG_OVERLAY = false;
export const USE_MEDIA_THUMBNAIL = true;

export const USE_AUTHOR_CARD = true;
export const USE_SUBSCRIPTION = false; // Solo funciona si USE_AUTHOR_CARD está en true

export const USE_VIEW_STATS = true;