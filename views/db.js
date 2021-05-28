import { join } from 'path'
import { Low, JSONFile } from 'lowdb'

const file = join("db", 'db.json')
const adapter = new JSONFile(file)
const db = new Low(adapter)
export default db

// export const test = "test"
// export const a = "a"
// export const b = "b"
//  export default test
