/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Logica;

import Datos.cDatosUsuario;
import Entidades.cUsuario;
import java.util.ArrayList;

/**
 *
 * @author Developer
 */
public class cSeguridad {
    
    
    public static cUsuario Login(String usr, String pwd) {
    
        cDatosUsuario datos = new cDatosUsuario();
        ArrayList<cUsuario> usuariosTodos = datos.UsuariosTodos();
        cUsuario respuesta= null; // new cUsuario();
        for (cUsuario oUsuario : usuariosTodos) {
                 if ( oUsuario.getCNomUsuario().equals(usr) &&  
                      oUsuario.getCTxClave().equals(pwd)
                    ) {
                    respuesta = oUsuario;
                    break;
                 }
                 
        };
        return respuesta;
    }
    
}
