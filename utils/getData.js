import path from 'node:path'
import fs from 'node:fs/promises'

export async function getData() {
    try {
        const relPath = path.join('data','data.json')
        const data = await fs.readFile(relPath, 'utf8')
        const parsedData = JSON.parse(data)

        return parsedData
    } catch (err) {
        console.log("Error: ", err)
        return []
    }
}