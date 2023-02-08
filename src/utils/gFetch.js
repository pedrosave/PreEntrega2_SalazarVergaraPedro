let productos = [
    { "id": 1, "price": 3800, "title": "Play Station 5", "category": "Play Station", "image": "./src/assets/ProductosImg/ps5.png", "cantidad": 1 },
    { "id": 2, "price": 1550, "title": "Play Station VR", "category": "Play Station", "image": "./src/assets/ProductosImg/vision1.png", "cantidad": 1 },
    { "id": 3, "price": 2850, "title": "XBOX Serie X", "category": "XBOX", "image": "./src/assets/ProductosImg/xbox-serie-x-card.png", "cantidad": 1 },
    { "id": 4, "price": 2350, "title": "XBOX Serie S", "category": "XBOX", "image": "./src/assets/ProductosImg/xbox-serie-s-card.png", "cantidad": 1 },
    { "id": 5, "price": 1230, "title": "Nintendo Switch Lite", "category": "Nintendo", "image": "./src/assets/ProductosImg/nintendo lite.png", "cantidad": 1 },
    { "id": 6, "price": 1850, "title": "Nintendo Switch", "category": "Nintendo", "image": "./src/assets/ProductosImg/switch.png", "cantidad": 1 },
    { "id": 7, "price": 290, "title": "Switch Control", "category": "Nintendo", "image": "./src/assets/ProductosImg/controles.png", "cantidad": 1 },
    { "id": 8, "price": 340, "title": "Mando XBOX", "category": "XBOX", "image": "./src/assets/ProductosImg/mando-xbox-card.png", "cantidad": 1 },
    { "id": 9, "price": 450, "title": "Mando PS5", "category": "Play Station", "image": "./src/assets/ProductosImg/mando ps55555555.png", "cantidad": 1 }
]

export const gFetch = () => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(productos)
        }, 1000)
    })
}