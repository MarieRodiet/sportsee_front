export default function getRightUrl(isMockedUrl) {
    return isMockedUrl ? "/data/user/" : "http://localhost:3000/user/"
}