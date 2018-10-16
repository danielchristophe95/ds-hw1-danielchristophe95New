var commentApp = new Vue({
  el: '#commentMain',
  data: {
     newCommentForm: {},
     commentList:[],
  },

  methods: {
    handleCommentForm(e) {
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
      .then( json => {this.commentList.push(json)})
      .catch( err => {
        console.error('COMMENT POST ERROR:');
        console.error(err);
      })

      // Reset workForm
      this.newCommentForm = this.getEmptyCommentForm();
    },

    getEmptyCommentForm() {
      return {
        id: this.newComment.id,
        comment: this.newComment.comment
      }
    },
  },

  created () {
    // Populate workForm with default values
    this.newCommentForm = this.getEmptyCommentForm();

    // Do data fetch
    const url = new URL(window.location.href);
    const id = url.searchParams.get('id');
    console.log('ID: '+ id);
    this.id = id;

    if (!id) {
      //TODO: Error? 404?
      //e.g., window.location = '404.html';
    }

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
