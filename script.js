// Ici vous pouvez écrire du code JavaScript
window.onload = function ( ) {
    var img_path = './images/bw-image.jpg'; //'
    var img = new Image();
     
    // lorsque l'image est chargée
    
    img.onload = function ( )
    
    {
       
       

        var min  = Math.min( img.width);
        var min2  = Math.min( img.height );
        var size =  min/ 5;
        var i;
        var div;
        var row;
        var col;
        for ( i = 0; i < 5; i += 1 )
        {
            div = document.createElement('div');
            //div.id = "i"+i;
            div.className = "click-img click-img-"+i+" img-noir-"+i;
            div.style.width  = size + 'px';
            div.style.height = img.height  + 'px';      
            div.style.backgroundImage = 'url(' + img_path + ')';
            row = ( i % 5 );
            col = ( i);
            div.style.backgroundPosition =   -row * size + 'px ' + -col * img.height + 'px';
            div.style.float = 'left';
            if ( !row )
            {
                div.style.clear = 'left';
            }
            var target = document.querySelector('.parti'+i);
            target.prepend(div);//mettre l'image avant description
           
        }
        
       
        // Ajouter un gestionnaire d'événements pour le clic sur l'image
        var part = document.querySelectorAll('.click-img');
        part.forEach(function callback(image, index) {
            image.addEventListener("click", function(e){
                part.forEach(function callback(img, i) {
                    
                    if (i != index) {
                        
                        
                        img.classList.remove('active');
                        var des = document.querySelector('.description-'+i);
                        des.classList.remove('active');
                    }
                    else{
                        var voix = document.querySelector('#voix'+i);
                        
                        voix.play();
                    }
                });
                image.classList.toggle("active");
                var description = document.querySelector('.description-'+index);
                description.classList.toggle("active");
            });
        });

        var button = document.querySelectorAll('.btn-outline-primary');
        button.forEach(function callback(btn, index) {
            btn.addEventListener("click", function(e){
                part.forEach(function callback(img, i) {
                    if (i != index) {
                        img.classList.remove('active');
                        var des = document.querySelector('.description-'+i);
                        des.classList.remove('active');
                    }
                });
                var image = document.querySelector('.click-img-'+index);
                image.classList.toggle("active");
                var description = document.querySelector('.description-'+index);
                description.classList.toggle("active");
            });
        });

    };
     
    // chemin de l'image -> lance le téléchargement
    img.src = img_path;




}