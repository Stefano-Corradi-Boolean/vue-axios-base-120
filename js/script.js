const { createApp } = Vue;


createApp({
  data(){
    return{
      title: 'Axios'
    }
  },
  methods:{

  },
  mounted(){

    // al metodo get() si passa l'endpoint della chiamata
    axios.get('https://flynn.boolean.careers/exercises/api/random/boolean')
      .then((risposta) => {
        // la chiamata è andata a buon fine -> status 200
        console.log('DATI ARRIVATI');
        console.log(risposta.data);
      })
      .catch(errore => {
        // se la chiamata non va a buon fine
        console.log('MESSAGGIO DI ERRORE');
        console.log(errore.message);

      })

    console.log('QUI SONO PRIMA DELL\'ARRIVO DEI DATI');


  }
}).mount('#app')