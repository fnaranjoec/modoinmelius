/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Servicios;

import java.util.Set;
import javax.ws.rs.ApplicationPath;
import javax.ws.rs.core.Application;

/**
 *
 * @author Fredy Naranjo
 */

@ApplicationPath("api/v1/")
public class RestConf extends Application {

    @Override
    public Set<Class<?>> getClasses() {
        Set<Class<?>> resources = new java.util.HashSet<>();
        addRestResourceClasses(resources);
        return resources;
    }

    private void addRestResourceClasses(Set<Class<?>> resources) {
        resources.add(Servicios.CrossOriginResourceSharingFilter.class);
        resources.add(Servicios.cProductos.class);
        resources.add(Servicios.cSeguridad.class);
    }

}
