let panelCount = 0

$('#toggle-html').click(function() {

    if ($('#html-panel').css('display') == 'none') {

        $('#html-panel').show()
        $(this).css('background-color' , 'rgb(126, 175, 182)')
        panelCount = panelCount + 1
        $('.panel').width($(window).width()/panelCount -2)

    } else {

        $('#html-panel').css('display' , 'none')
        $(this).css('background-color' , '')
        panelCount = panelCount - 1
        $('.panel').width($(window).width()/panelCount -2)

    }

})

$('#toggle-css').click(function() {

    if ($('#css-panel').css('display') == 'none') {

        $('#css-panel').show()
        $(this).css('background-color' , 'rgb(126, 175, 182)')
        panelCount = panelCount + 1
        $('.panel').width($(window).width()/panelCount -2)

    } else {

        $('#css-panel').css('display' , 'none')
        $(this).css('background-color' , '')
        panelCount = panelCount - 1
        $('.panel').width($(window).width()/panelCount -2)
    }

})

$('#toggle-js').click(function() {

    if ($('#js-panel').css('display') == 'none') {

        $('#js-panel').show()
        $(this).css('background-color' , 'rgb(126, 175, 182)')
        panelCount = panelCount + 1
        $('.panel').width($(window).width()/panelCount -2)

    } else {

        $('#js-panel').css('display' , 'none')
        $(this).css('background-color' , '')
        panelCount = panelCount - 1
        $('.panel').width($(window).width()/panelCount -2)

    }

})

$('#toggle-output').click(function() {

    if ($('#output-panel').css('display') == 'none') {

        $('#output-panel').show()
        $(this).css('background-color' , 'rgb(126, 175, 182)')
        panelCount = panelCount + 1
        $('.panel').width($(window).width()/panelCount -2)

    } else {

        $('#output-panel').css('display' , 'none')
        $(this).css('background-color' , '')
        panelCount = panelCount - 1
        $('.panel').width($(window).width()/panelCount -2)

    }

})


/*************************************************************************/


$('textarea').on('keyup change paste' , function() {

    $('#output-panel').contents().find('html').html(
        '<html><head><style type="text/css">' + $('#css-panel').val()
        + '</style><body>' + $('#html-panel').val() + '</body></html>')

    document.getElementById('output-panel').contentWindow.eval($('#js-panel').val())

})