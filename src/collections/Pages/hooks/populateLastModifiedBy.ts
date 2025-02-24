import type { FieldHook } from 'payload'

export const populateLastModifiedBy: FieldHook = async ({ req: { user }, value, operation }) => {
  // using this hook only the original creator of the document can be the author
  if (operation === 'create' || operation === 'update') {
    return user?.id
  }

  // when the operation is "update", return the original value so as not to change it
  return value
}
