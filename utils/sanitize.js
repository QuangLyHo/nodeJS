import sanitizeHTML from 'sanitize-html'

export function sanitize(newSighting) {
    const cleanedObj = {}

    for (const [key, value] of Object.entries(newSighting)) {
        if (typeof value === 'string') {
            cleanedObj[key] = sanitizeHTML(value, {allowedTags: ['b']})
        } else cleanedObj[key] = value
    }

    return cleanedObj
}