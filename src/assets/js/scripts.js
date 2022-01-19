// Contact form submission
function contactForm() {
  return {
    formData: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
    message: '',
    submitData() {
      this.message = ''
      fetch('https://api.staticforms.xyz/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...this.formData,
          accessKey: "337d3c5e-4aea-470d-83b5-beb8a4d67755"
        })
      }) 
      .then(() => {
        this.message = "Success! Thank you for sending me a message. I'll try to get back to you soon!"
      })
      .catch(() => {
        this.message = 'Ooops! Something went wrong!'
      })
    }
  }
}
