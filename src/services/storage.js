import storage from '../services/firebaseConfig'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'

const salvarImagem = async (imagem, imagemNome) => {
    if (!imagem) return;

    const downloadImagem = await fetch(imagem)
    const blobImagem = await downloadImagem.blob()

    const imagemRef = ref(storage, `Images/${imagemNome}.png`)

    try {
        await uploadBytes(imagemRef, blobImagem);
        const url = await getDownloadURL(imagemRef);
        return url;
    }
    catch (error) {
        console.log(error)
        return null;
    }
}

export default salvarImagem;