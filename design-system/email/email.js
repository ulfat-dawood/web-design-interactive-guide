const inbox= document.querySelector('#inbox')

const emails= [
    {sender:"Sara" , heading:"fermentum dui faucibus.", date:'Jan 10'},
    {sender:"Microsoft Team" , heading:"condimentum vitae sapien. ", date:'Jan 19'},
    {sender:"Dale A." , heading:"At lectus urna duis", date:'Feb 29'},
    {sender:"Nick Wells" , heading:"Augue eget arcu dictum ", date:'Feb 22'},
    {sender:"Jim Berny" , heading:"Pulvinar elementum.", date:'Apr 3'},
    {sender:"Facebook" , heading:"Vitae proin ", date:'Apr 11'},
    {sender:"Dave" , heading:"Sem et tortor ", date:'Apr 26'},
    {sender:"M. T" , heading:"Vitae purus faucibus ", date:'May 5'},
    {sender:"Morty" , heading:"Morbi blandit.", date:'May 10'},
    {sender:"Jawad " , heading:"Velit euismod ", date:'May 14'},
    {sender:"Keith from Plex" , heading:"pellentesque ", date:'May 20'},
    {sender:"Mike Andrew" , heading:"Iaculis at erat ", date:'Jun 26'},
    {sender:"Audible.com" , heading:"Eu facilisis ", date:'Jun 25'},
    {sender:"Omar Shaik" , heading:" Viverra maecenas.", date:'Jun 28'},
    {sender:"Apple" , heading:"Viverra ipsum ", date:'Aug 28'},
    {sender:"Slack" , heading:"Ultrices dui ", date:'Aug 27'}
]
var msg= '';
emails.forEach((email,index)=>{
    msg+= ` <div class="email">

                <div>
                    <input type="checkbox" class="custom-checkbox email-check" id="checkbox-${index}">
                    <label for="checkbox-${index}"></label>
                    <div class="sender"><h4>${email.sender}</h4></div>
                    <p class="heading">${email.heading} </p>
                </div>


                <div>
                    <h5 class="date">${email.date}</h5>
                </div>
            </div>`;
})

inbox.innerHTML= msg;
