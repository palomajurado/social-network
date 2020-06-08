/* eslint-disable import/extensions */
import { views } from '../view/index.js';
import { models } from '../model/index.model.js';

export default (viewProfile) => {
  const btnShare = viewProfile.querySelector('#btnShare');
  const imageViewer = viewProfile.querySelector('#addImg');
  const iconCamera = viewProfile.querySelector('#iconCamera');
  const displayImage = viewProfile.querySelector('#displayImage');
  const loadingPanel = viewProfile.querySelector('#idLoading');
  const user = models.profileModel.getCurrentNameUser();
  const menuEdit = viewProfile.querySelector('.menuEdit');

  btnShare.addEventListener('click', () => {
    const textAreaComentary = viewProfile.querySelector('#textAreaComentary').value;
    const optionPublicPrivate = viewProfile.querySelector('#optionPublicPrivate').value;

    if (imageViewer.files[0] === undefined && textAreaComentary === '') {
      // alert('no ingresó nada para compartir');
      PNotify.notice({
        title: 'Notice',
        text: 'No hay nada para compartir.',
        delay: 1500,
      });
      return false;
    }

    loadingPanel.classList.remove('clsLoadingHide');

    if (imageViewer.files[0] === undefined) {
      models.publicationsModel
        .createNewPublication({
          userId: user.uid,
          userName: user.displayName,
          userPhoto: user.photoURL,
          content: textAreaComentary,
          image: null,
          privacyAction: optionPublicPrivate,
          punctuation: 0,
        })
        .then(() => {
          loadingPanel.classList.add('clsLoadingHide');
          viewProfile.querySelector('#textAreaComentary').value = '';
          imageViewer.value = '';
          imageViewer.dispatchEvent(new Event('change'));
        })
        .catch((err) => {
          loadingPanel.classList.add('clsLoadingHide');
          console.log(err);
        });
    } else {
      uploadImageUrl()
        .then((url) => {
          models.publicationsModel
            .createNewPublication({
              userId: user.uid,
              userName: user.displayName,
              userPhoto: user.photoURL,
              content: textAreaComentary,
              image: url,
              privacyAction: optionPublicPrivate,
              punctuation: 0,
            })
            .then(() => {
              loadingPanel.classList.add('clsLoadingHide');
              viewProfile.querySelector('#textAreaComentary').value = '';
              imageViewer.value = '';
              imageViewer.dispatchEvent(new Event('change'));
            })
            .catch((err) => {
              loadingPanel.classList.add('clsLoadingHide');
              console.log(err);
            });
        })
        .catch((error) => {
          loadingPanel.classList.add('clsLoadingHide');
          console.log(error);
        });
    }
  });

  const eventDeletePublication = () => {
    const deletePublication = viewProfile.querySelectorAll('.deletePublication');
    deletePublication.forEach((delet) => {
      delet.addEventListener('click', () => {
        const idPublication = delet.closest('.authorPublication').querySelector('.idPublication').value;
        const notice = PNotify.notice({
          title: 'Eliminar publicación',
          text: '¿Estas segur@?',
          icon: 'fas fa-question-circle',
          hide: false,
          closer: false,
          sticker: false,
          destroy: true,
          stack: new PNotify.Stack({
            dir1: 'down',
            modal: true,
            firstpos1: 25,
            overlayClose: false,
          }),
          modules: new Map([
            ...PNotify.defaultModules,
            [PNotifyConfirm, {
              confirm: true,
            }],
          ]),
        });
        notice.on('pnotify:confirm', () => models.publicationsModel.deletePublication(idPublication));
      });
    });
  };

  const eventUpdatePublication = () => {
    const updatePublication = viewProfile.querySelectorAll('.updatePublication');
    updatePublication.forEach((updatePost) => {
      updatePost.addEventListener('click', () => {
        const idPublication = updatePost.closest('.authorPublication').querySelector('.idPublication').value;
        console.log(idPublication);
        updatePost.closest('.publication').querySelector('.currentContent').contentEditable = 'true';
        const btnGuardarUpdate = updatePost.closest('.publication').querySelector('.btnGuardarUpdate');

        btnGuardarUpdate.addEventListener('click', () => {
          const newContent = updatePost.closest('.publication').querySelector('.currentContent').innerText;
          models.publicationsModel.updatePublication(idPublication, newContent);
          PNotify.success({
            title: 'Éxito!',
            text: 'Actualizaste tu publicación.',
            delay: 500,
          });
        });
      });
    });
  };

  const stories = viewProfile.querySelector('.stories');
  const dataPublications = models.publicationsModel.getPublications();
  loadingPanel.classList.remove('clsLoadingHide');
  dataPublications.onSnapshot((collectionPost) => {
    loadingPanel.classList.add('clsLoadingHide');
    stories.innerHTML = '';
    collectionPost.forEach((post) => {
      const view = views.publications(post);
      stories.appendChild(view);
    });
    eventDeletePublication();
    eventUpdatePublication();
  });

  imageViewer.addEventListener('change', () => {
    if (imageViewer.files && imageViewer.files[0]) {
      displayImage.classList.remove('clsDisplayImage');
      const reader = new FileReader();
      reader.onload = (e) => {
        const idViewProfile = viewProfile.querySelector('#loadedImage');
        idViewProfile.setAttribute('src', e.target.result);
      };
      reader.readAsDataURL(imageViewer.files[0]);
    } else {
      displayImage.classList.add('clsDisplayImage');
    }
  });

  const uploadImageUrl = () => new Promise((resolve, rejeact) => {
    const file = viewProfile.querySelector('#addImg').files[0];
    const name = `${+new Date()}- ${file.name}`;
    const metadata = {
      contentType: file.type,
    };
    const imageAdd = models.publicationsModel
      .getStorageRef()
      .child(name)
      .put(file, metadata);
    imageAdd
      .then(snapshot => snapshot.ref.getDownloadURL())
      .then((url) => {
        resolve(url);
      })
      .catch((error) => {
        rejeact(error);
      });
  });

  iconCamera.addEventListener('click', () => {
    imageViewer.click();
  });

  return viewProfile;
};
