// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare module 'nprogress';
declare namespace App {
	// interface Error {}
	// interface Locals {}
	// interface PageData {}
	// interface Platform {}
}

interface ViewTransition {
	updateCallbackDone: Promise<void>;
	ready: Promise<void>;
	finished: Promise<void>;
	skipTransition: () => void;
}

interface Document {
	startViewTransition(updateCallback: () => Promise<void>): ViewTransition;
}

interface CSSStyleDeclaration {
	viewTransitionName: string;
}
