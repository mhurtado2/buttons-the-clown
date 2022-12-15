import { sendRequest } from "./dataAccess.js"

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "submitRequest") {
        // Get what the user typed into the form fields
        const userParentName = document.querySelector("input[name='parentName']").value
        const userChildName = document.querySelector("input[name='childName']").value
        const userNumOfChildren = document.querySelector("input[name='numOfChildren']").value
        const userAddress = document.querySelector("input[name='serviceAddress']").value
        const userDate = document.querySelector("input[name='serviceDate']").value
        const userReservationLength = document.querySelector("input[name='reservationLength']").value

        // Make an object out of the user input
        const dataToSendToAPI = {
            parentName: userParentName,
            childName: userChildName,
            numOfChildren: userNumOfChildren,
            address: userAddress,
            neededBy: userDate,
            reservationLength: userReservationLength,
        }

        // Send the data to the API for permanent storage
        sendRequest(dataToSendToAPI)
    }
})


export const ServiceForm = () => {
    let html = `
        <div class="field">
            <label class="label" for="parentName">Parent Name</label>
            <input type="text" name="parentName" class="input" />
        </div>
        <div class="field">
        <label class="label" for="childName">Child Name</label>
        <input type="text" name="childName" class="input" />
        </div>
        <div class="field">
        <label class="label" for="numOfChildren">Party Size</label>
        <input type="text" name="numOfChildren" class="input" />
        </div>
        <div class="field">
            <label class="label" for="serviceAddress">Address</label>
            <input type="text" name="serviceAddress" class="input" />
        <div class="field">
            <label class="label" for="serviceDate">Date needed</label>
            <input type="date" name="serviceDate" class="input" />
        </div>
        <div class="field">
            <label class="label" for="reservationLength">Length Of Reservation</label>
            <input type="number" name="reservationLength" class="input" />
        </div>

        <button class="button" id="submitRequest">Submit Request</button>
      
    `

    return html
}

