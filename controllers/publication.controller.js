import { views } from "../view/index.js";
import { createNewPublication, getPublications } from "../model/publication.model.js"

export default (viewProfile) => {
    const btnShare = viewProfile.querySelector('#btnShare');

    btnShare.addEventListener('click', () => {
        const textAreaComentary = viewProfile.querySelector('#textAreaComentary').value;
        createNewPublication({
            content : textAreaComentary,
            userId : 'IdLoginUserTODO',
            punctuation: 0
        }).then((data) => {
            console.log(data);
            viewProfile.querySelector('#textAreaComentary').value = '';
        }).catch((err) => {
            console.log(err);
        });
    });

    const stories = viewProfile.querySelector('.stories');
    const dataPublications = getPublications();
    dataPublications.onSnapshot((collectionPost) => {
        stories.innerHTML = '';
        collectionPost.forEach(post => {
            const view = views.publications(post.data());
            stories.appendChild(view);
            console.log(post.data());
        });

        
    })


    return viewProfile;
}
