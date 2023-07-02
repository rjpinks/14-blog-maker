const blogForm = document.querySelector('.blog-form');

const newFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#blog-title').value.trim();
    const content = document.querySelector('#blog-content').value.trim();
  
    if (name && content) {
      const response = await fetch(`/api/blogs`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          post_title: name.value, 
          content: content.value
        }),
      })
      .then(res => res.json())
      .then(data => {
          console.log(data);
      })
  
      if (response.ok) {
        document.location.reload();
      } else {
        alert('Failed to create blog');
      }
    }
  };

  blogForm.addEventListener('submit', newFormHandler(event));

  // This does not have a delete button yet