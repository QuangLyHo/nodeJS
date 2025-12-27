import { addNewSighting } from "../utils/addNewSighting.js";
import { getData } from "../utils/getData.js";
import { parseJSONBody } from "../utils/parseJSONBody.js";
import { sanitize } from "../utils/sanitize.js";
import { sendResponse } from "../utils/sendResponse.js";
import { sightingEvents } from "../events/sightingEvents.js";
import { stories } from "../data/stories.js";

export async function handleGet(res) {
    console.log("Sending /api get request")
    const stringifiedData = JSON.stringify(await getData())

    sendResponse(res, 200, "application/json", stringifiedData)
}

export async function handlePost(req, res) {
    try {
        const parsedBody = await parseJSONBody(req)
        const sanitizedHTML = sanitize(parsedBody)
        await addNewSighting(sanitizedHTML)

        sightingEvents.emit('sighting-added', sanitizedHTML)
        sendResponse(res, 201, 'application/json', JSON.stringify(sanitizedHTML))
    } catch(err) {
        sendResponse(res, 400, 'application/json', JSON.stringify({error: err}))
    }
}

export async function handleNews(req, res) {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/event-stream')
    res.setHeader('Cache-Control', 'no-cache')
    res.setHeader('Connection', 'keep-alive')

    setInterval(() => {
        let randomIndex = Math.floor(Math.random() * stories.length)

        res.write(
            `data: ${JSON.stringify({
                event: 'news-update',
                story: stories[randomIndex]
            })}\n\n`
        )

    }, 3000)
}