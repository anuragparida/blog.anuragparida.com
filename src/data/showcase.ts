export interface ShowcaseItem {
	name: string;
	href: string;
	stack: string;
	badge?: string;
	desc: string;
}

// Intentionally empty — projects live on anuragparida.com.
// The Showcase tab hides itself while this array has no entries.
export const showcase: ShowcaseItem[] = [];
