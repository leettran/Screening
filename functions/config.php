<?php



$pdo = new PDO('mysql:host=localhost;dbname=test', 
                        'neurocare', 
                        'nc2013cxz', 
                        array(
                            PDO::ATTR_ERRMODE => \PDO::ERRMODE_EXCEPTION, 
                            PDO::ATTR_PERSISTENT => false, 
                            PDO::MYSQL_ATTR_INIT_COMMAND => 'set names utf8'
                        )
                    );



?>