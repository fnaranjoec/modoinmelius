/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Servicios;

import Datos.cDatosProducto;
import Entidades.cProducto;
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

/**
 *
 * @author Fredy Naranjo
 */
@Path("")
@Produces("application/json")
public class cProductos {
    //<editor-fold defaultstate="collapsed" desc="Todos">
    @GET
    @Path("producto/todos")
    @Produces(MediaType.APPLICATION_JSON)
    public Response Todos() throws JSONException {

        JSONObject jo = new JSONObject();
        ArrayList<cProducto> listaProductos = new ArrayList<>(); 
        
        try {
            listaProductos = cDatosProducto.ProductosTodos();
            
            
            if (listaProductos.size() != 0 ) {
                ArrayList jsonLista = new ArrayList();
                for (cProducto oProducto : listaProductos) {
                    JSONObject jsonProducto = new JSONObject(oProducto);
                    jsonLista.add(jsonProducto.toString());
                }
                jo.put("productos", new JSONArray(jsonLista.toString()));
                jo.put("success", true);
            
            } else {
                 jo.put("success", false);
            }
            
        }catch (Exception e) {
            jo.put("success", false);
            return Response.ok(jo.toString()).header("Access-Control-Allow-Origin", "*").build();
        }

        return Response.ok(jo.toString()).header("Access-Control-Allow-Origin", "*").build();
        
    }
//</editor-fold>
    
}
