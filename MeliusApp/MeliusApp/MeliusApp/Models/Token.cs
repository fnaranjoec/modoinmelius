using System;
using System.Collections.Generic;
using System.Text;

namespace MeliusApp.Models
{
    public class Token
    {
        public int TokenId { get; set; }
        public string AccessToken { get; set; }
        public string ErrorDescription { get; set; }
        public DateTime ExpireDate { get; set; }

        public Token()
        {

        }
    }
}
