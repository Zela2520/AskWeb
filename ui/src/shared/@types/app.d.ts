declare const _brand: unique symbol

declare global {
/**
 * Custom utility types
 */
export type Nullable<T> = T | null

export type Keys<T extends Record<string, unknown>> = keyof T

export type Values<T extends Record<string, unknown>> = T[Keys<T>]

export type Brand<K, T> = K & { [_brand]: T }

/**
 * Type aliases
 */
// export type Post = string

// export type Email = string

export type Id = number

// export type DateIso = string

// export type Timestamp = number

// export type Like = number

// export type Url = string

// export type Color = string
}

export {}