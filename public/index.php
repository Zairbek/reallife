<?
    include 'scripts/db.php';

    $res = $mysql->query("SELECT id_post, mode_post, style_post, img_url_post, text_post, date_time_post, like_post 
                                FROM posts");

    $row = $res->fetch_assoc();

    for($i = 0; $i < 1; $i++){
        echo $i. " -- " . $row["id_post"];
    }
?>


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

        window.addEventListener('load', function(){
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
                    <!-- Данные вставляется ассинхронно из json с Javascript -->                
                </ul>
                <div class="logoHome"><a id="open" data-show-layer="layer-post" data-close-layer="layer-post-close">Real Life</a></div>
            </div>
        </header>


        <div class="content">
            <div id="contentCentered" class="centered">
                <div class="container">
                    <?
                    $data = file_get_contents("json/data.json");
                    $arr = json_decode($data, true);

                    for ($i = 0; $i < count($arr['posts']); $i++){
                        $mode_post = $arr['posts'][$i]['mode_post'];

                        if($mode_post == "big"){
                            $id_post = $arr['posts'][$i]['id_post'];
                            $text_post = $arr['posts'][$i]['text_post'];
                            $img_url_post = $arr['posts'][$i]['img_url_post'];
                            $class = $arr['posts'][$i]['class'];
                        
                    ?>
                            <div class="<?=$class?>" id="<?= $id_post ?>">
                                <div class="cont">
                                    <p class="post-text"><?= $text_post ?></p>
                                </div>
                                <img class="imgPostGlobal" src="<?= $img_url_post ?>" alt="">
                                <form class="post-form-type-text-global" action="/"><!-- форма будет открыватся с помощью кнопок -->
                                    <input type="text" name="comment">
                                    <button type="submit" class="button"><i class="far fa-comment"></i></button>
                                </form>
                            </div>
                        <?
                        }elseif($mode_post == "small"){
                            $id_post = $arr['posts'][$i]['id_post'];
                            $text_post = $arr['posts'][$i]['text_post'];
                            $class = $arr['posts'][$i]['class'];
                        
                         ?>
                            <div class="<?=$class?>" id="<?=$id_post?>">
                                <p class="post-text"><?=$text_post?></p>
                            </div>
                        <?
                        }}
                        ?>
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
            <!-- Данные вставляется ассинхронно из json с Javascript -->
            </ul>
        </div>
    </div>
   


    <script src="js/main.js"></script>
    <script src="js/data.js"></script>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.13/css/all.css" integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp" crossorigin="anonymous">
</body>
</html>