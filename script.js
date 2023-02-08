document.addEventListener("DOMContentLoaded", myFunction);
    
function myFunction() {    
    const boton = document.querySelector("#btnCrearPdf");
        boton.addEventListener("click", () => {
            console.log("clicked!!!");
            const elementoParaConvertir = document.body;
            html2pdf()
                .set({
                    margin: 1,
                    filename: 'docpdf.pdf',
                    image: {
                        type: 'jpeg',
                        quality:0.98
                    },
                    html2canvas: {
                        scale:3,
                        letterRendering: true
                    },
                    jsPDF: {
                        unit:"in",
                        format:"a3",
                        orientation:'portrait'
                    }
                })
                .from(elementoParaConvertir)
                .save()
                .catch(err => console.log(err));
        });
}