function ativarCamera() {
  const specs = { video: { width: 480 } }

  navigator.mediaDevices
    .getUserMedia(specs)
    .then((stream) => {
      const camera = document.querySelector('#video')
      camera.srcObject = stream
    })
    .catch((error) => {
      console.log(error)
    })
}

camera.addEventListener('click', ativarCamera)
