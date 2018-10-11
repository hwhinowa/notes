
function contents_view(url) {
    var div = document.getElementById('inner_content');
    console.log(div);

    // Modify the attribute
    div.setAttribute('w3-include-html', './html/javascript/flow_1.html');
    console.log(div);
}
