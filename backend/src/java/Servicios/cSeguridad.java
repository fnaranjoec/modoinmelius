/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Servicios;

import java.io.IOException;

import Datos.cDatosUsuario;
import Entidades.cUsuario;
import java.util.ArrayList;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import javax.ws.rs.container.ContainerRequestContext;
import javax.ws.rs.container.ContainerResponseContext;
import javax.ws.rs.container.ContainerResponseFilter;
import javax.ws.rs.ext.Provider;


/**
 *
 * @author Fredy Naranjo
 */

@Path("")
@Produces("application/json")
public class cSeguridad {
    
   
    //<editor-fold defaultstate="collapsed" desc="Login">
    @GET
    @Path("seguridad/login/{strUsername}/{strPassword}")
    @Produces(MediaType.APPLICATION_JSON)
    public Response Login(
            @PathParam("strUsername") String strUsername,
            @PathParam("strPassword") String strPassword
    ) throws JSONException {

        System.out.println(strUsername);
        System.out.println(strPassword);

        JSONObject jo = new JSONObject();
        cUsuario usuario = null; //new cUsuario();
        try {
            usuario = Logica.cSeguridad.Login(strUsername, strPassword);
            if (usuario != null) {
             jo.put("success", true);
             jo.put("usuario", new JSONObject(usuario));
            } else {
                 jo.put("sucess", false);
            }
        }catch (Exception e) {
            jo.put("success", false);
            return Response.ok(jo.toString()).header("Access-Control-Allow-Origin", "*").build();
        }

        return Response.ok(jo.toString()).header("Access-Control-Allow-Origin", "*").build();

//            return Response
//            .status(200)
//            .header("Access-Control-Allow-Origin", "http://127.0.0.1,http://localhost,*")
//            .header("Access-Control-Allow-Headers", "origin, content-type, accept, authorization")
//            .header("Access-Control-Allow-Credentials", "false")
//            .header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS, HEAD")
//            .header("Access-Control-Max-Age", "1209600")
//            .entity(jo.toString())
//            .build();
        
    }

    //</editor-fold>
    
    //<editor-fold defaultstate="collapsed" desc="Todos">
    @GET
    @Path("usuario/todos")
    @Produces(MediaType.APPLICATION_JSON)
    public Response Todos() throws JSONException {

        JSONObject jo = new JSONObject();
        ArrayList<cUsuario> listaUsuarios = new ArrayList<>(); 
        
        try {
            listaUsuarios = cDatosUsuario.UsuariosTodos();
            
            
            if (listaUsuarios.size() != 0 ) {
                ArrayList jsonLista = new ArrayList();
                for (cUsuario oUsuario : listaUsuarios) {
                    JSONObject jsonUsuario = new JSONObject(oUsuario);
                    jsonLista.add(jsonUsuario.toString());
                }
                jo.put("usuarios", new JSONArray(jsonLista.toString()));
                jo.put("success", true);
            
            } else {
                 jo.put("Sucess", false);
            }
            
        }catch (Exception e) {
            jo.put("success", false);
            return Response.ok(jo.toString()).header("Access-Control-Allow-Origin", "*").build();
        }

        return Response.ok(jo.toString()).header("Access-Control-Allow-Origin", "*").build();
        
    }
//</editor-fold>

}