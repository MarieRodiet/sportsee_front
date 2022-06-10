export default function facade(isMockedUrl) {
    return isMockedUrl ? "/data/user/" : "http://localhost:3000/user/"
}