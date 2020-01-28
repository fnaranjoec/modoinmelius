/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Datos;

import Entidades.cProducto;
import Entidades.cUsuario;
import java.util.ArrayList;

/**
 *
 * @author Developer
 */
public class Test {
     public static void main(String[] arStrings) throws Exception {
         try {
             
             cDatosUsuario datos = new cDatosUsuario();
             ArrayList<cUsuario> usuarios = datos.UsuariosTodos() ;
             for (cUsuario row : usuarios) {
                 System.out.println(row.toString());
            }

//             cDatosProducto datos = new cDatosProducto();
//             ArrayList<cProducto> productos = datos.ProductosTodos() ;
//             for (cProducto row : productos) {
//                 System.out.println(row.toString());
//            }
             
         } catch (Exception e) {
         }
     }    
}
