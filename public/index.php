<!doctype html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" href="css/main.css">
    <link rel="stylesheet" href="css/media.css">
    <link rel="stylesheet" href="css/forms.css">
</head>
<body>
    <script>
        var div = document.createElement('div');
        div.setAttribute('id', 'loading');
        div.style.display = 'flex';
        
        var img = document.createElement('img');
        img.setAttribute('src', 'img/91.gif');

        div.appendChild(img);
        document.body.appendChild(div);


        window.addEventListener('load', function(e){
            document.getElementById('loading').style.display = 'none';
        })
    </script>

    <div class="main">
        <header>
            <div class="centered">
                <div data-show-layer="swipe-bar" data-close-layer="swipe-bar-close" id="open-swipe-bar" class="open-bar"><i class="fas fa-bars"></i></div>
                <div class="bar">
                    <div id="" class="button-user-natification"><i class="fas fa-bell"></i></div>
                    <div data-show-layer="formAuth" data-close-layer="form-auth-close" id="openFormAuth" class="button-user-natification"><i class="fas fa-user-circle"></i></div>
                </div>
                <ul class="nav">
                    <li><a id="open" data-show-layer="layer-post" data-close-layer="layer-post-close">главная</a></li>
                    <li><a id="aa" href="#">больше</a></li>
                    <li><a href="#">папулярное</a></li>
                </ul>
                <div class="logoHome"><a href="">Real Life</a></div>
            </div>
        </header>


        <div class="content">
            <div id="contentCentered" class="centered">
                <div class="container-left">

                    <div class="box-big" >
                        <a href="#"><p class="post-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, inventore.</p></a>
                        <img class="imgPostGlobal" src="img/imgContent/Layer-5.png" alt="">

                        <form class="post-form-type-text-global" action="">
                            <input type="text">
                            <button type="submit" class="button"><i class="far fa-comment"></i></button>
                        </form>
                    </div>


                    <div class="box-small">
                        <p class="post-text">lorem*20Lorem ilor sit amet.</p>
                    </div>
                </div>

                <div class="container-right">
                    <div class="box-small" style="visibility: visible;">
                        <p class="post-text">Lorem ilor sit amet.</p>
                    </div>

                    <div class="box-big">
                        <a href="#"><p class="post-text">, consectetur adipisicing elit. Incidunt, inventore.</p></a>
                        <img class="imgPostGlobal" src="img/imgContent/Layer-61.png" alt="">

                        <form class="post-form-type-text-global" action="">
                            <input type="text">
                            <button type="submit" class="button"><i class="far fa-comment"></i></button>
                        </form>
                    </div>

                </div>

                <div class="container-center">
                    <div class="vertical-line-top"></div>
                    <div id="vertical-line" class="vertical-line"></div>
                </div>
            </div>
        </div>
    </div>


    
    
    <div id="formAuth" class="formAuth">
        <form class="form" action="#" name="form_auth">
            <p>Sign In</p>
            <input type="text" name="user_name" class="userName" minlength="6" maxlength="46" placeholder="User name" required>
            <input type="password" minlength="6" maxlength="46" placeholder="******" required>
            <input type="submit" value="Login to your account" >
        </form>
        <button id="form-auth-close" class="btn-close"><i class="fas fa-times fa-2x"></i></button>
    </div>

    <div id="layer-post" class="layer-post">
        <div class="head-layer-post"></div>
        <div class="cont-layer-post">
            <div class="layer-left">
                <img id="img-layer-post" class="img-layer-post" src="img/imgContent/Layer-5.png" alt="">
            </div>
    
            <div class="layer-right">
                <p class="text-layer-post">Lorem ipsum dolor l sit amet consectetur adipisicing elit. Ratione voluptas eum mollitia praesentium error sunt aspernatur accusantium sit laudantium et voluptatem ducimus, officiis at sint ea maxime omnis inventore possimus!</p>
                <div class="bottom">
                   <form class="post-form-type-text-global" action="">
                        <input type="text">
                        <button type="submit" class="button"><i class="far fa-comment"></i></button>
                    </form>
                </div> 
            </div>
        </div>
        <div class="foot-layer-post"></div>
        <button id="layer-post-close" class="btn-close"><i class="fas fa-times fa-2x"></i></button>        
    </div>
    
    <div id="swipe-bar" class="swipe-bar">
        <div class="head-bar">
            <div id="" class="button-user-natification"><i class="fas fa-bell"></i></div>
            <div  data-show-layer="formAuth" data-close-layer="form-auth-close" id="swipeBarOpenFormAuth" class="button-user-natification"><i class="fas fa-user-circle"></i></div>
            <div id="swipe-bar-close" class="close-bar"><i class="fas fa-times"></i></div>
        </div>
        <div class="cont-bar">
            <ul class="nav">
                <li><a id="open1" data-show-layer="layer-post" data-close-layer="layer-post-close">главная</a></li>                
                <li><a href="#">больше</a></li>
                <li><a href="#">папулярное</a></li>
            </ul>
        </div>
    </div>

    <!-- <div id="loading">
        <img src="img/giphy.gif" alt="">
    </div> -->




    <script src="js/main.js"></script>
    <script src="js/data.js"></script>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.13/css/all.css" integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp" crossorigin="anonymous">
</body>
</html>