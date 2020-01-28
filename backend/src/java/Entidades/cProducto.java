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
public class cProducto {
    /*miembros*/
    private String CIdProducto;
    private String CNomProducto;
    private String NFlPrecio;
    private String NIntCantidad;
    private String NFlTotal;


    /*constructores*/
    public cProducto() {
    }

    public cProducto(String CIdProducto, String CNomProducto, String NFlPrecio, String NIntCantidad, String NFlTotal) {
        this.CIdProducto = CIdProducto;
        this.CNomProducto = CNomProducto;
        this.NFlPrecio = NFlPrecio;
        this.NIntCantidad = NIntCantidad;
        this.NFlTotal = NFlTotal;
    }
    
    /*metodos*/
    public String getCIdProducto() {
        return CIdProducto;
    }

    public void setCIdProducto(String CIdProducto) {
        this.CIdProducto = CIdProducto;
    }

    public String getCNomProducto() {
        return CNomProducto;
    }

    public void setCNomProducto(String CNomProducto) {
        this.CNomProducto = CNomProducto;
    }

    public String getNFlPrecio() {
        return NFlPrecio;
    }

    public void setNFlPrecio(String NFlPrecio) {
        this.NFlPrecio = NFlPrecio;
    }

    public String getNIntCantidad() {
        return NIntCantidad;
    }

    public void setNIntCantidad(String NIntCantidad) {
        this.NIntCantidad = NIntCantidad;
    }

    public String getNFlTotal() {
        return NFlTotal;
    }

    public void setNFlTotal(String NFlTotal) {
        this.NFlTotal = NFlTotal;
    }
    
    
    
    
}

