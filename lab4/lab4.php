<!DOCTYPE html>
<html>
<head>
    <title>Лабораторная работа №4</title>
</head>
<body>
<h1>Лабораторная работа 4</h1>
<form method="post">
    <textarea style = "width: 200px; height: 150px;" id="matr" placeholder="Введите матрицу" name = 'matrix'><?=$_POST['matrix']?></textarea><br>
    Начальная вершина:
    <input style = "width: 150px;" type = 'text' name = 'start'  value = '<?= $_POST[start]?>'>
    <br>Конечная вершина в:
    <input style = "width: 149px;" type = 'text' name = 'finish'  value = '<?= $_POST[finish]?>'>
    <br>
    <input type = 'submit' value="Найти">
    <h3>Пример ввода:</h3>
    <p>
    0 2 3 4 10 <br> 
    1 0 0 1 0 <br>
    0 3 0 2 0 <br>
    0 0 1 0 5 <br>
    0 3 0 0 0 <br>
    </p>
    <p>Начальная вершина: 1</p>
    <p>Конечная вершина: 5</p>

</form>
<?php
$start = $_POST[start] - 1;
$finish = $_POST[finish] - 1;
$optimal[0] = $finish;
$count = 0;
$matrix = explode("\r\n", $_POST[matrix]);
for($i = 0; $i < count($matrix); $i++) {
    $matrix[$i] = explode(" ", $matrix[$i]);
    if (count($matrix) != count($matrix[$i]) or count($matrix[0]) != count($matrix[$i])) {
        die('Матрица введена неверно');
    }
}
for ($i = 0; $i < count($matrix); $i++) {
    for ($j = 0; $j < count($matrix[$i]); $j++) {
        if($matrix[$i][$j] === '0') {
            $matrix[$i][$j] = INF;
        }
    }
}
for ($i = 0; $i < count($matrix); $i++) {
    $way[$i] = INF;
}
$node[0] = 0;
$minnode = $start;
$node[0] = $minnode;
$way[$minnode] = 0;
while ($minnode != -1) { 
    for ($i = 0; $i < count($matrix); $i++) {
        if (array_search($i, $node) == false) { 
            $ws = $way[$minnode] + $matrix[$minnode][$i];
            if ($ws < $way[$i]) {
                $way[$i] = $ws;
                $allnodes[$i] = $minnode;
            }
        }
    }
    $minnode = -1;
    $minway = INF;
    for ($i = 0; $i < count($matrix); $i++)  {
        $bool = true;
        for ($j = 0; $j < count($node); $j++) {
            if ($i == $node[$j]) {
                $bool = false;
            }
        }
        if ($bool) {
            if ($way[$i] < $minway) {
                $minway = $way[$i];
                $minnode = $i;
            }
        }
    }
    if ($minnode >= 0) {
        array_push($node, $minnode);
    }
}

while ($finish != $start) {
    $finish = $allnodes[$optimal[$count]];
    $count++;
    array_push($optimal, $finish);
}
echo('Ввели: <br>');
for ($i = 0; $i < count($matrix); $i++) {
    for ($j = 0; $j < count($matrix); $j++) {
        if($matrix[$i][$j] === INF) {
            $matrix[$i][$j] = '0';
        }
        echo($matrix[$i][$j].' ');
    }
    echo("<br>");
}
echo('<br>');
echo('Путь из ' . ($start + 1) . ' вершины в ' . $_POST[finish] . ' проходит через: ');
for ($i = count($optimal)-1; $i >= 0; $i--) {
    if ($i == 0) {
        echo ($optimal[$i]+1);
    }
    else {
        echo ($optimal[$i]+1) . ', ';
    }
}
echo(' и равно: ' . $way[$_POST[finish]-1]);
?>

</body>
</html>