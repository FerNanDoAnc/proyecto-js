$(document).ready(function(){
    //sliders
    $('.galeria').bxSlider({
        mode: 'fade',
        captions: true,
        slideWidth: 1200,
        pager: true,
    });
    //posts
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
    //Selectores de tema
    var theme=$("#theme");
    $("#to-green").click(function(){
        theme.attr("href","css/green.css")
    });
    $("#to-red").click(function(){
        theme.attr("href","css/red.css")
    });
    $("#to-blue").click(function(){
        theme.attr("href","css/blue.css")
    });
});