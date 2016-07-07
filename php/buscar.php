<?php

include_once 'config.php';
$data = file_get_contents("php://input");
$info = json_decode($data,true);


if ($conn->connect_error) {
    $response = [
        "success" => false,
        "reason" => "Connection failed: " . $conn->connect_error            
    ];
} else {
    //$info = array ('curpage' => 1, 'inicio' => "2016-06-15 11:07:44", 'final' => "2016-06-28 22:07:40", 'TipCoral' => array(6,7,8), 'Especie' => array(11,33,48),'Sector' => NULL);
    //echo json_encode($info);
    $info['inicio'] = "2016-06-15 11:07:44";
    $info['final'] = "2017-06-15 11:07:44";
            
    $query = "SELECT COUNT(id) FROM Post";
    $flag = 0;
 
    if (isset($info['TipCoral']) == true && count($info['TipCoral'])!=0) {
        for ($i = 0; $i < count($info['TipCoral']); ++$i) {
            if ($i == 0) {

                $query = $query . " WHERE (Post.TipCoral_id = " . $info['TipCoral'][$i];
            } else {
                $query = $query . " OR Post.TipCoral_id = " . $info['TipCoral'][$i];
            }
        }
        $query = $query . ")";
        $flag = 1;
    }
    
    if (isset($info['Especie']) == true && count($info['Especie'])!=0) {
        if ($flag == 0) {
            $query = $query . " WHERE";
        } else {
            $query = $query . " AND";
        }
        for ($i = 0; $i < count($info['Especie']); ++$i) {
            if ($i == 0) {
                $query = $query . " (Post.Especie_id = " . $info['Especie'][$i];
            } else {
                $query = $query . " OR Post.Especie_id = " . $info['Especie'][$i];
            }
        }
        $query = $query . ")";
        $flag = 1;
    }

    if (isset($info['Sector']) == true && count($info['Sector'])!=0) {
        if ($flag == 0) {
            $query = $query . " WHERE";
        } else {
            $query = $query . " AND";
        }
        for ($i = 0; $i < count($info['Sector']); ++$i) {
            if ($i == 0) {
                $query = $query . " (Post.Sector_id = " . $info['Sector'][$i];
            } else {
                $query = $query . " OR Post.Sector_id = " . $info['Sector'][$i];
            }
        }
        $query = $query . ")";
        $flag = 1;
    }

    if (isset($info['SubSector']) == true && count($info['SubSector'])!=0) {
        if ($flag == 0) {
            $query = $query . " WHERE";
        } else {
            $query = $query . " AND";
        }
        for ($i = 0; $i < count($info['SubSector']); ++$i) {
            if ($i == 0) {
                $query = $query . " (Post.SubSector_id = " . $info['SubSector'][$i];
            } else {
                $query = $query . " OR Post.SubSector_id = " . $info['SubSector'][$i];
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
//    echo json_encode(array('success'=> false, "reason"=> $query));
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
    

    if (isset($info['curpage']) && is_numeric($info['curpage'])) {
        $currentpage = (int) $info['curpage'];
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
    
    $pos = strpos($sql, 'WHERE');
    if ($pos !== false){
          $sql = strstr($sql, 'WHERE');
    } else {
        $sql="";
    }
     
    $sql = "SELECT "
            . "Post.id, "
            . "fecha_tiempo, "
            . "TipCoral.nombre AS TipCoral_id, "
            . "Especie.nombre AS Especie_id, "
            . "Sector.nombre AS Sector_id, "
            . "SubSector.nombre AS SubSector_id "
            . "FROM Post "
            . "LEFT JOIN TipCoral ON TipCoral.id = Post.TipCoral_id "
            . "LEFT JOIN Especie ON Especie.id = Post.Especie_id "
            . "LEFT JOIN Sector ON Sector.id = Post.Sector_id "
            . "LEFT JOIN SubSector ON SubSector.id = Post.SubSector_id ".$sql;
    $sql2 = $sql." ORDER BY fecha_tiempo DESC LIMIT $offset, $rowsperpage";
    
    //echo json_encode($sql2);
    $result2 = $conn->query($sql2);
    
    while ($row = $result2->fetch_assoc()) {
        $post[] = $row;
        //echo json_encode($row['id']);
        $enfermedad = array();
        $catblanq = array();
        $foto = array();

        $sql3 = "SELECT Enfermedad.nombre As nombre, por AS percentage FROM Post_has_Enfermedad RIGHT JOIN Enfermedad ON Enfermedad.id = Post_has_Enfermedad.Enfermedad_id WHERE Post_id = " . $row['id'];
        $result3 = $conn->query($sql3);
        while ($rowEnf = $result3->fetch_assoc()) {
            if($rowEnf['percentage']== -1){
                $rowEnf['percentage']="S/D";
            }
            $enfermedad[] = $rowEnf;
        }

        $sql4 = "SELECT CatBlanq.nombre As nombre, por AS percentage FROM Post_has_CatBlanq RIGHT JOIN CatBlanq ON CatBlanq.id = Post_has_CatBlanq.CatBlanq_id WHERE Post_id = " . $row['id'];
        $result4 = $conn->query($sql4);
        while ($rowCat = $result4->fetch_assoc()) {
            if($rowCat['percentage']== -1){
                $rowCat['percentage']="S/D";
            }
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
