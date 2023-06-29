const newFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#blog-form').value.trim();
    const content = document.querySelector('#blog-content').value.trim();
  
    if (name && content) {
      const response = await fetch(`/api/blogs`, {
        method: 'POST',
        body: JSON.stringify({ name, content }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to create blog');
      }
    }
  };

  // This does not have a delete button yet