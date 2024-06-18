import fs from "fs"

class filess {

    saveProductsToFile(element, path) {
        fs.writeFileSync(path, JSON.stringify(element), 'utf8')
    }

    getProductsFromFile(path) {
        try {
            const data = fs.readFileSync(path, 'utf8')
            return JSON.parse(data)
        } catch (error) {
            return []
        }
    }

}

const f = new filess()
export default f