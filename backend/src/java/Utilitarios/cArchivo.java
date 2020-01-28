/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Utilitarios;

import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;

/**
 *
 * @author Developer
 */
public class cArchivo {
    // Metodo para leer archivos de texto y devolver un array con los datos
    public static ArrayList<String[]> LeerArchivo (String pathToCsv) throws FileNotFoundException, IOException {
        String[] dataRow = null;
        ArrayList<String[]> data = new ArrayList<>();
        // BufferedReader csvReader = new BufferedReader(new FileReader(pathToCsv)) // *** Usar este metodo si el archivo es externo al WAR
        // BufferedReader csvReader = new BufferedReader(new InputStreamReader(getClass().getResourceAsStream(pathToCsv))) // *** Usar este metodo si el archivo va embebido en el WAR, el metodo LeerArchivo no debe ser estatico
        try (BufferedReader csvReader = new BufferedReader(new FileReader(pathToCsv))) {
            String row;
            while ((row = csvReader.readLine()) != null) {
                dataRow = row.split(",");
                data.add(dataRow);
            }
        }            
        return data;
    }
}
