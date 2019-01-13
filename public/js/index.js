function isChecked(check_id, content_id){
    cbox = document.getElementById(check_id);
    content = document.getElementById(content_id);
    if(cbox.checked){
        content.style.textDecoration = "line-through";
    }else{
        content.style.textDecoration = "initial";
    }
}