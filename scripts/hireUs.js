
import { Requests } from "./Request.js"
import { ServiceForm } from "./ServiceForm.js"

export const HireUs = () => {
    return `
       <div class="hire"><h1>Hire Buttons and Lollipop The Clowns</h1>
        <img src="https://media.istockphoto.com/id/1196069955/photo/happy-mature-family-enjoying-sunny-day-in-nature-stock-photo.jpg?s=612x612&w=0&k=20&c=BD86Y8pfNgDkq3Ic43XgUVkrD_nNZDPEFn2LkgZLk6s=" alt="Maude and Merle" width="400px">
        </div>
        <section class="serviceForm">
        ${ServiceForm()}
        </section>

        <section class="serviceRequests">
        <h2>Service Requests</h2>
        <div class="center">
            ${Requests()}
            </div>
            </section>
            `
}
