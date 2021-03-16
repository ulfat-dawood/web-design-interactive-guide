const files= document.querySelector('#main .files ul');
const fileData=[
    {
        img:'doc',
        fileName:'Annual review',
        date:'Dec 12, 1995'
    },
    {
        img:'vid',
        fileName:'Annual review',
        date:'Dec 12, 1995'
    },
    {
        img:'img',
        fileName:'Annual review',
        date:'Dec 12, 1995'
    },
    {
        img:'img',
        fileName:'Annual review',
        date:'Dec 12, 1995'
    },
    {
        img:'doc',
        fileName:'Annual review',
        date:'Dec 12, 1995'
    },
    {
        img:'img',
        fileName:'Annual review',
        date:'Dec 12, 1995'
    },
    {
        img:'vid',
        fileName:'Annual review',
        date:'Dec 12, 1995'
    },
    {
        img:'doc',
        fileName:'Annual review',
        date:'Dec 12, 1995'
    },
    {
        img:'doc',
        fileName:'Annual review',
        date:'Dec 12, 1995'
    },
    {
        img:'doc',
        fileName:'Annual review',
        date:'Dec 12, 1995'
    },
    {
        img:'img',
        fileName:'Annual review',
        date:'Dec 12, 1995'
    },
    {
        img:'vid',
        fileName:'Annual review',
        date:'Dec 12, 1995'
    },
]

var fileList=''; 

fileData.forEach((file)=>{
    fileList+= `
<li>
<div class="file">
    <img src="./img/stat-${file.img}.svg">
    <h4>${file.fileName}</h4>
</div>

<h4 class="members">${file.members}</h4>

<h4>${file.date}</h4>
</li>
`
})
console.log(fileList)

files.innerHTML= fileList; 