const inbox= document.querySelector('#inbox')

const emails= [
    {sender:"Sara" , heading:"fermentum dui faucibus. Mauris ultrices eros", date:'Jan 10'},
    {sender:"Microsoft Team" , heading:"condimentum vitae sapien. At lectus urna duis convallis", date:'Jan 19'},
    {sender:"Dale A." , heading:"At lectus urna duis convallis convallis.", date:'Feb 29'},
    {sender:"Nick Wells" , heading:"Augue eget arcu dictum varius duis at consectetur lorem donec.", date:'Feb 22'},
    {sender:"Jim Berny" , heading:"Pulvinar elementum integer enim neque.", date:'Apr 3'},
    {sender:"Facebook" , heading:"Vitae proin sagittis nisl rhoncus", date:'Apr 11'},
    {sender:"Dave" , heading:"Sem et tortor consequat id porta nibh ", date:'Apr 26'},
    {sender:"M. T" , heading:"Vitae purus faucibus ornare suspendisse", date:'May 5'},
    {sender:"Morty" , heading:"Morbi blandit cursus risus at ultrices.", date:'May 10'},
    {sender:"Jawad " , heading:"Velit euismod in pellentesque ", date:'May 14'},
    {sender:"Keith from Plex" , heading:"pellentesque elit ullamcorper dignissim cras", date:'May 20'},
    {sender:"Mike Andrew" , heading:"Iaculis at erat pellentesque adipiscing commodo ", date:'Jun 26'},
    {sender:"Audible.com" , heading:"Eu facilisis sed odio morbi quis", date:'Jun 25'},
    {sender:"Omar Shaik" , heading:" Viverra maecenas accumsan lacus vel.", date:'Jun 28'},
    {sender:"Apple" , heading:"Viverra ipsum nunc aliquet ", date:'Aug 28'},
    {sender:"Slack" , heading:"Ultrices dui sapien eget mi", date:'Aug 27'}
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
