/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Datos;

import Entidades.cProducto;
import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import Utilitarios.cArchivo;

/**
 *
 * @author Developer
 */
public class cDatosProducto {

    // Ruta del archivo de usuarios
    private static final String pathToCsv="C:\\Users\\Developer\\Documents\\ModoInMelius\\EvaluacionTecnica\\products.csv"; // *** PATH EXTERNO AL WAR
    // private static final String pathToCsv="/data/users.csv"; // *** PATH INTERNO EN EL WAR
    
    // Metodo que devuelve un array de tipo cUsuario
    public static ArrayList<cProducto> ProductosTodos() {
        
        ArrayList<cProducto> listaProductos = new ArrayList<>();
        
        try {
            
            ArrayList<String[]> data = cArchivo.LeerArchivo(pathToCsv);
            for (String[] row : data) {
                cProducto productoLeido = new cProducto(row[0], row[1], row[2], row[3], row[4]);
                listaProductos.add(productoLeido);
            }
        } catch (Exception e) {
            System.out.println("Error Extrayendo Lista de Productos: " + e.getMessage());
        }
        
        return listaProductos;
        
    }
    
}
