import { views } from "../view/index.js";
import { createNewPublication, getPublications, getStorageRef } from "../model/publication.model.js"

export default (viewProfile) => {
    const btnShare = viewProfile.querySelector('#btnShare');
    const imageViewer = viewProfile.querySelector('#addImg');
    const iconCamera = viewProfile.querySelector('#iconCamera');

    btnShare.addEventListener('click', () => {
        const textAreaComentary = viewProfile.querySelector('#textAreaComentary').value;
        const optionPublicPrivate = viewProfile.querySelector('#optionPublicPrivate').value;

        if(imageViewer.files[0] === undefined)
        {
            createNewPublication({
                userId : 'IdLoginUserTODO',
                content : textAreaComentary,
                image: null,
                privacyAction: optionPublicPrivate,
                punctuation: 0
            }).then((data) => {
                console.log(data);
                viewProfile.querySelector('#textAreaComentary').value = '';
            }).catch((err) => {
                console.log(err);
            });
        } else {
            uploadImageUrl().then((url) => {
                createNewPublication({
                    userId : 'IdLoginUserTODO',
                    content : textAreaComentary,
                    image: url,
                    privacyAction: optionPublicPrivate,
                    punctuation: 0
                }).then((data) => {
                    console.log(data);
                    viewProfile.querySelector('#textAreaComentary').value = '';
                }).catch((err) => {
                    console.log(err);
                });
            }).catch((error) => {
                console.log(error);
            })    
        }

    });

    const stories = viewProfile.querySelector('.stories');
    const dataPublications = getPublications();
    dataPublications.onSnapshot((collectionPost) => {
        stories.innerHTML = '';
        collectionPost.forEach(post => {
            const view = views.publications(post.data());
            stories.appendChild(view);
        });
    })

    imageViewer.addEventListener('change', () => {
        if(imageViewer.files && imageViewer.files[0]) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const idViewProfile = viewProfile.querySelector('#loadedImage');
                idViewProfile.setAttribute('src', e.target.result);
            };
            reader.readAsDataURL(imageViewer.files[0]);
        }
    })

    const uploadImageUrl = () => {
        return new Promise ((resolve, rejeact) => {
            const file = viewProfile.querySelector('#addImg').files[0];
            const name = (+new Date()) + '-' + file.name;
            const metadata = {
                contentType : file.type
            };
            const imageAdd = getStorageRef().child(name).put(file, metadata);
            imageAdd.then(snapshot => snapshot.ref.getDownloadURL())
                .then((url) => {
                    resolve(url);
                }).catch((error) => {
                    rejeact(error);
                } )
        })
    }
    
    iconCamera.addEventListener('click', () => {
        imageViewer.click();
    });
    

    return viewProfile;
}
