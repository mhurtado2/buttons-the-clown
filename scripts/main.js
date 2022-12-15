
import { fetchRequests } from "./dataAccess.js"
import { HireUs} from "./hireUs.js"
import { fetchClowns } from "./dataAccess.js"
import { fetchCompletions } from "./dataAccess.js"

const mainContainer = document.querySelector("#container")

const render = () => {
    fetchRequests()
    .then(() => fetchClowns())
    .then(() => fetchCompletions())
    .then(() => {
            mainContainer.innerHTML = HireUs()
        }
    )
}

render()


mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        render()
    }
)

