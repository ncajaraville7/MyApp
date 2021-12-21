$("body").prepend(`</div>
                        <a class="btnsubir">↑</a>
                   </div>`);
// Asociamos la animación al click en un elemento <a>
$('btnsubir').click( function(e) { 
    e.preventDefault();
    //Animamos sus propiedades CSS con animate
    $('html, body').animate({
        scrollTop: $(".navbar").offset().top  
    }, 5000);
} );
