import React from "react";

function EmptySearchTodos({searchText}){
    let text ="";
    (!!searchText) ? text = `No hay resultados para ${searchText}` : text = "No hay resultados";
    
    return (<p className="message">{text}</p>) 
}

export default EmptySearchTodos;