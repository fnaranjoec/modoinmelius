using System;
using System.Collections.Generic;
using System.Text;

namespace MeliusApp.Models
{
    public class Idcompany
    {
        public int id { get; set; }
        public int ambient { get; set; }
        public int typeEmission { get; set; }
        public string businessName { get; set; }
        public string tradeName { get; set; }
        public string ruc { get; set; }
        public string matrixAddress { get; set; }
        public string specialContributor { get; set; }
        public string boundAccounting { get; set; }
    }

    public class Idorder
    {
        public int id { get; set; }
        public long orderdate { get; set; }
        public Idcompany idcompany { get; set; }
        public object refstore { get; set; }
    }

    public class Permission
    {
        public int id { get; set; }
        public string name { get; set; }
        public string description { get; set; }
    }

    public class Idplan
    {
        public int id { get; set; }
        public string name { get; set; }
        public string description { get; set; }
        public string period { get; set; }
        public string stock { get; set; }
        public int validity { get; set; }
        public int refprice { get; set; }
        public int refquantity { get; set; }
        public List<Permission> permissions { get; set; }
    }

    public class ListOrderDetail
    {
        public int id { get; set; }
        public int quantity { get; set; }
        public int price { get; set; }
        public int discount { get; set; }
        public string status { get; set; }
        public int balance { get; set; }
        public long dateend { get; set; }
        public Idorder idorder { get; set; }
        public Idplan idplan { get; set; }
    }

    public class Company
    {
        public int id { get; set; }
        public int ambient { get; set; }
        public int typeEmission { get; set; }
        public string businessName { get; set; }
        public string tradeName { get; set; }
        public string ruc { get; set; }
        public string matrixAddress { get; set; }
        public string specialContributor { get; set; }
        public string boundAccounting { get; set; }
    }

    public class Establishment
    {
        public int id { get; set; }
        public string code { get; set; }
        public string description { get; set; }
        public string address { get; set; }
        public string phone { get; set; }
        public string status { get; set; }
        public Company company { get; set; }
    }

    public class EmissionPoint
    {
        public int id { get; set; }
        public string code { get; set; }
        public string description { get; set; }
        public Establishment establishment { get; set; }
        public string status { get; set; }
    }

    public class StatusAuthFactor
    {
        public int id { get; set; }
        public object name { get; set; }
    }

    public class ListTypeFactor2
    {
        public int id { get; set; }
        public string name { get; set; }
        public int level { get; set; }
        public StatusAuthFactor statusAuthFactor { get; set; }
    }

    public class ApiObject
    {
        public int userid { get; set; }
        public string name { get; set; }
        public string username { get; set; }
        public string email { get; set; }
        public string pushId { get; set; }
        public string status { get; set; }
        public string lastname { get; set; }
        public string role { get; set; }
        public string phone { get; set; }
        public string cel { get; set; }
        public string identifier { get; set; }
        public List<ListOrderDetail> listOrderDetails { get; set; }
        public List<object> listLicenseAssignment { get; set; }
        public List<object> listTempLicAssig { get; set; }
        public EmissionPoint emissionPoint { get; set; }
        public List<object> listAuthFactorResponse { get; set; }
        public List<ListTypeFactor2> listTypeFactor2 { get; set; }
        public List<string> permissions { get; set; }
        public List<string> permissionsPlan { get; set; }
    }


}
