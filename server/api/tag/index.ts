import { useSupabaseServer } from '~~/composables/supabase'

export default defineEventHandler(async (event) => {
  const { name } = getQuery(event)
  const client = useSupabaseServer()

  const { res } = event.node
  let rpc = 'get_tags'
  if (name?.toString().toLowerCase().startsWith('supabase'))
    rpc = 'get_supabase_tags'

  if (name) {
    const { data, error } = await client
      .rpc(rpc, { tag: name }, { count: 'exact' })
      .order('views', { ascending: false })

    if (data) {
      return data
    }
    else {
      res.statusCode = 500
      return error
    }
  }
  res.statusCode = 500
  return 'error'
})
