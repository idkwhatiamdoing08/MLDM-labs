<?php session_start(); ?>
<!DOCTYPE html>
<html lang='ru'>
<head>
    <meta charset='UTF-8'>
    <title>Добро пожаловать!</title>
    <link rel="stylesheet" href="../styles/css.css">

</head>
<body>
<h1>Лабораторная работа 5</h1>
<div>
    Пример ввода: <br>
    Матрица смежности:<br>
    0 0 1 <br>
    0 2 0 <br>
    0 3 4 <br>
    0 - отсутствие пути <br>
</div>
Матрица смежности:
    <form  method="POST">
        <textarea style = "width: 200px; height: 150px;" name="matrix" class="matrix" id="mass1"><?=$_POST['matrix']?></textarea><br><br>
        <input type="submit" value="Найти">
    </form>
    <?php
        $matrix = $_POST['matrix'];
    $r_arr=explode("\n",$matrix);
    $array_matrix = array();
    foreach ($r_arr as $item){
        $array_matrix[] = explode(" ",$item);
    }
    $n=count($array_matrix);
    $d=$array_matrix;
    $error="";
    for ($i=0; $i<=$n-1; $i++) {
        if(count($array_matrix[$i])!=$n){
            $error="Матрица введена неверно"."<br>";
        }
    }
    for ($i=0; $i<=$n-1; $i++) {
        for ($j = 0; $j <= $n - 1; $j++){
            if(is_numeric($array_matrix[$i][$j])==false && $j!=$n-1){
                $error.="Матрица должна состоять из цифр"."<br>";
                break;
            }
        }
        if(!empty($error)){
            break;
        }
    }
    if($n==1){
        $error.= "Поле быть заполнено матрицей смежности по примеру выше"."<br>";
    }
    if(empty($error) && $n!=1) {
        for ($i = 0; $i <= $n - 1; $i++) {

            for ($j = 0; $j <= $n - 1; $j++) {

                if ($i == $j) {

                    $d[$i][$j] = 1;
                } else {

                    if ($array_matrix[$i][$j] == 0) {

                        $d[$i][$j] = 0;
                    } else {

                        $d[$i][$j] = 1;
                    }
                }
            }
        }
        for ($k = 0; $k <= $n - 1; $k++) {

            for ($i = 0; $i <= $n - 1; $i++) {

                for ($j = 0; $j <= $n - 1; $j++) {

                    if ($d[$i][$j] == 0) {

                        if ($d[$k][$j] == 1 && $d[$i][$k] == 1) {

                            $d[$i][$j] = 1;
                        }
                    }
                }
            }
        }
        foreach ($d as $ind => $val) {
            $mas1[] = implode(" ", $val);
            $mas = implode("<br>", $mas1);
        }
        echo "Матрица достижимости: " . "<br>";
        print_r($mas);
    }
    else{
        echo $error;
    }
?>
</body>
</html>