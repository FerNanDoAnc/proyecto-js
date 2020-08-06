$(document).ready(function(){
    //sliders
    if(window.location.href.indexOf('index')>-1){
        $('.galeria').bxSlider({
            mode: 'fade',
            captions: true,
            slideWidth: 1200,
            pager: true,
        });
        }
        //posts
    if(window.location.href.indexOf('index')>-1){
    var posts=[
        {
            tittle:'Prueba de titulo 1',
            date: 'Publicado el dia '+moment().format("dddd")+' '+moment().date()+' de '+moment().format("MMMM")+' del '+moment().format("YYYY"),
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi dolore tenetur alias temporibus nam.'
        },
        {
            tittle:'Prueba de titulo 2',
            date: 'Publicado el dia '+moment().format("dddd")+' '+moment().date()+' de '+moment().format("MMMM")+' del '+moment().format("YYYY"),
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi dolore tenetur alias temporibus nam.'
        },
        {
            tittle:'Prueba de titulo 3',
            date: 'Publicado el dia '+moment().format("dddd")+' '+moment().date()+' de '+moment().format("MMMM")+' del '+moment().format("YYYY"),
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi dolore tenetur alias temporibus nam.'
        },
        {
            tittle:'Prueba de titulo 4',
            date: 'Publicado el dia '+moment().format("dddd")+' '+moment().date()+' de '+moment().format("MMMM")+' del '+moment().format("YYYY"),
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi dolore tenetur alias temporibus nam.'
        },
        {
            tittle:'Prueba de titulo 4',
            date: 'Publicado el dia '+moment().format("dddd")+' '+moment().date()+' de '+moment().format("MMMM")+' del '+moment().format("YYYY"),
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi dolore tenetur alias temporibus nam.'
        },
        {
            tittle:'Prueba de titulo 4',
            date: 'Publicado el dia '+moment().format("dddd")+' '+moment().date()+' de '+moment().format("MMMM")+' del '+moment().format("YYYY"),
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi dolore tenetur alias temporibus nam.'
        }
    ];

        posts.forEach((item, index)=>{
            var post= `
            <article class="post">
                    <h2>${item.tittle}</h2>
                    <span class="date">${item.date}</span>
                    <p>
                        ${item.content}
                    </p>
                    <a href="#" class="button-more">Leer mas ...</a>
                </article>
            `;
            $("#posts").append(post);
        });
    }
    //Selectores de tema
    var theme=$("#theme");
    theme.attr('href',localStorage.theme);
    $("#to-green").click(function(){
        var green=theme.attr("href","css/green.css")
        localStorage.setItem("theme", green.attr('href'));
    });
    $("#to-red").click(function(){
        var red=theme.attr("href","css/red.css")
        localStorage.setItem("theme", red.attr('href'));
    });
    $("#to-blue").click(function(){
        var blue=theme.attr("href","css/blue.css")
        localStorage.setItem("theme", blue.attr('href'));
    });

    //Scroll para arriba d la web
    $('.subir').click(function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop:0
        },600)
        return false;
    });
    //Login Falso
    $("#login form").submit(function(){
        var form_name=$("#form_name").val();

        localStorage.setItem("form_name", form_name);
    });
    
    var form_name=localStorage.getItem("form_name");

    if(form_name!=null && form_name!="undefined"){
        var about_parrafo=$("#about p")
        
        about_parrafo.html("<br><strong>Bienvenido, "+form_name+"</strong>");
        about_parrafo.append("<a href='#' id='logout'>Cerrar Sesión</a>");
        
        $("#login").hide();
        $("#logout").click(function(){
            localStorage.clear();
            location.reload();
        });
    }
    if(window.location.href.indexOf('about')>-1){
        $("#acordeon").accordion();
    }
});