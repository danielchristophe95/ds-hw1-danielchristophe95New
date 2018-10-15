var commentApp = new Vue({
  el: '#commentMain',
  data: {
    comment: {
      id: 0,
      comment:''
    },
    work: [ ],
    workForm: { },   // populated by this.getEmptyWorkForm()
  },

  methods: {
    handleWorkForm(e) {
      // TODO: Check validity

      this.workForm.id = this.workSpan;
      this.workForm.comment = this.taskId;
      const s = JSON.stringify(this.workForm);
      console.log(s);

      // POST to remote server
      fetch('api/comment.php', {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },
        body: s // body data type must match "Content-Type" header
      })
      .then( response => response.json() )
      .then( json => {this.work.push(json)})
      .catch( err => {
        console.error('WORK POST ERROR:');
        console.error(err);
      })

      // Reset workForm
      this.workForm = this.getEmptyWorkForm();
    },

    getEmptyWorkForm() {
      return {
        id: 0,
        comment: ''
      }
    },
  },

  created () {
    // Populate workForm with default values
    this.workForm = this.getEmptyWorkForm();

    // Do data fetch
    const url = new URL(window.location.href);
    const id = url.searchParams.get('id');
    console.log('ID: '+ taskId);
    this.id = id;

    if (!id) {
      //TODO: Error? 404?
      //e.g., window.location = '404.html';
    }

    this.workForm = this.getEmptyWorkForm();

    // TODO: Fetch task-specific data
    // fetch('api/task?id=4')
    fetch('api/comment.php')
    .then( response => response.json() )
    .then( json => {commentApp.work = json} )
    .catch( err => {
      console.log('COMMENT FETCH ERROR:');
      console.log(err);
    })

  }
})
