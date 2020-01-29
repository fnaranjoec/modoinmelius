using MeliusApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using Xamarin.Forms;
using Xamarin.Forms.Xaml;

namespace MeliusApp.Views
{
    [XamlCompilation(XamlCompilationOptions.Compile)]
    public partial class LoginPage : ContentPage
    {



        async void Login(object sender, EventArgs e)
        {

            Usuario usuario = new Usuario(TxtUsuario.Text, TxtClave.Text);
            // Valido
            if (usuario.VerificarCampos())
            {

                if (usuario.EsAutenticado())
                {
                    // DisplayAlert("Login", "Bienvenido", "OK");
                    Navigation.PushAsync(new CertPage());
                }
                else {
                    DisplayAlert("Login", "El nombre o la clave son ERRONEOS", "OK");
                }


            }
            else
            {
                DisplayAlert("Login", "El nombre o la clave son INVALIDOS", "OK");
            }


        }

        public LoginPage()
        {
            InitializeComponent();
        }
    }
}