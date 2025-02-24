import { FieldHook } from 'payload'

const format = (value: string): string => value.replace(/^\/+/g, '')

const formatLink =
  (fallback: string): FieldHook =>
  ({ value, originalDoc, data }) => {
    if (typeof value === 'string') {
      return format(value)
    }
    const fallbackData = (data && data[fallback]) || (originalDoc && originalDoc[fallback])

    if (fallbackData && typeof fallbackData === 'string') {
      return format(fallbackData)
    }

    return value
  }

export default formatLink
