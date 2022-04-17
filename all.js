Quill.register('modules/imageUploader',ImageUploader)

var myToolbar= [
  ['bold', 'italic', 'underline', 'strike'],       
  ['blockquote', 'code-block'],

  [{ 'color': [] }, { 'background': [] }],         
  [{ 'header': [1,2,3,4,5,6,false] }],
  [{ 'align': [] }],

  ['clean'],
  ['link'],                                        
  ['image'] //add image here
];

var quill = new Quill('#editor', {
  theme: 'snow',
  placeholder: '寫下產品描述',
  modules: {
    imageResize: {
      displaySize: true,
    },
    toolbar: {
          container: myToolbar,
        //   handlers: {
        //       image: imageHandler,
        //   }
    },
    imageUploader: {
        upload: (file) => {
            return new Promise((resolve,reject)=>{
                setTimeout(()=>{
                    resolve(
                        'https://images.unsplash.com/photo-1486427944299-d1955d23e34d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
                    )
                },3500)
            })
        }
    }
  }
});

function imageHandler() {
  var range = this.quill.getSelection();
  var value = prompt('在此貼上圖片網址');
  if(value){
      this.quill.insertEmbed(range.index, 'image', value, Quill.sources.USER);
  }
}