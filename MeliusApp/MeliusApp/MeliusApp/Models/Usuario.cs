using System;
using System.Collections.Generic;
using System.Text;

namespace MeliusApp.Models
{
    public class Usuario
    {
        public int UsuarioId { get; set; }
        public string UsuarioNombre { get; set; }
        public string UsuarioClave { get; set; }

        public Usuario()
        {

        }

        public Usuario(string _usuario, string _clave)
        {
            this.UsuarioNombre = _usuario;
            this.UsuarioClave = _clave;
        }

        public bool VerificarCampos () {
            bool retVal = false;

            if (!(this.UsuarioNombre==null) &&
                !(this.UsuarioClave==null)) {
                retVal = true;
            }

            return retVal;
        }


        public bool EsAutenticado()
        {
            bool retVal = false;

            if ((this.UsuarioNombre == "admin") &&
                (this.UsuarioClave == "admin*123"))
            {
                retVal = true;
            }

            return retVal;
        }

    }
}
 