using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;

using Xamarin.Forms;
using Xamarin.Forms.Xaml;

namespace MeliusApp.Views
{
    [XamlCompilation(XamlCompilationOptions.Compile)]
    public partial class CertPage : ContentPage
    {

        public interface IServerCommunication
        {
            Task<string> GetFromServerAsync(string URL);
        }

        private const string ApiEndPointProfile = "https://tecsinfo-ec.com:9444/AuthenticationWS/login_user_db?username=admin&password=012b80343b93299e5464c1668e01609a";
        private const string ApiEndPointCertInfo = "https://tecsinfo-ec.com:9444/AuthenticationWS/get_user_certificate?username=admin&authCode=12345678";
        private static readonly HttpClient http = new HttpClient(new HttpClientHandler { UseCookies = false });

        public static JToken _profile;
        public static JToken _cert;


        async void LoadCertificateInfo(object sender, EventArgs e)
        {
            HttpClient http = PreparedClient();
            HttpResponseMessage apiResponse;
            try
            {
                apiResponse = await http.GetAsync(ApiEndPointCertInfo);
                string apiData = await apiResponse.Content.ReadAsStringAsync();
                JObject jsonData = JObject.Parse(apiData);

                // Objeto principal : PROFILE
                _cert = jsonData.SelectToken("");
                // DisplayAlert("JSON", _cert["ident"].ToString(), "OK");

                var htmlSource = new HtmlWebViewSource();

                StringBuilder strBuilder = new StringBuilder();
                strBuilder.AppendLine("Usuario: " + _cert["name"].ToString());
                strBuilder.AppendLine("Nombre del certificado: " + _cert["certificateName"].ToString());
                strBuilder.AppendLine("Nombre del Cliente : " + _cert["certificateCN"].ToString());
                strBuilder.AppendLine("Tipo de certificado: " + _cert["certificateType"].ToString());
                DisplayAlert(("CERTIFICADO #: " + _cert["id"].ToString()), strBuilder.ToString(), "OK");

            }
            catch (Exception ex)
            {

                Console.WriteLine(ex.Message);
            }

        }


        protected override async void OnAppearing()
        {
            HttpClient http = PreparedClient();
            HttpResponseMessage apiResponse;
            var i = 0;

            try
            {

                apiResponse = await http.GetAsync(ApiEndPointProfile);
                string apiData = await apiResponse.Content.ReadAsStringAsync();
                JObject jsonData = JObject.Parse(apiData);

                // Objeto principal : PROFILE
                _profile = jsonData.SelectToken("");
                //DisplayAlert("JSON", _profile["name"].ToString(), "OK");

                var htmlSource = new HtmlWebViewSource();

                StringBuilder strBuilder = new StringBuilder();

                strBuilder.AppendLine("<html>");
                strBuilder.AppendLine("<head>");
                strBuilder.AppendLine("<meta name='viewport' content='width=device-width, initial-scale=1'>");
                strBuilder.AppendLine("<body style='background-color:#2C3E50; color:#ffffff'>");

                strBuilder.AppendLine("<h1>TECSINFO</h1>");
                strBuilder.AppendLine("<p>Visualizador de Perfil</p>");

                strBuilder.AppendLine(@"<div style='padding: 0 18px;display:block;overflow:hidden;'");

                strBuilder.AppendLine("<ul>");
                strBuilder.AppendLine("<li>" + _profile["name"].ToString() + "</li>");
                strBuilder.AppendLine("<li>" + _profile["email"].ToString() + "</li>");
                strBuilder.AppendLine("<li>" + _profile["lastname"].ToString() + "</li>");
                strBuilder.AppendLine("<li>" + _profile["role"].ToString() + "</li>");
                strBuilder.AppendLine("<li>" + _profile["phone"].ToString() + "</li>");
                strBuilder.AppendLine("<li>" + _profile["identifier"].ToString() + "</li>");
                strBuilder.AppendLine("</ul>");

                strBuilder.AppendLine("<ul>");
                strBuilder.AppendLine("<li>Company");
                strBuilder.AppendLine("<ul>");
                strBuilder.AppendLine("<li>" + _profile["emissionPoint"]["establishment"]["company"]["businessName"].ToString() + "</li>");
                strBuilder.AppendLine("<li>" + _profile["emissionPoint"]["establishment"]["company"]["matrixAddress"].ToString() + "</li>");
                strBuilder.AppendLine("</ul>");
                strBuilder.AppendLine("</li>");
                strBuilder.AppendLine("</ul>");

                for (i = 0; i < _profile["listOrderDetails"].Count(); i++)
                {

                    strBuilder.AppendLine("<ul>");
                    strBuilder.AppendLine("<li>Plan");
                    strBuilder.AppendLine("<ul>");
                    strBuilder.AppendLine("<li>" + _profile["listOrderDetails"][i]["idplan"]["name"].ToString() + "</li>");
                    strBuilder.AppendLine("<li>" + _profile["listOrderDetails"][i]["idplan"]["description"].ToString() + "</li>");
                    strBuilder.AppendLine("</ul>");
                    strBuilder.AppendLine("</li>");
                    strBuilder.AppendLine("</ul>");

                }


                strBuilder.AppendLine("<ul>");
                strBuilder.AppendLine("<li>Establecimiento");
                strBuilder.AppendLine("<ul>");
                strBuilder.AppendLine("<li>" + _profile["emissionPoint"]["establishment"]["code"].ToString() + "</li>");
                strBuilder.AppendLine("<li>" + _profile["emissionPoint"]["establishment"]["description"].ToString() + "</li>");
                strBuilder.AppendLine("</ul>");
                strBuilder.AppendLine("</li>");
                strBuilder.AppendLine("</ul>");

                strBuilder.AppendLine("<ul>");
                strBuilder.AppendLine("<li>Punto de Emisión");
                strBuilder.AppendLine("<ul>");
                strBuilder.AppendLine("<li>" + _profile["emissionPoint"]["code"].ToString() + "</li>");
                strBuilder.AppendLine("<li>" + _profile["emissionPoint"]["description"].ToString() + "</li>");
                strBuilder.AppendLine("</ul>");
                strBuilder.AppendLine("</li>");
                strBuilder.AppendLine("</ul>");


                strBuilder.AppendLine("</div");

                strBuilder.AppendLine("</body>");
                strBuilder.AppendLine("</html>");

                htmlSource.Html = strBuilder.ToString();
                Console.Write(strBuilder.ToString());

                webViewCert.Source = htmlSource;

                /*
                List<ApiObject> apiObjetosSerializados = JsonConvert.DeserializeObject<List<ApiObject>>(result);
                _apiObjectosDeserializados = new ObservableCollection<ApiObject>(apiObjetosSerializados);
                DataListView.ItemsSource = _apiObjectosDeserializados;
                base.OnAppearing();
                */

            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
            }



        }

        private HttpClient PreparedClient()
        {
            HttpClientHandler handler = new HttpClientHandler();

            //not sure about this one, but I think it should work to allow all certificates:
            handler.ServerCertificateCustomValidationCallback += (sender, cert, chaun, ssPolicyError) =>
            {
                return true;
            };


            HttpClient client = new HttpClient(handler);

            return client;
        }


        public CertPage()
        {
            InitializeComponent();
            
        }
    }
}