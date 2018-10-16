var commentApp = new Vue({
  el: '#commentMain',
  data: {
     newCommentForm: { },
     commentList:[],
  },

  methods: {
    handleNewCommentForm(e) {
      // TODO: Check validity

      const s = JSON.stringify(this.newCommentForm);
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
      .then( json => {this.newCommentForm.push(json)})
      .catch( err => {
        console.error('COMMENT POST ERROR:');
        console.error(err);
      })

      // Reset workForm
      this.newCommentForm = this.getEmptyCommentForm();
    },

    getEmptyCommentForm() {
      return {
        id: this.commentList.id,
        comment: this.commentList.comment
      }
    },
  },

  created () {


    // Do data fetch
    const url = new URL(window.location.href);
    const id = url.searchParams.get('id');
    console.log('ID: '+ id);
    this.id = id;

    if (!id) {
      //: Error? 404?
      //e.g., window.location = '404.html';
    }

    // Populate workForm with default values
    this.newCommentForm = this.getEmptyCommentForm();

    // TODO: Fetch task-specific data
    // fetch('api/task?id=4')
    fetch('api/comment.php')
    .then( response => response.json() )
    .then( json => {commentApp.commentList = json} )
    .catch( err => {
      console.log('COMMENT FETCH ERROR:');
      console.log(err);
    })

  }
})
