const url = 'https://api.coincap.io/v2'

export const getAssets = async () => {
  const request = await fetch(`${url}/assets`)
  const response = await request.json()
  console.log(response)
  return response
}
