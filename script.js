
$(".btn").click(()=> {
    adicinarTarefa()    
})

$("#tarefa").on('keydown', function (e) {
    if(e.keyCode === 13){
        adicinarTarefa()
    }
});

function adicinarTarefa (){
    const tarefa = $("#tarefa").val()
    if(tarefa == ""){
        alert('Digite uma tarefa válida!!!')
    }else{
        $(".list").append(`
            <li>
                <i class="bi bi-check-circle check"></i>
                    <span>${ tarefa }</span>
                <i class="bi bi-trash close"></i>
            </li>
        `)
    }

    $("#tarefa").val("")

    $(".close").each( function(){
        $(this).click( function(){ 
            $(this).parent().remove();
        })
    })

    $(".list li").each( function(){
        $(this).click(function(){
            $(this).find('.check').css('color', '#42d42f')
            $(this).find('span').css('text-decoration','line-through')
        })
    })
}