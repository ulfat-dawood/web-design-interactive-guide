const files= document.querySelector('#main .files ul');
const fileData=[
    {
        img:'doc',
        fileName:'Annual Review',
        members:'Only you',
        date:'Jan 2, 2020'
    },
    {
        img:'vid',
        fileName:'Opening Ceremony ',
        members:'Only you',
        date:'Dec 24, 2021'
    },
    {
        img:'img',
        fileName:'Logo',
        members:'7 members',
        date:'Feb 5, 2020'
    },
    {
        img:'img',
        fileName:'Main branch',
        members:'2 members',
        date:'Jan 15, 2021'
    },
    {
        img:'doc',
        fileName:'CV-2020',
        members:'Only you',
        date:'Dec 26, 2020'
    },
    {
        img:'img',
        fileName:'France',
        members:'Only you',
        date:'Feb 19, 2020'
    },
    {
        img:'vid',
        fileName:'New office tour',
        members:'3 members',
        date:'Mar 1, 2021'
    },
    {
        img:'doc',
        fileName:'Financial Report 2020',
        members:'Only you',
        date:'Oct 9, 2020'
    },
    {
        img:'doc',
        fileName:'Feb Reviews',
        members:'10 members',
        date:'Feb 8, 2021'
    },
    {
        img:'doc',
        fileName:'London branch estimates',
        members:'1 members',
        date:'Sep 21, 2021'
    },
    {
        img:'img',
        fileName:'Friends reunion',
        members:'Only you',
        date:'Dec 14, 2019'
    },
    {
        img:'vid',
        fileName:'Friends reunion video',
        members:'Only you',
        date:'Dec 12, 2019'
    },
]

var fileList=''; 

fileData.forEach((file)=>{
    fileList+= `
<li>
<div class="file">
    <img src="./img/stat-${file.img}.svg">
    <h5>${file.fileName}</h5>
</div>

<h5 class="members">${file.members}</h5>

<h5>${file.date}</h5>
</li>
`
})
console.log(fileList)

files.innerHTML= fileList; 