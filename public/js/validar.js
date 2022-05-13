let btnSave= document.getElementById("btnSave");
let btnCancel= document.getElementById("btnCancel");
let frmContact= document.getElementById("frmContact");

const validar= (e)=>{
    e.preventDefault();
    let txtApe= document.getElementById("txtApellido");
    let txtNomb= document.getElementById("txtNombres");
    if(txtApe.value===""){
        alert("Ingrese Apellido");
        txtApe.focus();
        return false;
    }
    frmContact.submit();
}

const cancelar= (e)=>{
    e.preventDefault();
    alert("Boton de cancelar");
}

btnSave.addEventListener("click", validar);
btnCancel.addEventListener("click", cancelar);