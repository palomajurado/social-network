export const notice = () =>
  PNotify.notice({
    title: "Eliminar publicación",
    text: "¿Estas segur@?",
    icon: "fas fa-question-circle",
    hide: false,
    closer: false,
    sticker: false,
    destroy: true,
    stack: new PNotify.Stack({
      dir1: "down",
      modal: true,
      firstpos1: 25,
      overlayClose: false,
    }),
    modules: new Map([
      ...PNotify.defaultModules,
      [
        PNotifyConfirm,
        {
          confirm: true,
        },
      ],
    ]),
  });

export const successMessage = () =>
  PNotify.success({
    title: "Éxito!",
    text: "Actualizaste tu publicación.",
    delay: 500,
  });

export const noticeMessage = () =>
  PNotify.notice({
    title: "Notice",
    text: "No hay nada para compartir.",
    delay: 1500,
  });
