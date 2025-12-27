import { getData } from "./getData.js";
import fs from 'node:fs/promises'
import path from 'node:path'

export async function addNewSighting(newSighting) {
    try {
        const data = await getData()
        data.push(newSighting)

        const relPath = path.join('data', 'data.json')
        await fs.writeFile(
            relPath, 
            JSON.stringify(data, null, 2), 
            'utf-8'
        )
    } catch (err) {
        throw new Error(`Error: ${err}`)
    }
}