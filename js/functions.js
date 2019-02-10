$(document).ready(function() { 



            window.onLoad = Prep();
            
            function Prep(){
                window_Height = window.innerHeight;
                window_Width = window.innerWidth;
                
                image_Element = document.getElementById("floatimage");
                image_Height = image_Element.clientHeight;
                image_Width = image_Element.clientWidth;
                
                availSpace_V = window_Height - image_Height;
                availSpace_H = window_Width - image_Width;
                
                var changeInterval = 5000; // Time has to be in miliseconds. So, 3000 is 3 seconds
                // setInterval(moveImage, changeInterval);
                $('#floatimage').show();

            }
            
            function moveImage(){
                var randNum_V = Math.round(Math.random() * availSpace_V);
                var randNum_H = Math.round(Math.random() * availSpace_H);
                // $('#floatimage').attr("src",items[Math.floor(Math.random()*items.length)]);
                image_Element.style.top = randNum_V + "px";
                image_Element.style.left = randNum_H + "px";
            }
});
