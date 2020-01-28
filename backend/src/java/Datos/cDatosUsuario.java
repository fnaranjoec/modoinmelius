/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Datos;

import Entidades.cUsuario;
import Utilitarios.cArchivo;
import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;

/**
 *
 * @author Developer
 */
public class cDatosUsuario {

    // Ruta del archivo de usuarios
    private static final String pathToCsv="C:\\Users\\Developer\\Documents\\ModoInMelius\\EvaluacionTecnica\\users.csv"; // *** PATH EXTERNO AL WAR
    // private static final String pathToCsv="/data/users.csv"; // *** PATH INTERNO EN EL WAR
    
    // Metodo que devuelve un array de tipo cUsuario
    public static ArrayList<cUsuario> UsuariosTodos() {
        
        ArrayList<cUsuario> listaUsuarios = new ArrayList<>();
        
        try {
            
            ArrayList<String[]> data = cArchivo.LeerArchivo(pathToCsv);
            for (String[] row : data) {
                cUsuario usuarioLeido = new cUsuario(row[0], row[1], row[2], row[3]);
                listaUsuarios.add(usuarioLeido);
            }
        } catch (Exception e) {
            System.out.println("Error Extrayendo Lista de Usuarios: " + e.getMessage());
        }
        
        return listaUsuarios;
        
    }
    
}
