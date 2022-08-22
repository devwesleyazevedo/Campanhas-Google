document.addEventListener('DOMContentLoaded', function () {
    var url_string = window.location.href;
    var url = new URL(url_string);
    var gclid = url.searchParams.get("gclid"); // Busca pelo parâmetro ?gclid= na URL exe: http://localhost/?gclid=123
 
    if (gclid) { // Se tiver o parâmetro ?gclid= na URL ele mostra o número de telefone abaixo.
       document.getElementById("phone-topbar").innerHTML = "<a href='tel:08009441131'><i class='fas fa-fw fa-phone'></i> 0800 944 1131</a>";
    } else { // Se não ele mostra o número de telefone abaixo.
       document.getElementById("phone-topbar").innerHTML = "<a href='tel:08002000001'><i class='fas fa-fw fa-phone'></i> 0800 200 0001</a>";
    }
 
    if (gclid) { // Se tiver o parâmetro ?gclid= na URL ele mostra o número de telefone abaixo.
       document.getElementById("phone-topbar-footer").innerHTML = "<a href='tel:08009441131'> <div><i class='fas fa-fw fa-phone'></i></div> <div style='flex: 1;'><h3>TELEFONE</h3>  <p>0800 944 1131</p></div></a>";
    } else { // // Se não ele mostra o número de telefone abaixo.
       document.getElementById("phone-topbar-footer").innerHTML = "<a href='tel:08002000001'> <div><i class='fas fa-fw fa-phone'></i></div> <div style='flex: 1;'><h3>TELEFONE</h3>  <p>0800 200 0001</p></div></a>";
    }
 
 }, false);