/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Entidades;

/**
 *
 * @author Developer
 */
public class cUsuario {
    /*miembros*/
    private String CNomUsuario;
    private String CTxClave;
    private String CTxCorreo;
    private String CNomPersona;

    /*constructores*/
    public cUsuario() {
    }

    public cUsuario(String CNomUsuario, String CTxClave, String CTxCorreo, String CNomPersona) {
        this.CNomUsuario = CNomUsuario;
        this.CTxClave = CTxClave;
        this.CTxCorreo = CTxCorreo;
        this.CNomPersona = CNomPersona;
    }

    /*metodos*/
    public String getCNomUsuario() {
        return CNomUsuario;
    }

    public void setCNomUsuario(String CNomUsuario) {
        this.CNomUsuario = CNomUsuario;
    }

    public String getCTxClave() {
        return CTxClave;
    }

    public void setCTxClave(String CTxClave) {
        this.CTxClave = CTxClave;
    }

    public String getCTxCorreo() {
        return CTxCorreo;
    }

    public void setCTxCorreo(String CTxCorreo) {
        this.CTxCorreo = CTxCorreo;
    }

    public String getCNomPersona() {
        return CNomPersona;
    }

    public void setCNomPersona(String CNomPersona) {
        this.CNomPersona = CNomPersona;
    }
    
    
}
