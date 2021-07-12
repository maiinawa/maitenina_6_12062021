import { parseRequestUrl } from "./utils"

const ProfileScreen = {
    render : async () => {
        const request = parseRequestUrl();
        const profileID = await getProfile(request.id)
        return `
        <!-- <article class="photographer__list">
        <h1>${profileID.name}</h1>
</article>
        `
        }
}
console.log('screeen')

export default ProfileScreen