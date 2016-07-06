<?php

include_once 'config.php';
$data = file_get_contents("php://input");
$info = json_decode($data);

//$info->curpage = 2;

if ($conn->connect_error) {
    $response = [
        "success" => false,
        "reason" => "Connection failed: " . $conn->connect_error
    ];
} else {
// lets find out how many rows are in the MySQL table
    $sql = "SELECT COUNT(id) FROM Post";
    $result = $conn->query($sql);
    //$r = mysql_fetch_row($result);
    $r = $result->fetch_row();
    //echo json_encode($r);
    $numrows = $r[0];
// number of rows to show per page
    $rowsperpage = 10;
// find out total pages
    $totalpages = ceil($numrows / $rowsperpage);
// get the current page or set a default
    if (isset($info->curpage) && is_numeric($info->curpage)) {
        $currentpage = (int) $info->curpage;
    } else {
        $currentpage = 1;  // default page number
    }

// if current page is greater than total pages
    if ($currentpage > $totalpages) {
// set current page to last page
        $currentpage = $totalpages;
    }
// if current page is less than first page
    if ($currentpage < 1) {
// set current page to first page
        $currentpage = 1;
    }
    //echo json_encode($totalpages);
// the offset of the list, based on current page
    $offset = ($currentpage - 1) * $rowsperpage;

// get the info from the MySQL database
    $sql2 = "SELECT * FROM Post ORDER BY fecha_tiempo DESC LIMIT $offset, $rowsperpage";
    $result2 = $conn->query($sql2);

    while ($row = $result2->fetch_assoc()) {
        $post[] = $row;
        //echo json_encode($row['id']);
        $enfermedad = array();
        $catblanq = array();
        $foto = array();
        
        $sql3 = "SELECT Enfermedad_id, por FROM Post_has_Enfermedad WHere Post_id = " . $row['id'];
        $result3 = $conn->query($sql3);
        while ($rowEnf = $result3->fetch_assoc()) {
            $enfermedad[] = $rowEnf;
        }

        $sql4 = "SELECT CatBlanq_id, por FROM Post_has_CatBlanq WHere Post_id = " . $row['id'];
        $result4 = $conn->query($sql4);
        while ($rowCat = $result4->fetch_assoc()) {
            $catblanq[] = $rowCat;
        }


        $sql5 = "SELECT ruta FROM Foto WHere Post_id = " . $row['id'];
        $result5 = $conn->query($sql5);
        while ($rowFoto = $result5->fetch_assoc()) {
            $foto[] = $rowFoto;
        }
        
        $response[] = array(
            "postDate" => $row['fecha_tiempo'],
            "coralType" => $row['TipCoral_id'],
            "coralSpecies" => $row['Especie_id'],
            "sector" => $row['Sector_id'],
            "subsector" => $row['SubSector_id'],
            "diseases" => $enfermedad,
            "bleaching" => $catblanq,
            "fotos" => $foto
        );
    }
    $output= array(
        "paginas" => $totalpages,
        "datos"=>$response,
        "success"=> true       
    );
    
    echo json_encode($output);
}
?>
