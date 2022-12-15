
import { getRequests, deleteRequest, getClowns, saveCompletion, getCompletions } from "./dataAccess.js"


// import get completions 

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("request--")) {
        const [, requestId] = click.target.id.split("--")
        deleteRequest(parseInt(requestId))
    }
})

mainContainer.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "clowns") {
            const [requestId, clownId] = event.target.value.split("--")
            const timestamp = Date.now()

            const completions = {
                requestid: parseInt(requestId),
                clownid: parseInt(clownId),
                date_created: timestamp
            }

            saveCompletion(completions)
        }
    }
)


const convertRequestToListElement = (request) => {
    const clowns = getClowns()
    const completions = getCompletions()

    let html = ""
    html = `<div class="request"><li>Party For ${request.childName}<div class="space">
    <select class="clowns" id="clowns">
    <option value="">Choose</option>
    ${clowns.map(
        clown => {
            return `<option value="${request.id}--${clown.id}">${clown.name}</option>`
        }
    ).join("")
        }
    </select>
        <button class="request__deny" id="request--${request.id}">
        Deny </button>
        <button class="request__delete"id="request--${request.id}">
        Delete </button> </div> </li> </div>`
    completions.map(completion => {
        if (completion.requestid === request.id) {
            html =
                `
                        <div class="request"><li class="done">
                                    Party For ${request.childName}<div class="space">
                                    <button class="request__deny" id="request--${request.id}">
                                    Deny
                                    </button>
                                        <button class="request__delete" id="request--${request.id}">
                                        Delete
                                        </button>
                                   </div></li></div>`
        }
    }
    )

    return html
}


export const Requests = () => {
    const requests = getRequests()

    let html = `   
        <li class="color"><div class= "Table">
        <h1>Description</h1></div>
       
            ${requests.map(convertRequestToListElement).join("")
        }
        </li>
    `
    return html
}

/*
class="request_li"
*/