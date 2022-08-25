import {creatorDetails, socialLinks, whereNextLinks} from './data.js'

export function createAccountDetails() {
    const accountHandleElement = document.getElementById('accountHandle');
    const creatorNameElement = document.getElementById('creatorName');
    const taglineElement = document.getElementById('tagline');
    accountHandleElement.innerHTML = creatorDetails.accountHandle;
    creatorNameElement.innerHTML = creatorDetails.creatorName;
    taglineElement.innerHTML = creatorDetails.tagline;

    if (creatorDetails.profilePic) {
        const profilePicWrapperElement = document.getElementById('profilePicContainer');
        const imageElement = document.createElement('img');
        imageElement.setAttribute('src',creatorDetails.profilePic);
        profilePicWrapperElement.appendChild(imageElement);
        imageElement.classList.add('profileImage');
    }
}


export function createSocialLinks() {
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


export function createWhereNextLinks() {
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
