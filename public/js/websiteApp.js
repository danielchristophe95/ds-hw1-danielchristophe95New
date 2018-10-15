var websiteApp = new Vue({
  el: '#hello',
  data: {
    result: [
      {
        gender: '',
        name: {
          title: '',
          first: '',
          last: ''
          },
        location: {
          street: '',
          city: '',
          state: '',
          postcode: '',
          },
        email:'',
        dob: {
          date: '',
          age: '',
          },
        phone: '',
        picture:{
            large: "",
            medium: "",
            thumbnail: ""
         },
      }
    ]
  },

  methods: {
      fetchResults () {
        fetch('https://randomuser.me/api/?format=json')
        .then( response => response.json() )
        .then( json => {websiteApp.result = json.results;})
        .catch( err => {
          console.log('RESULTS FETCH ERROR:');
          console.log(err);
          })
        },

        agenumber: function(){
          const xy= moment(this.result[0].dob.date).diff(moment(), 'years');
          return Math.abs(xy);
        },
      pretty_date: function (d) {
        return moment(d).format('l')
      },
        refresh: function(event){
          this.fetchResults();
        }
      },

  created () {
    this.fetchResults();}
  })


//from dashboard for reference

// completeClass: function(task) {
//   if (task.perc_complete == 100 ) {
//     return 'alert-success'
//   }
//   if (task.current_sprint && task.hours_worked == 0 ) {
//     return 'alert-warning'
//   }
// },

  //   pretty_currency: function (val) {
  //   if (val < 1e3) {
  //     return '$ ' + val
  //   }
  //   if (val < 1e6) {
  //     return '$ ' + (val/1e3).toFixed(1) + ' k'
  //   }
  //
  //   return '$ ' + (val/1e6).toFixed(1) + ' M'
  // },
  //
  // computed: {
