export type Lang = 'es' | 'en'

export const LANGS: readonly Lang[] = ['es', 'en']

/** Content that exists once per supported language. */
export type Localized<T> = Record<Lang, T>
