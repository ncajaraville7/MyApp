<<<<<<< HEAD
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
=======
const transfer = document.querySelector('.transfer');
const loan = document.querySelector('.loan')

$(transfer).animate({  
    opacity: '0'  },
    "slow",);

    $(transfer).animate({  
        opacity: '1'  },
        "slow",);

        $(loan).animate({  
            opacity: '0'  },
            "slow",);
        
            $(loan).animate({  
                opacity: '1'  },
                "slow",);

>>>>>>> e969d554854257c0c14a697a8f2125aa9fac8ef7
