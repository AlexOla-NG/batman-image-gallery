function seperateText(text, seperator) {
    if(!text || text.length < 1) return

    return text.split(seperator)
}

module.exports = seperateText;