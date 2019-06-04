// private
// @ts-ignore
const fishingApi = axios.create({
	baseURL: "//bcw-sandbox.herokuapp.com/api/YOURNAME/fish",
	timeout: 3000
});

// public
export default class FishingService {
}
