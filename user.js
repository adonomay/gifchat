// ==UserScript==
// @name         GifChat
// @namespace    http://your.homepage/
// @version      0.1
// @description  enter something useful
// @author       Adam
// @match        https://owcentralteam.hipchat.com/chat/*
// @grant        none
// ==/UserScript==

var data = [{ url: 'http://replygif.net/i/1119.gif', text: 'Cage wink'}
            , { url: 'http://31.media.tumblr.com/tumblr_m2nag7kf5t1rozti5o1_r1_500.gif', text: 'Cage hair'}
            , {text: 'Cage pound', url: 'http://i.imgur.com/lKG6rQ9.gif'}
            , {text: 'Cage let\'s go', url: 'http://img.pandawhale.com/post-33307-okay-lets-ride-gif-Nicolas-Cag-ua7d.gif'}
            , {text: 'Leo toast', url: 'http://mrwgifs.com/wp-content/uploads/2013/04/Leonardo-DiCaprio-Toast-Fireworks-Gif.gif'}
            , {text: 'Christian Bale yiss', url: 'http://i.imgur.com/9rKVp5Y.gif'}
            , {text: 'turtle high five', url: 'http://awesomegifs.com/wp-content/uploads/turtle-high-five.gif'}
            , {text: 'Tiger Woods arm pump', url: 'http://media.giphy.com/media/x790itVk2bD9K/giphy.gif'}
            , {text: 'Nick Frost shame', url: 'http://mrwgifs.com/wp-content/uploads/2013/10/Nick-Frost-Thinks-Its-a-Shame-In-Hot-Fuzz-Gif.gif'}
            , {text: 'Redford nod', url: 'http://img.pandawhale.com/post-23470-Jeremiah-Johnson-nod-cropped-g-jtcK.gif'}
            , {text: 'Calm yourself Iago', url: 'http://www.youtube.com/watch?v=3Gd2ch1FsPU'}
            , {text: 'psych heart this', url: 'http://media.giphy.com/media/8sXyqwCeeHNF6/giphy.gif'}
            , {text: 'psych cmon son', url: 'http://38.media.tumblr.com/d611f003e574503a9cd6337ac509d09e/tumblr_mquh4a4rEn1qlovjio1_500.gif'}
            , {text: 'dumbledore annoyed', url: 'http://i.imgur.com/BJrn3aA.gif'}
            , {text: 'mutombo', url: 'http://cdn.bleacherreport.net/images_root/article/media_slots/photos/000/727/315/fingerwag_original.gif?1360977837'}
            , {text: 'wtf', url: 'http://i.imgur.com/2uOBamR.gif'}
            , {text: 'scanners', url: 'http://images.wikia.com/uncyclopedia/images/archive/b/b5/20120914120348!Exploding-head.gif'}
            , {text: 'lebron nice job', url: 'http://www.reactiongifs.com/r/yxi.gif'}
            , {text: 'mary poppins sarcastic clap', url: 'http://k34.kn3.net/61056B0A4.gif'}
            , {text: 'rock bravo', url: 'http://cdn.niketalk.com/3/30/300ccadb_05-The-Rock.gif'}
            , {text: 'biden', url: 'http://voices.suntimes.com/wp-content/uploads/2014/01/grinning.gif'}
            , {text: 'keanu whoa', url: 'http://media.giphy.com/media/4S6dgZaC8ivdK/giphy.gif'}
            , {text: 'keanu bring em on', url: 'http://media.giphy.com/media/MgkBTmxt18lGg/giphy.gif'}
            , {text: 'figure skater', url: 'http://24.media.tumblr.com/f5d8bc3cd77ed83ee2745f5895c83030/tumblr_n0y7rrmD241rea2rlo2_250.gif'}
            , {text: 'evil terminator', url: 'http://www.reactiongifs.com/r/flme.gif'}
            , {text: 'george dancing', url: 'http://media.giphy.com/media/HBbA0gf8uemuQ/giphy.gif'}
            , {text: 'bingo', url: 'http://i.imgur.com/zGIyIq4.gif'}
            , {text: 'lakers bros', url: 'http://i.kinja-img.com/gawker-media/image/upload/s--1yPwFRWt--/c_fit,fl_progressive,q_80,w_636/185wsu7f62b33gif.gif'}
            , {text: 'obama shrug', url: 'http://i.imgur.com/DweDDx0.gif'}
            , {text: 'survivor tribe has spoken', url: 'http://u.cubeupload.com/amazongifs/fNS77f.gif' }
            , {text: 'i know some of these words', url: 'http://img.pandawhale.com/post-43287-Good-Burger-I-know-some-of-the-4u5w.gif' }
            , {text: 'antonio banderas yesss', url: 'http://i.imgur.com/QFywFtF.gif' }
           ];

var options = data.map(function(d) {
    return '<option value="' + d.url + '">' + d.text + "</option>";
});
var content = '<select id="gifchat-select"><option value="" disabled selected>Choose a gif</option>' + options + "</select>";

window.setTimeout(function() {
    // alert('running');
    $('#hipchat').after('<div id="gifchat-container" style="position:absolute;bottom:10px; right:5px; cursor: pointer;">' + content + '</div>');

    $('#gifchat-select').change(function() {
        $('#hc-message-input').click();
        $('#hc-message-input').val(this.value);
        // $('#hc-message-input').click();
        // jQuery.event.trigger({ type : 'keypress', which : 13 });
    });
    
    $('#gifchat-select').click(function(e) {
        e.stopPropagation();
    });
}, 4000);
