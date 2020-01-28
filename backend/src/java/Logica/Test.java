/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Logica;

import Entidades.cUsuario;


/**
 *
 * @author Developer
 */
public class Test {
     public static void main(String[] arStrings) throws Exception {
         try {
             
            cUsuario usuario= cSeguridad.Login("FNARANJO", "FNARANJO");
            if (usuario==null) {
                System.out.println("Usuario o Clave son incorrectos");
            }
            else {
                System.out.println(usuario.getCNomUsuario());
            }
            
             
         } catch (Exception e) {
         }
     }    
}
