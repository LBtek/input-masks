export default function chunkSubstr(str: string, size: number): Array<string> {
  const numChunks = Math.ceil(str.length / size)
  const chunks = new Array(numChunks)

  for (let i = 0, o = 0; i < numChunks; ++i, o += size) {
    chunks[i] = str.slice(o, (o+size-1))
  }

  return chunks
}
