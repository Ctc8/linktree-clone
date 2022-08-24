//  <--- Dynamic --->

const socialLinks = [
    {
        url: 'https://github.com/Ctc8',
        iconName: 'github',
        active: true,
    },

    {
        url: 'https://www.youtube.com/channel/UC3IxCzA5QOjAE4uDwes6UKw',
        iconName: 'youtube',
        active: true,
    },

    {
        url: 'https://www.linkedin.com/in/collin-chuang-828076227/',
        iconName: 'linkedin',
        active: true,
    },

    {
        url: 'https://open.spotify.com/user/asapkid12?si=7201834e4320401d',
        iconName: 'spotify',
        active: true,
    },

];

const whereNextLinks = [
    {
        url: '',
        text: 'My Developer Portfolio',
        active: true,
        },
    {
        url: '',
        text: 'About Me',
        active: true,
        },
]

console.log(socialLinks);
console.log(whereNextLinks);


function createSocialLinks() {
    const socialLinksElement = document.getElementById("socialRow");
    for(let link of socialLinks) {
        if(link.active){
            const i = document.createElement('i');
            i.classList.add('fa-brands');
            i.classList.add(`fa-${link.iconName}`);
    
            const a = document.createElement('a');
            a.classList.add('whiteButton');
            a.setAttribute('href', link.url);
    
            a.appendChild(i);
    
            socialLinksElement.appendChild(a);
        }
    }
}


function createWhereNext() {
    const whereNextElement = document.getElementById("whereNext");
    for(let link of whereNextLinks) {
        if(link.active){    
            const a = document.createElement('a');
            a.setAttribute('href', link.url);
            a.innerHTML = link.text;
            a.classList.add('whiteButton')
            whereNextElement.appendChild(a);
        }
    }
}

createSocialLinks();
createWhereNext();




