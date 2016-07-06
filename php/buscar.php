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
    //$info = array ('inicio' => "2016-06-15 11:07:44", 'final' => "2016-06-28 22:07:40", 'TipCoral' => array(6,7,8), 'Especie' => array(11,33,48),'Sector' => NULL);
    //echo json_encode($info);

    $query = "SELECT COUNT(id) FROM Post";
    $flag = 0;

    if (isset($info['TipCoral']) == true) {
        for ($i = 0; $i < count($info['TipCoral']); ++$i) {
            if ($i == 0) {

                $query = $query . " WHERE (TipCoral_id = " . $info['TipCoral'][$i];
            } else {
                $query = $query . " OR TipCoral_id = " . $info['TipCoral'][$i];
            }
        }
        $query = $query . ")";
        $flag = 1;
    }

    if (isset($info['Especie']) == true) {
        if ($flag == 0) {
            $query = $query . " WHERE";
        } else {
            $query = $query . " AND";
        }
        for ($i = 0; $i < count($info['Especie']); ++$i) {
            if ($i == 0) {
                $query = $query . " (Especie_id = " . $info['Especie'][$i];
            } else {
                $query = $query . " OR Especie_id = " . $info['Especie'][$i];
            }
        }
        $query = $query . ")";
        $flag = 1;
    }

    if (isset($info['Sector']) == true) {
        if ($flag == 0) {
            $query = $query . " WHERE";
        } else {
            $query = $query . " AND";
        }
        for ($i = 0; $i < count($info['Sector']); ++$i) {
            if ($i == 0) {
                $query = $query . " (Sector_id = " . $info['Sector'][$i];
            } else {
                $query = $query . " OR Sector_id = " . $info['Sector'][$i];
            }
        }
        $query = $query . ")";
        $flag = 1;
    }

    if (isset($info['SubSector']) == true) {
        if ($flag == 0) {
            $query = $query . " WHERE";
        } else {
            $query = $query . " AND";
        }
        for ($i = 0; $i < count($info['SubSector']); ++$i) {
            if ($i == 0) {
                $query = $query . " (SubSector_id = " . $info['SubSector'][$i];
            } else {
                $query = $query . " OR SubSector_id = " . $info['SubSector'][$i];
            }
        }
        $query = $query . ")";
        $flag = 1;
    }




    if (isset($info['inicio']) or isset($info['final'])) {
        if ($flag == 0) {
            $query = $query . " WHERE";
        } else {
            $query = $query . " AND";
        }
        if (isset($info['inicio']) && isset($info['final'])) {
            $query = $query . " fecha_tiempo BETWEEN '" . $info['inicio'] . "' AND '" . $info['final'] . "'";
        }
        if (isset($info['inicio']) && is_null($info['final'])) {
            $query = $query . " fecha_tiempo BETWEEN '" . $info['inicio'] . "' AND '3016-06-28 22:07:40'";
        }
        if (is_null($info['inicio']) && isset($info['final'])) {
            $query = $query . " fecha_tiempo BETWEEN '1016-06-28 22:07:40' AND '" . $info['final'] . "'";
        }
    }


    // echo json_encode($catblanq);
    // echo json_encode("\n");
    // echo json_encode($query);

// ********* INICIA Proceso de Paginación ************   
// lets find out how many rows are in the MySQL table
    $sql = $query;
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
    $sql = strstr($sql, 'FROM');
    $sql = "SELECT * ".$sql;
    $sql2 = $sql." ORDER BY fecha_tiempo DESC LIMIT $offset, $rowsperpage";
    //echo json_encode($sql2);
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
