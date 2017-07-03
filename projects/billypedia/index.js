/* global $ _ opspark */
$(document).ready(function() {
    $.getJSON('data.json', function (data) {
        // YOUR CODE BELOW HERE //
    $('div').css('color', 'black');
    $('#section-quotes').css('background-color', 'grey').css('border-radius', '4px');
    $('.heading-quotes').css('color', 'white').css('padding-left', '10px');
    $('.quote').css('color', 'white').css('font-style', 'italic');
    $('#quotes').css('padding-right', '10px').css('padding-left', '10px');
    $('#quotes:last-child').css('padding-bottom', '4px');
    $('#section-quotes').prependTo('#sections');
    $('#image-billy').attr('src', 'images/billy/billy-1.jpg');


        
        // uncomment this to inspect all available data; delete when done //
        console.log(data);
        
        // EXAMPLE: Looping over top rated recordings; replace with your code //
        let topRated = data.discography.topRated;
        _.forEach(topRated, function(recording) {
            console.log(recording);
            $('#list-top-rated').append($('<li>').text(recording.title));
        });
        
        $('<section>').attr('id', 'section-recordings').append($('<h3>').text('Recordings')).appendTo($('#sidebar'));
        
        $('#section-recordings').append($('<ul>').attr('id', 'list-recordings'));
        
        var recordings = data.discography.recordings;
        
         _.map(recordings, function(recording) {
            var $listItem = $('<li>').addClass('recording');
            var $title = $('<div>').text(recording.title).addClass('title');
            var $artist = $('<div>').text(recording.artist).addClass('artist');
            var $release = $('<div>').text(recording.release).addClass('release');
            var $year = $('<div>').text(recording.year).addClass('year');
            $listItem.append($title, $artist, $release, $year);
            $('#list-recordings').append($listItem);
        });
        
        $('#section-top-rated').prepend($('<img>').attr.('id', 'top-rated-image').attr('src', topRated[0].art));
        
        $('#section-recordings').prepend($('<img>').attr('src', recordings[0].art).attr('id', 'recording-image'));
        
        var billyImages = data.images.billy;
        
        $('#image-billy').click(function(event) {
            var billyPic = $('#image-billy').attr('src');
            var billyIndex = _.indexOf(billyImages, billyPic);
            console.log(billyPic, billyIndex);
            if(billyIndex < billyImages.length -1) {
                billyPic = billyImages[billyIndex + 1];
            } else {
                billyPic = billyImages[0];
            }
            console.log(billypPic, billyIndex);
            $('#image-billy').fadeOut(0);
            $('#image-billy').attr('src', billyPic);
        }); $('#image-billy').fadeIn();
        // YOUR CODE ABOVE HERE //
    })
    .fail(function() { console.log('getJSON on discography failed!'); });
});


